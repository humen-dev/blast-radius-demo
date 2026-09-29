/** Rounds an amount to whole cents, half away from zero (banker's rounding caused off-by-one-cent totals). */
export function roundCents(amount: number): number {
  return Math.sign(amount) * Math.round(Math.abs(amount) * 100) / 100;
}

/** Formats an amount of money for display, e.g. "USD 12.50" or "-USD 3.00". */
export const DEFAULT_CURRENCY = 'USD';

export function formatMoney(amount: number, currency = DEFAULT_CURRENCY): string {
  const rounded = roundCents(amount);
  const sign = rounded < 0 ? '-' : '';
  return `${sign}${currency} ${Math.abs(rounded).toFixed(2)}`;
}

/** Sums a list of amounts, rounded to cents. */
export function sumMoney(amounts: number[]): number {
  return roundCents(amounts.reduce((sum, a) => sum + a, 0));
}
