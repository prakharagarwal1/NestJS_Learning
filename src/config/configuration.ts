const config = () => ({
  port: parseInt(process.env.PORT ?? '5000', 10),
  database: {
    type: process.env.DATABASE_TYPE || 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '3306', 10),
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    name: process.env.DATABASE_NAME || 'learning',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
    ttl: parseInt(process.env.CACHE_TTL ?? '30000', 10),
  },
  nodeEnv: process.env.NODE_ENV || 'development',
});

export default config;

export type Config = ReturnType<typeof config>;