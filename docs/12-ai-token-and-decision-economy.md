# AI Token and Decision Economy

We are building in the AI-agentic era.

Wrong decisions do not only waste developer time. They also waste AI tokens, context window, tool calls, build attempts, browser sessions, external API calls, CI minutes, and infrastructure usage.

DeveloperB should help users decide what to build before asking an AI agent to generate large amounts of code or run expensive workflows.

## Simple rule

> Decide first. Retrieve only what matters. Use the cheapest reliable method. Generate second.

Before an AI agent writes files or starts a long-running task, it should understand the system need, choose the smallest useful version, identify what should not be built yet, and select the least expensive reliable execution path.

## Why this matters

AI coding agents can move fast, but they can also:

- generate unnecessary files;
- add the wrong stack;
- overbuild version 1;
- add unused dependencies;
- create confusing architecture;
- rewrite working code;
- repeatedly send the same large context;
- use expensive models for trivial tasks;
- create unnecessary browser/CI/API usage;
- consume tokens explaining and fixing avoidable mistakes;
- lose context in long sessions.

A good decision before coding saves time, money, compute, and tokens.

## System-needs intake flow

When a user says:

> I need a system for my business.

The AI agent should not immediately code.

It should first produce:

1. simple understanding of the need;
2. version 1 scope;
3. what not to build first;
4. required modules;
5. suitable infrastructure/services;
6. required professional product areas;
7. database/data model needs;
8. admin needs;
9. upload/media needs;
10. external API needs;
11. security and privacy needs;
12. deployment and rollback needs;
13. automation/runtime needs;
14. token/cost-safe build order.

## Token-safe build order

Build in small, verifiable vertical slices:

1. architecture decision;
2. folder/data structure;
3. database schema or storage model;
4. one working API/service path;
5. one working user-facing flow;
6. matching admin/operations flow where required;
7. upload or external API only if needed;
8. security/permission basics;
9. local/isolated test;
10. preview verification;
11. deployment;
12. improvements.

Do not generate everything at once.

## AI context-saving rules

Agents should:

- inspect the project registry/source record first;
- read only relevant files first;
- retrieve the closest decisions/standards instead of pasting the entire knowledge base;
- summarize current project state before changes;
- make one coherent feature at a time;
- avoid repeating long explanations after context is established;
- use a short durable project/handoff record when useful;
- avoid creating large boilerplate unless justified;
- avoid changing unrelated files;
- report changed files and verification clearly.

For large knowledge bases, prefer source-aware retrieval/search over continuously increasing prompt size. Retrieved knowledge should preserve provenance so the agent can show which source supported a decision.

## Task-based model routing

Do not use the strongest or most expensive model for every task.

Use the least expensive reliable method that meets the quality requirement:

```text
deterministic code/rules
→ structured classifier/decision model
→ low-cost language model
→ stronger reasoning/coding model
→ specialist/frontier model only when justified
```

Examples:

- validation, permissions, arithmetic, and deterministic business rules should remain deterministic;
- simple tagging, extraction, categorization, or metadata suggestions may use low-cost methods;
- difficult debugging, architecture, research synthesis, and ambiguous reasoning may justify stronger models;
- irreversible or high-consequence decisions still require explicit safeguards and often human review.

Before changing a default model, benchmark representative portfolio tasks for:

- output quality;
- failure/error rate;
- latency;
- input/output cost;
- retry rate;
- tool-call behavior.

Do not select models from benchmark headlines alone.

## Decision before dependency

Before adding a package, ask:

- can native platform features do this?
- does an existing project component already solve it?
- is the package compatible with the runtime?
- what is its license and maintenance state?
- will it increase bundle/dependency/security burden?
- will this create more debugging work later?

## Decision before service

Before adding a service, ask:

- what exact requirement needs this service?
- can version 1 work without it?
- what binding/configuration is required?
- what failure mode does it introduce?
- what will it cost at current and expected scale?
- how will usage be observed?
- what is the exit/migration path?

## Decision before external API

Before adding an external API, ask:

- is this required in version 1?
- what private values are needed?
- what data leaves the app?
- what happens if the API fails?
- how do we test without wasting calls?
- can we mock it during development?
- how are retries/rate limits/costs bounded?

## Cost is an operational signal

Do not wait until the monthly invoice to discover a runaway automation.

Where the provider supports it, use usage dashboards, budget alerts, per-project accounting, sampled telemetry, or other cost signals for:

- AI/model calls;
- browser automation;
- long-running compute/containers;
- serverless execution;
- workflows/queues;
- storage/media;
- logs/traces/observability;
- search/data APIs;
- CI/build minutes.

An alert should trigger investigation, not automatic destructive cleanup, unless a deliberate circuit breaker was designed and approved.

## Runtime economy

A cheap model running forever is not cheap.

Recurring or long-running automation needs:

- explicit trigger/frequency;
- maximum duration;
- retry limit;
- stop condition;
- cost boundary;
- cancellation/orphan behavior;
- evidence/logging.

Prefer disposable/isolated execution for risky or heavy agent tasks and preserve only intentional outputs.

See [`13-agent-runtime-observability-and-cost-standard.md`](13-agent-runtime-observability-and-cost-standard.md) for the full agent-runtime standard.

## Token waste warning signs

Stop and rethink when:

- the agent keeps rewriting the same files;
- the project adds services without a clear reason;
- the explanation becomes longer than the actual task;
- the agent asks for decisions already recorded elsewhere;
- debugging jumps between many possible causes without evidence;
- the context contains stale plans that no longer match the code;
- the same large source material is repeatedly sent unchanged;
- a simple task always uses the strongest model;
- automation retries without a clear limit;
- a simple app now has enterprise architecture.

## Required output for broad project requests

For any new system request, answer with:

```text
System type:
Version 1 goal:
Must-have modules:
Do not build yet:
Architecture/runtime choice:
Professional product checklist:
Database/data model:
External APIs:
Upload/media needs:
Security/privacy needs:
Automation needs:
Model/tool strategy:
Build order:
Cost/token-saving advice:
Next task:
```

## AI agent instruction

Do not start coding immediately after a broad request.

First produce a small, evidence-based, cost-aware implementation plan. Reuse existing decisions and retrieve only relevant context. Confirm the smallest useful version. Then build one coherent slice at a time.
