import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { sendError } from './response';
import { logger } from '../lib/logger';

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    const fields: Record<string, string> = {};
    for (const issue of err.issues) {
      const key = issue.path.join('.');
      fields[key] = issue.message;
    }
    return sendError(res, 400, 'VALIDATION_ERROR', 'Request validation failed', fields);
  }

  logger.error({ err }, 'Unhandled error');
  return sendError(res, 500, 'INTERNAL_ERROR', 'An unexpected error occurred');
}
