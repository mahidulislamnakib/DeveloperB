# Nakib Product Engineering Standard

> Default operating standard for web, software, SaaS, content, marketplace, directory, travel, commerce, media, and internal-tool projects built with AI assistance.

## 1. Core rule

Every project starts production-minded from the first line. Do not build a rough version that depends on repeated cleanup prompts for obvious problems. Architecture, information structure, components, data, APIs, admin workflows, responsive behavior, performance, error states, deployment, and verification are designed as one coherent system.

The goal is not "code that compiles." The goal is a complete product flow that is visually polished, operationally useful, technically maintainable, scalable where necessary, and reliable after deployment.

## 2. One coherent product, not disconnected layers

A feature is not complete if only one layer exists.

For every feature, evaluate the full chain:

```text
User need
→ UX / information architecture
→ public or authenticated UI
→ admin / operational workflow
→ validation and permissions
→ API / service layer
→ database model and migration
→ files / media / external services
→ loading, empty, success and error states
→ analytics / logs where useful
→ responsive and accessibility checks
→ preview verification
→ production verification
```

Do not create UI stubs with missing backend behavior, APIs with no usable admin flow, database tables with no lifecycle, or admin controls that cannot complete the real business task.

## 3. Information architecture: put things where they belong

Domain ownership is the default.

- Product media belongs in the product workflow.
- Blog/article media belongs in the article workflow.
- Category media belongs in the category workflow.
- Customer documents belong in the customer/account workflow.
- Order actions belong in the order workflow.
- Settings belong near the feature they configure when practical.

A shared media library, taxonomy service, or global settings layer may exist as infrastructure, but contextual controls must remain available where users naturally expect them. Do not scatter one workflow across unrelated admin screens without a strong technical or operational reason.

## 4. Frontend quality standard

### 4.1 Design system first

Before building many pages, establish reusable tokens and components:

- typography scale
- spacing scale
- radii
- borders and shadows
- color roles
- container widths
- breakpoints
- buttons and links
- inputs and form states
- cards
- tables and lists
- badges/status indicators
- tabs
- dialogs/drawers
- toasts/notices
- skeleton/loading states
- empty states
- error states
- pagination/filter/search patterns
- image/media ratios

Do not style every page independently.

### 4.2 No broken or inconsistent UI

Reject:

- random spacing
- unexplained gaps
- inconsistent button heights
- mixed card styles
- arbitrary border radii
- misaligned grids
- headings that wrap unnecessarily
- clipped text
- overflow
- broken images
- missing logos
- inconsistent image ratios
- repeated stock images used carelessly
- desktop-only layouts squeezed onto mobile
- mobile-only compromises that remove important functionality
- placeholder or unfinished-looking sections

### 4.3 Visual communication

Do not make public interfaces text-heavy unless the content itself requires reading.

Prefer concise human-written copy supported by:

- relevant photography
- meaningful icons
- purposeful illustrations
- diagrams
- cards
- structured metadata
- tables where comparison matters
- charts only when real data benefits from visualization

Icons and illustrations are not decoration quotas. Use them when they reduce cognitive load or improve hierarchy.

### 4.4 Avoid obvious AI copy

Do not publish generic AI-sounding filler, repetitive explanations, excessive "why this matters" tutorials, fake enthusiasm, generic feature prose, or verbose section introductions.

Public copy should sound like a real product/company in its industry: concise, specific, confident, and useful.

### 4.5 Responsive means complete

Test and design for:

- small phones
- common phones
- large phones
- tablets
- small laptops
- standard desktops
- wide desktops
- landscape edge cases

Every breakpoint keeps the feature complete. No device should receive a broken, missing, awkward, or partially functional version.

Mobile may use intentionally different patterns, including drawers, bottom actions, condensed controls, stacked layouts, and collapsible footers.

### 4.6 Header and footer

Navigation is product architecture, not decoration.

- Desktop header: clear primary navigation and actions.
- Mobile header: purpose-built menu/drawer; reliable open/close/focus behavior.
- Desktop footer: expose useful information architecture.
- Mobile footer: compact/collapsible groups when content density warrants it.

Do not simply shrink a desktop footer into a long mobile wall of links.

### 4.7 Theme behavior

- Corporate/marketing websites: dark mode is optional and normally unnecessary unless brand requirements justify it.
- SaaS dashboards, developer tools, operational products: system/light/dark modes should be considered when they improve the product.
- Theme implementation must use tokens, not duplicated per-page styles.

## 5. Performance is a product requirement

Optimize from the start instead of treating performance as a final cleanup task.

Evaluate:

- server/client component boundaries
- unnecessary JavaScript
- bundle size
- image format, dimensions and loading
- font loading
- caching
- database query shape
- pagination
- API payload size
- lazy loading where appropriate
- repeated network calls
- expensive rendering
- third-party scripts

A visually impressive page that loads poorly is not finished.

## 6. Backend standard

Backend architecture begins with the real business workflow.

Define:

- actors and roles
- ownership
- permissions
- lifecycle/status transitions
- approval/review states
- validation
- audit-sensitive actions
- notifications
- retries/background work
- deletion/archive rules
- failure/recovery behavior

Do not design backend entities only because they are convenient tables.

## 7. API standard

APIs are durable product interfaces.

Default expectations:

- predictable resource naming
- versioning strategy when public/partner-facing
- schema validation
- stable response shapes
- meaningful status codes
- authentication/authorization at the server
- pagination for growing collections
- idempotency where duplicate actions are risky
- safe error responses
- rate limiting where needed
- tracing/log correlation where useful
- API behavior documented close to the code

Design reusable capabilities so the same service can later support web, mobile apps, plugins, automations, partner systems, or internal tools without duplicating business logic.

## 8. Database standard

Data should be structured for the actual product and future operations.

Before creating a model/table, define:

- ownership
- relationships
- required vs optional fields
- uniqueness
- indexes and first queries
- lifecycle/status
- timestamps
- audit requirements
- soft delete/archive behavior if needed
- retention/privacy requirements
- migration and rollback implications

Use migrations consistently. Never assume a migration ran because the code exists.

Avoid storing file blobs in relational databases when object storage is appropriate.

Do not invent metrics, fake counters, unsupported statistics, or decorative math. Every calculation shown to users must have a correct formula, source data, units, and rounding behavior.

## 9. Media and asset reliability

Media failures damage perceived product quality immediately.

Rules:

- stable object keys/paths
- validated uploads
- correct MIME/type and size controls
- intentional image ratios
- fallbacks for missing assets
- no fragile temporary URLs in durable content
- no hardcoded preview-only assets in production
- check logo/favicon/social preview assets
- verify storage bindings and public/private access rules
- prevent duplicate or orphaned media where practical

A feature using media is not complete until upload, storage, retrieval, rendering, replacement/editing, failure state, and deployed behavior have been tested.

## 10. Approved architecture approach

Do not force one stack onto every project. Use a small number of approved profiles.

### Profile A — Cloudflare-first product

Use when the workload fits edge/serverless constraints.

Typical stack:

- TypeScript
- React / Next.js when SSR/full-stack React is justified
- Workers runtime through a supported Cloudflare deployment path
- D1 + Drizzle for relational workloads that fit D1
- R2 for files/media
- KV for cache/config where eventual consistency is acceptable
- Queues for retryable background work
- Workflows for durable multi-step jobs
- Durable Objects for coordination/realtime state when needed
- Turnstile/rate limits/WAF for public abuse protection
- Cloudflare observability/logging

### Profile B — Cloudflare frontend/API + external database/service

Use when Cloudflare is valuable for delivery/API but D1 or edge constraints are not a good fit.

Examples: workloads needing a managed PostgreSQL/MySQL ecosystem, specialized search, larger relational requirements, existing external systems, or vendor-specific services.

Keep the application boundaries and API contracts consistent even when infrastructure differs.

### Profile C — traditional/server-hosted workload

Use when the workload requires capabilities that do not fit Workers/serverless well, such as certain long-running processes, legacy PHP/Laravel systems that are expensive to rewrite, specialized native binaries, or infrastructure tied to an existing server environment.

Do not migrate purely for fashion. Migrate only when operational/product value justifies it.

## 11. Project-type intelligence

When a project type is named, first infer the established category patterns, then adapt to the specific business. Study mature products for conventions, not for copying visual identity.

### News / publication

Expect: homepage hierarchy, sections/topics, article pages, authors, search, breaking/latest logic if required, related content, media/captions/credits, SEO/schema, editorial workflow, drafts/review/publish, corrections/update metadata, pagination/archive, newsletter/ad placements where relevant.

Bangla publishing requires appropriate Bengali typography, line-height, text density, date/number treatment, and mobile reading behavior. English publishing should follow strong editorial hierarchy found in mature international publications without copying their design.

### Corporate/company website

Expect: clear value proposition, services/capabilities, industries/use cases where relevant, trust/proof, about/company, contact/lead flow, careers if needed, structured footer, SEO, analytics, fast loading. Avoid unnecessary dashboard-like complexity or dark mode by default.

### Travel platform

Expect category-specific search/discovery, destination/product pages, date/passenger inputs where applicable, pricing clarity, policies, booking/lead states, account/history where needed, supplier/admin operations, support/contact, responsive booking UX, SEO landing pages, integration-ready service boundaries.

### Directory

Expect structured location/category taxonomy, search/filter, listing detail, owner/claim flow if needed, reviews/moderation if needed, map/contact/hours, media, featured placements/ads, SEO/PSEO, admin/contributor workflows, duplicate detection, data quality controls.

### E-commerce / catalog

Expect categories, products/variants, media, price/inventory, cart/checkout or inquiry flow, customer/account, orders, payment integration where relevant, fulfillment/status, admin operations, search/filter, SEO, analytics.

### Marketplace

Expect two-sided roles, onboarding, listings, discovery, transaction/inquiry lifecycle, trust/safety, disputes/moderation where relevant, commissions/payout logic if applicable, notifications, admin operations.

### SaaS

Expect authenticated app shell, role/organization model as required, settings, billing if applicable, audit-sensitive actions, empty/loading/error states, keyboard/accessibility quality, system/light/dark theme when appropriate, observability, rate limits, secure API boundaries.

### Education/LMS

Expect course/module/lesson hierarchy, progress, enrollment/access, assessments where needed, media/content rendering, learner dashboard, instructor/admin workflows, completion state and analytics.

## 12. Repository governance

Every repository should eventually have a simple project registry record containing:

- project name and purpose
- active / legacy / experimental / paused / archived status
- canonical branch
- production URL
- preview/staging URL
- framework/runtime
- package manager
- deployment target
- database
- storage
- authentication
- email/notification provider
- important bindings/secrets names (never secret values)
- migration location and current state
- known technical debt
- owner/contact
- last verified date

Never assume `main` is the canonical implementation branch. Verify branch and deployed source first.

## 13. Build workflow

Default sequence:

```text
1. Inspect existing project and deployed reality
2. Identify project type and closest reference architecture
3. Confirm canonical branch/runtime/package manager
4. Map users, workflows, data and permissions
5. Establish/verify design tokens and reusable components
6. Define data model and API contracts
7. Implement one complete vertical slice
8. Add admin/operational controls in the same flow
9. Test loading/empty/error/success states
10. Test responsive and accessibility behavior
11. Run lint/type/build/tests
12. Verify migrations/bindings/storage
13. Deploy to preview
14. Smoke-test real flow with realistic data
15. Fix regressions before production
16. Deploy production through controlled path
17. Production smoke check and record evidence
```

## 14. Definition of done

A task is not done because code was written or merged.

Done means, where applicable:

- UX is coherent
- visuals are polished
- all relevant breakpoints work
- content is concise and human
- frontend and backend agree
- API is validated and authorized
- database reads/writes work
- migration is applied in the intended environment
- media works
- admin flow works
- permissions work
- loading/empty/error/success states work
- no obvious console/runtime errors
- type/build checks pass
- preview is verified
- production behavior is verified when deployed
- no known regression was introduced

## 15. Regression prevention

Prefer prevention over repeated repair.

Use as appropriate:

- TypeScript strictness
- linting/formatting
- schema validation
- unit tests for important logic
- integration tests for APIs/data
- end-to-end tests for critical journeys
- visual regression for shared UI
- responsive QA
- accessibility checks
- migration checks
- asset/link checks
- health/readiness endpoints
- preview environments
- deployment smoke tests
- logging/observability
- rollback plans

One task should not need to be solved twice because of preventable implementation mistakes.

## 16. AI-agent behavior

AI should act as a senior product-engineering partner, not as a passive code generator waiting for line-by-line correction.

Before implementation, infer obvious quality requirements from this standard. During implementation, inspect adjacent dependencies and likely regressions. Before reporting completion, verify the complete flow.

Do not repeatedly ask for decisions that this standard already answers.

Rework is expected for changed requirements, new information, or genuine product iteration. Rework should not be caused by avoidable basics such as broken spacing, missing responsive behavior, inconsistent components, forgotten states, missing media controls, unapplied migrations, or untested routes.

## 17. Relationship to DeveloperB UI Kit

Use shared UI primitives and tokens where they fit, but do not force dashboard components onto editorial or marketing experiences. The UI kit is a foundation, not a visual template for every industry.

New reusable components discovered in real projects should be promoted back into the shared UI kit only after their API and states are proven.

## 18. Final quality principle

Aim for first-shot production quality as far as reasonably possible:

**organized from the first line, coherent across every layer, visually strong, fast, responsive, verified, maintainable, and difficult to accidentally break tomorrow.**
