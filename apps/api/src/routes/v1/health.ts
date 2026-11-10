import { Router } from 'express';
import { sendSuccess } from '../../middleware/response';

const router = Router();

router.get('/', (_req, res) => {
  sendSuccess(res, { status: 'ok', timestamp: new Date().toISOString() });
});

export default router;
