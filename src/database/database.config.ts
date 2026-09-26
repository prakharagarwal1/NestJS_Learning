import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  const dbType = (configService.get<string>('database.type') || 'mysql') as 'mysql';

  return {
    type: dbType,
    host: configService.get<string>('database.host') || 'localhost',
    port: configService.get<number>('database.port') || 3306,
    username: configService.get<string>('database.username') || 'root',
    password: configService.get<string>('database.password') || '',
    database: configService.get<string>('database.name') || 'learning',
    synchronize: configService.get<string>('nodeEnv') !== 'production',
    autoLoadEntities: true,
    migrations: ['dist/migrations/*.js'],
    migrationsRun: configService.get<string>('nodeEnv') === 'development',
  };
};