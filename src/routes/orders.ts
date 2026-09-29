import { Router, type Request, type Response } from 'express';
import { formatMoney } from '../lib/money';

const ORDERS = [
  { id: '1', total: 12.5 },
  { id: '2', total: 99.999 },
];

export function listOrders(_req: Request, res: Response): void {
  res.json(ORDERS.map((o) => ({ id: o.id, total: formatMoney(o.total) })));
}

export function getOrder(req: Request, res: Response): void {
  const order = ORDERS.find((o) => o.id === req.params.id);
  if (!order) {
    res.status(404).json({ error: 'not found' });
    return;
  }
  res.json({ id: order.id, total: formatMoney(order.total) });
}

export const router = Router();
router.get('/api/orders', listOrders);
router.get('/api/orders/:id', getOrder);
