# Common Developer Failure Modes

> Research baseline: 2026-09-30
> Purpose: prevent recurring engineering mistakes before they reach production.

This document is not a style guide and not a list of beginner coding errors. It is a failure-prevention model for AI agents and human engineers building real web products.

## Core principle

Most serious web failures are not caused by syntax mistakes. They happen because an engineer optimizes one visible layer while silently skipping another: business rules, persistence, permissions, failure states, operations, accessibility, performance, discoverability, deployment, or production verification.

A feature is not complete because the screen exists or the happy path works.

For every stateful or business-critical feature, verify this chain:

`intent -> UI -> validation -> authorization -> business rule -> persistence -> side effects -> user feedback -> observability -> recovery -> production verification`

If a link is missing, the feature is incomplete.

---

## 1. Starting implementation before understanding the problem

Common failures:
- coding from a vague client sentence without identifying users, jobs, conversion paths, operators, constraints, or success measures
- copying a category template without checking the actual business model
- treating requested features as requirements without asking what business operation they support
- building the visible site while forgetting the staff workflow behind it
- solving implementation details before deciding source of truth and ownership

Prevention:
- classify the product first
- map users, jobs, journeys, domain entities, business rules, operational roles, conversion path and non-goals
- distinguish assumptions from confirmed requirements
- identify applicable lifecycle domains before coding

## 2. Treating UI as the product

Common failures:
- static admin screens with Add/Edit/Delete controls that do not persist
- fake charts, counters, availability, inventory, notifications or success messages
- public pages hardcoded while an admin appears to manage them
- implementing only the happy path
- beautiful screens with no empty, loading, error, permission, offline, expired, deleted, archived or partial-data states

Rule:
**No feature is complete because the UI exists.**

Any control that implies mutation must either perform the real authorized mutation or be explicitly identified as a prototype.

## 3. Wrong or vague source of truth

Common failures:
- same business value stored in multiple unrelated places
- public site and admin reading different sources
- environment-specific hardcoded data
- derived values manually editable without reconciliation rules
- duplicate records created by retries
- no idempotency for payment, booking, webhook or other replayable operations
- no concurrency strategy where simultaneous writes matter

Prevention:
For each domain entity define:
- authoritative store
- identifier
- owner/tenant
- lifecycle/status model
- validation invariants
- uniqueness rules
- timestamps/audit needs
- delete/archive policy
- concurrency/idempotency behavior
- cache invalidation rules

## 4. Authentication mistaken for authorization

A logged-in user is not automatically allowed to perform an action.

Common failures:
- hiding an admin button but leaving the API writable
- trusting role or ownership supplied by the client
- insecure direct-object access by changing an ID
- missing tenant scoping
- POST/PUT/PATCH/DELETE endpoints with weaker checks than the UI
- broad CORS or privilege rules

OWASP 2025 continues to place Broken Access Control at A01. Authorization must be enforced server-side and deny by default.

Required review:
`actor -> resource -> action -> scope/ownership -> policy -> server-side enforcement`

## 5. Security added at the end

Common failures:
- threat modeling after implementation
- secrets in source, logs, client bundles or example files
- unsafe file uploads
- weak session/cookie settings
- missing CSRF/SSRF/injection protections where applicable
- debug endpoints or verbose errors in production
- permissive cloud/storage/database configuration
- default accounts or unnecessary services/features left enabled

OWASP 2025 highlights Broken Access Control, Security Misconfiguration, Software Supply Chain Failures, Insecure Design, Authentication Failures, Logging/Alerting Failures and Mishandling Exceptional Conditions among the major current web risks.

Security is an architecture concern, not a launch-day checklist.

## 6. Dependency and supply-chain complacency

Common failures:
- installing packages for trivial functions
- unmaintained dependencies
- ignoring transitive dependencies
- blindly upgrading production dependencies
- unpinned or unreviewed CI actions
- CI/CD having broader privileges than necessary
- no dependency/security monitoring
- rebuilding different artifacts independently for environments without provenance

Prevention:
- minimize dependency count and privileges
- use trusted sources
- track direct and transitive dependencies
- automate vulnerability/dependency review
- review update compatibility
- scope CI/CD credentials and production environments
- keep secrets out of repository content

## 7. Environment and configuration drift

Common failures:
- local works, preview differs, production fails
- preview accidentally points at production database/storage
- missing production migration
- undocumented env variables
- secrets confused with ordinary configuration
- production-only manual changes
- `noindex` accidentally shipped to production or preview accidentally indexable

Rule:
Dev, preview/staging and production should use the same configuration shape and deployment process while using isolated credentials/resources where needed.

Maintain an environment contract containing required bindings, variables, secrets, databases, buckets, queues, domains, migrations and seed expectations.

## 8. Database migration mistakes

Common failures:
- schema changed without migration
- application deployed before compatible migration
- destructive migration without backup/rollback thinking
- migrations tested only against an empty database
- seed data treated as production data
- no constraints because validation exists in the frontend

Prevention:
- prefer backward-compatible expand/migrate/contract changes when risk warrants it
- enforce important invariants at the database/server layer
- test migrations against representative existing data
- verify production migration state explicitly
- have backup/restore and rollback plans

## 9. Weak API and integration design

Common failures:
- APIs shaped around a single screen instead of stable domain contracts
- inconsistent status/error formats
- trusting client-calculated totals or permissions
- no pagination or limits
- unbounded queries
- no timeout/retry policy for external services
- retrying non-idempotent operations unsafely
- assuming a third party is always available
- webhook authenticity or replay not handled

For every external dependency define:
`timeout -> retry -> idempotency -> authentication/signature -> degraded state -> observability -> recovery/reconciliation`

## 10. Exceptional conditions ignored

Happy-path-only engineering is a recurring production defect.

Test at least:
- empty data
- duplicate submission
- slow network
- timeout
- partial dependency failure
- stale session
- permission denied
- record deleted between read and write
- malformed input
- oversized upload
- rate limit
- migration mismatch
- external webhook repeated/out of order
- storage/database unavailable

OWASP added Mishandling of Exceptional Conditions to the 2025 Top 10, reflecting the security and reliability impact of incorrect failure handling.

## 11. Logging without useful observability

Common failures:
- no logs around business-critical actions
- logs without request/correlation IDs
- sensitive data logged
- errors swallowed by catch blocks
- metrics with no alerts
- alerts with no owner/runbook
- dashboards full of infrastructure numbers but no business-flow signal

Observe both technical and product behavior:
- errors and latency
- dependency failures
- queue/job failures
- auth/access anomalies
- form/order/booking/payment funnels
- admin operation failures
- deployment health
- cost anomalies

A log that nobody can act on is not sufficient operational readiness.

## 12. Testing the implementation, not the behavior

Common failures:
- typecheck/build considered sufficient QA
- only unit tests
- testing mocks but never real integrations
- admin save tested without verifying public output
- screenshots used as proof of persistence
- no role/permission tests
- no mobile/keyboard/slow-network tests
- no production smoke test after deployment

Use risk-based layers:
- unit: pure rules
- integration: DB/API/external boundaries
- E2E: critical user and operator journeys
- visual/responsive: important surfaces
- accessibility: automated plus keyboard/manual checks
- security: permissions, validation, abuse paths
- performance: lab plus field data
- production smoke: real persisted behavior

## 13. Accessibility treated as polish

Common failures:
- clickable `div` instead of native controls
- unlabeled forms
- missing/meaningless alt text
- keyboard traps or inaccessible menus/modals
- weak focus states
- heading hierarchy used only for styling
- color as the only state signal
- poor contrast or tiny touch targets

MDN emphasizes semantic HTML because native elements provide built-in accessibility behavior. Accessibility belongs in component and design-system foundations, not as a final audit.

## 14. Performance optimized by intuition

Common failures:
- optimizing image compression while the real LCP delay is resource discovery, TTFB or render delay
- lazy-loading the LCP/hero image
- shipping unnecessary JavaScript
- long main-thread tasks
- client-rendering content that could arrive in HTML
- no dimensions/reserved space for media
- measuring only on a fast developer computer
- relying only on lab scores

Current Core Web Vitals good thresholds at the 75th percentile are approximately:
- LCP <= 2.5 s
- INP <= 200 ms
- CLS <= 0.1

Use field/RUM data after launch. Lab testing cannot reproduce every interaction or post-load layout shift.

## 15. SEO reduced to meta tags

Common failures:
- dynamic content has no crawlable URL
- orphan pages
- wrong status codes or soft 404s
- preview/staging indexing
- production `noindex`
- conflicting canonicals
- sitemap missing dynamic entities
- robots.txt used as if it prevents indexing
- essential content only appears after fragile client-side behavior
- duplicate/location/filter URLs explode crawl space

Google documents crawling, rendering and indexing as distinct stages. SEO engineering must verify HTTP status, links, rendered content, canonical, robots directives, sitemap, metadata and production indexing behavior.

## 16. Media/file handling treated as a URL field

Common failures:
- no file type/size validation
- unsafe executable uploads
- orphaned storage objects
- no ownership/access rules
- original giant images served everywhere
- missing alt/caption/credit/license metadata
- deleting DB metadata without deleting or retaining the object intentionally
- private files exposed by predictable public URLs

Define upload, processing, metadata, access, transformation, deletion/retention and failure behavior as one subsystem.

## 17. Cache without invalidation or privacy model

Common failures:
- caching authenticated/private responses publicly
- stale admin changes because cache is never purged/versioned
- user-specific response cached across users
- cache keys omit locale/tenant/query dimensions
- treating cache as source of truth

For every cache define:
`what -> key -> TTL -> invalidation -> privacy scope -> stale behavior -> source of truth`

## 18. Background work without delivery semantics

Common failures:
- fire-and-forget work with no retry or visibility
- assuming exactly-once delivery
- jobs not idempotent
- poison messages retried forever
- scheduled tasks have no health check
- no reconciliation process

Define retry limits, backoff, idempotency key, dead-letter/failure state, observability and reconciliation.

## 19. UX states and content quality skipped

Common failures:
- lorem ipsum or generic AI copy reaching production
- repeated irrelevant stock images
- same image reused for unrelated entities
- empty pages that look broken
- destructive actions with browser `confirm()` or no recovery where recovery is appropriate
- success/error feedback not tied to actual server outcome
- desktop-first layouts patched for mobile afterward
- admin designed like a public marketing page rather than an operational tool

Design must cover realistic data density and states before implementation is considered finished.

## 20. Overengineering and premature abstraction

Common failures:
- microservices for a small CRUD product
- generic repository/service/factory layers without actual variability
- universal CMS/admin that makes simple projects harder
- custom auth/search/queue/media systems when a mature primitive fits
- architecture selected for prestige rather than workload

Rule:
Use the smallest architecture that satisfies current requirements and has a credible migration path. Complexity must earn its cost.

## 21. Underengineering critical paths

The opposite failure also matters:
- no audit trail for sensitive admin operations
- no idempotency for money-moving actions
- no backup because the app is “small”
- no rate limiting on abuse-prone endpoints
- no role separation for high-risk actions
- no reconciliation for external financial/booking state

Engineering depth should follow risk, not project size alone.

## 22. CI/CD and release mistakes

Common failures:
- direct production deploy without repeatable gates
- build passes but migrations/bindings/domain configuration are unverified
- no preview environment
- no rollback path
- production secrets available too broadly
- deployment success mistaken for application health
- no post-deploy smoke test

A release gate should verify code quality, tests, security/dependencies, build artifact, migrations, environment bindings, deployment, health and critical business flows.

## 23. Backups that have never been restored

A backup is an assumption until restoration has been tested.

Common failures:
- database backup but not object storage/configuration
- unknown retention
- backup stored in same failure domain
- no RPO/RTO thinking
- no restore runbook
- no restore drill

## 24. Analytics that measure traffic instead of outcomes

Common failures:
- pageviews only
- events without stable naming/schema
- no funnel from acquisition to conversion
- duplicate events
- tracking blocked or broken without detection
- sensitive/PII data sent unnecessarily
- dashboards with no decision attached

Define the business question before the event. Track meaningful conversion and operational outcomes, not every click.

## 25. Privacy/legal/data lifecycle forgotten

Common failures:
- collecting fields “just in case”
- no retention/deletion policy
- exposing personal data in admin lists/logs/analytics
- consent requirements considered after trackers ship
- no account/data deletion flow where applicable
- third-party processors not inventoried

Minimize collection and define purpose, access, retention and deletion for personal/sensitive data.

## 26. Documentation that lies

Common failures:
- README commands no longer work
- environment variables undocumented
- architecture docs describe old stack
- setup requires tribal knowledge/manual dashboard changes
- API/admin behavior changed without docs

Critical documentation should be executable or periodically verified where practical.

## 27. Launch treated as completion

Common failures:
- no production smoke test
- no indexing verification
- no real email/payment/webhook test
- no monitoring review
- no check of mobile real-world behavior
- no admin/operator feedback
- no cost review

Required feedback cycle:
`launch -> observe -> detect skipped assumptions -> fix -> verify -> convert reusable lesson into DeveloperB knowledge`

Suggested checkpoints: immediate smoke test, 24 hours, 7 days and 30 days, then ongoing monitoring based on product risk.

---

# DeveloperB prevention gate

Before declaring a feature complete, answer:

1. What user/business job does it solve?
2. What is its source of truth?
3. Who may read/change it, and where is that enforced?
4. What validation and business invariants exist?
5. Does the real mutation persist and appear everywhere it should?
6. What happens on duplicate, timeout, partial failure and retry?
7. What does the user see for loading, empty, error, success and permission states?
8. What is logged/measured without exposing sensitive data?
9. How is it tested across the real boundary?
10. How is it deployed, migrated, rolled back and recovered?
11. How does it behave on mobile, keyboard and constrained devices/networks?
12. If public, can search engines discover/index it correctly where intended?
13. If it uses an external dependency, what happens when that dependency fails?
14. If data is lost or corrupted, how is it restored/reconciled?
15. Has the behavior been verified in production rather than inferred from a successful deployment?

If an applicable answer is unknown, the feature is not production-complete.

---

## Research sources

Primary references used for this baseline:
- OWASP Top 10:2025, especially A01 Broken Access Control, A02 Security Misconfiguration, A03 Software Supply Chain Failures, A06 Insecure Design, A09 Logging & Alerting Failures, and A10 Mishandling Exceptional Conditions.
- MDN accessibility guidance on semantic HTML, native controls, labels, alt text, source order and keyboard accessibility.
- Google web.dev Core Web Vitals and optimization guidance for LCP, INP, CLS, long tasks and field-vs-lab measurement.
- Google Search Central documentation for crawling, rendering, indexing, JavaScript SEO, canonicalization, robots, sitemaps and HTTP error behavior.
- GitHub Actions documentation for secrets and environment-scoped controls.

This is a baseline, not a frozen checklist. DeveloperB should update it when production incidents, project retrospectives, daily conversation learning or authoritative engineering guidance reveal a durable missing failure mode.