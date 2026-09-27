import { CacheInterceptor } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { createObserveModule } from '@nestjs/observe';

import { CacheModuleCustom } from './cache/index.ts';
import { ConfigModule } from './config/index.ts';
import { CustomerModule } from './customer/customer.module.ts';
import { DatabaseModule } from './database/index.ts';
import { SwaggerModuleCustom } from './swagger/index.ts';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule,
    DatabaseModule.forRoot(),
    CustomerModule,
    CacheModuleCustom,
    SwaggerModuleCustom,
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
