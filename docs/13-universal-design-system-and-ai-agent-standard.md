# Universal Design System & AI-Agent Standard

> One design language across product UI, graphics, social media, presentations, documents, print, motion, marketing, and future surfaces — usable by humans and any AI agent.

## Why this exists

DeveloperB must not treat design as decoration added after engineering. Design is a governed system for communication, trust, recognition, usability, accessibility, and brand consistency.

This standard applies to web/app UI, dashboards/admin systems, graphics/campaign assets, social media, presentations, documents/PDFs, print/packaging/signage, icons/illustrations/photography, motion/video, AI-assisted visual work, and future surfaces.

The goal is not to make every artifact identical. The goal is to make every artifact feel like the same product or brand while remaining appropriate to its medium, audience, and task.

## 1. Core principles

1. Purpose before style.
2. Hierarchy before decoration.
3. Consistency before novelty.
4. Meaning before ornament.
5. Context before trend.
6. Human before generic AI-polish.
7. System before one-off styling.
8. Accessibility by default.
9. Real content before placeholder aesthetics.
10. Responsive/adaptable by design.

## 2. Design invariants

Keep these stable unless a deliberate redesign is approved: brand identity/logo rules, color roles, typography roles, spacing rhythm, radius philosophy, icon grammar, imagery/illustration direction, controls/states, motion character, voice, layout rhythm, data-visualization conventions, and accessibility baseline.

An agent must not change them because another style looks newer or more fashionable.

## 3. Design tokens

Represent repeatable decisions with semantic tokens where practical: color, typography, spacing, radius, shadow, stroke, motion, opacity, layout and z-index.

Prefer semantic names such as `color/text/secondary` over raw-value names when expressing usage. Raw values live behind tokens. Repeated magic numbers are a system failure. New tokens require a purpose; arbitrary one-off exceptions do not automatically become tokens.

## 4. Typography

Typography is role-based, not improvised per screen. Define display, page title, section title, card title, body, small body, label, caption, data/number, quote, and technical roles where relevant.

Limit font families unless justified. Use scale/weight intentionally. Avoid oversized headings that force poor wrapping. Keep headings one line where natural, never by making them unreadably small. Maintain readable line lengths, proper punctuation and script/language support. Do not bake text into images when live text is possible.

## 5. Color

Color communicates hierarchy, interaction and state. Define brand, surface, text, border, interaction, status, chart and overlay roles. Never use color alone for status. Preserve contrast. Avoid arbitrary rainbow dashboards. Decorative gradients must not reduce clarity. Consider dark mode, print and projection when relevant.

## 6. Layout, spacing and composition

Use repeatable rhythm instead of visual guesswork. Product interfaces need a spacing scale, gutters/max widths, grid/alignment, predictable hierarchy, meaningful whitespace and responsive behavior. Avoid excessive nested cards/boxes.

Graphics need a focal point, safe areas, crop awareness, logo clear space and controlled density. Print work needs production-safe resolution, bleed/safe areas where required, readable physical type and proofed QR/legal content.

## 7. Photography, imagery and art direction

Prefer authentic/relevant subjects, culturally appropriate imagery, consistent grading/crops and real screenshots/data when demonstrating a product. Avoid unrelated stock imagery, repeated photos, generic corporate clichés, uncanny AI people, fake UI, impossible physical details and decorative images with no communication role.

AI imagery must be checked for anatomy, text, objects, shadows, reflections, product details, cultural details and physical plausibility. Never imply generated people/places/events are real or fabricate product functionality.

## 8. Iconography and illustration

Use one coherent visual grammar: fill/outline approach, stroke width, corner character, optical size, bounding box, brand-vs-utility use, complexity, texture and shading. Do not mix unrelated icon packs without normalization. Icons clarify meaning; they do not decorate every heading. Ambiguous icons need labels. Illustrations share perspective, proportion, palette and rendering language.

## 9. Motion

Motion should explain, orient, provide feedback or add controlled brand character. Avoid animation everywhere, blocking intros, fake progress, excessive parallax, reading competition and looping noise. Support reduced-motion preferences where applicable.

## 10. Data visualization

Charts answer a question. Choose chart types based on relationships, preserve color meanings, label units/time periods, avoid unnecessary 3D/deceptive axes, disclose missing/partial data, and maintain export/mobile legibility. Use tables when exact values matter more than pattern.

## 11. Artifact modes

One identity has multiple modes:

- Product UI: usability, state, responsiveness, accessibility, performance.
- Marketing/web campaign: message, brand expression, conversion, storytelling, trust.
- Social/graphic: stopping power, rapid comprehension, crop safety, recognition.
- Presentation: spoken narrative, projection readability, pacing, visual storytelling; do not make slides into documents.
- Document/report: reading flow, evidence, navigation, export/print quality, restrained branding.
- Print/event: viewing distance, production constraints, environmental context.
- Motion/video: timing, sequence, captions/sound-safe comprehension, continuity.

Agents must identify the mode before designing.

## 12. Trend policy

Track trends without letting trends override brand fundamentals. Before adoption, ask whether a trend fits audience/message/brand, improves communication, remains accessible, ages acceptably, scales across surfaces and avoids generic AI output.

Current signals worth monitoring include tactile texture, human imperfection/analog cues, restrained editorial layouts, authentic people/emotion, cultural specificity, selective surrealism, cinematic storytelling and AI-assisted production that preserves recognizable human/brand authorship. These are inspiration, never mandatory styles.

Projects may keep a trend register with `observe`, `experiment`, `approved`, and `retire` states.

## 13. Brand consistency matrix

Every significant project should define what is fixed, flexible and forbidden for logo, color, typography, imagery, icons, layout, motion and voice. Approved marks/tokens/rules are fixed; format-specific composition may be flexible; distortion, random palettes/fonts, unrelated imagery, mixed visual grammar and distracting effects are forbidden unless explicitly approved.

## 14. AI-agent design contract

This repository must work with any capable AI agent: ChatGPT, Codex, Claude, Gemini, Copilot, Cursor, Figma AI, Canva AI, future agents, internal automation, and humans assisted by AI.

### Before designing

Inspect in this order when available:

1. `AGENTS.md`;
2. this standard;
3. project brief/product charter;
4. brand guide/boundary;
5. design tokens/theme files;
6. components/templates;
7. recent approved representative work;
8. content/data constraints;
9. target dimensions/platform;
10. accessibility/production requirements.

Determine artifact mode, audience, primary task/message, invariants, reusable patterns, dimensions/breakpoints, content hierarchy, interaction states, imagery/icons, accessibility, export format, and what may or may not change.

Do not redesign a brand without instruction, replace approved assets with generic AI assets, choose arbitrary fonts/colors/radii, duplicate existing components, add filler to complete layouts, chase trends, sacrifice accessibility/mobile, mix visual families, assume every section needs a card, repeat stock photos, fabricate imagery, or silently remove content to make a layout fit.

## 15. Design Non-Hallucination Protocol — HARD RULE

Unsupported visual invention is a design failure. An agent may create new design work, but it must never confuse invention with established project truth.

### Evidence hierarchy

When determining what the project's design actually is, use the strongest available evidence in this order:

1. explicit current user/owner instruction;
2. approved brand/design documentation;
3. semantic design tokens and canonical theme configuration;
4. approved reusable components/templates;
5. approved source design files;
6. current production implementation known to be intentional;
7. recent approved representative artifacts;
8. documented project history/decisions;
9. clearly repeated existing patterns;
10. proposal/inference only when stronger evidence is absent.

Lower-level evidence must not silently override higher-level evidence. If two authoritative sources conflict, stop the affected design decision, preserve the safest established state, record the conflict and request/seek resolution rather than guessing.

### Four evidence labels

Every non-trivial visual decision must conceptually belong to one of these classes:

- **ESTABLISHED** — directly supported by an approved source of truth.
- **INFERRED** — strongly derived from repeated evidence but not explicitly documented.
- **PROPOSED** — a new design choice offered for approval.
- **TEMPORARY** — a reversible placeholder needed to continue work.

Never describe `INFERRED`, `PROPOSED`, or `TEMPORARY` decisions as existing brand rules.

### No-evidence rule

**No evidence → do not claim. No token → do not invent silently. No approved pattern → propose explicitly. Existing approved pattern → preserve it.**

If design evidence is insufficient:

1. search the repository/design sources first;
2. reuse neutral/system defaults where they do not create a false brand claim;
3. make the smallest reversible choice necessary to continue;
4. label it `PROPOSED` or `TEMPORARY` in the handoff/status record;
5. do not propagate that choice into a permanent token/component/brand rule until approved.

### Never fabricate project identity

Without evidence or explicit instruction, never invent and present as canonical:

- brand colors or palettes;
- font families or typography scales;
- logo variants, lockups, clear-space rules or logo colors;
- gradients, textures or patterns;
- radius/shadow/stroke systems;
- spacing/grid systems;
- icon packs or illustration languages;
- photography grading/art direction;
- animation/motion personality;
- chart palettes;
- decorative motifs;
- tone/visual personality merely from words such as “premium”, “modern”, “minimal”, “professional”, “luxury”, or “youthful”.

Those adjectives describe goals, not a complete visual specification.

### Never fabricate trust/content assets

Never create or imply as real unless verified/provided:

- partner/client/customer logos;
- awards, badges, certifications or memberships;
- testimonials, ratings or review counts;
- statistics, achievements or usage numbers;
- team/customer identities;
- event photos or documentary scenes;
- product screenshots/features/states that do not exist;
- physical product details/specifications;
- signatures, seals, credentials or official marks;
- endorsements or brand relationships.

A clearly fictional mockup used only for exploration must be marked as such and must not leak into production/export as factual content.

### Placeholder containment

Placeholders must be recognizable in source/handoff metadata and must never silently become canonical. Do not convert a placeholder color/font/image/icon into a token or approved asset merely because it was used once. Before production/export, verify that temporary assets/content have been replaced or explicitly accepted.

### Existing design preservation

When modifying an established project:

- preserve unaffected visual rules;
- prefer existing tokens/components/assets over near-duplicates;
- do not perform opportunistic redesign during unrelated engineering work;
- do not “clean up” intentional brand quirks just because an AI considers another pattern more conventional;
- keep visual changes scoped to the requested problem;
- require an explicit redesign task for broad visual-language changes.

### Conflict handling

If screenshots, code, tokens and documentation disagree:

1. identify the conflicting evidence;
2. prefer explicit approved/current sources over accidental legacy implementation;
3. do not average conflicting styles together;
4. do not invent a third style to reconcile them;
5. record what was preserved and what remains unresolved.

### Confidence does not equal evidence

An agent's confidence, aesthetic preference, training-data familiarity, category convention, competitor design, current trend, or statement such as “this is best practice” is not evidence of this project's design identity.

### New-project exception

A project with no design system still needs design. In that case an agent may propose a coherent initial system, but it must be clearly treated as a new proposal. Once approved, capture it in tokens/components/brand documentation so future agents no longer need to guess.

### Visual drift check

After meaningful visual work, compare the rendered/exported result against the strongest available reference and check:

- typography;
- colors;
- spacing/grid;
- radii/shadows/strokes;
- icon/illustration language;
- imagery treatment;
- component behavior;
- responsive composition;
- interaction states;
- motion;
- brand/content authenticity.

Unexpected drift is a defect unless explicitly approved.

### Anti-hallucination completion gate

A design task is not complete until the agent can answer:

- What design evidence did I use?
- Which decisions were established versus inferred/proposed/temporary?
- Did I introduce any new visual rule?
- If yes, was it necessary, reversible and documented?
- Did any placeholder or invented trust/content asset reach production?
- Did the final artifact visually drift from approved references?

If these cannot be answered, the design is not ready to be called complete.

## 16. Cross-agent handoff

Every meaningful design task should leave a compact durable handoff:

```md
## Design handoff
Artifact: <page/post/deck/report/etc.>
Mode: <product/marketing/social/presentation/document/print/motion>
Audience: <who>
Goal: <primary message/task>

### Evidence used
- <approved source/token/component/reference>

### Established decisions preserved
- <rule/pattern>

### Inferred decisions
- <decision + evidence>

### Proposed decisions
- <decision + reason + approval status>

### Temporary/placeholders
- <item + replacement requirement>

### Assets
- <source/file/license/credit where relevant>

### Responsive/format notes
- <breakpoints/crops/safe areas/export>

### Accessibility
- <contrast/focus/alt/captions/reduced motion/etc.>

### Visual drift check
- <comparison result>

### Verification
- <what was reviewed/tested>

### Open conflicts/risks
- <anything unresolved>
```

Do not store lengthy hidden reasoning.

## 17. Design review gates

A visual artifact is not complete just because it renders.

1. **Purpose** — message/task, hierarchy and audience/context are correct.
2. **Brand** — correct assets/language and no unapproved drift.
3. **Consistency** — spacing/alignment/repeated elements/states follow the system.
4. **Accessibility** — contrast, readable type, keyboard/focus, non-color signals, reduced motion, alt/captions/transcripts where relevant.
5. **Content authenticity** — no generic filler, unsupported claims, fabricated trust assets or misleading imagery; edge cases are realistic.
6. **Format** — dimensions, responsiveness/crops, export quality, performance/file size and production constraints are correct.
7. **Visual QA** — inspect actual output, not only source code/layers.
8. **Non-hallucination** — evidence is known, proposals/placeholders are identified, and no unsupported design rule has been promoted to project truth.

For digital products verify representative mobile, desktop, loading, empty, error, success, disabled, long/short content, missing image/data and permission-restricted states where applicable.

## 18. Common anti-patterns

Reject excessive rounded cards, glassmorphism, arbitrary gradients/gradient text, huge low-information headings, decorative icon bubbles, badge/pill overload, meaningless statistics, fake testimonials, duplicate imagery, inconsistent illustration/icon families, mixed grading, excessive shadows, wasteful spacing, tiny low-contrast text, centered long paragraphs, animation masking weak hierarchy, purposeless charts, text-wall slides, equal-emphasis posters, generic futuristic-AI visuals, copied category-leader identity, and any unsupported visual invention presented as an existing brand decision.

## 19. Research and inspiration

Research category norms/current visual culture when appropriate. Learn information architecture, interaction patterns, hierarchy, density, art direction, platform conventions and emerging patterns. Never copy logos, proprietary illustrations, distinctive layouts wholesale, brand-specific visual combinations or copyrighted assets without rights. Record pattern learnings as principles, not screenshot-only inspiration dumps.

External references may inspire a `PROPOSED` direction; they never prove an `ESTABLISHED` project rule.

## 20. Design source of truth

For projects large enough to need a system, prefer a discoverable structure such as:

```text
/design
  /brand
    brand.md
    logo/
  /tokens
    tokens.json
  /components
    component-guidelines.md
  /templates
  /references
  /assets
  /motion
  /print
DESIGN-STATUS.md
```

Equivalent structures are acceptable. Rules and approved assets must be discoverable by humans and AI agents.

## 21. Keeping the system current

Review for accessibility/platform changes, brand evolution, production formats, useful trends, repeated agent mistakes, recurring review feedback and new component/token needs. When a mistake repeats across projects, improve the system instead of fixing it repeatedly. Stable principles remain stable; trend examples may change more frequently.

## 22. Minimum design brief

Before substantial new-project design, define:

```md
Project:
Artifact mode(s):
Audience:
Primary goal:
Primary action/message:
Brand personality:
Must keep:
Must avoid:
Typography:
Color roles:
Imagery direction:
Icon/illustration direction:
Motion direction:
Accessibility target:
Platforms/formats:
Reference patterns:
Trend stance:
Approval owner:
Evidence/source-of-truth locations:
```

Missing information is not permission to hallucinate. Search existing evidence first; otherwise make only the smallest reversible, explicitly proposed/temporary choice.

## Final rules

**A strong design system makes the correct design easier to produce than an inconsistent one — for humans and AI.**

**No evidence → do not claim. No token → do not invent silently. No approved pattern → propose explicitly. Existing approved pattern → preserve it.**

An agent's job is not to display creativity on every task. It is to create the clearest, most appropriate, most consistent and evidence-backed artifact for the product, brand, audience and medium.