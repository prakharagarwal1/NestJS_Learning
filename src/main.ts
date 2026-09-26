import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule, ObserveInstrument } from './app.module.ts';
import { ConfigService } from '@nestjs/config';
import { seedCustomers } from './seed/index.ts';
import { Customer } from './customer/entities/customer.entity.ts';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Seed the customer table with dummy data on startup
  const dataSource = app.get(DataSource);
  const customerRepository = dataSource.getRepository(Customer);
  await seedCustomers(customerRepository);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port') ?? 5000;

  await app.listen(port);
}
await bootstrap();
