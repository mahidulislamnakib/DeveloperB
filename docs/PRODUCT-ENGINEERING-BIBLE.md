# Nakib Product & Engineering Bible

> The single operating standard for planning, researching, designing, building, deploying, maintaining, and improving Nakib's digital products with AI assistance.

## Mandatory companion

For every public-facing or customer-facing project, also read and apply [`GROWTH-LAUNCH-AND-LIFECYCLE-STANDARD.md`](GROWTH-LAUNCH-AND-LIFECYCLE-STANDARD.md). It covers social-platform readiness, SEO and AI/LLM discoverability, analytics/pixels, AI-assisted metadata, admin parity, launch readiness, stack selection, post-launch monitoring, and lifecycle maintenance.

## 1. Purpose

This document is the authoritative working standard for future product, website, software, SaaS, marketplace, media, directory, travel, publishing, commerce, internal-tool, and experimental projects.

Its purpose is simple:

- reduce repeated instructions;
- reduce preventable rework;
- protect time, money, compute, deployment, and AI-token costs;
- keep branding, architecture, data, UX, and operations consistent;
- produce complete, human-friendly, production-minded products from the first implementation;
- preserve decisions so the same work is not rediscovered later;
- make AI behave like a disciplined senior product-engineering partner rather than a passive code generator.

The standard is intentionally English-first so technical naming, prompts, documentation, code, architecture, and future agent use remain precise and portable.

---

## 2. Core philosophy

### 2.1 Build coherent products, not disconnected pages

Every product is one system:

```text
Research
→ Product strategy
→ Information architecture
→ Brand system
→ UX/CX
→ Frontend
→ Admin/operations
→ API/service layer
→ Database
→ Media/storage
→ Authentication/permissions
→ Search/discoverability
→ Analytics/observability
→ QA
→ Deployment
→ Maintenance
```

A feature is incomplete if one or more required layers are missing.

### 2.2 First implementation should be production-minded

Do not intentionally create rough, obviously temporary versions that require predictable cleanup prompts such as:

- fix spacing;
- fix buttons;
- add icons;
- make mobile work;
- add empty states;
- fix footer;
- fix broken images;
- make admin usable;
- add validation;
- connect the API;
- apply the migration;
- repair missing metadata.

Those needs should be anticipated before calling a feature complete.

### 2.3 Speed is valuable only when quality survives

AI enables work that previously required much more time and manpower. Use that advantage to compress delivery time without sacrificing research, product judgment, design quality, engineering discipline, or reliability.

The goal is not "generate more code faster." The goal is "ship better systems with less waste."

---

## 3. Solo-founder operating model

Nakib is often the effective founder, product owner, UX reviewer, business operator, content owner, and final approver at the same time.

The engineering system must therefore compensate for limited human bandwidth by using:

- reusable components and data;
- documented decisions;
- automation where it genuinely saves time;
- strong defaults;
- minimal but intentional infrastructure;
- progressive disclosure in product UX;
- clear project priorities;
- cost-aware deployment and maintenance;
- reliable admin systems;
- AI assistance that challenges weak assumptions instead of blindly agreeing.

Do not copy the bureaucracy of a large company. Copy the discipline: clear ownership, consistency, verification, rollback, maintainability, brand governance, and evidence-based decisions.

---

## 4. Research before building

For any meaningful new project or major feature:

1. Define the real user problem.
2. Identify the affected users and operational users.
3. Research current category leaders and relevant competitors.
4. Identify common category patterns and expected user behavior.
5. Identify what competitors do well.
6. Identify recurring complaints, friction, or weaknesses.
7. Challenge the proposed idea against market reality, cost, complexity, and actual user need.
8. Decide what should not be built.
9. Select the smallest complete solution that can create real value.
10. Record the assumptions that still need validation.

AI must not praise every idea automatically. If an idea is weak, overbuilt, expensive, hard to maintain, unlikely to be used, or already solved well by an existing tool, say so clearly and propose a better path.

---

## 5. Product-type intelligence

Do not reuse one generic UI or architecture for unrelated product categories.

A news publication, SaaS dashboard, travel platform, marketplace, corporate website, directory, learning platform, media marketplace, and e-commerce system have different user expectations, information architecture, data models, admin workflows, trust signals, and content density.

When the project type is known, infer the common category expectations before asking basic questions. Ask only questions that materially affect the product, architecture, brand, or business rules.

---

## 6. Language policy

Default final-product language: **simple, clear English**.

Use language that a user with moderate English can understand. Avoid unnecessary jargon, inflated vocabulary, academic wording, and AI-sounding marketing phrases.

Localization must earn its complexity.

Use Bangla or other languages when they materially improve comprehension, adoption, task completion, or market reach for the target audience. Examples may include mass-market daily tools, local public-service utilities, education/content products, or other products whose real users benefit from localization.

Do not add multilingual infrastructure merely because localization is technically possible.

Repository documentation, technical naming, architecture records, prompts, API contracts, and engineering standards should normally remain in English.

---

## 7. Brand governance

Every project should have a canonical brand system before repeated visual production.

Record as applicable:

- official logo and wordmark;
- approved logo variants;
- brand colors and semantic color roles;
- typography;
- icon style;
- illustration direction;
- photography direction;
- tone of voice;
- spacing/layout principles;
- social/profile/OG asset rules;
- forbidden treatments.

AI must not casually redraw, approximate, replace, distort, recolor, or reinterpret an official logo.

When generating images, presentations, posters, social assets, or UI, preserve the project's actual identity rather than inventing a new one per session.

Brand consistency is a system, not a one-time logo choice.

---

## 8. Human-first UX and CX

Design for real people completing tasks, not for demonstrating features.

Public UX, logged-in UX, and admin/operations UX may share a design system but should optimize for different jobs.

Public surfaces prioritize comprehension, trust, discovery, conversion, reading, browsing, and task completion.

Admin surfaces prioritize speed, accuracy, state visibility, filtering, editing, moderation, operations, and safe control.

Avoid tutorial-heavy interfaces. The interface should explain itself through good labels, hierarchy, progressive disclosure, contextual help, clear feedback, and familiar interaction patterns.

Do not expose all possible data fields at once merely because the database contains them.

Use progressive disclosure:

```text
minimum necessary information
→ next relevant step
→ optional enrichment
→ advanced configuration
```

---

## 9. Frontend standard

Frontend must be coherent across pages, states, and breakpoints.

Establish reusable tokens and components before multiplying pages:

- typography scale;
- spacing scale;
- color roles;
- radii/borders/shadows;
- containers and breakpoints;
- buttons;
- forms;
- cards;
- tables/lists;
- badges/statuses;
- tabs;
- dialogs/drawers;
- toasts/notices;
- skeleton/loading states;
- empty states;
- error states;
- pagination/search/filter patterns;
- image/media ratios.

Reject random spacing, broken alignment, inconsistent controls, clipped text, overflow, repeated careless imagery, broken logos, missing assets, awkward mobile stacking, and unfinished placeholder sections.

Use relevant photography, icons, illustrations, diagrams, and subtle motion where they improve comprehension or perceived quality. Do not use them as meaningless decoration quotas.

Respect reduced-motion preferences and performance constraints.

---

## 10. Responsive standard

Responsive does not mean "desktop shrunk until it fits."

Design intentionally for:

- small phones;
- common phones;
- large phones;
- tablets;
- small laptops;
- standard desktops;
- wide desktops;
- landscape edge cases.

All important features must remain complete across device classes.

Mobile navigation should be purpose-built. Mobile footers may be collapsible or condensed. Desktop navigation/footer may expose more information where appropriate.

Do not accept "works on my device" as QA.

---

## 11. Content standard

Avoid obvious AI-generated copy, filler sections, repeated tutorials, fake enthusiasm, generic "AI-powered / seamless / revolutionary" wording, or unnecessary text density.

Public copy should be:

- specific;
- concise;
- human-sounding;
- useful;
- appropriate to the industry;
- factually grounded.

Do not invent customers, partners, certifications, facilities, capacity, revenue, statistics, awards, testimonials, quotes, pricing, or business claims.

For long-form editorial content, use the dedicated blog/article authoring standard.

---

## 12. Blog and article systems

A serious publishing system should not be limited to a flat textarea.

Support rich structured writing as appropriate, including:

- headings;
- emphasis;
- lists;
- links;
- blockquotes;
- code blocks;
- tables;
- images;
- captions/credits;
- galleries/embeds where justified;
- reusable content blocks;
- HTML or Markdown rendering where appropriate.

Prefer structured content or portable source formats when future reuse matters.

Article media belongs in the article workflow. Category media belongs with category management. Related controls should not be scattered arbitrarily across unrelated admin screens.

---

## 13. Reusable data principle

If information already exists in a reliable canonical form, reuse it.

Examples:

- company identity;
- contact information;
- addresses;
- authors;
- media credits;
- categories/taxonomy;
- geographic data;
- CTAs;
- disclaimers;
- standard product attributes;
- SEO defaults;
- social links;
- brand assets.

Do not repeatedly ask the user to re-enter or re-explain known project facts.

Avoid duplicate sources of truth.

---

## 14. Backend standard

Backend architecture starts from the business workflow, not from convenient tables.

Define:

- actors/roles;
- ownership;
- permissions;
- lifecycle/status transitions;
- approval/review states;
- validation;
- notifications;
- retries/background work;
- archive/delete rules;
- failure/recovery behavior;
- audit-sensitive actions.

Business rules must be enforced server-side where trust matters.

---

## 15. API standard

APIs are reusable product interfaces, not temporary glue.

Use predictable resources, validation, authentication/authorization, pagination, safe errors, stable response shapes, idempotency where needed, rate limits where justified, and tracing/log correlation where useful.

Design reusable services so web, mobile, plugins, automations, partner systems, and internal tools can share business logic instead of duplicating it.

---

## 16. Database standard

Before creating persistent data, define:

- ownership;
- relationships;
- required/optional fields;
- uniqueness;
- indexes and first queries;
- lifecycle/status;
- timestamps;
- audit needs;
- retention/privacy;
- archive/delete behavior;
- migration/recovery implications.

Use migrations consistently and verify the intended environment actually applied them.

Do not store large media blobs in relational databases when object storage is more appropriate.

Never display decorative or fabricated metrics. Calculations need correct source data, formulas, units, and rounding.

---

## 17. Media and asset reliability

Media workflows must cover upload, validation, storage, retrieval, editing/replacement, rendering, failure states, and deployed behavior.

Use stable paths/object keys, intentional ratios, valid MIME/size controls, fallbacks, correct public/private access, and durable URLs.

Do not allow temporary preview URLs, missing logos, broken favicons, orphaned media, or inconsistent object references to become permanent product behavior.

---

## 18. Accessibility

Accessibility is part of quality.

Evaluate as applicable:

- semantic HTML;
- keyboard navigation;
- visible focus;
- form labels/instructions;
- contrast;
- touch target size;
- alt text;
- error identification;
- screen-reader meaning;
- reduced motion;
- heading structure;
- accessible dialogs/menus.

Do not postpone obvious accessibility problems to an undefined "later."

---

## 19. Security and privacy

Apply least privilege and data minimization.

Rules include:

- never expose secrets;
- server-side authorization;
- validate untrusted input;
- safe upload handling;
- rate limit public abuse surfaces when justified;
- secure session/auth behavior;
- audit sensitive actions where appropriate;
- collect only data that has a use;
- document retention/privacy needs;
- avoid leaking private/internal metadata through public APIs.

---

## 20. Performance

Performance is a product requirement.

Evaluate JavaScript weight, rendering boundaries, images, fonts, caching, query shapes, pagination, API payloads, repeated requests, third-party scripts, media delivery, and expensive client work.

A visually polished product that loads poorly is unfinished.

---

## 21. Search and discoverability

Do not think only about one search engine.

Use standards-based discoverability:

- crawlability/indexability;
- canonical URLs;
- sitemap;
- robots rules;
- semantic HTML;
- structured data where appropriate;
- useful metadata;
- internal linking;
- content quality;
- duplicate/thin-content control;
- pagination/archive behavior;
- performance;
- language/locale handling.

Google may be the primary search engine, but Bing and relevant ecosystem-specific discovery surfaces should be considered where they matter.

Do not use manipulative SEO tactics or fabricate content for indexing.

---

## 22. Analytics and observability

Measure useful product events rather than vanity metrics.

Examples:

- successful inquiry;
- registration completion;
- listing publication;
- booking request;
- completed upload;
- failed upload;
- zero-result search;
- payment failure;
- moderation action.

Use logs, health/readiness checks, diagnostics, and error visibility appropriate to the project.

Do not run blind production systems where important failures cannot be detected.

---

## 23. Browser-console and runtime QA

Visual appearance is not enough.

Check for:

- console errors;
- hydration errors;
- failed network requests;
- 404/500 responses;
- image/font failures;
- CORS/CSP problems;
- duplicate requests;
- infinite loops;
- deprecated/runtime warnings;
- asset preload problems;
- configuration/environment mismatches.

If a known harmless warning must remain, document it so future work does not repeatedly rediscover it.

---

## 24. Technology and stack policy

Do not force one stack onto every project.

Before implementation, evaluate workload needs and choose a documented profile.

Cloudflare-first is preferred when the workload fits technically and economically. Typical tools may include Workers, D1/Drizzle, R2, KV, Queues, Workflows, Durable Objects, Turnstile, WAF/rate limits, and observability.

Use Cloudflare plus external managed services when D1/Workers are not the right fit.

Use VPS/server-hosted or traditional architecture when long-running workloads, native binaries, legacy systems, database ecosystem needs, or operational requirements justify it.

Do not migrate or adopt technology for fashion.

New technology should be adopted when it materially improves reliability, capability, security, UX, maintainability, or cost.

Keep active dependencies safely current and review meaningful framework/runtime/security changes.

---

## 25. AI feature policy

AI is a tool, not a product requirement.

Use AI where it creates measurable value, such as:

- metadata suggestions;
- content assistance;
- classification/tagging;
- duplicate detection;
- moderation assistance;
- search/retrieval;
- workflow automation;
- operational summarization.

Do not add AI merely to label a project "AI-powered."

AI-generated content or metadata must remain fact-safe and editable.

---

## 26. Admin systems

Admin is a first-class product surface.

A public product is incomplete if operations require developers for ordinary business tasks that should be manageable in the admin system.

Admin should be coherent, responsive, searchable, contextual, role-aware, and safe.

Include loading, empty, error, success, validation, permission, and confirmation states.

Use bulk tools only when they reduce real operational work without increasing risk.

---

## 27. Cost discipline

Treat all of these as costs:

- human time;
- AI tokens;
- CI minutes;
- deployments;
- Worker usage;
- database operations;
- object storage;
- external APIs;
- email delivery;
- analytics/logging;
- repeated research;
- unnecessary infrastructure.

Batch related changes when safe. Avoid repeated deploy loops caused by predictable cleanup.

Do not keep unused experiments, schedules, preview infrastructure, or duplicate services running indefinitely.

Destructive cleanup still requires dependency mapping and explicit approval.

---

## 28. Repository governance

Every meaningful repository should have a registry record containing:

- purpose;
- status;
- canonical branch;
- production/preview URLs;
- framework/runtime;
- package manager;
- deployment target;
- database;
- storage;
- auth;
- notifications/email;
- important binding names;
- migration location/state;
- known technical debt;
- brand source;
- analytics/SEO status where relevant;
- owner;
- last verified date;
- next review date.

Do not assume the default Git branch is the actual deployed or canonical implementation branch.

---

## 29. Decision records

Important choices must survive chat history.

Record major decisions such as:

- stack selection;
- database choice;
- deployment model;
- canonical brand rules;
- lifecycle/state model;
- auth model;
- important third-party providers;
- architectural exceptions;
- intentionally rejected features.

Include why the decision was made so a future AI agent does not reverse it casually.

---

## 30. Build and release workflow

Default sequence:

```text
1. Inspect repository and deployed reality
2. Read project registry/decisions
3. Research current category/technology where relevant
4. Challenge assumptions
5. Define users, flows, data, permissions and success criteria
6. Confirm brand/design system
7. Select/document stack
8. Define data model and API contracts
9. Implement one complete vertical slice
10. Include operational/admin control
11. Verify states, responsive behavior and accessibility
12. Run lint/type/tests/build
13. Verify migrations/bindings/storage
14. Preview
15. Test realistic flow with realistic data
16. Inspect browser console/runtime
17. Fix regressions
18. Controlled production deployment
19. Production smoke test
20. Record evidence and remaining risks
```

---

## 31. Definition of done

A task or feature is done only when the applicable complete flow is verified.

Depending on the feature, verify:

- business requirement;
- UX coherence;
- visual consistency;
- responsive behavior;
- accessibility;
- human-quality content;
- frontend/backend agreement;
- API validation/auth;
- database behavior;
- migrations;
- media;
- admin operations;
- permissions;
- loading/empty/error/success states;
- console/runtime health;
- SEO/discoverability impact;
- analytics/observability when needed;
- performance;
- preview behavior;
- production behavior when deployed;
- no known regression.

A green build alone is not the definition of done.

---

## 32. Regression prevention

Prefer prevention over repair through appropriate use of:

- strict types;
- lint/format rules;
- schema validation;
- unit tests;
- integration tests;
- end-to-end tests;
- visual regression tests;
- responsive QA;
- accessibility checks;
- migration verification;
- asset/link checks;
- health/readiness endpoints;
- preview environments;
- production smoke tests;
- observability;
- rollback/recovery plans.

Do not repeatedly solve the same preventable problem.

---

## 33. Incident and rollback discipline

For production-sensitive changes, know how to recover before deploying.

Consider:

- rollback path;
- database recovery;
- migration reversal or forward-fix strategy;
- storage/data repair;
- feature disable/flag path;
- previous working artifact/version;
- monitoring after release.

Do not improvise recovery only after users are affected.

---

## 34. Maintenance cadence

Prioritize by strategic value.

Typical model:

- weekly: critical production/security/cost/user-flow problems for important live products;
- monthly: active product dependencies, integrations, migrations, assets, responsive/console issues, SEO/indexability, cost drift and meaningful technology changes;
- quarterly: full portfolio classification, duplicate/legacy cleanup decisions, stack health, technical debt, reuse opportunities and archive/migrate decisions.

Do not perform pointless updates simply because a schedule exists.

---

## 35. AI-agent contract

AI should act like a senior product-engineering partner.

Before changing a project:

- inspect before assuming;
- read canonical project decisions;
- reuse before recreating;
- research before guessing;
- challenge weak assumptions;
- preserve brand;
- choose technology by fit;
- think end-to-end;
- consider public and admin operations;
- consider responsive/accessibility/security/performance;
- verify before declaring done;
- protect time and cost.

Do not repeatedly ask for decisions already answered by this Bible or the project's canonical records.

---

## 36. Final operating principle

Use AI to achieve the discipline and completeness of a strong product team while preserving the speed and simplicity required by a solo operator.

The target is:

> **Research deeply. Decide deliberately. Build coherently. Design for humans. Preserve the brand. Reuse what exists. Verify every layer. Spend carefully. Document what matters. Maintain only what earns its place.**
