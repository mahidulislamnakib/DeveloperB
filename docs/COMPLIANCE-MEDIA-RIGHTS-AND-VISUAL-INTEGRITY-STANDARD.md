# Compliance, Media Rights & Visual Integrity Standard

> Mandatory companion to `docs/PRODUCT-ENGINEERING-BIBLE.md` for any public-facing product, content system, media workflow, marketing surface, or project that collects, stores, processes, analyzes, or shares user data.

## 1. Core rule

Compliance, licensing, privacy, consent, attribution, accessibility, visual authenticity, and brand integrity are product requirements, not launch-week cleanup tasks.

Before implementation, identify:

- target countries and user locations;
- whether the project collects personal data;
- whether it uses cookies, analytics, advertising pixels, remarketing, or behavioral tracking;
- whether children or minors may use the product;
- whether sensitive or regulated data is processed;
- whether the project uses third-party media, APIs, fonts, icons, datasets, templates, AI-generated assets, or user-generated content;
- whether commerce, payments, insurance, health, employment, education, travel, finance, or another regulated domain is involved;
- whether platform-specific policies apply.

Do not assume one global policy template is legally sufficient for every project.

## 2. Jurisdiction and applicability

The product must maintain an applicability map rather than blindly adding every global law.

At minimum, review the jurisdictions that materially apply to the business, users, data subjects, processing location, or commercial activity.

### Bangladesh

For Bangladesh-based projects that process personal data, review the current Bangladesh personal-data framework, including the Personal Data Protection Act, 2026 and any later regulations, rules, guidance, or amendments.

Key implementation themes include lawful processing, consent where required, security, accuracy, confidentiality, protection against unauthorized disclosure/access, data-transfer/storage obligations where applicable, and data-subject rights.

### European Union / EEA

Where the GDPR applies, review the current GDPR and related ePrivacy/cookie requirements. Identify lawful basis, transparency duties, user rights, processors/subprocessors, retention, international transfers, security, breach obligations, consent requirements where applicable, and data-protection impact requirements for higher-risk processing.

### United Kingdom

Where UK data-protection rules apply, review the current UK GDPR / Data Protection Act framework and current ICO guidance, including any changes introduced by newer UK legislation.

### United States

Do not treat the US as one privacy jurisdiction. Review applicable federal, state, sector, and children’s-data rules. Where applicable, this can include CCPA as amended by CPRA, state privacy laws, COPPA for children under 13, and sector-specific requirements.

### Other markets

If a project actively targets another country or region, add that jurisdiction to the applicability map before launch.

## 3. Policy set is project-specific

Evaluate whether the project needs:

- Privacy Policy / Privacy Notice;
- Terms of Service / Terms & Conditions;
- Cookie Policy;
- Cookie/consent management interface;
- Acceptable Use Policy;
- Community Guidelines;
- Refund / cancellation / return policy;
- Shipping / delivery policy;
- Subscription / billing terms;
- Marketplace seller/buyer terms;
- Creator/content licensing terms;
- Copyright / DMCA-style notice process where relevant;
- Data Processing Addendum for B2B customers where relevant;
- Children/minor policy;
- AI-use disclosure where legally or operationally appropriate;
- Accessibility statement where appropriate;
- security/vulnerability reporting policy;
- editorial corrections policy for publications;
- sponsored-content / affiliate disclosure rules;
- consent wording for marketing communications.

Do not create legal pages just to fill the footer. Each policy must match the actual product behavior.

## 4. Plain-language legal UX

Legal accuracy does not require unreadable language.

Policies should:

- use clear, simple English by default;
- define necessary legal or technical terms;
- use meaningful headings;
- explain what data is collected, why, how it is used, how long it is kept, who receives it, and what choices users have;
- avoid vague statements such as “we may use your information for various purposes” when the real purposes can be stated;
- avoid promising security, deletion, anonymity, or compliance capabilities the system does not actually provide;
- keep legal text synchronized with implementation.

Where a legally reviewed jurisdiction-specific policy is required, obtain qualified legal review rather than treating AI-generated text as final legal advice.

## 5. Privacy by design

Default engineering rules:

- collect only data required for a real purpose;
- do not collect optional profile fields too early;
- use progressive disclosure;
- classify personal and sensitive data;
- document purpose and lawful basis where applicable;
- define retention/deletion behavior;
- define export/access/correction/deletion workflows where required;
- protect data in transit and at rest as appropriate;
- use least privilege;
- avoid logging secrets or unnecessary personal data;
- separate production from preview/test data;
- use non-production fixtures for testing;
- maintain processor/subprocessor awareness;
- review cross-border transfer implications where relevant.

## 6. Cookies, analytics, pixels, and consent

Before enabling analytics or marketing tags, inventory them.

Possible technologies include:

- first-party analytics;
- Google Analytics / Google Tag Manager;
- Meta Pixel;
- TikTok Pixel;
- LinkedIn Insight Tag;
- Google Ads conversion tags;
- session replay / heatmaps;
- affiliate tracking;
- A/B testing tools;
- embedded third-party media that creates cookies or tracking requests.

For each technology record:

- provider;
- exact purpose;
- data collected;
- whether it is strictly necessary, analytics, functional, advertising, or another category;
- whether consent is required in target jurisdictions;
- retention;
- data-sharing/processor role;
- opt-out or consent withdrawal behavior.

Do not fire non-essential trackers before valid consent where applicable.

Respect applicable consent signals such as browser/global privacy signals when legally required.

## 7. Third-party photos, video, icons, fonts, and assets

Every external asset needs provenance.

Store where practical:

- source platform;
- creator/author;
- original source URL;
- license type/version;
- download or verification date;
- attribution requirement;
- permitted uses/restrictions;
- model/property release concerns where relevant.

### Attribution

Do not guess whether attribution is legally required.

Examples change by platform and usage method:

- Pexels currently permits free use without mandatory attribution, while credit is appreciated.
- Unsplash’s general license may not require attribution in every use, but API-based uses have separate attribution requirements and should credit both the photographer and Unsplash according to current API guidance.

Therefore, the rule is:

> Verify the current license and API/use-case rules at the time the asset is added.

When attribution is required or chosen as best practice, credit the creator and platform clearly without damaging the user experience.

Do not use media in ways that imply endorsement, defame identifiable people, violate trademark rules, or exceed license permissions.

## 8. Canonical media-credit model

Content systems that use third-party media should support structured credit data rather than embedding random credit text into captions.

Recommended fields:

- asset ID;
- source platform;
- creator name;
- creator profile URL;
- source asset URL;
- license name;
- license URL if useful;
- attribution text;
- attribution required: yes/no/unknown;
- acquisition date;
- usage notes/restrictions.

Reuse the same credit wherever the same asset is used.

## 9. AI-generated image policy

AI imagery is optional, not the default visual identity.

Prefer real photography, product imagery, screenshots, diagrams, icons, data visuals, or licensed illustration when they better support trust.

When AI-generated imagery is used:

- avoid excessive embedded text;
- do not turn an image into a text-heavy poster unless that is intentionally the format;
- inspect hands, fingers, feet, eyes, teeth, reflections, shadows, jewelry, object geometry, signage, logos, screens, perspective, and repeated patterns;
- reject anatomically impossible or visibly synthetic people;
- avoid fake documentary-style imagery that could mislead users into believing a real event/person/place is shown;
- do not generate fake clients, employees, factories, facilities, products, awards, documents, certifications, or evidence;
- check whether disclosure is legally/platform-required for the intended use.

## 10. Character and identity consistency

If a project intentionally uses a recurring generated character or persona, create a character sheet before producing a series.

Record:

- canonical face/reference image;
- approximate age range and non-sensitive visual attributes required for continuity;
- hairstyle;
- clothing/style rules;
- proportions;
- illustration/photo style;
- lighting/background system;
- expressions/poses allowed;
- brand palette;
- prohibited variations.

Do not allow the character’s identity to drift between generations.

For real people, use actual approved source images rather than generating or altering identity unless explicitly requested and appropriate.

## 11. Brand visual integrity

Canonical brand assets must be stored and treated as source-of-truth artifacts.

Never casually:

- redraw the logo;
- change logo geometry;
- alter wordmark spelling;
- change brand colors;
- swap icon style;
- invent an unofficial mascot;
- change photography/illustration style mid-project;
- use different brand tone across website/admin/social without a documented reason.

Maintain a lightweight brand kit with logo variants, spacing/clear-space rules, colors, typography, icon system, imagery direction, social templates, and tone.

## 12. Visual trend awareness without trend chasing

Design should remain current, but should not be rebuilt every time a new visual trend appears.

During new projects and periodic reviews, research:

- current category-leading UX patterns;
- navigation and responsive conventions;
- typography trends that improve readability;
- image/art-direction trends;
- motion/interaction patterns;
- accessibility expectations;
- current component primitives and browser/platform capabilities;
- color usage in the relevant industry.

Adopt trends only when they improve comprehension, usability, trust, differentiation, accessibility, or performance.

Do not sacrifice brand recognition or usability for novelty.

## 13. Knowledge freshness and source hierarchy

The shared knowledge base must not become a museum of outdated advice.

For changing facts, prefer sources in this order:

1. law/regulator/government source;
2. official platform/framework/provider documentation;
3. standards body;
4. primary project/repository source;
5. respected secondary technical analysis;
6. community sources for experience signals, not authoritative facts.

Every time-sensitive rule should have one of:

- `last_verified` date;
- source URL/reference;
- review cadence;
- an explicit statement that current official guidance must be checked before implementation.

## 14. Decision reuse and duplicate-work prevention

Before researching or implementing a familiar topic:

1. search the project repository;
2. search the shared DeveloperB knowledge base;
3. check previous architecture/decision records;
4. check whether a canonical component/data model/policy already exists;
5. verify whether the prior decision is still current;
6. reuse it if still valid;
7. update the canonical source rather than creating a competing second solution.

Repeated discussion is not a reason to duplicate work.

If a topic was already decided and the facts have not materially changed, use the existing decision.

## 15. Compliance/rights launch gate

Before launching a public product, answer:

- Which jurisdictions materially apply?
- What personal data is collected?
- Why is each field needed?
- Which trackers/cookies run?
- Does consent need to occur before any of them fire?
- Are Privacy/Terms/Cookie/other necessary policies present and accurate?
- Are user rights workflows technically possible where required?
- Is retention/deletion behavior defined?
- Are data processors/subprocessors known?
- Are external assets licensed?
- Is required attribution visible?
- Are AI-generated visuals reviewed for authenticity, anatomy, misleading implications, and brand fit?
- Are logo/brand assets canonical?
- Are user-generated-content rights/moderation rules defined where applicable?
- Are children/minor rules relevant?
- Does the product make claims that need legal, financial, medical, insurance, or regulatory review?

Any unknown high-risk answer is a launch blocker until resolved.

## 16. Maintenance

At periodic portfolio review, check:

- new or amended laws/regulator guidance relevant to active markets;
- privacy/cookie policy drift versus actual implementation;
- third-party license changes;
- tracking/pixel changes;
- newly added processors/subprocessors;
- stale retention rules;
- broken attribution links;
- outdated legal contact details;
- visual/brand drift;
- generated character drift;
- significant UX/accessibility changes in the market;
- outdated shared knowledge-base guidance.

Do not rewrite policies or redesign products merely because time passed. Change them when law, platform rules, product behavior, user needs, risk, or evidence requires it.

## 17. Final principle

The goal is not to add more checklists. The goal is to prevent avoidable legal, trust, licensing, privacy, branding, and quality failures before they become expensive rework.

**Research once. Record the decision. Keep it current. Reuse it until the facts change.**
