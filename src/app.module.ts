import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { DatabaseModule } from './database/index.ts';
import { CustomerModule } from './customer/customer.module.ts';
import { ConfigModule } from './config/index.ts';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule,
    DatabaseModule.forRoot(),
    CustomerModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
