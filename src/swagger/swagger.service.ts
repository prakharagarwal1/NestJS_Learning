import { INestApplication, Inject, Injectable } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import { SWAGGER_CONFIG } from './swagger.tokens.ts';

/** Shape of the OpenAPI document metadata produced by `swaggerConfig`. */
export type SwaggerConfig = typeof import('./swagger.config.ts').swaggerConfig;

/**
 * SwaggerService — generates the OpenAPI document and mounts the Swagger UI.
 *
 * Injected into `main.ts` so the Swagger setup is testable and decoupled from
 * the application bootstrap logic.
 */
@Injectable()
export class SwaggerService {
  constructor(
    @Inject(SWAGGER_CONFIG)
    private readonly config: SwaggerConfig,
  ) {}

  /**
   * Builds the OpenAPI document from the running application and mounts the
   * Swagger UI at `/docs`.
   *
   * @param app - the NestJS application instance
   * @param modules - NestJS modules whose controllers should be documented
   */
  setup(app: INestApplication, modules: any[] = []): void {
    const document = SwaggerModule.createDocument(app, this.config as any, {
      include: modules,
    });

    SwaggerModule.setup('/docs', app, document);
  }
}