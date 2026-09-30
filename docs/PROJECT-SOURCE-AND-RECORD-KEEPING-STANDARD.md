# Project Source and Record-Keeping Standard

> Operating standard for keeping ChatGPT projects, GitHub repositories, connected sources, local work, deployment records, and decision history aligned.

## 1. Purpose

A project becomes expensive and fragile when its context is scattered across chats, local files, repositories, Drive folders, email threads, deployed services, and undocumented decisions.

This standard prevents that by defining a source-of-truth model, a project source registry, evidence rules, local commit discipline, and handoff records.

The goal is that any future ChatGPT session or engineering agent can answer:

- What is this project?
- Is it active, paused, experimental, legacy, or archived?
- What is the canonical repository and branch?
- What is live in production?
- What files, Drive folders, chats, emails, domains, deployments, databases, and assets are authoritative?
- Which decisions are final versus still open?
- What work is incomplete?
- What was changed locally but not committed or pushed?
- What is the next safe task?

## 2. ChatGPT Projects are context hubs, not automatic source collectors

Do not assume ChatGPT automatically discovers and permanently adds every relevant source to a Project.

Project chats, uploaded files, project instructions, saved responses, and explicitly added app links can provide project context. Connected apps can also be searched when invoked. However, source coverage must be intentionally maintained.

Therefore every important project must have an explicit source registry rather than relying on memory or chat history alone.

## 3. Source hierarchy

Classify sources by authority.

### Tier 1 — canonical operational sources

Examples:

- production repository and canonical branch;
- production domain;
- production database/schema/migrations;
- approved brand assets;
- current product requirements;
- current legal/policy documents;
- active deployment configuration;
- current project instructions and operating standards.

Tier 1 sources override stale summaries unless a newer verified decision says otherwise.

### Tier 2 — active supporting sources

Examples:

- Google Drive project folder;
- current proposals/specifications;
- product briefs;
- design references;
- data sheets;
- meeting notes;
- recent client/user feedback;
- active issue tracker and PR history;
- relevant email threads.

### Tier 3 — historical/reference sources

Examples:

- old prototypes;
- retired branches;
- archived documents;
- superseded designs;
- old client requirements;
- previous deployment notes.

Historical material must never silently override current implementation.

### Tier 4 — external research

Examples:

- official framework/platform docs;
- laws/regulators;
- competitor/product references;
- GitHub repositories used for inspiration;
- standards/specifications;
- current market research.

External sources are evidence, not project truth unless an explicit decision adopts them.

## 4. Required Project Source Registry

Every significant project should maintain a project-source record with at least:

- Project name
- Project category
- Owner/business context
- Status: active / paused / experimental / legacy / archive-candidate
- ChatGPT Project name if applicable
- Canonical GitHub repository
- Canonical branch
- Production URL
- Preview/staging URL
- Google Drive folder/file links where relevant
- Key email thread/search terms where relevant
- Design/Figma/Canva source if applicable
- Official logo/brand asset location
- Database and migration location
- Storage/media location
- Auth provider
- Email provider
- Analytics/tracking setup
- Social account/asset references
- Legal/policy source locations
- Environment/config source
- Active issues/PRs
- Build/deploy instructions
- Known blockers
- Known technical debt
- Last verified date
- Next review date

Never store secret values in this registry.

## 5. Project instruction package

Each ChatGPT Project should have concise project instructions covering:

- product purpose;
- current status;
- canonical repository/branch;
- production/preview URLs;
- design/brand rules;
- key architecture decisions;
- known constraints;
- what must never be invented;
- current priorities;
- where authoritative sources live;
- which global DeveloperB standards apply.

Do not put the entire product history into project instructions. Keep them compact and point to canonical sources.

## 6. Save durable decisions, not every conversation

Important decisions should survive individual chats.

Save or record:

- architecture decisions;
- brand decisions;
- final workflows;
- data-model decisions;
- integration decisions;
- legal/compliance decisions;
- production incidents and fixes;
- migration decisions;
- final launch requirements;
- reusable research findings.

Do not save temporary brainstorming as authoritative truth without marking its status.

Use simple states:

- PROPOSED
- ACCEPTED
- SUPERSEDED
- REJECTED
- NEEDS REVIEW

## 7. Local engineering discipline

When work happens locally, the project record must not lose track of it.

Before work:

1. Fetch/prune remote state.
2. Confirm repository, branch, and remote.
3. Inspect `git status --short`.
4. Identify existing uncommitted work and preserve it.
5. Confirm the task and acceptance criteria.

During work:

- keep changes scoped;
- avoid unrelated edits;
- update migrations/docs/tests when required;
- use clear filenames and paths;
- avoid temporary hardcoded production values;
- keep generated artifacts out of source unless intentionally tracked.

Before completion:

1. Run relevant checks.
2. Re-fetch remote state if work was long-running.
3. Review diff.
4. Confirm no secrets or accidental files are included.
5. Commit with a meaningful message.
6. Push the intended branch.
7. Verify local and remote commit SHA match.
8. Open/update the PR when workflow requires it.
9. Record the PR/commit and remaining work.

A local-only change is not a completed shared project change.

## 8. Commit and tagging rules

Commit messages should explain the product change, not merely the file operation.

Good examples:

- `Fix creator publication lifecycle after moderation approval`
- `Add staged OpenPath ingestion review workflow`
- `Refresh portfolio project data and lead conversion flow`

Avoid meaningless messages such as:

- `update`
- `fix`
- `changes`
- `final`

Use repository tags/releases for meaningful production milestones when they provide operational value. Do not create release/tag noise for every tiny change.

## 9. Build record

Each active engineering project should have a lightweight build record such as `BUILD-STATUS.md` or equivalent containing:

- current active task;
- starting branch/SHA;
- acceptance criteria;
- files/areas changed;
- verification performed;
- migrations/config changes;
- preview/production state;
- blockers;
- unresolved risks;
- final commit/PR;
- next safe task.

The record must be useful to another agent or future session without replaying the entire chat.

## 10. Source capture workflow for ChatGPT Projects

At project setup or audit time:

1. Add/upload only high-value project files.
2. Add supported connected-source links when they improve ongoing context.
3. Save durable ChatGPT responses such as accepted architecture or final decisions as project sources.
4. Keep the canonical repository URL and branch in project instructions.
5. Add the Drive folder rather than duplicating many files where supported and useful.
6. Maintain a registry of sources that cannot be directly attached, such as domains, production services, dashboards, or private systems.
7. Mark outdated sources as superseded or remove them from active project context.

Do not overload a project with hundreds of stale files merely because storage is available.

## 11. Source freshness

Every important source should have one of these freshness classes:

- LIVE — dynamically queried or canonical current system
- CURRENT — verified recently and expected to remain valid
- PERIODIC — requires scheduled review
- HISTORICAL — reference only
- UNKNOWN — must be verified before reliance

Examples:

- GitHub canonical branch: LIVE/CURRENT
- production privacy policy: CURRENT but periodic legal review
- social-platform image-size guide: PERIODIC
- old proposal: HISTORICAL
- unknown local ZIP backup: UNKNOWN

## 12. Existing project audit rule

Before substantial work on an old/incomplete project:

- inspect current repository and branch state;
- inspect live site if one exists;
- inspect open issues/PRs;
- inspect migrations and deployment configuration;
- identify source drift;
- identify missing project instructions;
- identify stale or conflicting files;
- identify local-only or abandoned work where visible;
- classify the project before adding new scope.

Do not continue building on an uncertain foundation merely because code already exists.

## 13. Project categories

Use explicit project categories to avoid mixing contexts:

- Personal
- Commercial / income-generating
- Employer/client work
- Experimental / learning
- Community/non-profit
- Internal tooling
- Archived/legacy

Unrelated colleague/client work must not contaminate a personal product portfolio or shared standards unless intentionally included.

## 14. Evidence-first status reporting

Never say a project is complete, deployed, fixed, indexed, migrated, or synchronized without evidence.

Evidence may include:

- commit SHA;
- PR state;
- workflow result;
- deployed response;
- database migration output;
- screenshot/browser validation;
- direct API result;
- production smoke test;
- source registry verification.

Distinguish clearly between:

- verified;
- inferred;
- planned;
- blocked;
- not yet checked.

## 15. Handoff package

A project handoff should be possible in a short structured record:

```text
Project
Purpose
Status
Canonical repo/branch
Production/preview
Current architecture
Important sources
Brand rules
Current task
Known issues
Recent decisions
Last verified
Next safe task
```

This is the minimum context needed to move safely between ChatGPT chats, local agents, Codex/Work, or another engineer.

## 16. No repeated discovery

Before asking Nakib for information or repeating research:

1. Search current project sources.
2. Search repository docs/issues/PR history.
3. Check known project decisions.
4. Check connected sources when appropriate.
5. Only ask when the information is genuinely unavailable, ambiguous, or requires a new business decision.

Time spent rediscovering known facts is avoidable project cost.

## 17. Final principle

A project is not only its code.

A professional project consists of:

**code + data + design + brand + decisions + sources + deployment + evidence + history + next-step clarity.**

If those records are kept aligned, one person with strong AI assistance can operate many projects without losing context or repeatedly paying the cost of rediscovery.
