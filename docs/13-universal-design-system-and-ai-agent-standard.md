# Universal Design System & AI-Agent Standard

> One design language across product UI, graphics, social media, presentations, documents, print, motion, marketing, and future surfaces — usable by humans and any AI agent.

## Why this exists

DeveloperB must not treat design as decoration added after engineering. Design is a governed system for communication, trust, recognition, usability, accessibility, and brand consistency.

This standard applies to:

- web and app UI;
- dashboards and admin systems;
- graphics and campaign assets;
- social media posts and covers;
- presentations and pitch decks;
- documents, reports, proposals, invoices, certificates, and PDFs;
- print collateral, packaging, signage, and event materials;
- icons, illustrations, photography, video frames, motion graphics, and animation;
- AI-generated or AI-assisted visual work;
- future surfaces not yet defined.

The goal is not to make every artifact look identical. The goal is to make every artifact feel like it belongs to the same product or brand while remaining appropriate to its medium, audience, and task.

---

## 1. Core design principles

Every design decision must pass these principles:

1. **Purpose before style** — know the audience, message, task, and desired action before choosing visual treatment.
2. **Hierarchy before decoration** — the user should know what to look at first, second, and third.
3. **Consistency before novelty** — reuse established visual rules before inventing new ones.
4. **Meaning before ornament** — every icon, image, illustration, color, animation, and visual effect must have a job.
5. **Context before trend** — a trend is optional; brand clarity and usability are mandatory.
6. **Human before AI-polished** — avoid sterile, generic, over-smoothed, obviously AI-generated visual language.
7. **System before one-off** — reusable tokens, patterns, templates, and components are preferred over isolated styling.
8. **Accessibility by default** — legibility, contrast, focus, state clarity, motion sensitivity, and content comprehension are design requirements.
9. **Real content before placeholder aesthetics** — test layouts with realistic titles, names, photos, data, edge cases, long text, short text, and missing data.
10. **Responsive and adaptable by design** — the system should survive different screen sizes, aspect ratios, languages, formats, and media.

---

## 2. Design invariants

These are the elements that should remain stable unless a deliberate redesign is approved:

- brand identity and logo rules;
- core color roles;
- typography roles;
- spacing rhythm;
- corner/radius philosophy;
- icon family and stroke logic;
- image treatment philosophy;
- illustration style;
- button and control hierarchy;
- state language;
- motion character;
- tone of voice;
- layout rhythm;
- data visualization conventions;
- accessibility baseline.

An AI agent must not change these because another style “looks modern.”

---

## 3. Design tokens as the source of truth

Design decisions should be represented with semantic tokens wherever practical.

### Token groups

- `color/brand/*`
- `color/text/*`
- `color/surface/*`
- `color/border/*`
- `color/state/*`
- `type/family/*`
- `type/size/*`
- `type/weight/*`
- `type/line-height/*`
- `space/*`
- `radius/*`
- `shadow/*`
- `stroke/*`
- `motion/duration/*`
- `motion/easing/*`
- `opacity/*`
- `layout/max-width/*`
- `layout/gutter/*`
- `z/*`

Prefer semantic names such as `color/text/secondary` over raw-value names such as `gray-600` when the token is intended to express usage.

### Rules

- Raw values should live behind tokens.
- Repeated magic numbers are a design-system failure.
- Tokens must work across design tools and code where possible.
- Do not create a new token for a single arbitrary exception unless that exception is intentional and repeatable.
- New tokens require a stated purpose.

---

## 4. Typography system

Typography must be role-based, not improvised screen by screen.

Define roles such as:

- display;
- page title;
- section title;
- card title;
- body;
- small body;
- label;
- caption;
- data/number;
- quote;
- code/technical text where relevant.

### Typography rules

- Limit the number of font families unless brand requirements justify more.
- Use scale and weight intentionally; do not rely only on boldness for hierarchy.
- Avoid oversized headings that force poor wrapping or consume disproportionate space.
- Headings should stay on one line where naturally possible, but never by shrinking them to an unreadable size.
- Maintain comfortable line length for long-form reading.
- Use proper punctuation, case, and typographic rhythm.
- Avoid ALL CAPS for long text.
- Do not bake text into images when live text is possible.
- Support the scripts/languages the product actually needs; do not choose a font solely because it looks good in English.

---

## 5. Color system

Color is a communication system, not decoration.

### Define roles

- brand primary and secondary;
- surfaces/backgrounds;
- text hierarchy;
- borders/dividers;
- interactive states;
- success, warning, danger, and info;
- charts/data series;
- overlays and disabled states.

### Rules

- Do not use color alone to communicate status.
- Preserve text and non-text contrast.
- Avoid arbitrary rainbow palettes in dashboards.
- Decorative gradients must not reduce clarity.
- Dark mode, print output, projection, and low-quality display conditions should be considered when relevant.
- Brand colors may be expressive in marketing assets but must remain functional in product UI.

---

## 6. Layout, spacing, and composition

Use a repeatable rhythm instead of visual guesswork.

### Product interfaces

- establish a spacing scale;
- define page gutters and max widths;
- align to a grid;
- keep comparable objects aligned;
- preserve predictable information hierarchy;
- use whitespace to group information;
- avoid excessive card nesting;
- avoid unnecessary boxes and borders around everything;
- design for mobile, tablet, laptop, large desktop, zoom, and content expansion.

### Graphics and campaigns

- establish a focal point;
- respect safe areas;
- control edge density;
- account for platform crops;
- preserve logo clear space;
- avoid filling every empty area;
- keep a predictable brand signature without turning every asset into the same template.

### Print

- include bleed/safe area when required;
- use suitable resolution;
- verify CMYK/spot-color requirements where production depends on them;
- check minimum readable text size in physical output;
- proof QR codes and small legal text.

---

## 7. Photography, imagery, and art direction

Images should support the real subject and brand.

### Prefer

- authentic people and environments;
- relevant product/context photography;
- culturally appropriate local imagery where applicable;
- editorial framing with a clear subject;
- consistent grading and crop philosophy;
- real screenshots/data when demonstrating a product.

### Avoid

- unrelated stock photos;
- repeating the same photo across unrelated sections;
- generic corporate handshake imagery unless genuinely relevant;
- uncanny AI people;
- fake UI presented as a real product state;
- impossible physical details;
- decorative imagery that distracts from the message.

### AI-generated imagery

When AI imagery is used:

- preserve brand art direction;
- check hands, text, anatomy, objects, shadows, reflections, product details, cultural details, and physical plausibility;
- do not imply a generated person/place/event is real;
- do not fabricate product functionality;
- retain provenance/usage notes where the project requires them.

---

## 8. Iconography and illustration

Use one coherent visual grammar.

Define:

- filled vs outline;
- stroke width;
- corner character;
- optical size;
- default bounding box;
- brand vs utility icon usage;
- illustration complexity;
- texture and shading rules.

### Rules

- Do not mix unrelated icon packs without normalization.
- Icons must clarify action or meaning, not merely decorate headings.
- Repeated actions use repeated icons.
- Pair ambiguous icons with text labels.
- Illustrations should share a common perspective, proportion, palette, and rendering language.

---

## 9. Motion and animation

Motion must explain, orient, provide feedback, or add controlled brand character.

Use motion for:

- state transitions;
- hierarchy and spatial continuity;
- success/error feedback;
- onboarding or explanation;
- purposeful storytelling;
- controlled campaign expression.

Avoid:

- animation on everything;
- long blocking intros;
- motion that delays core tasks;
- fake progress;
- excessive parallax;
- autoplay effects that compete with reading;
- looping visual noise.

Support reduced-motion preferences for digital interfaces where applicable.

---

## 10. Data visualization

Charts must communicate a question and answer, not fill space.

### Rules

- start with the decision or comparison the chart should support;
- choose chart type based on data relationship;
- maintain consistent color meanings;
- label units and time periods;
- avoid unnecessary 3D;
- do not truncate axes deceptively;
- show missing/partial data honestly;
- preserve legibility on mobile and in exported reports;
- use tables when exact values matter more than visual pattern.

---

## 11. Artifact-specific design modes

The design system has one identity but multiple modes.

### A. Product UI mode

Priority: usability, clarity, state, responsiveness, accessibility, performance.

### B. Marketing/web campaign mode

Priority: message, brand expression, conversion, storytelling, trust.

### C. Social/graphic mode

Priority: stopping power, fast comprehension, platform crop safety, brand recognition.

### D. Presentation mode

Priority: spoken narrative, projection readability, slide-to-slide pacing, visual storytelling.

Do not turn slides into documents. One slide should normally communicate one primary idea.

### E. Document/report mode

Priority: reading flow, evidence, navigation, print/export quality, restrained branding.

### F. Print/event mode

Priority: physical viewing distance, production constraints, legibility, environmental context.

### G. Motion/video mode

Priority: timing, sequence, sound-safe comprehension, captioning, visual continuity.

AI agents must identify the mode before designing.

---

## 12. Trend policy

DeveloperB should track design trends, but trends never override brand fundamentals.

### Trend adoption test

Before applying a trend, answer:

1. Does it support the audience and message?
2. Does it fit the brand personality?
3. Does it improve communication or emotional impact?
4. Can it remain accessible and usable?
5. Will it still look acceptable after the trend fades?
6. Can it be implemented consistently across the relevant surfaces?
7. Is it distinct enough from generic AI output?

If not, do not use it.

### 2026 signals worth monitoring

Current industry trend research points toward:

- tactile and sensory texture;
- human imperfection and handmade/analog cues;
- restrained editorial layouts and simpler branding;
- authentic people and real emotional connection;
- local cultural specificity;
- playful surrealism when appropriate;
- cinematic visual storytelling;
- AI as a production partner while preserving human authorship and recognizable brand character.

Treat these as inspiration, not mandatory styles.

### Trend register

Projects may keep a simple trend register:

| Trend | Status | Suitable for | Avoid for | Review date |
|---|---|---|---|---|
| Example: tactile texture | experiment | campaign graphics | dense admin UI | quarterly |

Statuses: `observe`, `experiment`, `approved`, `retire`.

---

## 13. Brand consistency matrix

Every significant project should define a small matrix before large-scale visual production.

| Area | Fixed | Flexible | Forbidden |
|---|---|---|---|
| Logo | approved marks, clear space | placement by format | distortion, recolor outside rules |
| Color | semantic brand palette | campaign accents | random palettes |
| Typography | approved roles | display treatment | arbitrary font switching |
| Imagery | art-direction rules | subject/crop | unrelated stock/uncanny AI |
| Icons | chosen family/style | icon selection | mixed visual grammar |
| Layout | spacing/grid logic | composition | inconsistent alignment |
| Motion | timing/easing character | storytelling intensity | distracting loops |
| Voice | tone principles | campaign phrasing | generic AI filler |

---

## 14. AI-agent design contract

This repository must work with any capable AI agent: ChatGPT, Codex, Claude, Gemini, Copilot, Cursor, Figma AI, Canva AI, future agents, or internal automation.

### Before designing

The agent must inspect, in this order when available:

1. `AGENTS.md`
2. this document;
3. project brief/product charter;
4. brand guide and brand boundary;
5. design tokens/theme files;
6. existing components/templates;
7. recent approved representative work;
8. content/data constraints;
9. target artifact dimensions/platform;
10. accessibility and production requirements.

The agent should not invent a new style before inspecting existing approved work.

### Agent must explicitly determine

- artifact mode;
- target audience;
- primary message/task;
- brand invariants;
- reusable patterns already available;
- required dimensions/breakpoints;
- content hierarchy;
- interaction states if digital;
- image/icon requirements;
- accessibility constraints;
- production/export format;
- what may change and what must remain unchanged.

### Agent must not

- redesign the brand without being asked;
- replace approved assets with generic AI assets;
- choose arbitrary fonts/colors/radii;
- duplicate components instead of reusing them;
- insert filler text merely to complete a layout;
- introduce a visual trend because it is fashionable;
- sacrifice mobile or accessibility for aesthetics;
- mix icon or illustration styles;
- assume every section needs a card;
- use the same stock photo repeatedly;
- create impossible/false product imagery;
- silently remove content to make a layout fit.

---

## 15. Cross-agent handoff format

To reduce drift between agents, every meaningful design task should leave a small handoff record.

```md
## Design handoff
Artifact: <page/post/deck/report/etc.>
Mode: <product/marketing/social/presentation/document/print/motion>
Audience: <who>
Goal: <primary message or task>

### Invariants used
- <token/component/brand rule>

### New decisions
- <decision + reason>

### Assets
- <source/file/license/credit where relevant>

### Responsive/format notes
- <breakpoints/crops/safe areas/export>

### Accessibility
- <contrast/focus/alt/captions/reduced motion/etc.>

### Verification
- <what was reviewed/tested>

### Open risks
- <anything unverified>
```

This should be short and durable. Do not store lengthy AI reasoning.

---

## 16. Design review gates

A visual artifact is not complete just because it renders.

### Gate 1 — Purpose

- primary message/task is obvious;
- hierarchy matches importance;
- audience/context is appropriate.

### Gate 2 — Brand

- correct assets;
- correct typography/color/icon/imagery language;
- no unapproved style drift.

### Gate 3 — Consistency

- spacing and alignment follow the system;
- repeated elements behave and look the same;
- states and controls are predictable.

### Gate 4 — Accessibility

- contrast;
- readable type;
- keyboard/focus where interactive;
- color is not the only signal;
- reduced motion where relevant;
- alt/captions/transcripts where relevant.

### Gate 5 — Content

- no placeholder or generic AI copy;
- no incorrect claims;
- realistic edge cases tested;
- image subject matches content.

### Gate 6 — Format

- correct dimensions;
- responsive/crop behavior;
- export quality;
- file size/performance where relevant;
- print production requirements where relevant.

### Gate 7 — Visual QA

Review the actual output, not just source code or layer structure.

For digital products, verify at least representative:

- mobile;
- desktop;
- loading;
- empty;
- error;
- success;
- disabled;
- long content;
- short content;
- missing image/data;
- permission-restricted state where applicable.

---

## 17. Anti-patterns

Reject designs that exhibit these common AI/design failures:

- everything in rounded cards;
- excessive glassmorphism;
- random gradients;
- gradient text without a strong reason;
- huge hero headings with little useful content;
- decorative icon bubbles beside every heading;
- too many pills/badges;
- meaningless statistics;
- fake testimonials;
- duplicate imagery;
- inconsistent illustration families;
- mixed photography grading;
- overuse of shadows;
- extreme spacing that wastes screen area;
- tiny low-contrast text;
- center-aligning long paragraphs;
- using animation to hide weak hierarchy;
- dashboard charts with no decision purpose;
- slide decks that are walls of text;
- poster designs where everything has equal emphasis;
- generic “futuristic AI” visuals unrelated to the product;
- copying the visual identity of a category leader.

---

## 18. Research and inspiration policy

Agents should research category norms and current visual culture when appropriate.

Use mature products and leading creative work to learn:

- information architecture;
- interaction patterns;
- visual hierarchy;
- content density;
- art direction;
- platform conventions;
- emerging patterns.

Never copy:

- logos;
- proprietary illustrations;
- distinctive layouts wholesale;
- brand-specific color/typography combinations;
- copyrighted creative assets without rights.

Document useful pattern learnings as principles, not screenshots-only inspiration dumps.

---

## 19. Design source-of-truth structure for projects

For projects large enough to need a system, prefer a structure similar to:

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

Equivalent structures are acceptable. The important requirement is that design rules and approved assets are discoverable by both humans and AI agents.

---

## 20. Keeping the system current

Design guidance must evolve deliberately.

Review periodically for:

- accessibility standard changes;
- platform behavior changes;
- brand evolution;
- new production formats;
- useful emerging trends;
- repeated agent mistakes;
- recurring design-review feedback;
- new component/token needs.

When a recurring mistake appears in multiple projects, improve the system instead of fixing the same mistake repeatedly.

Do not rewrite the system for every trend cycle. Stable principles remain stable; the trend register and examples may change more frequently.

---

## 21. Minimum design brief for any new project

Before substantial design work, define at least:

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
```

If information is missing, use existing repo standards and make the smallest reversible assumption.

---

## Final rule

**A strong design system should make the correct design easier to produce than an inconsistent one — for both humans and AI.**

The job of an agent is not to display its creativity on every task. Its job is to create the clearest, most appropriate, most consistent artifact for the product, brand, audience, and medium.
