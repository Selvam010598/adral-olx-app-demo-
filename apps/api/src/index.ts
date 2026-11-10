import app from './app';
import { loadEnv } from './config/env';
import { logger } from './lib/logger';

const env = loadEnv();

const server = app.listen(env.PORT, () => {
  logger.info(`API server running on http://localhost:${env.PORT}`);
  logger.info(`Health check: http://localhost:${env.PORT}/api/v1/health`);
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down...');
  server.close(() => process.exit(0));
});
