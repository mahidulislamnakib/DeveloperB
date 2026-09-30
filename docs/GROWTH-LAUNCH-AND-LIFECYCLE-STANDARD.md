# Growth, Launch and Lifecycle Standard

> Mandatory companion to `PRODUCT-ENGINEERING-BIBLE.md` for every public-facing or customer-facing project.

## 1. Purpose

A product is not complete when the code deploys. A complete product must also be discoverable, measurable, brand-consistent, platform-ready, administratively usable, and maintainable after launch.

This standard covers the layers that are often forgotten until late: social-platform readiness, SEO and AI/LLM discoverability, analytics and pixels, metadata automation, launch assets, admin quality, post-launch monitoring, and stack selection.

## 2. Social platform readiness

Each social platform has its own policies, dimensions, safe areas, metadata behavior, publishing rules, tracking options, and brand expectations. Do not create one generic asset and stretch it everywhere.

For every project that will have a social presence, identify the platforms that actually matter to the audience and prepare the correct asset set for each relevant platform.

Common examples include:

- Facebook page profile and cover assets
- YouTube channel profile, banner and thumbnail system
- LinkedIn company/profile cover assets
- X/Twitter profile and header assets
- Instagram profile and post/reel/story templates
- TikTok profile and video-cover conventions
- Pinterest, Threads, WhatsApp Business, Telegram, or other platforms only when relevant

Rules:

- Verify current official dimensions and policy before producing assets because platform requirements change.
- Respect safe zones for mobile and desktop crops.
- Use the official project logo/wordmark and approved brand system; never redraw or mutate the logo casually.
- Keep typography, imagery, tone, iconography and visual hierarchy aligned with the project brand.
- Maintain editable source templates when recurring content is expected.
- Do not create or maintain a social channel merely to have one; select channels by audience and business value.

## 3. SEO and search discoverability

SEO is part of product architecture, not a final plugin step.

Every relevant public project should evaluate:

- crawlability and indexability
- robots rules
- XML sitemap coverage
- canonical URLs
- page titles and meta descriptions
- Open Graph / social metadata
- structured data / schema where justified
- semantic HTML
- internal linking
- pagination and archive behavior
- duplicate/thin content risks
- image metadata and alt text
- language and locale behavior
- performance/Core Web Vitals where applicable
- redirect discipline
- 404/410 behavior
- search-friendly URL design
- content freshness/update metadata
- author/entity/business identity signals where appropriate

Google is important but not the only discovery surface. Consider Bing and other relevant search engines or ecosystem-specific search/discovery channels based on audience.

Do not use manipulative or fabricated SEO claims, fake dates, fake authors, keyword stuffing, doorway pages, or mass-generated low-value content.

## 4. AI / LLM discoverability

Modern products may also be discovered, summarized, cited, or interpreted by AI systems and answer engines.

Where relevant, keep the site easy for machine systems to understand through:

- clear semantic structure
- stable canonical URLs
- strong entity/about/contact information
- structured data where appropriate
- factual, non-contradictory content
- useful headings and summaries
- accessible HTML
- crawlable public documentation/content
- explicit source/reference information for factual editorial content
- clear licensing/usage rules where content reuse matters

Do not invent unsupported "LLM SEO" tricks. Prefer standards-based accessibility, crawlability, structured information, and trustworthy content. If a platform introduces a new crawler control, metadata standard, MCP interface, feed format, or discovery protocol, verify official documentation before adoption.

## 5. Analytics and measurement

A public launch should not be blind.

Evaluate whether the project needs:

- Google Analytics or another web analytics platform
- Google Tag Manager when centralized tag governance is useful
- Meta/Facebook Pixel
- TikTok Pixel
- LinkedIn Insight Tag
- Google Ads conversion tracking
- other platform-specific tracking only when actually used

Implementation rules:

- Install only what has a real use case.
- Respect privacy/consent requirements for the target market.
- Avoid duplicate event firing.
- Define meaningful events before implementation.
- Prefer business events over vanity metrics.

Useful examples:

- inquiry submitted
- registration completed
- listing published
- checkout started/completed
- lead form completed
- creator upload completed
- search with zero results
- failed payment
- failed upload
- booking request created

Document event names and ownership so analytics does not become inconsistent across projects.

## 6. AI-assisted metadata and editorial utilities

AI may be used where it reduces repetitive work without inventing facts.

Good candidates include:

- image alt-text suggestions
- title suggestions
- meta-description suggestions
- tag/keyword suggestions
- excerpt generation
- image caption suggestions
- product/article summary suggestions
- taxonomy/category suggestions
- duplicate-content detection
- moderation assistance
- content-quality checks

Rules:

- AI output is a suggestion unless the risk is low and validation is deterministic.
- Never let AI invent product specifications, certifications, prices, people, partners, statistics, sources, legal claims, medical/financial claims, or business achievements.
- Contextual generation belongs inside the relevant workflow (article, product, media, category), not as a disconnected AI screen.
- Preserve human editability.
- Avoid adding an AI feature merely because AI is available.

## 7. Public site and admin quality must both be strong

A polished public site with a poor admin system is an incomplete product.

Admin quality requirements include:

- coherent design system
- responsive layout
- clear information hierarchy
- compact but readable forms
- progressive disclosure
- bulk operations where useful
- search/filter/sort
- reliable validation
- clear status/lifecycle labels
- safe destructive actions
- media handling in context
- loading/empty/error/success states
- permissions and ownership clarity
- audit-sensitive action visibility where relevant
- keyboard/accessibility quality

Do not accept a "functional but ugly" admin area as permanently finished.

## 8. Visual quality and motion

Products should feel alive but not noisy.

Use:

- relevant images
- meaningful icons
- illustrations where they improve understanding
- subtle motion/transition when it improves orientation or perceived quality
- polished hover/focus/pressed/loading states

Avoid:

- excessive animation
- decorative motion that slows interaction
- repeated stock imagery
- broken aspect ratios
- generic AI-generated visual clutter
- motion that harms accessibility or performance

Respect reduced-motion preferences where applicable.

## 9. Project start: full lifecycle planning

When a new project is named, do not think only about the homepage or first feature.

Plan the lifecycle:

```text
Idea / problem
→ research
→ audience and jobs-to-be-done
→ competitor/category study
→ what competitors do well
→ what they do poorly
→ assumptions to challenge
→ product scope
→ brand system
→ content strategy
→ information architecture
→ UX/CX
→ stack decision
→ data model
→ API/integrations
→ admin/operations
→ analytics/tracking
→ SEO/discoverability
→ social launch assets
→ security/privacy
→ QA
→ preview
→ launch
→ post-launch monitoring
→ maintenance
→ growth / iteration
```

The plan should explicitly state what is intentionally NOT included so the project does not grow accidentally through AI-generated feature creep.

## 10. Competitor and category research

Before major work, identify relevant current products in the same category.

Research:

- common user expectations
- best-in-class flows
- weak/common pain points
- monetization patterns
- information architecture
- onboarding/data collection
- mobile behavior
- trust signals
- content strategy
- admin/operations patterns when observable
- technical constraints when publicly documented

Use competitors for learning, not copying. Do not reproduce protected branding, copy, screenshots, or unique layout expression.

The goal is to understand category conventions, avoid known mistakes, and find credible opportunities for improvement.

## 11. Stack decision before implementation

Every project must have an explicit stack decision before broad implementation.

Evaluate:

- traffic and concurrency expectations
- SSR/static/client rendering needs
- database shape and query complexity
- file/media volume
- background jobs
- realtime needs
- search needs
- long-running/native workloads
- integrations
- operational skill/cost
- deployment model
- portability and maintenance

Possible outcomes include:

- Cloudflare-first
- Cloudflare + external managed database/service
- VPS/server-hosted
- static/frontend-only
- another justified architecture

Cloudflare is preferred where it is technically and economically suitable, not as a religion. VPS or other infrastructure is acceptable when the workload genuinely needs it.

Record the decision and why it was made.

## 12. Launch readiness checklist

Before public launch, verify what applies:

- production domain and HTTPS
- canonical URL
- logo/favicon/app icons
- OG/social preview images
- responsive QA across device classes
- browser-console errors
- broken links/assets/images/fonts
- 404/500/error pages
- forms/contact delivery
- auth/permissions
- database migrations
- storage/media access
- backups/recovery where needed
- analytics events
- pixels/tags
- SEO metadata
- robots/sitemap
- structured data
- social profile assets
- legal/privacy/cookie requirements
- accessibility basics
- performance
- rate limiting/abuse controls
- admin workflows
- health/readiness checks
- rollback/recovery plan

Do not declare "launched" simply because a deployment URL responds with 200.

## 13. Post-launch reliability

A product that breaks two days later was not truly finished.

After launch, monitor and periodically verify:

- critical user journeys
- auth/session behavior
- APIs
- database reads/writes
- media/storage
- scheduled jobs
- external integrations
- analytics event health
- broken links/assets
- responsive regressions
- console/runtime errors
- indexing/crawl status
- cost anomalies
- dependency/security changes

Regression prevention is preferred over repeated repair.

## 14. Feature completeness rule

A useful feature should not be omitted merely because it requires a small amount of additional implementation effort, but this does NOT mean "add every possible feature."

Use this test:

Add it when it materially improves one or more of:

- task completion
- trust
- accessibility
- reliability
- discoverability
- conversion
- admin efficiency
- data quality
- maintainability
- future reuse

Do not add it when it mainly increases novelty, UI clutter, maintenance burden, cost, or technical complexity without proportional user/business value.

## 15. Final principle

A complete project is not only code, UI, or infrastructure.

It is a coherent system that is:

**researched, branded, human-friendly, measurable, discoverable, platform-ready, operationally usable, technically appropriate, verified before launch, and maintained after launch.**
