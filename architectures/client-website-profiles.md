# Client Website Engineering Profiles

> Research baseline: Webflow website categories, Contentful structured-content guidance, Stripe commerce/marketplace guidance, and Cloudflare architecture/use-case documentation.
> Last checked: 2026-09-30
> Risk level: Low

## Goal

Give humans and AI coding agents a reliable way to turn a vague client request such as “build a website for my factory”, “I need a doctor website”, or “make an online store” into an appropriate product architecture instead of a generic brochure template.

The central rule is:

> **Classify the product engine first, then apply an industry profile. Do not create a separate technical architecture for every industry.**

A textile exporter and an architecture firm can both use a corporate/catalog engine, but their entities, conversion paths, trust signals, media, and admin modules differ.

---

## Core website engines

DeveloperB should classify normal client work into one or more of these engines.

| Engine | Primary job | Typical projects |
| --- | --- | --- |
| Marketing / corporate | Explain, establish trust, generate enquiries | company, agency, consultant, manufacturer, NGO |
| Catalog / RFQ | Present structured products/services without consumer checkout | factory, exporter, wholesaler, B2B supplier |
| Commerce | Sell products/services directly | retail, D2C, digital goods, subscription commerce |
| Content / publishing | Publish and discover editorial content | news, magazine, blog, resource center |
| Directory / listing | Search and compare structured entities | business directory, property, jobs, vehicles |
| Booking / reservation | Sell or reserve time/capacity | clinic, salon, hotel, consultant, venue |
| Education / membership | Deliver gated learning or member value | LMS, association, training center, community |
| Marketplace / platform | Connect multiple supply and demand participants | seller marketplace, service marketplace, creator marketplace |
| SaaS / workspace | Repeated authenticated workflow | business software, CRM, operations tool |
| Internal business system | Operate a company rather than market it | HR, inventory, approvals, POS, admin portal |
| Campaign / microsite | Drive one focused action | event, launch, lead campaign, waitlist |

Hybrid projects are normal. Example: a hotel can be `marketing + catalog + booking + content`; a manufacturer can be `marketing + catalog/RFQ + careers + content`.

---

## Common client profiles

Use these as requirement-inference profiles, not fixed templates.

### Company / corporate
Core: home, company/about, services/capabilities, projects/case studies, team/leadership when relevant, clients/partners, certifications, careers, news/resources, contact/enquiry.

Admin: pages, services, projects, people, partners, certifications, careers, posts, media, leads, menus, global settings, SEO.

### Agency / professional services
Add expertise, industries, case studies, process where useful, testimonials, lead qualification and consultation request. Do not fill the public UI with generic “our process” copy unless it helps conversion.

### Personal / professional portfolio
For consultant, executive, photographer, designer, architect, trainer or lawyer. Add biography, expertise, work/cases, credentials, speaking/media, contact and optional writing. Creative professions should prioritize work imagery over explanatory text.

### Manufacturer / exporter / B2B supplier
Add product categories, product/specification records, capabilities, production capacity, compliance/certifications, factory/media, markets served, MOQ/lead-time fields when appropriate, downloadable documents and RFQ. This is usually catalog/RFQ, not consumer e-commerce.

### E-commerce
Needs structured catalog, variants where relevant, inventory, pricing, promotions, cart, checkout, payment, order lifecycle, fulfillment, customer account and transactional communication. B2B commerce may additionally need account pricing, quote requests, purchase orders and payment terms.

### Restaurant / café / bakery
Add menu categories/items, price and availability, branches/hours, offers, gallery, reservations or ordering only when the business actually supports them. Operational POS/kitchen/inventory workflows are a separate engine and should not be implied by a marketing site.

### Hotel / resort
Add accommodation types, amenities, rates/availability source, policies, gallery, location/nearby attractions, booking/enquiry, offers and reviews/testimonials. Avoid fake availability: integrate a real booking source or label enquiries clearly.

### Travel agency / tour operator
Add destinations, packages, visa/service pages, itineraries, inclusions/exclusions, departures where applicable, enquiry/quotation, traveller details, documents and lead pipeline. Real-time flight/hotel inventory requires supplier/API architecture and is not equivalent to static package pages.

### Real estate
Add property/project entities, location, type, price/range, status, specifications, gallery, map, search/filter, agent/contact, enquiry and lead attribution. Developer project sites and open property marketplaces are different engines.

### Education / school / training
Add programs/courses, admission information, faculty/instructors, notices/news, events, resources and enquiry/application. Student accounts, lessons, progress, assessment and certificates move the project into LMS architecture.

### Clinic / healthcare
Add practitioners, specialties/departments, services, locations, hours and appointment request/booking. Treat patient/medical data as a separate higher-risk system; a clinic marketing site should not casually become a medical-record application.

### NGO / charity / nonprofit
Add mission, programs, impact, campaigns, reports, governance/team, partners, volunteer/contact and donations when supported. Donation flows require trustworthy payment records and receipts.

### News / magazine / publication
Use the News Portal/CMS architecture. Add editorial roles, categories/topics, authors, revisions, scheduling, media, search, SEO, moderation as needed, and advertising positions when monetized.

### Directory / listings
Add structured listing type, taxonomy, location, search/filter, listing detail, claim/ownership workflow when applicable, moderation, featured placements, reviews only if there is a moderation policy, and programmatic landing pages only when they provide real user value.

### Job / recruitment
Add employers, jobs, categories/skills/location, applicant profile/CV, applications and employer workflow. A recruitment agency brochure site may only need jobs + application forms; a public job marketplace needs a platform engine.

### Event / conference
Add event details, venue, speakers, agenda/schedule, sponsors, registration/tickets, FAQs, updates and post-event media. Multi-event organizers should model events as records rather than hardcoding one event into the site shell.

### Association / membership / community
Add organization information, membership types/application, member directory if appropriate, committees, events, resources, announcements and member account/gated content where required.

### Construction / engineering / architecture
Add capabilities/services, project portfolio with sectors/status/location, certifications, equipment or technical capability when relevant, clients, safety/quality information, careers and tender/RFQ contact.

### Logistics / courier
Add services, coverage/branches, quote request and corporate enquiry. Shipment tracking must connect to an authoritative operational system; never create decorative/fake tracking.

### Automotive
Dealer: vehicles, variants/specs, stock/status, financing enquiry, test-drive/lead forms. Workshop: services, appointment, branches, service history only with authenticated operations. Parts store: commerce/catalog engine.

### Financial / insurance
Add product/service information, eligibility/coverage facts, quotation or application workflow, claims/contact where relevant and document handling. Calculators must use explicit verified formulas. Sensitive workflows need stronger security and auditability than a brochure site.

### SaaS / software product
Separate public marketing from authenticated product. Typical marketing: product, use cases, integrations, pricing, resources, docs/contact. Product: identity, workspace/tenant, roles, billing/entitlements, audit/usage and domain-specific workflows. Use multi-tenant architecture only when actual tenancy exists.

### Landing page / campaign
One primary conversion goal, focused sections, proof, CTA/form, analytics and campaign attribution. Do not inherit a full CMS/admin merely because other profiles use one.

---

## Dynamic admin vs static application rule

A recurring failure mode in AI-built client projects is a polished admin UI backed by hardcoded arrays or placeholder actions. DeveloperB must treat this as an engineering defect.

### Dynamic by default

If a normal non-developer owner/editor can reasonably need to change it after handover, model it as managed data unless the project brief explicitly freezes it:

- hero text, imagery and CTAs
- pages and reusable page content
- services/capabilities
- products, categories, variants and specifications
- projects/case studies/portfolio
- people/team/practitioners/instructors
- testimonials/reviews selected by the business
- partners/clients/sponsors
- certifications/awards
- FAQs
- locations, branches, hours and public contact data
- menus and footer business content
- announcements/banners/offers
- downloadable documents
- media and credits/alt text
- blog/news/resources
- careers/jobs where owned by the site
- SEO title/description/canonical/OG image/indexing controls
- form submissions/leads and their operational status
- industry-specific records such as menu items, properties, packages, rooms or events

### Static by default

Keep engineering behavior in code/config rather than pretending it is ordinary CMS content:

- component implementation and layout system
- design tokens and responsive breakpoints
- application route contracts
- database schema and migrations
- authorization rules
- validation and core business rules
- payment/booking/provider credentials
- security policy
- API contracts and integration code
- environment bindings/secrets
- deployment behavior

Some configuration can be safely admin-editable (for example business hours or a feature flag), but only through typed, validated fields with permissions and auditability.

### Admin truthfulness contract

If an admin screen presents `Create`, `Edit`, `Delete`, `Publish`, `Archive`, `Approve`, `Upload`, `Reorder`, or `Save`, the action must persist to the authoritative data source and the relevant public/product surface must consume that data.

Never ship:

- CRUD buttons that only mutate local component state
- fake save-success toasts
- admin tables populated only from fixtures when presented as live data
- media upload controls that do not store durable media
- settings that are ignored by the public site
- fake analytics counters
- fake booking, inventory, shipment or availability state

Seed/demo data is allowed only when clearly identified and replaceable.

---

## Structured-content rule

Prefer domain records and reusable structured fields over giant HTML/WYSIWYG blobs. Contentful's structured-content guidance emphasizes modeling content types and relationships so content can be reused across surfaces and managed without mixing business content into code.

Examples:

```text
Service
  title
  slug
  summary
  body/rich_content
  icon_or_media
  CTA
  SEO
  status

Project
  title
  sector
  location
  completion_date/status
  summary
  gallery
  related_services
  metrics
  SEO
```

Use rich text for genuinely narrative content, not as a substitute for modeling products, people, prices, locations or other queryable data.

---

## Admin sizing

Do not build the same admin for every project.

### Lightweight admin
Good for a small company/professional site:

```text
Dashboard
Pages
Services
Projects/Portfolio
Media
Leads
Settings
SEO
```

### Operational admin
Add domain modules only as required:

```text
Catalog / Orders / Customers
Bookings / Capacity / Calendar
Listings / Moderation
Courses / Students / Assessments
Members / Applications
Properties / Agents / Leads
Jobs / Applicants
Events / Registrations
```

### Platform admin
For marketplaces/SaaS:

```text
Users
Organizations/Tenants
Roles
Moderation/Trust
Transactions/Billing
Entitlements
Audit
Support/Disputes
Usage/Operations
```

---

## Requirement inference workflow

Before implementation, an AI agent should produce an internal project profile:

```text
1. Client/industry
2. Primary business outcome
3. Core engine(s)
4. Primary audiences
5. Conversion actions
6. Public entities/content types
7. Search/filter/discovery needs
8. Authentication roles
9. Transactions/booking/payment needs
10. Admin-managed entities
11. Truly static engineering/config
12. Integrations
13. Sensitive data/compliance risk
14. SEO/localization requirements
15. Analytics/conversion events
16. Expected scale and media load
17. Recommended stack profile
```

Ask the client only for decisions that cannot safely be inferred. Do not make them specify obvious fundamentals such as whether a product catalog needs product detail pages.

---

## Engineering rules across all profiles

- Mobile-first and responsive; do not treat mobile as a compressed desktop layout.
- Use real semantic entities and realistic data shapes before polishing UI.
- Public UI should prioritize useful hierarchy, imagery/icons/data visualization where meaningful, and concise human copy.
- Empty, loading, error, success, unauthorized, forbidden, 404 and destructive-confirmation states are part of the product.
- Every public form needs validation, abuse protection where exposed, durable submission handling and an owner workflow.
- Do not duplicate the same image across unrelated records merely to make pages look populated.
- Media needs alt text; third-party media needs source/credit/license handling where required.
- Use structured metadata, canonical URLs, sitemap/robots rules and per-record SEO for indexable content.
- Search/filter URLs should be intentional and avoid uncontrolled duplicate-index pages.
- Accessibility, keyboard use, contrast and form labeling are acceptance criteria, not polish tasks.
- Admin UX should optimize repetitive work: searchable lists, filters, status, bulk actions only where safe, preview, clear validation and useful feedback.
- Never expose secrets or authorization decisions to the client.
- Use the smallest architecture that satisfies the product. A brochure site does not need marketplace infrastructure.

---

## Commerce and marketplace distinction

Stripe's current guidance distinguishes a normal online store from a marketplace. A store sells the business's own goods/services; a marketplace coordinates multiple providers/sellers and usually adds onboarding, commissions, payouts and platform rules.

Do not implement `seller_id` and call a store a marketplace without building the seller lifecycle. Conversely, do not add multivendor complexity to a normal retailer.

Commerce subprofiles can include:

- D2C
- B2B/wholesale
- digital goods
- service/appointment commerce
- subscription-led
- marketplace-style
- hybrid

Each changes catalog, checkout, billing and fulfillment requirements.

---

## SaaS and multi-tenancy distinction

A login does not make a project SaaS, and SaaS does not automatically require multi-tenancy.

Use multi-tenant architecture when organizations/customers need isolated workspaces, data, configuration, custom domains or billing/entitlements. Cloudflare's current SaaS guidance supports custom hostnames and tenant-aware storage patterns; choose database-, row-, bucket- or key-prefix isolation based on actual risk and scale.

---

## Anti-patterns

- one generic `company website` template for every industry
- one huge universal admin enabled everywhere
- hardcoded public content while showing an editable-looking admin
- putting every homepage section into one opaque JSON/WYSIWYG field
- adding authentication when nobody needs an account
- adding checkout when the real conversion is RFQ/enquiry
- adding booking UI without authoritative availability
- adding reviews without moderation/ownership rules
- treating a directory as a blog category system
- treating a marketplace as a single-vendor store
- storing operational/sensitive data just because a marketing form can collect it
- copying competitor layouts/branding instead of learning category patterns

---

## Research references

- Webflow, “12 popular types of websites that show what great design can do” — category overview and purpose-driven website design.
- Contentful, “Structured content: Make stronger, scalable websites and apps” — content modeling and reusable structured content.
- Stripe, “What is an online store?” (2026) — D2C, B2B, digital, service, marketplace-style, subscription and hybrid commerce models.
- Stripe, “Ecommerce platforms: What to evaluate before you commit” (2026) — B2C/B2B/subscription/marketplace capability differences.
- Stripe, “What is a marketplace?” (2026) — buyer/seller platform distinction.
- Cloudflare Developers, SaaS use cases and reference architectures (2026) — custom domains, tenant configuration and storage isolation.
- Cloudflare Developers, e-commerce use cases (2026) — performance/security patterns for storefronts.

Re-check time-sensitive vendor behavior against official documentation before implementation.

---

## Related DeveloperB guides

- [Architecture Patterns](./README.md)
- [CMS](./cms.md)
- [E-commerce](./e-commerce.md)
- [Marketplace](./marketplace.md)
- [SaaS](./saas.md)
- [Multi-tenant SaaS](./multi-tenant-saas.md)
- [LMS](./lms.md)
- [Travel Platform](./travel-platform.md)
- [Event Management](./event-management.md)
- [Healthcare & Clinic](./healthcare-clinic.md)
- [News Portal](./news-portal.md)
- [Authentication & Authorization](./authentication-authorization.md)
- [Security & Threat Modeling](./security-threat-modeling.md)
