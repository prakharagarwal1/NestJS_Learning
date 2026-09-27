import { Module, Provider } from '@nestjs/common';

import { swaggerConfig } from './swagger.config.ts';
import { SwaggerService } from './swagger.service.ts';
import { SWAGGER_CONFIG } from './swagger.tokens.ts';

const swaggerConfigProvider: Provider = {
  provide: SWAGGER_CONFIG,
  useValue: swaggerConfig,
};
@Module({
  providers: [SwaggerService, swaggerConfigProvider],
  exports: [SwaggerService, swaggerConfigProvider],
})
export class SwaggerModuleCustom {}