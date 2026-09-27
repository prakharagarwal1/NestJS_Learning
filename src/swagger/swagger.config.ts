import { DocumentBuilder } from '@nestjs/swagger';

/**
 * The OpenAPI document metadata consumed by {@link SwaggerService}.
 * Add additional servers, security schemes, or global parameters here.
 */
export const swaggerConfig = new DocumentBuilder()
  .setTitle('Customer API')
  .setDescription(
    'Customer management endpoints for creating, reading, updating, and deleting customers. ' +
      'Use POST /customer to create a customer, GET /customer to list them, ' +
      'GET /customer/:id to fetch one, PATCH /customer/:id to update, and DELETE /customer/:id to remove.',
  )
  .setVersion('1.0')
  .addTag('customer', 'Customer resource operations')
  .setContact('NestJS Learning', 'https://example.com', 'support@example.com')
  .setLicense('MIT', 'https://opensource.org/license/mit')
  .setExternalDoc('See the README for setup and usage notes.', './README.md')
  .addTag('customer')
  .addGlobalResponse({
    status: 400,
    description: 'Bad request — validation or input error',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: { type: 'string', example: 'Invalid customer id' },
        error: { type: 'string', example: 'Bad Request' },
      },
    },
  })
  .addGlobalResponse({
    status: 404,
    description: 'Not found — requested resource does not exist',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 404 },
        message: { type: 'string', example: 'Customer with id 5 not found' },
        error: { type: 'string', example: 'Not Found' },
      },
    },
  })
  .addGlobalResponse({
    status: 401,
    description: 'Unauthorized — missing or invalid authentication',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 401 },
        message: { type: 'string', example: 'Unauthorized' },
        error: { type: 'string', example: 'Unauthorized' },
      },
    },
  })
  .addGlobalResponse({
    status: 409,
    description: 'Conflict — resource already exists or conflicts with current state',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 409 },
        message: { type: 'string', example: 'Email already in use' },
        error: { type: 'string', example: 'Conflict' },
      },
    },
  })
  .addGlobalResponse({
    status: 500,
    description: 'Internal server error — unexpected server failure',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 500 },
        message: { type: 'string', example: 'Internal server error' },
        error: { type: 'string', example: 'Internal Server Error' },
      },
    },
  })
  .build();