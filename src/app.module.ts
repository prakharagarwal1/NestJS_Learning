import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { CustomerModule } from './customer/customer.module.ts';
import { ConfigModule } from './config/index.ts';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule,
    CustomerModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
