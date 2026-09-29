# blast-radius-demo

A tiny Express + TypeScript API used to demo **DevDigest → Blast radius**.

- `src/lib/money.ts` — shared helpers (`formatMoney`, `roundCents`) used by routes and a cron job.
- `src/lib/slug.ts` — a leaf helper nobody calls yet.
- `src/routes/*` — HTTP endpoints (`/api/orders`, `/api/invoices`).
- `src/jobs/nightly-report.ts` — a nightly cron job.
