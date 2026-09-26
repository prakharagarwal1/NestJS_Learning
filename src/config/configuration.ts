const config = () => ({
  port: parseInt(process.env.PORT ?? '5000', 10),
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    name: process.env.DATABASE_NAME || 'learning',
  },
  nodeEnv: process.env.NODE_ENV || 'development',
});

export default config;

export type Config = ReturnType<typeof config>;