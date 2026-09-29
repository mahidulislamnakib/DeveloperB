# Nakib Product & Engineering Bible

> The single operating standard for planning, researching, designing, building, deploying, maintaining, and improving Nakib's digital products with AI assistance.

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

Therefore the system must compensate for limited human bandwidth.

Default behavior:

- automate repetitive checks;
- reuse proven components and data;
- document decisions close to the project;
- avoid unnecessary infrastructure;
- minimize operational surfaces;
- batch safe changes;
- prioritize projects that are live, strategically important, or income-generating;
- avoid maintaining experiments that no longer justify their cost.

A project should not require a large-team process merely because large companies use one. Use the smallest process that still protects quality, safety, and maintainability.

---

## 4. Product discovery before implementation

Do not start major implementation from a vague label alone.

If the request is "build a newspaper," "build a travel platform," "build a SaaS," or similar, first establish the product model.

### 4.1 Research before assumptions

Before major work:

1. inspect existing repositories, docs, data, deployed state, and prior decisions;
2. identify the actual users and jobs-to-be-done;
3. study current category leaders and established patterns;
4. research current technology where it materially affects the decision;
5. identify legal, platform, data, or operational constraints where relevant;
6. identify what should **not** be built;
7. challenge assumptions that are unsupported by evidence;
8. define the smallest complete version worth operating.

### 4.2 Ask questions only when they add value

Do not repeatedly ask for information that can be recovered from:

- repository history;
- project docs;
- deployed product behavior;
- existing data;
- prior decisions;
- established industry conventions;
- public research.

For genuinely new product discovery, ask enough questions to remove material ambiguity. A small site may need only a few. A complex marketplace may require dozens. The number is not important; the quality of the resulting model is.

### 4.3 AI must challenge weak ideas

Do not treat every idea as good merely because the user proposed it.

Evaluate:

- user demand;
- pain severity;
- adoption friction;
- operational burden;
- cost;
- data availability;
- defensibility;
- monetization;
- technical risk;
- maintenance burden;
- existing alternatives.

When an idea is weak, explain the reason and propose a stronger direction.

---

## 5. Project-type intelligence

Project categories have different user expectations. Do not apply one generic UI or information architecture everywhere.

### News / publication

Expect:

- editorial hierarchy;
- sections/topics;
- article lifecycle;
- author/editor attribution;
- rich article rendering;
- image captions and credits;
- search/archive;
- related stories;
- corrections/update metadata;
- SEO/schema;
- ad/newsletter placements where relevant;
- editorial admin flow.

### Corporate/company website

Expect:

- immediate value proposition;
- capabilities/services;
- proof/trust;
- company/about;
- relevant work/projects;
- contact/lead flow;
- careers only when needed;
- fast loading;
- clear mobile navigation;
- concise content.

### Travel platform

Expect:

- search/discovery;
- destination/product hierarchy;
- dates/passenger inputs when relevant;
- clear price/policy information;
- booking or lead lifecycle;
- account/history where useful;
- supplier/admin operations;
- support;
- SEO landing pages;
- integration-ready services.

### Directory

Expect:

- structured taxonomy/location data;
- search/filter;
- listing detail;
- map/contact/hours;
- media;
- claim/owner flow where useful;
- moderation;
- duplicate detection;
- featured/ads where relevant;
- SEO/PSEO;
- compact contributor/admin workflows.

### E-commerce / catalog

Expect:

- category/product/variant hierarchy;
- media;
- price/inventory;
- inquiry/cart/checkout;
- customer/order flow;
- payments where applicable;
- fulfillment/status;
- search/filter;
- admin operations.

### Marketplace

Expect:

- two-sided roles;
- onboarding;
- listings;
- discovery;
- transaction/inquiry lifecycle;
- moderation/trust;
- commissions/payouts when relevant;
- disputes/support where needed;
- notifications;
- operational admin.

### SaaS / internal product

Expect:

- authenticated shell;
- role/organization model;
- settings;
- task-focused dashboards;
- keyboard/accessibility quality;
- audit-sensitive actions;
- observability;
- system/light/dark theme when appropriate;
- secure APIs.

---

## 6. Language policy

### 6.1 Default product language

Default final product language is **English** unless the product has a clear audience reason to require another language.

Use simple, direct English that people with modest English proficiency can understand.

Prefer:

- short sentences;
- familiar words;
- clear labels;
- concrete verbs;
- visible next actions.

Avoid unnecessary jargon, corporate filler, complicated vocabulary, and decorative sophistication.

### 6.2 When localization is justified

Localization should solve a real user problem.

Consider Bangla or multilingual support when the product serves:

- mass-market daily-use utilities;
- public-service use cases;
- users whose task completion materially improves in Bangla;
- content products where Bangla is itself the content value.

Do not add multilingual complexity by default.

### 6.3 Internal technical documentation

Engineering docs, schemas, API naming, code comments, architecture records, and AI-agent standards should remain English-first.

---

## 7. Human-first content standard

### 7.1 No obvious AI voice

Reject generic copy such as:

- "AI-powered solution";
- "revolutionary platform";
- "next-generation experience";
- "seamlessly transform";
- repetitive feature explanations;
- tutorial-style narration on ordinary product pages.

Technology should be mentioned only when it helps the user make a decision.

### 7.2 Public interfaces should not be text dumps

Use the right mix of:

- concise copy;
- images;
- icons;
- illustrations;
- cards;
- tables;
- diagrams;
- metadata;
- interaction.

Content-heavy products are allowed to be reading-heavy where reading is the core purpose. Ordinary product surfaces should not look like documentation.

### 7.3 Never invent proof

Do not fabricate:

- clients;
- metrics;
- revenue;
- certifications;
- partners;
- team members;
- export markets;
- testimonials;
- ratings;
- capacities;
- statistics;
- calculations.

Every factual claim should have a real source or be clearly marked as an estimate when estimation is legitimate.

---

## 8. Brand governance

Brand consistency is a hard requirement.

For every project maintain canonical brand assets and rules:

- primary logo;
- symbol/mark;
- wordmark;
- approved variants;
- colors;
- typography;
- spacing behavior;
- icon style;
- image direction;
- tone of voice;
- prohibited transformations.

### 8.1 AI must not mutate the brand casually

Do not:

- redraw a logo without explicit instruction;
- change colors arbitrarily;
- replace a brand mark with an AI approximation;
- alter the project tone from one page to another;
- generate inconsistent brand visuals;
- introduce a second design language mid-project.

When generating imagery, preserve brand context and use the official logo asset where required instead of regenerating it.

### 8.2 Brand assets are data, not decoration

Keep reusable brand assets in stable locations with explicit ownership and references so they are not copied inconsistently across pages.

---

## 9. UI, UX, and CX standard

### 9.1 Design each product for its actual users

Do not reuse dashboard patterns for editorial pages, marketing pages for admin tools, or marketplace patterns for company websites merely because components already exist.

Shared primitives are reusable; experience design is contextual.

### 9.2 Design-system foundation

Establish:

- typography scale;
- spacing scale;
- color roles;
- radii;
- borders/shadows;
- containers;
- breakpoints;
- buttons;
- inputs;
- cards;
- tables;
- badges;
- tabs;
- dialogs/drawers;
- toasts;
- loading/skeleton states;
- empty/error/success states;
- image/media ratios;
- focus/hover/disabled states.

Do not improvise these page by page.

### 9.3 Responsive means complete

Every important feature must remain complete across:

- small phones;
- common phones;
- large phones;
- tablets;
- small laptops;
- desktops;
- wide screens;
- landscape edge cases.

No viewport should receive a broken, clipped, incomplete, or materially degraded experience.

### 9.4 Mobile is intentionally designed

Mobile is not desktop compressed.

Use purpose-built patterns such as:

- drawers;
- bottom actions;
- stacked layouts;
- condensed navigation;
- progressive forms;
- collapsible footer groups;
- context-aware controls.

### 9.5 Progressive disclosure

Do not request all data at once merely because the database supports it.

Collect information in sensible steps:

```text
minimum required
→ next useful data
→ optional enrichment
→ advanced detail
```

This applies to onboarding, listings, customer profiles, forms, checkouts, admin workflows, and submissions.

### 9.6 Public vs admin experience

Public UX optimizes for:

- comprehension;
- trust;
- discovery;
- conversion;
- reading;
- low friction.

Admin UX optimizes for:

- task completion;
- correctness;
- operational speed;
- status clarity;
- safe editing;
- bulk work where useful;
- auditability.

Do not make admin screens decorative at the expense of efficiency.

---

## 10. Information architecture and contextual ownership

Things should live where users expect them.

Examples:

- product media belongs in product management;
- blog media belongs in article management;
- category media belongs in category management;
- customer documents belong in customer/account workflows;
- order actions belong in order workflows.

A central media library may exist as infrastructure, but it must not force users to leave the relevant workflow for ordinary editing.

Avoid scattered admin architecture where one task requires visiting several unrelated screens.

---

## 11. Rich publishing standard

Blog/article systems should not default to a flat textarea.

Support the content model appropriate to the product, including where useful:

- H2/H3/H4 hierarchy;
- bold/italic;
- links;
- lists;
- block quotes;
- code blocks;
- tables;
- callouts;
- images;
- galleries;
- captions;
- credits;
- embeds;
- reusable blocks/data;
- references;
- SEO fields;
- preview;
- draft/review/publish states.

Prefer structured blocks and/or Markdown source where portability matters. Sanitize HTML. Keep presentation separate from canonical content data where practical.

---

## 12. Reusable data principle

If information already exists in a canonical form, reuse it.

Examples:

- company details;
- addresses;
- social links;
- team/author records;
- media credits;
- categories;
- location hierarchy;
- legal text;
- CTA blocks;
- contact data;
- product metadata;
- brand settings.

Do not ask the user to repeatedly provide the same information or duplicate it across files unless there is a valid ownership reason.

---

## 13. Frontend engineering standard

Reject:

- broken layout;
- random gaps;
- mismatched control sizes;
- inconsistent cards;
- arbitrary radius changes;
- unexplained typography shifts;
- clipped text;
- overflow;
- missing icons;
- broken images;
- missing logos;
- inconsistent image ratios;
- unnecessary repeated imagery;
- layout jumps;
- unfinished placeholders;
- dead controls;
- fake buttons;
- different behavior for equivalent components.

Use shared primitives and documented variants.

Frontend quality includes perceived speed, stability, accessibility, and visual clarity—not only appearance.

---

## 14. Backend engineering standard

Backend design starts with real business workflow, not database tables.

Define:

- actors;
- roles;
- permissions;
- ownership;
- lifecycle/status transitions;
- approval/review states;
- validation;
- notifications;
- retries/background work;
- archive/delete rules;
- failure and recovery paths;
- audit-sensitive actions.

Do not create backend features that have no operational control surface when an admin/operator needs one.

---

## 15. API standard

APIs are durable product interfaces.

Use:

- predictable resource naming;
- schema validation;
- stable response shapes;
- proper status codes;
- server-side authorization;
- pagination;
- rate limits where needed;
- idempotency for risky duplicate actions;
- safe errors;
- tracing/log correlation where useful;
- versioning when external/public stability requires it.

Keep business logic reusable so web, mobile, plugins, automations, and partner integrations do not need separate implementations.

---

## 16. Database standard

Before adding persistent data, define:

- ownership;
- relationships;
- required/optional fields;
- uniqueness;
- indexes;
- lifecycle;
- timestamps;
- audit needs;
- retention/privacy needs;
- archive/delete behavior;
- query patterns;
- migration implications.

Use migrations consistently. Verify migrations in the intended environment. Never assume code presence means migration success.

Do not store large media blobs in relational databases when object storage is appropriate.

---

## 17. Media and asset reliability

Media is part of the product lifecycle.

A media-enabled feature is incomplete until these work:

- upload;
- validation;
- storage;
- retrieval;
- rendering;
- replacement/editing;
- deletion/archive policy;
- missing-file fallback;
- permissions;
- deployed environment behavior.

Use stable object keys/URLs. Avoid temporary preview URLs in durable content. Validate favicon, logo, OG images, and social assets.

---

## 18. Architecture and technology selection

Do not force one stack onto every project.

### Cloudflare-first profile

Use when the workload fits edge/serverless constraints.

Typical choices may include:

- TypeScript;
- React / Next.js where appropriate;
- Cloudflare Workers;
- D1 + Drizzle;
- R2;
- KV;
- Queues;
- Workflows;
- Durable Objects;
- Turnstile/WAF/rate limiting.

### Hybrid profile

Use Cloudflare for delivery/API where useful while using external PostgreSQL/MySQL/search/payment/other specialized services when they are the better fit.

### Traditional/server-hosted profile

Keep or choose server-hosted architecture for workloads that require it, including some legacy PHP/Laravel, specialized binaries, long-running processes, or infrastructure where migration value does not justify cost.

### Technology change rule

Do not adopt technology because it is new.

Adopt it when it improves one or more of:

- reliability;
- user experience;
- capability;
- maintainability;
- performance;
- security;
- cost;
- developer efficiency.

---

## 19. Dependency hygiene

The goal is **safely current**, not blindly latest.

For dependency changes:

- review changelogs where material;
- prioritize security updates;
- run relevant lint/type/test/build checks;
- inspect framework/runtime compatibility;
- handle major upgrades deliberately;
- avoid speculative upgrade churn;
- document deferred risky upgrades.

---

## 20. Performance standard

Performance is part of product quality from day one.

Evaluate:

- unnecessary JavaScript;
- server/client boundaries;
- bundle size;
- image formats/sizes;
- font loading;
- caching;
- repeated API calls;
- query shape;
- pagination;
- lazy loading;
- third-party scripts;
- rendering cost;
- Worker/runtime usage.

A visually strong product that loads poorly is not finished.

---

## 21. Accessibility standard

Accessibility is a baseline quality requirement, not a later add-on.

Check where applicable:

- semantic HTML;
- keyboard navigation;
- focus visibility;
- labels;
- contrast;
- alt text;
- dialog behavior;
- screen-reader meaning;
- motion sensitivity;
- form errors;
- touch target size.

Do not sacrifice accessibility for visual novelty.

---

## 22. Security and privacy standard

Default principles:

- least privilege;
- server-side authorization;
- secrets outside source control;
- input validation;
- output encoding;
- safe file handling;
- rate limiting where useful;
- CSRF/CORS/CSP consideration as applicable;
- session/token lifecycle care;
- minimal personal-data collection;
- retention rules;
- auditability for sensitive actions;
- safe error responses.

Do not collect data merely because it might be useful someday.

---

## 23. Observability and runtime QA

A product should be diagnosable.

Use appropriate:

- structured logs;
- health/readiness endpoints;
- trace/correlation IDs;
- deployment logs;
- error monitoring;
- audit logs;
- usage/cost dashboards.

### Browser console is part of QA

Inspect for:

- runtime errors;
- hydration errors;
- failed requests;
- 404/500 responses;
- broken images/fonts;
- CORS/CSP failures;
- preload warnings;
- duplicate requests;
- infinite loops;
- deprecated APIs;
- Worker/runtime warnings;
- env/config mismatches.

Known harmless warnings should be documented so they are not repeatedly rediscovered.

---

## 24. Search and discoverability standard

Do not think only about Google.

Build standards-based discoverability that works across relevant search ecosystems.

Check:

- crawlability;
- robots;
- sitemap;
- canonical URLs;
- metadata;
- OG/social cards;
- structured data;
- internal linking;
- duplicate content;
- thin pages;
- pagination;
- language handling;
- page speed;
- indexability.

Consider Google, Bing, and other relevant engines/platform discovery surfaces based on audience.

Do not use fake SEO pages or keyword stuffing.

---

## 25. Analytics and product feedback

Measure what helps decisions.

Prefer meaningful events over vanity metrics.

Examples:

- completed signup;
- inquiry submitted;
- listing published;
- checkout completed;
- search with zero results;
- failed upload;
- moderation turnaround;
- content conversion.

Analytics should not create unnecessary privacy risk or cost.

---

## 26. Cost discipline

Time, tokens, builds, storage, APIs, CI, and infrastructure all cost money.

Treat waste as an engineering problem.

Default rules:

- batch related changes before deployment;
- avoid unnecessary preview builds;
- avoid duplicate scheduled tasks;
- cap automated discovery/import jobs;
- control AI/API usage;
- remove stale artifacts when safe;
- prefer reusable data/components;
- choose infrastructure proportionate to actual needs;
- monitor Worker, database, storage, and CI use;
- do not keep expensive experiments running without purpose.

Do not make destructive cleanup changes without dependency mapping and explicit approval.

---

## 27. Repository and portfolio governance

Each repository should have a registry record with:

- project name;
- purpose;
- status;
- canonical branch;
- production URL;
- preview URL;
- framework/runtime;
- package manager;
- deployment target;
- database;
- storage;
- auth;
- email/notification provider;
- binding/secret names (never values);
- migration location/state;
- known issues;
- technical debt;
- cost concerns;
- last verified date;
- next review date.

Classify projects as appropriate:

- active;
- paused;
- experimental;
- legacy;
- archive candidate.

Do not assume `main` is the active implementation branch.

Exclude unrelated colleague/client projects from Nakib's core portfolio unless explicitly included.

---

## 28. Documentation and decision records

Important decisions should survive the conversation that created them.

Use concise project documentation for:

- architecture decisions;
- deployment steps;
- environment requirements;
- migrations;
- operational runbooks;
- known warnings;
- known technical debt;
- rollback notes;
- reusable data ownership;
- brand rules.

For consequential architecture changes, record why the decision was made and what alternatives were rejected.

---

## 29. Release and deployment discipline

Default flow:

```text
inspect current reality
→ research if needed
→ define scope
→ implement complete vertical slice
→ lint/type/test/build
→ verify migrations/bindings
→ responsive/console QA
→ preview
→ realistic smoke test
→ fix regressions
→ controlled production deploy
→ production smoke test
→ record result
```

Do not deploy for every trivial edit when batching is safe.

Do not declare success merely because CI is green.

---

## 30. Incident, rollback, and recovery

For production-sensitive work, know how to recover.

Where appropriate maintain:

- rollback path;
- database recovery plan;
- migration safety notes;
- feature disable path;
- storage cleanup/recovery procedure;
- previous secret/token rotation plan;
- incident notes.

Destructive schema or storage operations should be dry-run/review-first whenever possible.

---

## 31. Definition of done

A feature is done only when the applicable parts are true:

- business purpose is clear;
- UX is coherent;
- branding is correct;
- copy is human and concise;
- desktop/mobile/tablet work;
- accessibility basics pass;
- loading/empty/error/success states exist;
- backend behavior is complete;
- permissions are correct;
- API validation works;
- database read/write works;
- migrations are applied;
- media works;
- admin workflow works;
- analytics/logging exist where useful;
- console/runtime is clean enough;
- SEO/discoverability is correct where relevant;
- tests/build checks pass;
- preview is verified;
- production is verified when deployed;
- no obvious regression remains;
- docs are updated if operational knowledge changed.

---

## 32. Regression prevention

Prefer systems that prevent repeat mistakes.

Use as appropriate:

- strict TypeScript;
- linting/formatting;
- schema validation;
- unit tests;
- integration tests;
- end-to-end tests;
- visual regression;
- responsive QA;
- accessibility checks;
- asset/link validation;
- migration checks;
- health endpoints;
- preview environments;
- smoke tests;
- observability;
- rollback plans.

The same preventable bug should not need to be solved twice.

---

## 33. Maintenance cadence

### Weekly

For active/high-value products:

- production failures;
- broken critical flows;
- security issues;
- major cost anomalies;
- broken media/assets;
- recent CI/deployment failures.

### Monthly

For active/important products:

- dependency health;
- framework/runtime/security changes;
- migrations;
- integrations;
- console warnings;
- responsive regressions;
- SEO/indexability;
- documentation drift;
- infrastructure/API/storage cost;
- category/industry pattern changes where material.

### Quarterly

Portfolio-wide:

- classification;
- duplicate/obsolete repositories;
- technical debt;
- archive/migration decisions;
- reusable components/data;
- stack rationalization;
- income potential;
- maintenance burden.

---

## 34. AI-agent behavior

AI working on these projects must:

- inspect before changing;
- reuse before recreating;
- research before guessing;
- challenge unsupported assumptions;
- preserve brand assets;
- preserve canonical data;
- minimize unnecessary questions;
- avoid generic AI copy;
- think across frontend/backend/API/database/admin/media/deployment together;
- anticipate responsive and state behavior;
- check console/runtime where possible;
- consider cost;
- avoid repeated work;
- verify before declaring completion;
- disclose blockers honestly;
- never invent unknown business facts.

AI should behave like a disciplined senior product, design, engineering, QA, and operations partner operating under a shared standard.

---

## 35. Final principle

The operating standard is:

> **Research deeply. Decide deliberately. Build coherently. Design for humans. Reuse what already exists. Keep the brand stable. Verify every layer. Spend carefully. Document what matters. Maintain what earns its place.**

The target is not perfection by promise. The target is a system that makes high-quality first-pass work normal, prevents avoidable regressions, protects limited time and money, and continuously improves the portfolio without repeatedly relearning the same lessons.
