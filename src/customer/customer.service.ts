import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateCustomerDto } from './dto/create-customer.dto.ts';
import { UpdateCustomerDto } from './dto/update-customer.dto.ts';

@Injectable()
export class CustomerService {
  constructor(private readonly configService: ConfigService) {}

  create(createCustomerDto: CreateCustomerDto) {
    const dbHost = this.configService.get<string>('database.host');
    return `This action adds a new customer (db: ${dbHost})`;
  }

getAllCustomers() {
    return 'This action returns all customers';
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
