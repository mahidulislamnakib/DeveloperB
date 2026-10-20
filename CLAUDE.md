# DeveloperB — agent entrypoint

Read [AGENTS.md](AGENTS.md) first. It is the authoritative repository-wide engineering contract. This file is a short compatibility entrypoint for Claude and other coding agents, not a competing rulebook.

Before a significant change:

1. Read `BUILD-STATUS.md` and `WORKSPACE-STATUS.md` to determine what is real, planned or gated. Confirm the actual stack and target environment.
2. Start from confirmed product needs, not a generic security or UI checklist. Suggest build, buy, automate, process-improve and wait options when appropriate.
3. Classify the project's capabilities; select only applicable checks from [`docs/QUALITY-GATES.md`](docs/QUALITY-GATES.md) and [`src/quality-policy.ts`](src/quality-policy.ts). **All 86 rules are retained for future use** even if currently not applicable.
4. Keep check results `unverified` until you can attach actual evidence. Never infer green checks from videos, design references, mock test suites or guessed provider settings.
5. Protect secrets and personal data; never paste private keys into code, chat, PRs, logs, screenshots, or tests. Approval is required before changing production auth, DNS, data, billing, email delivery or destructive migrations.
6. Plan changes, make small reviewable commits, run meaningful failure-path checks, and report results and residual risk. Security advisories rated critical/high are blockers until fixed or formally reviewed with concrete mitigating evidence.
7. Preserve the product's original branding and verified project/source imagery. Never invent another project's dashboard or success metrics.
8. Before any deployment, check `docs/production-readiness-checklist.md`, migration and rollback safety, app-specific tests, evidence and owner approval.

Use `GET /api/quality/checklist?profile=portfolio` (or another supported profile) to retrieve the read-only reference checklist when the API exists in a deployed environment. This endpoint does not produce real audit results, and no customer-facing audit persistence is implemented.

If a requirement, affected environment or ownership is uncertain, stop and ask rather than guessing or changing production.
