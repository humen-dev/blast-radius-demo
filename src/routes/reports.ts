import { Router, type Request, type Response } from 'express';
import { formatMoney, roundCents } from '../lib/money';

const SALES = [19.999, 5.005, 42.1];

export function dailyTotals(_req: Request, res: Response): void {
  const total = roundCents(SALES.reduce((sum, s) => sum + s, 0));
  res.json({ total, display: formatMoney(total) });
}

export const router = Router();
router.get('/api/reports/daily', dailyTotals);
