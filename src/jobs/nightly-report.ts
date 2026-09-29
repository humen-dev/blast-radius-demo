import cron from 'node-cron';
import { formatMoney, roundCents } from '../lib/money';

export function runNightlyReport(): void {
  const revenue = roundCents(1234.567);
  console.log(`Nightly revenue: ${formatMoney(revenue)}`);
}

export function startNightlyReport(): void {
  cron.schedule('0 2 * * *', runNightlyReport);
}
