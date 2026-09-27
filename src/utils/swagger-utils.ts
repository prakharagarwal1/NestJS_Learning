import { ApiPropertyOptions } from '@nestjs/swagger';

/**
 * Helper to build {@link ApiPropertyOptions} with a description and optional extras.
 * Reduces repetition across DTO and entity field decorators.
 */
export const opt = (
  description: string,
  extra: ApiPropertyOptions = {},
): ApiPropertyOptions => ({
  description,
  ...extra,
});