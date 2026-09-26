// cache-manager-redis-store v2 ships no bundled type declarations.
declare module 'cache-manager-redis-store' {
  export interface RedisStoreOptions {
    host?: string;
    port?: number;
    url?: string;
    [key: string]: unknown;
  }

  interface RedisStoreModule {
    create(options: RedisStoreOptions): unknown;
  }

  const mod: RedisStoreModule;
  export default mod;
}