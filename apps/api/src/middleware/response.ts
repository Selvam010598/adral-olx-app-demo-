import type { Response } from 'express';
import type { ApiResponse, ApiError } from '@bazaar/shared';

export function sendSuccess<T>(
  res: Response,
  data: T,
  meta?: Record<string, unknown>,
  status = 200,
) {
  const body: ApiResponse<T> = { success: true, data, meta };
  return res.status(status).json(body);
}

export function sendError(
  res: Response,
  status: number,
  code: string,
  message: string,
  fields?: Record<string, string>,
) {
  const body: ApiError = { success: false, error: { code, message, fields } };
  return res.status(status).json(body);
}
