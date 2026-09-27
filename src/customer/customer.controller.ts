import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CustomerService } from './customer.service.ts';
import { CreateCustomerDto } from './dto/create-customer.dto.ts';
import { UpdateCustomerDto } from './dto/update-customer.dto.ts';
import { Customer } from './entities/customer.entity.ts';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOkResponse({ type: Customer, description: 'The created customer' })
  @ApiBadRequestResponse({ description: 'Invalid input or creation failed' })
  @ApiBody({ type: CreateCustomerDto })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  @ApiOkResponse({ type: [Customer], description: 'List of all customers' })
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Customer, description: 'The customer' })
  @ApiNotFoundResponse({ description: 'Customer not found' })
  @ApiBadRequestResponse({ description: 'Invalid customer id' })
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Customer, description: 'The updated customer' })
  @ApiNotFoundResponse({ description: 'Customer not found' })
  @ApiBadRequestResponse({ description: 'Invalid customer id or update failed' })
  @ApiBody({ type: UpdateCustomerDto })
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Customer deleted' })
  @ApiNotFoundResponse({ description: 'Customer not found' })
  @ApiBadRequestResponse({ description: 'Invalid customer id' })
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
