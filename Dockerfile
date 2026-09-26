# syntax=docker/dockerfile:1

# ---------- Build stage ----------
FROM node:22-alpine AS builder

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
RUN npm run build

# ---------- Production stage ----------
FROM node:22-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nestjs \
    && adduser --system --uid 1001 --ingroup nestjs nestjs

# Copy built output
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY .env* ./

# Switch to non-root user
USER nestjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_TYPE=mysql
ENV DATABASE_HOST=localhost
ENV DATABASE_PORT=3306
ENV DATABASE_USERNAME=root
ENV DATABASE_PASSWORD=root
ENV DATABASE_NAME=learning

CMD ["node", "dist/main.js"]