# Blog & Article Authoring Standard

> Default standard for any project that contains blogs, news, editorial articles, guides, documentation-like public content, or long-form CMS content.

## 1. Core rule

A blog/article editor is not a Facebook-post textbox. Long-form publishing requires structured, rich content authoring and reliable rendering.

If a project supports articles, the authoring experience must be designed for real publishing from day one rather than starting as a flat textarea and repeatedly adding missing capabilities later.

## 2. Supported authoring formats

Prefer a structured rich-text editor with a portable content model. The product should support, where appropriate:

- headings (H2–H6; article title remains H1)
- paragraphs
- bold / italic / underline where appropriate
- inline code
- code blocks with language metadata
- blockquotes / pull quotes
- ordered and unordered lists
- links
- horizontal rules
- tables
- callouts / notes / warnings
- images
- galleries
- video/embed blocks
- captions
- media credits
- figure/figcaption semantics
- reusable content blocks
- raw HTML only when explicitly permitted and sanitized
- Markdown import/export where useful

HTML and Markdown support should be deliberate, not accidental. Never render unsanitized user-supplied HTML.

## 3. Canonical storage model

Do not store only presentation-ready HTML when a structured source format is practical.

Preferred hierarchy:

1. Structured editor document / block JSON as canonical content where the editor supports it.
2. Markdown as canonical content for developer/documentation-oriented products where Markdown is the natural authoring format.
3. Sanitized HTML as generated/rendered output or as canonical content only when the product genuinely requires HTML-first authoring.

Keep enough structure to support future web, mobile, RSS, AMP-like transforms, search indexing, AI-assisted editing, and content migration without scraping HTML back into meaning.

## 4. Rich editor UX

The editor should provide contextual controls rather than forcing authors to remember Markdown or HTML syntax.

Minimum expected UX for substantial publishing products:

- clear block/paragraph toolbar
- heading selector
- inline formatting toolbar
- link editor
- image/media insertion in the article flow
- caption and credit fields beside the media
- alt text
- drag/reorder where supported
- keyboard shortcuts
- undo/redo
- autosave/draft recovery where appropriate
- preview
- desktop and usable tablet authoring
- clear validation before publish

Do not scatter article media, category assignment, SEO fields, references, or publishing controls across unrelated admin sections.

## 5. Reusable content and reusable data

Do not repeatedly type data that the system already knows.

Use reusable entities/blocks for stable information such as:

- author profiles
- organization/company profile
- addresses
- contact details
- social links
- standard disclaimers
- disclosure blocks
- product/service facts
- category metadata
- location facts
- recurring CTA blocks
- newsletter/signup blocks
- source/reference formatting
- media assets and credits
- brand boilerplate
- frequently reused tables/data points

A reusable block should have a stable identifier, version/update strategy, and clear ownership. Updating global data should update references intentionally; article-specific snapshots should remain snapshots where historical accuracy matters.

## 6. Article structure and visual rhythm

Long-form content must not look like one uninterrupted wall of text.

Use meaningful hierarchy through:

- short introduction/deck where appropriate
- descriptive subheadings
- paragraphs of readable length
- relevant figures and illustrations
- pull quotes/callouts only when useful
- lists where the information is genuinely list-like
- tables for comparison/data
- related links/content blocks
- references/sources

Do not artificially add sections just to make an article look longer.

## 7. Human-sounding editorial copy

Avoid generic AI writing patterns:

- repetitive summary paragraphs
- excessive “In today’s world…” introductions
- tutorial-like explanations of obvious concepts
- fake enthusiasm
- repeated conclusion language
- keyword stuffing
- unnecessary rhetorical questions
- generic filler between useful facts

Article voice must match the publication and audience. AI assistance is allowed, but the output must read like edited publication content, not raw generated text.

## 8. Media in article workflow

Article media belongs inside the article workflow.

Required considerations:

- upload/select existing media
- stable storage URL/key
- alt text
- caption
- source/credit
- license/usage notes when needed
- crop/focal point where supported
- responsive renditions
- featured/cover image designation
- social/OG image selection or generation

A shared media library may exist, but authors must not leave the article editor just to complete routine media work.

## 9. SEO and metadata

Where relevant, article publishing should support:

- slug
- SEO title
- meta description
- canonical URL rules
- Open Graph/Twitter metadata
- featured image
- author
- published/updated dates
- article category/topic/tags as appropriate
- schema.org Article/NewsArticle/BlogPosting markup where applicable
- index/noindex controls where operationally necessary
- redirects when slug changes

Do not expose every technical field to every author if a sensible default can be generated safely.

## 10. References and factual integrity

For factual/reporting content, support references in a structured way where appropriate.

Do not invent citations, statistics, prices, percentages, dates, or calculations. If a number is calculated, preserve source values/formula/unit where useful.

For editorial systems that require references, validation rules should enforce the required reference count/shape before publication.

## 11. Publishing lifecycle

Depending on project type, support clear states such as:

```text
draft → review → approved/scheduled → published → updated/corrected → archived
```

Do not let UI status, API status, and database state disagree.

For news/editorial products consider:

- reviewer/editor assignment
- scheduled publication
- correction notes
- update timestamp
- revision history/audit trail
- preview links
- publish permissions

## 12. Rendering standard

Published article rendering must be verified for:

- Bengali and/or English typography as required
- heading scale
- paragraph measure and line height
- images/galleries
- tables on mobile
- code blocks
- embeds
- links
- lists
- blockquotes
- captions/credits
- dark mode only where the product supports it
- print/share behavior where relevant

The editor output and public renderer must share a documented schema/contract. Do not support blocks in the editor that the frontend cannot render reliably.

## 13. Portability

Content must remain exportable/migratable. Avoid vendor-locked editor data without an export path.

Where practical support conversion/export to:

- HTML
- Markdown
- JSON/structured blocks
- RSS/feeds

## 14. Definition of done for article tooling

Article tooling is not done until an editor can create a realistic long-form article containing headings, links, images with captions/credits, lists, tables or code when applicable, metadata, category/author assignment, preview, save/reopen, and publish/review flow—and the deployed frontend renders it correctly across devices.
