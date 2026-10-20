# Reusable 86-point quality and security policy

This is DeveloperB's **portable checklist library** for future projects. It turns the four security/agent checklists and the earlier website QA checklist into a **capability-aware** baseline. All 86 controls are preserved; no control disappears merely because it does not apply today.

**Source groups:** 20 web experience (`U01–U20`), 19 application security (`S01–S19`), 16 API-key hygiene (`K01–K16`), 15 agent working rules (`A01–A15`), 16 AI-generated-code pitfalls (`G01–G16`).

The canonical, machine-readable list is in [`src/quality-policy.ts`](../src/quality-policy.ts). It contains the exact ID, meaningful label, capability requirements and severity for **every item**. Source videos are inspirational checklists, not evidence of actual security fixes.

## Golden rule: applicable is not the same as passing

Every check starts in one of two states:

- **Unverified** — relevant to the product, but no passing test, audit, screenshot, configuration observation or review has been submitted.
- **Not applicable** — the corresponding feature or risk does not exist. Keep the control recorded. Give a short explanation and reopen it if the product gains the capability.

A checked box in a reference image is *never* proof. No application is `100% secure` simply because the catalog has been ticked.

Once independent, dated evidence exists, the project's **separate** evaluation record may use `pass`, `fail` or `risk-accepted`. DeveloperB's reference catalog never changes control status based on guesses.

## Start with the product, not the checklist

Identify actual capabilities before choosing controls:

| Capability | Include when the project really has... | Triggers |
| --- | --- | --- |
| `web-ui` | Human-facing pages or app shell | Mobile, 404, keyboard, branding, loading, safe errors, HTTPS and headers |
| `public-api` | Unauthenticated or public API endpoints, forms | Validation, abuse limiting, CORS/origin and intentional public-route exceptions |
| `auth` | User sessions or protected resources | Server authorization, IDOR, safe user identity, auth changes |
| `multi-tenant` + `database` | Customer-owned records partitioned by tenant | Database isolation/RLS where supported, cross-tenant and RLS-disable regressions |
| `admin` | Staff operations or internal dashboards | Staff authorization, auditable admin actions |
| `database` | Persistent structured records | Bound/parameterized queries and scoped privileged credentials |
| `uploads` | User-supplied files, private downloads | File validation, bucket privacy, authorized access |
| `webhooks` | Incoming callbacks from third parties | Signature verification, timestamp/replay and idempotency |
| `paid-api` | Chargeable API or model provider | Quotas, budget alerts, per-key spending |
| `ai` | AI inference, chat, embedding or coding features | Budget/abuse and model boundary review (where applicable) |
| `payments` | Checkout, payouts, refund or billing | Payment safety, correct financial state and idempotency |
| `secrets` | Credentials, sender keys, privileged bindings | Keys off frontend, vault, scan, rotation, least privilege |
| `user-data` | Personal or sensitive visitor/customer data | Redaction, private logs, privacy and retention |

These are *features*, not job titles. A brochure/portfolio usually has **no tenant database, payments or webhooks**. An online marketplace may have all three. Never add functionality merely to satisfy a social-media security list.

## Included starter profiles

| Profile | Typical starting capabilities | Note |
| --- | --- | --- |
| `portfolio` | Web UI, public API, secrets, user data | Contact forms collect visitor information; no assumed auth or RLS |
| `public-website` | Web UI, public API, secrets, user data | Contact forms collect visitor information; admin, uploads and payments are not assumed |
| `api-service` | Public API, integrations, secrets | No web UI unless one exists |
| `ai-chatbot` | Web UI, public API, AI, paid API, secrets, user data | API spending and user-data logging are relevant |
| `multi-tenant-saas` | UI, API, auth, tenant DB, admin, secrets, user data | Auth/IDOR/tenant isolation are release-critical |
| `marketplace` | UI, API, auth, DB, admin, uploads, payments, webhooks, secrets, user data | Include file and financial paths |
| `ecommerce` | UI, API, auth, DB, admin, payments, webhooks, secrets, user data | Adapt when guest checkout or no uploaded files |
| `news-cms` | UI, API, auth, DB, admin, uploads, secrets | Media and publishing controls apply |
| `business-directory` | UI, API, auth, DB, admin, uploads, secrets, user data | Ownership and editing workflow matter |

**Profiles are starting suggestions, not fixed product truths.** During blueprint approval, adjust capabilities to match the real proposed implementation. A project with no public form may not need `public-api`; an AI feature added later makes AI/cost checks newly relevant.

## DeveloperB API (read-only reference)

When this branch is deployed to a protected preview, DeveloperB exposes:

```text
GET /api/quality/checklist?profile=portfolio
GET /api/quality/checklist?profile=multi-tenant-saas
GET /api/quality/checklist?profile=ecommerce
GET /api/quality/checklist?capabilities=web-ui,public-api,secrets,user-data
```

The JSON contains `policy`, `profile`, `capabilities`, `total`, `applicableCount`, and 86 individual items with `id`, `label`, `category`, `requires`, `severity`, `applicability`, `status`, and `evidence`. It contains **no project-specific findings or private values**. Unknown profiles or unsupported/conflicting capability inputs get HTTP 400. Custom capability lists let future products build their own reference selection without fabricating audit results. This is **not** an authenticated report writer, penetration-test scanner, Git-history scanner or secrets inventory.

All applicable rules return `status: "unverified"` and `evidence: null`. Non-applicable controls remain present with `status: "not-applicable"`.

## How to use this across the product lifecycle

1. **Problem discovery:** Do not force custom software or extra services. Document who is affected and what must not go wrong.
2. **Blueprint acceptance:** Record capabilities, risks, public/private boundaries, identity and data ownership. Produce the applicable 86-control slice, with explanations of N/A.
3. **Agent planning:** Read `AGENTS.md` and `CLAUDE.md`; propose implementation and meaningful test plan before changes. Ask first about destructive actions, account permissions, DNS, sensitive data, billing or provider integrations.
4. **Build:** Work in focused commits, update owned components, keep real brands/screenshots, use non-production fixtures, test negative and positive paths.
5. **Verification:** Attach real outputs (CI run, evidence reference, relevant code/config version, audited environment, review owner, date). Keep untested controls unverified.
6. **Release:** Block unresolved applicable **release-blockers**, particularly known exploitable/critical dependency issues, secrets in source, unprotected tenant data, payment/webhook trust failures, and unreviewed destructive migrations. Do not override a failed dependency gate with a high aggregate score.
7. **Operation:** Recheck after dependency updates, new features, provider changes, security advisories and incidents. Store implementation evidence separately from these immutable reference controls.

### Evidence record for later persisted workspaces

```json
{
  "projectId": "<server-authorized-project-id>",
  "controlId": "S15",
  "status": "unverified",
  "evidenceReferences": [],
  "verifiedAt": null,
  "verifiedBy": null,
  "riskOwner": null,
  "riskReviewDate": null
}
```

This is a **proposed** shape, not an active database table or live API. A future persisted implementation must require authenticated organization/project membership, server-side authorization, scoped writes, reviewer approval and audit logging before accepting evaluations.

## What is *not* a universal rule

- “Ban new packages” means **ban unreviewed additions**, not banning security patches.
- “Files under 300 lines” means readable cohesive modules, not mandatory splitting at line 301.
- “Authenticate every API” means **authenticate protected APIs**. Public forms exist by design and require validation/abuse protection rather than fake logins.
- RLS applies where tenant-owned records and a DB support it. Without multi-tenancy there is no RLS to enable.
- An API provider accepting a send request is not proof the recipient received an email.
- Tests must fail on broken behavior; screenshots or tests whose status is always green are not evidence.
- Never copy a project's interface, logo, screenshots, testimonials, claims or visual identity from an AI-generated approximation; source work from verified originals.

## Lessons from the initial portfolio audit

The separate `mahidulislamnakib/mysite` review demonstrated why this approach matters: a site can pass lint, build, visual, contact endpoint and local credential-pattern checks while a fresh dependency audit surfaces **critical/high advisories**. Security gates must report the failure and block a merge; they must not label the entire site green. See [security remediation issue #23](https://github.com/mahidulislamnakib/mysite/issues/23) for that point-in-time case. Do not generalize its package versions or status to future projects.

## Related material

- [Engineering-agent rules](../AGENTS.md)
- [Copyable agent handoff](../CLAUDE.md)
- [Full production audit prompt](../prompts/full-production-audit.md)
- [Production readiness checklist](production-readiness-checklist.md)
- [Production readiness scorecard](04-production-readiness-scorecard.md)
- [External API / dependency standard](11-external-api-env-dependency-standard.md)
- [Product architecture guides](../architectures/README.md)
