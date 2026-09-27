import { Module } from '@nestjs/common';

import { DatabaseModule } from './../database/index.ts';
import { CustomerController } from './customer.controller.ts';
import { CustomerService } from './customer.service.ts';
import { Customer } from './entities/customer.entity.ts';

@Module({
  imports: [DatabaseModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
