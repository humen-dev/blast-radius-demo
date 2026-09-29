import { Router, type Request, type Response } from 'express';
import { formatMoney, roundCents } from '../lib/money';

const TAX_RATE = 0.2;

export function createInvoice(req: Request, res: Response): void {
  const amount = Number(req.body?.amount ?? 0);
  res.status(201).json({ amount: formatMoney(amount, 'EUR') });
}

export function previewTax(req: Request, res: Response): void {
  const amount = Number(req.query.amount ?? 0);
  res.json({ tax: roundCents(amount * TAX_RATE) });
}

export const router = Router();
router.post('/api/invoices', createInvoice);
router.get('/api/invoices/tax', previewTax);
