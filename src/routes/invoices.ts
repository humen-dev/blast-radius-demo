import { Router, type Request, type Response } from 'express';
import { formatMoney } from '../lib/money';

export function createInvoice(req: Request, res: Response): void {
  const amount = Number(req.body?.amount ?? 0);
  res.status(201).json({ amount: formatMoney(amount, 'EUR') });
}

export const router = Router();
router.post('/api/invoices', createInvoice);
