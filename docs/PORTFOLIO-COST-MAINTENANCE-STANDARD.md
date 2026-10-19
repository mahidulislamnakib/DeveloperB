# Portfolio Cost & Maintenance Standard

> Default operating standard for managing Nakib's multi-project GitHub portfolio economically and reliably.

## 1. Core principle

Time, AI tokens, CI minutes, GitHub Actions, Cloudflare Workers, builds, storage, logs, databases, email, third-party APIs, and deployments all cost money.

Therefore engineering efficiency is a product requirement.

Do not spend repeated compute or deployment cycles fixing preventable mistakes. Prefer one careful implementation and one meaningful verification pass over many low-value rebuilds.

## 2. Project registry

Every repository should have a registry record containing at least:

- project name
- business purpose
- status: active / legacy / experimental / paused / abandoned / archived
- canonical branch
- production URL
- preview/staging URL
- current framework/runtime
- package manager
- deployment target
- database
- object/file storage
- authentication
- email/notification provider
- Cloudflare resources/bindings where relevant
- migration location/state
- main reusable packages/components
- known technical debt
- current operational problems
- approximate deployment/operating cost notes where known
- last verified date
- next review date

Never spend time debugging the wrong branch or an abandoned implementation because repository status was unclear.

## 3. Portfolio classification

Each project should be classified before maintenance work:

### Tier A — active production
Business-critical or actively used. Highest reliability, security, dependency, backup, and deployment attention.

### Tier B — active development / near production
Worth improving, but changes should normally go through preview before production.

### Tier C — reusable foundation / library
UI kits, shared packages, templates, MCP/plugins, infrastructure patterns. Changes can affect many projects and need compatibility discipline.

### Tier D — paused / experimental
Do not continuously deploy or update just because dependencies changed. Review intentionally.

### Tier E — legacy / archive candidate
Preserve if valuable; avoid spending migration money unless there is clear business value.

## 4. Cost-aware development rules

Before triggering expensive work ask whether the result requires it.

Default rules:

- do not deploy after every tiny copy/style edit if multiple related edits can be batched safely
- use local/static/type/lint/build checks before paid/remote deployment when possible
- use preview only when preview adds real verification value
- do not repeatedly reinstall dependencies unnecessarily in the same workflow
- use caching in CI where reliable
- cancel superseded workflow runs where the platform/workflow supports it
- avoid duplicate scheduled jobs doing the same checks
- avoid high-frequency polling for slowly changing conditions
- avoid unnecessary Worker invocations and database queries
- paginate instead of loading full growing datasets
- cache safe public data when appropriate
- resize/compress media before repeated delivery
- clean up orphaned preview resources and old artifacts where safe
- use logs/observability intentionally; avoid uncontrolled high-volume logging
- choose paid third-party services only when they materially improve reliability or reduce total effort

Cost saving must not remove necessary QA, security, backups, or production safeguards.

## 5. Change batching

Group logically related changes into one verified unit.

Good example:

```text
header spacing + mobile menu + footer responsive fix + shared nav component tests
→ one branch
→ one build
→ one preview
→ one QA pass
```

Bad example:

```text
change gap → deploy
change icon → deploy
change button → deploy
change footer → deploy
change mobile menu → deploy
```

Batching reduces money, tokens, review overhead, and regression risk.

## 6. Dependency hygiene

Dependencies should remain intentional and reasonably current, but "latest at all times" is not the goal. Stability and compatibility matter more than version-chasing.

For every active repository:

- identify package manager and lockfile
- detect duplicate/conflicting dependencies
- identify unused dependencies
- review security advisories
- separate safe patch/minor updates from breaking major upgrades
- read migration notes before major framework/runtime upgrades
- verify Cloudflare/OpenNext/runtime compatibility before upgrade
- run type/lint/test/build after meaningful upgrades
- preview-test runtime-sensitive upgrades
- record intentionally pinned versions and why

Do not upgrade a production dependency solely because a newer version exists.

## 7. Suggested maintenance cadence

### Weekly — Tier A only
- failed production workflows
- uptime/health signals where available
- critical security alerts
- broken routes/assets/images
- expiring integration problems if surfaced
- obvious cost anomalies

### Monthly — Tier A and B
- dependency review
- build health
- migration state
- backup/restore assumptions where applicable
- API/integration health
- storage/broken asset check
- major UI regression spot-check
- Cloudflare/GitHub usage and avoidable spend review

### Quarterly — whole portfolio
- repository classification/status
- canonical branch confirmation
- production/preview URL confirmation
- stack inventory
- technical debt review
- archive/merge/replace duplicate projects
- reusable code opportunities
- dependency major-version planning
- cost review
- security/permission review
- roadmap decision: continue / maintain / migrate / pause / archive

### Before any major new build
Search existing repositories and shared foundations first. Reuse proven components, schemas, auth patterns, deployment workflows, editor blocks, media handling, and APIs rather than rebuilding from zero.

## 8. Deployment discipline

Production deployment should be controlled.

Before production where applicable:

```text
lint/type/test
→ production build
→ migration/binding check
→ preview or dry-run verification
→ smoke test
→ production deploy
→ production smoke test
```

Do not deploy an unverified branch merely to discover whether it builds.

## 9. Cloudflare cost discipline

For Cloudflare-based products review the services actually used:

- Workers requests/CPU
- D1 reads/writes/storage
- R2 storage/operations/egress behavior
- KV operations
- Queues
- Workflows
- Durable Objects
- Images/Stream where used
- Pages/Workers builds
- logs/analytics retention

Use Cloudflare where it is technically and economically suitable, but do not force workloads into a Cloudflare service if another architecture is materially simpler or cheaper at the required scale.

## 10. GitHub cost discipline

Review:

- Actions frequency
- duplicate workflows
- large matrices with little value
- artifact retention
- unnecessary scheduled builds
- preview deployment per trivial commit
- repeated dependency installs
- branch/PR workflow efficiency

CI should protect quality, not burn minutes without producing evidence.

## 11. AI/token efficiency

Use project documentation and reusable standards to avoid re-explaining the same requirements.

Before coding, AI should read:

1. project registry/status
2. repository-specific `AGENTS.md` or equivalent
3. shared product engineering standard
4. relevant project-type playbook
5. existing reusable components/data contracts

Avoid generating long speculative plans when the repository already answers the question. Avoid rewriting entire files when a small safe patch is enough. Avoid repeated tool calls that retrieve the same unchanged information.

## 12. Reusable assets and data

Maintain reusable shared resources when they create real savings:

- design tokens/components
- editor blocks
- media metadata patterns
- Bangladesh geography/reference data
- company/profile/contact data
- SEO/schema helpers
- auth/permission patterns
- validation schemas
- API response helpers
- email templates
- error/empty/loading states
- deployment workflows
- migration conventions

Reuse must not couple unrelated products so tightly that one change breaks all of them.

## 13. Maintenance report format

Each project review should produce a short actionable record:

```text
Project:
Status/Tier:
Canonical branch:
Production:
Stack:
Current health:
Broken/at-risk items:
Dependencies:
Security:
Cost concerns:
Reusable opportunities:
Recommended action:
Last verified:
Next review:
```

Do not create long reports that hide the action items.

## 14. Definition of efficient engineering

Efficient engineering means:

- fewer repeated prompts
- fewer unnecessary builds/deploys
- fewer duplicated components/services
- fewer preventable regressions
- known project status
- controlled dependencies
- reusable data and foundations
- reliable production verification
- spending proportional to business value

The cheapest system is not the one with the fewest checks; it is the one that avoids paying repeatedly for the same mistake.
