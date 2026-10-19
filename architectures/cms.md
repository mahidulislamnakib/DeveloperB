# CMS Architecture

A Cloudflare-first architecture for building a content management system with structured content, pages, media, roles, drafts, previews, publishing, and safe admin workflows.

---

## Goal

Build a CMS that is simple enough for a small team but structured enough for production content operations.

This architecture is designed for:

- blogs
- company websites
- education portals
- newsrooms
- resource libraries
- course content sites
- documentation websites
- organization websites

For ordinary client websites, first use [Client Website Engineering Profiles](./client-website-profiles.md) to decide whether a CMS is actually needed and which industry records should be managed.

---

## Recommended starting stack

| Need | Service |
| --- | --- |
| Public website | Pages or Workers |
| Backend/API | Workers |
| Content database | D1 |
| Media/files | R2 |
| Cache/config | KV |
| Admin protection | Access |
| Public form protection | Turnstile |
| Background jobs | Queues |
| Analytics | Analytics Engine |

Start with Workers, D1, R2, and Access when those services fit the workload. Add KV, Turnstile, Queues, and Analytics Engine when the workflow needs them. Do not force Cloudflare services into a project whose requirements call for another stack.

---

## Architecture overview

```text
Visitors
  ↓
Pages or Workers frontend
  ↓
Public content routes
  ↓
Workers API
  ├── D1 content records
  ├── R2 media files
  ├── KV public cache/config
  └── Analytics Engine events

Editors/Admins
  ↓
Cloudflare Access or app login
  ↓
CMS admin dashboard
  ↓
Workers API
```

---

## Content modeling

Prefer structured, reusable domain records over hardcoded content or one giant WYSIWYG/JSON document.

A basic editorial CMS may start with:

```text
posts
pages
categories
tags
media
authors
settings
```

A company site may instead or additionally need:

```text
services
projects
people
partners
certifications
testimonials
faqs
locations
careers
```

Industry profiles may add products, properties, packages, rooms, menu items, practitioners, events or other real entities. Add only the content types required by the product.

Use rich text for narrative content. Model queryable business facts—prices, locations, people, products, dates, statuses, specifications—as typed fields/relations.

---

## Dynamic admin contract

Anything presented to the owner/editor as editable must be genuinely dynamic.

If the admin UI exposes `Create`, `Edit`, `Delete`, `Publish`, `Archive`, `Approve`, `Upload`, `Reorder` or `Save`:

1. validate the operation server-side;
2. persist it to the authoritative data source;
3. return truthful success/failure feedback;
4. make the relevant public/product surface consume the persisted state;
5. enforce authorization and audit sensitive actions.

Do not ship an admin screen backed only by hardcoded arrays, component state, fixtures or fake success toasts while presenting it as operational.

Typical owner-editable data includes hero content/media, services, products, projects, people, testimonials, partners, FAQs, locations/hours, contact information, navigation/footer business content, documents, media, posts, careers, SEO fields and form/lead statuses.

Keep engineering behavior in code/config: component implementation, design tokens, database schema, authorization, validation/business rules, API contracts, credentials/secrets and deployment logic. Safe business configuration may be editable only through typed, validated, permissioned fields.

---

## Suggested D1 tables

A publishing-heavy CMS may use:

```text
users
authors
posts
pages
categories
tags
post_tags
media
menus
settings
revisions
audit_logs
form_submissions
```

Add domain tables instead of forcing every entity into `pages`.

Minimum post fields:

```text
id
slug
title
excerpt
body
status
author_id
category_id
featured_media_id
seo_title
seo_description
published_at
created_at
updated_at
```

Recommended content statuses:

```text
draft
review
published
archived
```

---

## Publishing flow

```text
Editor creates draft
  ↓
Content stored in D1
  ↓
Media uploaded to R2
  ↓
Editor previews page
  ↓
Editor sends to review or publishes
  ↓
Public routes show only published content
```

Drafts and previews must be protected.

---

## Media model

Store media files in R2 and searchable metadata in D1.

```text
R2:
cms/media/2026/06/image-id.webp

D1 media table:
id
object_key
owner_user_id
content_type
size
alt_text
caption
credit
source_url
status
created_at
```

Do not store image or document bodies in D1. Preserve credit/source/license information when third-party assets require it.

---

## Route plan

Public routes depend on the selected project profile. A publishing CMS might expose:

```text
/
/posts
/posts/:slug
/pages/:slug
/categories/:slug
/tags/:slug
/search
/contact
```

Admin routes should map to actual managed entities, for example:

```text
/admin
/admin/posts
/admin/pages
/admin/media
/admin/services
/admin/projects
/admin/people
/admin/settings
/admin/forms
```

Do not create unused admin modules simply because they appear in another project.

---

## Role model

Start with simple roles:

```text
admin
editor
author
media_manager
viewer
```

Do not build granular permission systems too early. Add them only after the basic workflow is stable or the risk model requires them.

---

## Security model

Use layered security.

```text
Cloudflare Access or app login
  ↓
User identity
  ↓
Role check
  ↓
Content status check
  ↓
Audit log
```

Important rules:

- public routes show only published/allowed content
- drafts require authentication
- previews require protected tokens or login
- media uploads require role checks
- settings updates require appropriate roles
- form endpoints use abuse protection when public
- validation and authorization happen server-side

---

## Caching strategy

Good cache targets:

- published posts/pages/domain records
- menus
- public settings
- category lists
- homepage sections

Do not cache:

- admin routes
- drafts
- previews
- private submissions
- user-specific responses

Use KV for small public config or cached payloads when it provides a real benefit.

---

## Background jobs

Use Queues for work that should not block editors or visitors.

Good queue jobs:

- rebuild public cache
- send publish notification
- process media metadata
- generate approved derived content
- update search index
- send form notification
- update sitemap/search artifacts

---

## SEO model

Minimum SEO fields for indexable records:

```text
seo_title
seo_description
canonical_url
og_image_id
robots
published_at
updated_at
```

Add sitemap and robots support before launch. Avoid uncontrolled programmatic pages that contain no unique user value.

---

## Production checklist

Before launch:

- [ ] Admin modules correspond to real persisted entities
- [ ] Every save/create/edit/delete/publish action survives refresh and affects the intended surface
- [ ] No operational admin table is secretly fixture-only
- [ ] Public routes hide drafts/private records
- [ ] Preview routes are protected
- [ ] Admin routes are protected
- [ ] Role checks exist for writes
- [ ] Media upload rules are enforced
- [ ] Media metadata/credits are preserved
- [ ] SEO fields exist where appropriate
- [ ] Sitemap exists
- [ ] Robots rules exist
- [ ] Public forms have validation and abuse protection
- [ ] Form submissions have a durable owner workflow
- [ ] Audit logs exist for sensitive admin actions
- [ ] Migrations are tested
- [ ] Empty/loading/error/success/404/unauthorized states are designed
- [ ] Backup/export plan exists
- [ ] Rollback plan exists

---

## Common mistakes

- exposing drafts publicly
- storing media files in the relational database
- building too many content types too early
- building a huge universal admin for a tiny website
- hardcoding business content that the owner reasonably needs to maintain
- fake CRUD controls or save-success messages
- settings that the public site never reads
- modeling all domain data as rich text/pages
- skipping role checks
- using frontend validation only
- caching previews accidentally
- missing alt text, credits and SEO metadata
- not logging sensitive admin changes
- mixing published and draft content in public queries

---

## Related docs

- [`architectures/client-website-profiles.md`](./client-website-profiles.md)
- [`architectures/news-portal.md`](./news-portal.md)
- [`docs/d1-vs-kv-vs-r2.md`](../docs/d1-vs-kv-vs-r2.md)
- [`catalog/workers.md`](../catalog/workers.md)
- [`catalog/d1.md`](../catalog/d1.md)
- [`catalog/r2.md`](../catalog/r2.md)
- [`catalog/kv.md`](../catalog/kv.md)
- [`catalog/access.md`](../catalog/access.md)
- [`catalog/turnstile.md`](../catalog/turnstile.md)
- [`catalog/queues.md`](../catalog/queues.md)
