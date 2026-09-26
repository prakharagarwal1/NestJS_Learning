import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.ts';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port') ?? 5000;

  await app.listen(port);
}
await bootstrap();
