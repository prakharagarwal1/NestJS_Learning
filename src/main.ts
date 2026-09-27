import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';

import { AppModule, ObserveInstrument } from './app.module.ts';
import { CustomerModule } from './customer/customer.module.ts';
import { Customer } from './customer/entities/customer.entity.ts';
import { seedCustomers } from './seed/index.ts';
import { SwaggerService } from './swagger/index.ts';

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

  const swaggerService = app.get(SwaggerService);
  swaggerService.setup(app, [CustomerModule]);

  // Seed the customer table with dummy data on startup
  const dataSource = app.get(DataSource);
  const customerRepository = dataSource.getRepository(Customer);
  await seedCustomers(customerRepository);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port') ?? 5000;

  await app.listen(port);
}
await bootstrap();
