# syntax=docker/dockerfile:1

# ---------- Build stage ----------
FROM node:22-alpine3.23 AS builder

WORKDIR /app

# Enable corepack for pnpm/yarn if needed (using npm here)
RUN npm install -g corepack

# Copy package files first for layer caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY src ./src
RUN npm run build && npm prune --omit=dev \
    && rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

# ---------- Production stage ----------
FROM node:22-alpine3.23 AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nestjs \
    && adduser --system --uid 1001 --ingroup nestjs nestjs \
    && rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

# Copy built output
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Switch to non-root user
USER nestjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_TYPE=mysql
# Service names are provided by docker-compose.yml (mysql, redis).
# These are only used when running the image without compose.
ENV DATABASE_HOST=
ENV DATABASE_PORT=
ENV DATABASE_USERNAME=
ENV DATABASE_NAME=
ENV REDIS_HOST=
ENV REDIS_PORT=
ENV CACHE_TTL=

CMD ["node", "dist/main.js"]