import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable, Inject, Logger } from '@nestjs/common';

import type { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  private readonly logger = new Logger(CacheService.name);

  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get<T>(key: string): Promise<T | null | undefined> {
    const value = await this.cache.get<T>(key);
    if (value === null || value === undefined) {
      this.logger.log(`Cache MISS for key "${key}"`);
    } else {
      this.logger.log(`Cache HIT for key "${key}"`);
    }
    return value;
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    await this.cache.set(key, value, ttl);
    this.logger.log(`Cache SET for key "${key}" (ttl=${ttl ?? 'default'})`);
  }

  async del(key: string): Promise<void> {
    await this.cache.del(key);
    this.logger.log(`Cache DEL for key "${key}"`);
  }

  async invalidate(keys: string | string[]): Promise<void> {
    const keyArray = Array.isArray(keys) ? keys : [keys];
    await Promise.all(keyArray.map((key) => this.cache.del(key)));
    this.logger.log(`Cache INVALIDATE for keys: ${keyArray.join(', ')}`);
  }

  async invalidateByPrefix(prefix: string): Promise<void> {
    // In-memory store doesn't support prefix scanning.
    // Redis store supports keys() — but for portability we keep it simple.
    this.logger.warn(`invalidateByPrefix requested for "${prefix}" — not supported by current store`);
  }
}