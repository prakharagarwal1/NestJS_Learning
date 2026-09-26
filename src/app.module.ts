import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { DatabaseModule } from './database/index.ts';
import { CustomerModule } from './customer/customer.module.ts';
import { ConfigModule } from './config/index.ts';
import { CacheModuleCustom } from './cache/index.ts';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor } from '@nestjs/cache-manager';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule,
    DatabaseModule.forRoot(),
    CustomerModule,
    CacheModuleCustom,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [],
})
export class AppModule {}
