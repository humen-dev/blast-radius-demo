/** Rounds an amount to whole cents. */
export function roundCents(amount: number): number {
  return Math.round(amount * 100) / 100;
}

/** Formats an amount of money for display, e.g. "USD 12.50". */
export function formatMoney(amount: number, currency = 'USD'): string {
  return `${currency} ${roundCents(amount).toFixed(2)}`;
}
