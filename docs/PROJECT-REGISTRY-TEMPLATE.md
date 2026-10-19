# Project Registry Template

Use one record per repository/project.

```yaml
project:
  name: ""
  repository: "owner/repo"
  purpose: ""
  tier: "A|B|C|D|E"
  status: "active-production|active-development|reusable-foundation|paused|experimental|legacy|archive-candidate"

source:
  default_branch: ""
  canonical_branch: ""
  last_verified_commit: ""

urls:
  production: ""
  preview: ""
  admin: ""

stack:
  language: []
  framework: []
  runtime: ""
  package_manager: ""
  database: ""
  orm: ""
  storage: ""
  auth: ""
  email: ""
  search: ""
  queue_or_jobs: ""

deployment:
  provider: ""
  workflow: ""
  cloudflare_resources: []
  migration_path: ""
  migration_state: "unknown|current|pending|broken"

product:
  project_type: ""
  primary_users: []
  primary_flows: []
  reusable_modules: []
  content_format: "none|rich-text|html|markdown|structured-blocks|mixed"

health:
  build: "unknown|passing|failing"
  production: "unknown|healthy|degraded|down"
  responsive: "unknown|verified|issues"
  media_assets: "unknown|verified|issues"
  api: "unknown|verified|issues"
  database: "unknown|verified|issues"
  auth_permissions: "unknown|verified|issues"

maintenance:
  dependency_health: "unknown|current|review-needed|outdated"
  security_notes: []
  technical_debt: []
  broken_items: []
  cost_concerns: []
  recommended_action: ""
  last_verified: "YYYY-MM-DD"
  next_review: "YYYY-MM-DD"

ownership:
  owner: "Nakib"
  notes: ""
```

## Rules

- Verify `canonical_branch`; never assume it equals the default branch.
- Never store secret values in registry records.
- Keep the record concise and factual.
- Update `last_verified` only after an actual verification pass.
- Tier/status should control maintenance frequency and spending.
- Duplicate/obsolete repositories should be explicitly related to the successor project instead of left ambiguous.
