import { createKeyv } from '@keyv/redis';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Keyv } from 'keyv';

import { CacheService } from './cache.service.ts';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>('redis.host');
        const port = configService.get<number>('redis.port');
        const ttl = configService.get<number>('redis.ttl');

        // Use Redis when configured, fall back to in-memory store
        if (host && port) {
          return {
            stores: [createKeyv(`redis://${host}:${port}`)],
            ttl,
          };
        }

        return {
          stores: [new Keyv()],
          ttl,
        };
      },
    }),
  ],
  providers: [CacheService],
  exports: [CacheModule, CacheService],
})
export class CacheModuleCustom {}