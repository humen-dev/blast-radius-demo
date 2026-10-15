# blast-radius-demo

A tiny Express + TypeScript API used to demo **DevDigest → Blast radius**.

- `src/lib/money.ts` — shared helpers (`formatMoney`, `roundCents`) used by routes and a cron job.
- `src/lib/slug.ts` — a leaf helper nobody calls yet.
- `src/routes/*` — HTTP endpoints (`/api/orders`, `/api/invoices`).
- `src/jobs/nightly-report.ts` — a nightly cron job.

## Claude Code plugins

This repo uses the [`sdd-engineering`](https://github.com/humen-dev/dev-digest-ai-marketplace/tree/main/plugins/sdd-engineering)
plugin (Spec-Driven Development: spec → plan → implement → verify) from
[dev-digest-ai-marketplace](https://humen-dev.github.io/dev-digest-ai-marketplace/).

- `.claude/settings.json` registers the marketplace and enables
  `sdd-engineering` with its dependencies (`engineering-paved-path`,
  `research-tools`, `architecture-review`) for everyone who trusts this folder.
- `.claude/sdd.json` tells the plugin where specs (`specs/`) and plans
  (`docs/plans/`) live and how to check code (`npm run build`).
- `.sdd/` (git-ignored) holds run state and `trace.jsonl`, which records the
  active plugin version for every session and every `sdd-engineering:*` agent.

Check what is active:

```bash
claude plugin list --json
```

Start a feature: *"Use the sdd-engineering:spec-creator agent to write a spec for …"*.
