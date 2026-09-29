import express, { type Request, type Response } from 'express';
import { router as orders } from './routes/orders';
import { router as invoices } from './routes/invoices';
import { startNightlyReport } from './jobs/nightly-report';

export function health(_req: Request, res: Response): void {
  res.json({ ok: true });
}

const app = express();
app.use(express.json());
app.use(orders);
app.use(invoices);
app.get('/health', health);

startNightlyReport();
app.listen(3000);
