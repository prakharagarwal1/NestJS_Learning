import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service.ts';
import { CustomerController } from './customer.controller.ts';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: []
})
export class CustomerModule {}
