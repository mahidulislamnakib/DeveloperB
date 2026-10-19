# Human Experience & Research Standard

> Default discovery, UX, UI, CX, research, technology-selection, content, QA, and continuous-improvement standard for Nakib's product portfolio.

## 1. Core principle

Every project must feel intentionally designed for its own users, industry, workflows, and context. Do not produce one generic AI-style interface and recolor it for every product.

UI, UX, and CX must differ by product type, user type, business model, risk level, task frequency, device context, and content density while still following the shared engineering quality standard.

The public product, authenticated product, staff/admin system, and internal operations may share tokens and primitives, but they should not be forced into the same information architecture or visual density when their jobs are different.

## 2. Human-first, not AI-looking

Reject interfaces and content that feel generated for demonstration rather than built for real users.

Avoid:
- tutorial-heavy public copy
- explanatory text beside every obvious control
- excessive “AI-powered”, “smart”, “intelligent”, “next-generation”, “seamless”, or similar generic claims unless materially necessary and provable
- repeated “how it works” prose where interaction can explain itself
- giant text blocks in admin panels
- generic three-card marketing sections added only to fill space
- fake metrics, decorative dashboards, invented testimonials, invented customer logos, or unsupported claims
- feature labels that expose implementation details users do not care about

Prefer:
- clear labels
- strong visual hierarchy
- sensible defaults
- contextual help only where the user may genuinely be uncertain
- progressive disclosure
- icons/illustrations/imagery where they reduce reading effort
- concise, specific, human-sounding content
- familiar interaction patterns appropriate to the industry

## 3. Project-specific experience design

Before UI work, define at minimum:
- primary user groups
- their goals
- their most frequent tasks
- their highest-risk tasks
- what information they need first
- what can be delayed or progressively disclosed
- likely device mix
- expected user sophistication
- trust requirements
- business conversion goal
- operational/admin needs

Examples:

### News/publication
Reading comfort, hierarchy, recency, sections, author/source context, media captions/credits, accessibility, archive/search, fast mobile reading, ad density, and editorial integrity matter more than dashboard-style decoration.

### Travel
Discovery, confidence, destination/product comparison, date/passenger inputs, pricing/policy clarity, low-friction inquiry/booking, trust, support, and mobile completion matter more than exposing internal system complexity.

### SaaS/operational product
Task speed, data density, keyboard/accessibility support, saved state, filters, bulk actions, audit-sensitive confirmations, settings, system feedback, and theme support may matter more than marketing visuals.

### Directory
Search/filter/location/category clarity, trustworthy listing details, contact/hours/map/media, progressive listing submission, moderation/claim flows, duplicate prevention, and local SEO matter more than long explanatory pages.

### Marketplace/media platform
Discovery, asset quality, creator/buyer trust, licensing/transaction clarity, preview/media reliability, ownership state, moderation, and conversion matter more than decorative feature copy.

## 4. Public vs admin experience

Do not design admin as a public website with a sidebar. Do not design public pages like admin dashboards.

Public interfaces optimize for:
- comprehension
- trust
- discovery
- conversion
- reading/browsing
- low cognitive load
- speed

Admin/staff interfaces optimize for:
- task completion
- data accuracy
- context
- compact controls
- safe bulk operations
- clear states
- auditability
- predictable navigation
- low repetition

Both should be polished, but their visual density and interaction model may differ substantially.

## 5. Progressive disclosure by default

Do not ask users for all possible data at once.

Use staged collection when the task permits:

```text
minimum required to start
→ context-specific next step
→ optional enrichment
→ advanced details/settings
```

Examples:
- signup: only essentials first
- business listing: identity/contact/location first, richer media/hours/social/details later
- creator onboarding: account → profile essentials → payout/compliance when actually needed
- travel inquiry: route/date/traveler essentials → preferences → documents only when required

Long forms should be broken into logical steps, autosaved where useful, and resilient to interruption.

## 6. Research before build

Do not validate an idea merely because the user or AI likes it.

Before significant new product work:
1. Define the problem and target user.
2. Identify direct and adjacent competitors.
3. Review current category leaders and current user expectations.
4. Check whether the requested feature solves a real user/business problem.
5. Identify legal, operational, content, data, payment, trust, moderation, and support implications.
6. Identify what should NOT be built.
7. Check whether an existing open-source project/library/component already solves part of the problem safely.
8. Check the current state of relevant platform/framework/vendor capabilities and pricing/limits.
9. Write assumptions explicitly and challenge them.
10. Prefer the smallest complete solution that proves value.

Research is not an excuse to delay indefinitely. It exists to avoid expensive wrong implementation.

## 7. Discovery questions

Project discovery depth should scale with project risk and ambiguity.

A small corporate site may need 10–20 focused questions. A publication, marketplace, SaaS, or transaction-heavy platform may require 30–100+ questions across business, users, content, data, operations, legal/compliance, admin, integrations, SEO, analytics, infrastructure, and growth.

Do not ask questions already answered by:
- the existing repository
- previous project decisions
- deployed product behavior
- this engineering standard
- readily verifiable public information

Ask only questions that materially change architecture, scope, UX, or business outcome.

## 8. Current-technology review

Technology choices are not permanent assumptions. For active stacks, periodically review:
- framework active/LTS/security releases
- runtime changes
- Cloudflare compatibility/runtime changes
- deployment adapters
- database/storage limits and new capabilities
- package/dependency health
- security advisories
- browser/platform support
- email/form/auth/payment provider changes
- MCP/connectors/tooling that can reduce manual work
- pricing changes that affect operating cost

Adopt new technology only when it improves reliability, capability, developer speed, user experience, or cost. Do not migrate for novelty.

## 9. Open-source and industry inspiration

Use mature public products and strong open-source repositories as learning material.

Allowed approach:
- study information architecture
- inspect reusable patterns
- learn component/state/API architecture
- reuse compatible open-source packages under their licenses
- study accessibility, responsiveness, testing, and operations patterns

Do not:
- copy branding
- clone distinctive layouts without adaptation
- copy proprietary content
- import large dependencies without reviewing maintenance/security/cost
- inherit architecture that does not fit the project

## 10. Console and runtime cleanliness

Browser console, server logs, CI output, and deployment logs are part of product quality.

Before completion, check applicable surfaces for:
- runtime errors
- hydration errors
- failed network requests
- 404/500 responses
- CSP/CORS issues
- accessibility warnings worth addressing
- repeated requests/infinite loops
- image/font failures
- deprecated APIs
- preload warnings
- unhandled promise errors
- worker/runtime compatibility warnings

Known harmless warnings should be documented rather than repeatedly rediscovered.

## 11. File and asset integrity

Generated code must not leave the repository in an internally inconsistent state.

Verify:
- imports resolve
- referenced assets exist
- routes exist
- environment variable names match code/docs/deploy config
- migration files are present and ordered
- generated types are current where applicable
- public/static paths match deployed runtime behavior
- no temporary/local absolute paths remain
- no stale duplicate implementation is accidentally used

A successful code generation step is not enough; the repository must build and the actual feature must run.

## 12. SEO and discoverability as system design

SEO is not only metadata.

For public products consider:
- crawlability/indexability
- robots directives
- canonical URLs
- sitemaps
- structured data/schema where valid
- internal linking
- useful page titles/descriptions
- content quality and uniqueness
- media alt/caption/credit
- pagination/faceted navigation controls
- performance/Core Web Vitals
- duplicate/thin content prevention
- redirect/404 behavior
- language/locale behavior

Do not think only about Google. Validate standards-based discoverability and submission/indexing considerations for major search ecosystems such as Bing and other relevant regional/search providers when the audience justifies it.

Do not add search-engine-specific hacks that damage user experience.

## 13. Content quality

Every public content pass should ask:
- does this sound like a real human/company/editor?
- is this text necessary?
- can an icon, visual, metadata row, table, example, or interaction communicate it faster?
- are claims specific and supportable?
- is the article/page structurally useful rather than padded for length?
- is repeated AI phrasing removed?

Long-form articles may be detailed. Product UI should not become article-like unless reading is the task.

## 14. Continuous product thinking

For every active project, periodically ask:
- what is broken?
- what is confusing?
- what is unused?
- what is duplicated?
- what costs money without producing value?
- what requires repeated manual work?
- what can be reused?
- what can be simplified?
- what is preventing conversion/retention?
- what has changed in the industry or technology?

Do not keep adding features to compensate for a weak core flow.

## 15. Time is a first-class engineering constraint

Optimize for total time-to-reliable-outcome, not fastest first code generation.

Avoid:
- repeated failed builds
- repeated deploys for trivial edits
- asking the same question repeatedly
- rebuilding known components
- rediscovering known project architecture
- debugging avoidable path/config mismatches
- importing data before defining quality gates
- polishing low-value experiments before core live products

Spend more thinking/research time upfront when it prevents repeated implementation and deployment cycles.

## 16. Definition of human-friendly done

A user-facing feature is not done until a realistic user can complete the intended task without needing an explanation from the developer.

An admin feature is not done until the responsible staff member can complete the operational task safely without needing database/code access.

A product is not considered healthy merely because the homepage looks good. Public flow, authenticated flow, admin flow, API/data lifecycle, media, search/discoverability, responsive behavior, runtime health, and maintenance path must agree.

## 17. Final rule

Use AI to compress the time required for strong engineering—not to lower the standard of engineering.

The advantage of AI should appear as faster research, faster implementation, more complete QA, better reuse, lower operating cost, and fewer repeated mistakes; not as generic copy, generic UI, fragile code, or unnecessary features.
