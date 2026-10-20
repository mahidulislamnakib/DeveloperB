# Production Readiness Scorecard

Use this before any production release. Score each section from 0 to 2.

- **0** = missing or unknown
- **1** = partially implemented
- **2** = verified and documented

Maximum score: **20**.

| Area | Questions | Score |
| --- | --- | --- |
| Architecture | Is every Cloudflare service justified by a real requirement? | /2 |
| Data safety | Are D1 migrations reversible or backed up? Is R2 metadata separated from objects? | /2 |
| Security | Are secrets protected, public inputs validated, and abuse controls enabled? | /2 |
| Identity | Is admin/internal access protected with appropriate authentication or Access? | /2 |
| Bindings | Are all Wrangler bindings and environment names verified? | /2 |
| Performance | Are cache rules intentional and unsafe content excluded from cache? | /2 |
| Reliability | Are retries, async jobs, timeouts, and idempotency considered? | /2 |
| Observability | Can the team inspect failures with logs, request IDs, and useful events? | /2 |
| Deployment | Is there a verified release process and rollback path? | /2 |
| Cost | Are high-volume requests, storage, AI, egress, and background jobs understood? | /2 |

## Release interpretation

| Score | Meaning | Release recommendation |
| --- | --- | --- |
| 18–20 | Production-ready | Release with normal monitoring |
| 14–17 | Nearly ready | Resolve documented gaps before broad release |
| 10–13 | Risky | Use staging or limited pilot only |
| 0–9 | Not ready | Do not deploy to production |

## Relationship to the 86-point quality policy

The score is a **planning aid**, never a security certificate. Use [the capability-aware quality catalog](QUALITY-GATES.md) to check actual applicable controls. A single unresolved release-blocking item (for example, leaked production credentials, critical exploitable dependency risk, broken tenant isolation, unverified payment trust or missing webhook signatures) takes precedence over a high numeric total. Do not award `2 = verified` without evidence.

Profiles are starting points, not automatic assumptions about product features. All applicable controls begin unverified; keep future-only controls as not applicable and reopen them as capabilities change.

## Mandatory production blockers

A project cannot be production-ready when any of these are true:

- Secrets are present in source control.
- A destructive data operation lacks recovery or migration documentation.
- The deployed Worker lacks required bindings or environment variables.
- Public write endpoints have no validation or abuse protection.
- Errors cannot be investigated using logs or request context.
- There is no known rollback path.

## Suggested release report

```md
# Production Readiness Report

Date:
Release / commit:
Environment:

Architecture: /2
Data safety: /2
Security: /2
Identity: /2
Bindings: /2
Performance: /2
Reliability: /2
Observability: /2
Deployment: /2
Cost: /2

Total: /20

Known risks:
Rollback plan:
Owner:
```
