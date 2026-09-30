# Business Directory Architecture

> Source: Durable product-engineering guidance; verify provider-specific capabilities against official documentation when implementing.
> Last checked: 2026-09-30
> Risk level: Low

## Goal

Design a trustworthy, searchable, location-aware business directory that can grow from manually reviewed records into a large public discovery platform without losing data quality, provenance, moderation control, SEO discipline, or operator visibility.

## Best for

- national or regional business directories;
- local discovery by division, district, upazila, neighbourhood, market, or commercial hub;
- verified and claimed business profiles;
- programmatic SEO landing pages;
- directories that combine editorial research, field data, public submissions, imports, and owner updates.

## Not ideal for

- a simple static contact list;
- a pure marketplace where transactions are the primary object;
- an internal CRM with no public discovery surface.

## Smallest useful version

Start with:

1. canonical business records;
2. hierarchical locations;
3. categories and tags;
4. public search and browse;
5. admin review before publication;
6. provenance on every imported or researched record;
7. duplicate detection and merge workflow;
8. claim ownership flow;
9. structured SEO pages only where useful content exists;
10. clear stale-data and correction paths.

Do not start with ratings, paid placement, complex recommendations, AI-generated descriptions, or mass indexation until the core data model is stable.

## Core data model

A mature directory should treat these as separate first-class concepts:

- `businesses`: canonical identity, public slug, status, verification state, ownership state;
- `business_locations`: one business may have multiple branches;
- `locations`: canonical hierarchy and aliases;
- `categories`: controlled taxonomy;
- `business_categories`: many-to-many category assignment;
- `contacts`: phone, email, website, social links, with visibility rules;
- `hours`: structured operating hours and exceptions;
- `media`: logo, cover, gallery, provenance and rights metadata;
- `sources`: where a field came from;
- `field_provenance`: source, observed_at, imported_at, confidence, reviewer;
- `claims`: ownership requests and evidence;
- `edits`: proposed user/admin changes before canonical acceptance;
- `moderation_events`: who approved, rejected, merged, unpublished, or restored a record;
- `duplicate_candidates`: similarity signals and merge status;
- `verification_events`: method, date, expiry/recheck date;
- `tags`: flexible business attributes that should not pollute the core category tree.

Avoid storing every concept directly on the business row. Branches, contacts, sources, categories, and verification history all change independently.

## Record states

Use explicit lifecycle states instead of a single `published` boolean.

Recommended flow:

```text
imported / submitted
→ needs_review
→ approved
→ published
→ needs_recheck
→ corrected / merged / archived
```

Keep ownership and verification separate from publication. A business can be published but unclaimed, claimed but not identity-verified, or verified while some individual fields remain stale.

## Provenance and trust

Every non-trivial field should be traceable to one of:

- owner-provided information;
- field observation;
- official/primary source;
- public website or social source;
- trusted data partner;
- historical import;
- editorial research.

Store source URL/reference, capture date, reviewer, and optional confidence. Do not silently overwrite higher-quality evidence with lower-quality imports.

For public UI, show trust in human language such as `Verified by business`, `Checked by Somogro`, or `Last confirmed 12 Sep 2026` rather than exposing internal confidence scores.

## Duplicate prevention and merging

Duplicate prevention belongs in the ingestion path, not as a cleanup project later.

Use signals such as:

- normalized phone numbers;
- normalized domain/email;
- exact or fuzzy business name;
- same building/market + category;
- map coordinates within a tight radius;
- owner-submitted registration/trade identifiers where lawful and appropriate.

Never auto-merge solely on fuzzy names. Create a review queue with side-by-side evidence. A merge must preserve aliases, redirects, provenance, contacts, media ownership, reviews if applicable, and an audit trail.

## Location architecture

Use a canonical location tree and stable IDs.

Example:

```text
Bangladesh
→ Division
→ District
→ Upazila / City Corporation area
→ Ward / neighbourhood / market / commercial hub
```

Support aliases for spelling variants, Bangla/English names, historical names, and common local terms. Do not create a new location node from every free-text address.

Store structured address fields plus a display address. Keep latitude/longitude optional but validated when present.

## Taxonomy

A directory category should describe what a business fundamentally is, not every product it sells.

Use:

- one or a small number of primary categories;
- secondary categories where justified;
- tags/attributes for product, service, facility, audience, or speciality;
- project/editorial concepts such as `Economic Hub` separately from business categories.

Maintain taxonomy aliases for user search without creating duplicate categories.

## Search and discovery

Ranking should be explainable and resistant to spam.

Typical ranking inputs:

1. query/category match;
2. location match;
3. record completeness;
4. verification/freshness;
5. user-selected filters;
6. editorial or paid placement only when clearly labelled and policy-controlled.

Do not let payment silently override relevance. Keep sponsored/featured logic separate from organic rank.

Useful filters include:

- location;
- category;
- verified/confirmed status;
- open now only if hours are trustworthy and timezone-aware;
- business attributes/tags;
- sort by relevance, recently confirmed, alphabetical, or distance when location permission exists.

## Programmatic SEO

Generate indexable pages only when the page has distinct value.

Good examples:

- district directory with meaningful businesses and local context;
- upazila + category pages with enough listings;
- known commercial market/hub pages with original field/editorial context;
- business profile pages with unique canonical data.

Avoid thin combinations such as every category × every small location when there are zero or one weak records.

Each indexable page should have:

- canonical URL;
- unique title and description;
- breadcrumb hierarchy;
- useful introductory context;
- stable pagination/filter URL policy;
- schema markup appropriate to actual content;
- noindex rules for empty, duplicate, internal-search, admin, preview, and low-value parameter pages.

## Claims and owner updates

Business claiming should not give immediate uncontrolled write access to the canonical record.

Recommended flow:

```text
Claim request
→ identity/evidence check
→ owner role granted
→ proposed edits
→ auto-approve low-risk fields where policy allows
→ review sensitive/high-impact fields
```

High-risk fields include business identity, legal claims, location moves, primary category, contact ownership, and media rights.

## Moderation and data quality

Admin tooling should make the following queues visible:

- newly submitted records;
- imported records needing review;
- duplicate candidates;
- stale verified records;
- owner edit requests;
- claim requests;
- user-reported corrections;
- records missing location/category/contact/media essentials;
- suspicious mass edits or abuse.

Give moderators side-by-side old/new values, provenance, source links, change reason, and rollback.

## Import pipeline

Treat CSV/API/AI extraction as candidate data, not truth.

Pipeline:

```text
source file/API/image
→ parse
→ normalize
→ validate
→ match existing records
→ duplicate candidates
→ enrich only from approved sources
→ review
→ publish
```

Keep row-level import reports: accepted, rejected, duplicate, incomplete, and needs-review. Never silently discard invalid rows.

## AI use

AI can assist with:

- extracting structured fields from visiting cards or public source text;
- suggesting category/location matches;
- detecting likely duplicates;
- summarizing source evidence for moderators;
- drafting descriptions from verified fields.

AI must not invent missing phone numbers, emails, addresses, ownership, operating hours, legal status, ratings, or verification evidence. Any generated public copy must remain grounded in accepted structured data and should identify unresolved uncertainty to the reviewer.

## Economic hub / market connection

A market or commercial hub is not automatically a business category. Model it as a place/editorial entity connected to:

- canonical location nodes;
- products/sourcing topics;
- field stories and references;
- businesses physically located in or serving that hub.

This allows a project such as `Economic Hub` to enrich directory discovery without corrupting the category taxonomy.

## Security and privacy

- enforce admin/owner permissions server-side;
- rate-limit public submissions, claims, login and sensitive search endpoints;
- protect forms against bots;
- do not expose private owner email/phone merely because they submitted a record;
- log moderation and ownership changes;
- validate upload type, size and media rights;
- separate internal notes from public fields;
- avoid publishing sensitive personal data unrelated to the business.

## Background jobs and failure handling

Good queue/background candidates:

- large imports;
- duplicate scoring;
- image processing;
- stale-record recheck scheduling;
- sitemap generation when large;
- search-index synchronization;
- email notifications;
- analytics aggregation.

All jobs should be idempotent where practical and retain enough state to retry safely.

## Observability

Track at minimum:

- search requests and zero-result queries;
- failed API requests;
- publish/review latency;
- duplicate rate;
- import rejection rate;
- claim completion rate;
- stale-record count;
- contact reveal/click events where privacy policy permits;
- broken media/source links;
- SEO coverage: indexed useful pages vs generated pages.

## Deployment and verification

Before release:

- apply migrations in a controlled environment;
- verify location/category canonicalization;
- test create/edit/review/claim/merge/unpublish flows;
- test mobile and keyboard navigation;
- verify redirects after slug or duplicate merge;
- test sitemap, robots, canonical and noindex behavior;
- test rate limits and permission failures;
- verify rollback for migrations and application code.

## Cost and scaling notes

For Cloudflare-suitable implementations, a practical baseline is:

- Workers for API and server logic;
- D1 for relational directory data at modest scale;
- R2 for logos, covers and gallery media;
- Queues for imports/enrichment/rechecks;
- KV only for cache/low-risk lookup data, not canonical listings;
- Turnstile/rate limiting for public forms;
- external or dedicated search infrastructure only when query volume, typo tolerance, geo ranking, or index size clearly requires it.

Do not introduce additional infrastructure until measured need justifies it.

## Common mistakes

- treating imported data as verified data;
- mixing branch and company identity into one row;
- using free-text locations as taxonomy;
- letting business owners overwrite canonical records without moderation controls;
- no duplicate merge history;
- one boolean for published/verified/claimed;
- generating thousands of thin SEO pages;
- displaying `open now` from untrusted or stale hours;
- storing files in the relational database;
- making featured listings indistinguishable from organic results;
- AI-generated business facts without source evidence;
- deleting old slugs instead of redirecting them after a merge or rename.

## Production checklist

- [ ] canonical business + branch model
- [ ] hierarchical locations and aliases
- [ ] controlled categories + flexible tags
- [ ] provenance for imported/researched fields
- [ ] moderation lifecycle
- [ ] duplicate review + reversible merge
- [ ] claim/owner permissions
- [ ] stale data recheck policy
- [ ] safe import report
- [ ] public correction/report flow
- [ ] search relevance and filter tests
- [ ] thin-page/noindex policy
- [ ] canonical redirects
- [ ] media rights/provenance
- [ ] rate limiting and abuse controls
- [ ] audit log and rollback
- [ ] analytics and data-quality dashboard

## Related guides

- [Search & Discovery](./search-discovery.md)
- [CMS](./cms.md)
- [Authentication & Authorization](./authentication-authorization.md)
- [Security & Threat Modeling](./security-threat-modeling.md)
- [Data Pipeline & Reporting](./data-pipeline-reporting.md)
- [Deployment & Release](./deployment-release.md)
