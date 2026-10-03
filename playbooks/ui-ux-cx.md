# UI, UX and Customer Experience Playbook

## Goal
Build interfaces that look consistent, let people finish their tasks, and provide dependable communication and recovery. Apply this alongside the product's architecture guide and the existing accessibility, performance and testing playbooks. Preserve each project's approved identity; this guide does not impose one visual style or technology stack.

## Best for
New products, existing-product audits, public websites, directories, marketplaces, editorial platforms and admin tools. Scale the work to the affected journey and risk.

## Start with the critical journey
Record the actor, goal, entry point, steps, success condition and recovery path before changing the interface. Include visitors, signed-in users, owners and staff where applicable. Separate confirmed requirements from assumptions.
For a directory, cover discovery → results → business detail → contact or correction; owner claim → evidence → review → outcome; staff review → decision → publication. Keep ownership, verification, publication and paid placement distinct.

## Practical implementation guidance

### UI foundations
Create a project-specific design contract with approved logos, colors, typography, spacing, radii, shadows, layout widths, breakpoints and image ratios. Use named tokens and shared components.
- Establish a readable type scale and heading hierarchy. Let long titles wrap naturally.
- Use a consistent spacing scale; distinguish section, card and control spacing.
- Define semantic colors for text, surfaces, borders, focus and status. Check contrast in every implemented state.
- Define primary, secondary and destructive buttons; inputs; feedback; navigation; cards; tables; dialogs; pagination and upload controls.
- Preserve logo proportions, clear space and suitable background variants. Preview images using contain for logos and intentional crops for photography.
- Use purposeful icons, illustrations and relevant imagery. Avoid repeated decorative images, fabricated assets and text-heavy filler.
- Keep public copy concise and human. Show technical details only when they help the user decide.
- Record approved assets and sources. Missing or unreadable files are blockers for asset review, not evidence that the logo was checked. Verify existence and decode before preview; restore from an authorized source when available, otherwise mark the review blocked.
- Study mature category products for patterns without copying their branding or layout.

### Navigation and responsive behavior
Keep header, footer, navigation labels, active state and breadcrumbs consistent. Provide mobile equivalents for essential desktop actions. Test representative small phone, large phone, tablet and desktop widths; record actual viewport dimensions, rather than asserting mobile readiness from CSS.
Design tables, filters and dialogs for small screens. Normal content should not require horizontal scrolling; wide tables may use labelled scrolling or an alternative view. Check long text, zoom, sticky elements, orientation and the virtual keyboard.

### Complete interaction patterns
For each relevant control define default, loading, empty, validation error, service error, success, disabled and permission-denied behavior. Do not show a false empty state while data is loading or an active control with no working effect.
Preserve safe input on failure, prevent duplicate writes, explain retry behavior and show clear completion. Disclose planned features rather than presenting them as working.
Use labelled fields, appropriate input types, field-level feedback and a useful error summary for complex forms. Warn before losing meaningful unsaved work. Confirm destructive or hard-to-reverse changes with specific consequences and a recovery path where feasible.

### Upload journey
Verify choose file → validation → upload feedback → preview → save → reopen → public/private display. State allowed types and size, whether upload immediately saves or only stages, and what removal changes.
Use server-side validation, generated object keys and permission checks. Test malformed, oversized and prohibited files, interrupted/failed uploads, retries and save failures. Respect publication/privacy rules for staged, draft, replaced and archived media. Document orphan cleanup and rollback where relevant.
Do not claim an upload is complete because its button exists or an API unit test passed.

### Customer experience
Map experience beyond the current screen:
| Moment | Required behavior |
| --- | --- |
| First visit | Clear value and obvious next action |
| Onboarding | Minimum necessary information, progress and safe resume where needed |
| Pending review | Honest status, expected next step and timing only when operationally supported |
| Decision | Clear outcome, useful reason and correction or appeal path when appropriate |
| Notification | Correct recipient, useful action, privacy-safe content and deduplication |
| Failure | Explain what happened, preserved state and how to recover |
| Support | Visible contact/help path, issue reference when useful, named operational owner |
| Resolution | Confirm outcome and record follow-up without exposing private information |

Define who owns support, escalation and response expectations. Do not invent service-level promises. Keep messages consistent across UI, email and other supported channels. Design session expiry, account recovery and abandonment recovery for affected flows.
Measure task completion, abandonment, zero-result searches, failed saves/uploads and support resolution where useful. Define event meaning and consent/privacy constraints before collection; never log credentials, private documents or sensitive field values.

### Accessibility
Use the detailed [Accessibility & Inclusive UX playbook](./accessibility-inclusive-ux.md). Target WCAG 2.2 AA where applicable and verify the relevant criteria against official guidance during implementation. As practical baselines, check normal text contrast of 4.5:1, large text 3:1, applicable non-text controls 3:1, and aim for 44×44 CSS-pixel primary touch targets. These checks alone do not establish compliance.
Verify semantics, names, visible focus, tab order, dialog focus/return, keyboard operation, reduced motion and meaningful alternatives. Do not treat automated scans as proof of usability.

## Testing workflow
1. Inventory routes, templates, roles, data states and affected journeys.
2. Identify environment, commit and fixtures. Use non-production fixtures for writes and destructive checks.
3. Review code and shared components, then test actual rendered flows.
4. Check desktop/mobile, keyboard, zoom, network failure and role boundaries according to scope.
5. Verify persistence after reload/reopen and the downstream public view.
6. Record evidence, fix findings and retest the original reproduction plus affected shared surfaces.
7. Review preview before release; perform post-deploy smoke checks and retain rollback information.

Use [the audit template](../templates/ui-ux-cx-audit.md). Mark each item Pass, Fail, Blocked, Not tested or Not applicable. Record a reason for the last three. Distinguish implemented, locally checked, preview verified and production verified. A build passing is not a browser pass.

### Finding severity
| Level | Impact |
| --- | --- |
| P0 | Private-data exposure, destructive corruption or critical widespread outage |
| P1 | Core task blocked, critical mobile/keyboard action inaccessible, misleading save/publication result |
| P2 | Significant friction, inconsistent navigation, poor feedback or degraded secondary task |
| P3 | Cosmetic polish or low-impact wording/alignment |

Assign severity from observed impact and affected audience, not visual dislike. Include route, role, reproduction, expected/actual result, evidence, owner, fix and retest.

## Production checklist
- [ ] Core journeys and supported roles are inventoried.
- [ ] Approved visual contract and shared components are used.
- [ ] Essential mobile actions remain available.
- [ ] Loading, empty, error, success and permission states are verified.
- [ ] Forms preserve safe input and prevent duplicate submissions.
- [ ] Upload/save/reopen/display works where relevant.
- [ ] Keyboard, focus, zoom and relevant screen-reader checks are recorded.
- [ ] Trust claims, paid placement and content provenance are accurate.
- [ ] Help, support ownership and recovery paths exist for affected journeys.
- [ ] Preview evidence identifies commit, environment and coverage.
- [ ] Critical failures are resolved; accepted risks have owner and due date.
- [ ] Deployment, smoke checks and rollback are defined.

Do not label an audit comprehensive without inventory and coverage evidence. If authentication, viewport control, missing assets or preview access prevents checks, list the gaps explicitly and continue independent authorized work.

## Common mistakes
- Treating a screenshot or a green build as a complete audit.
- Auditing only the homepage or the happy path.
- Recreating a design system for every page.
- Hiding desktop functionality on mobile.
- Confusing staged upload with saved publication.
- Publishing internal confidence scores or unsupported trust claims.
- Offering help without an operational resolution path.
- Marking inaccessible or unavailable checks as passed.

## Related guides
- [Professional Product Standard](../docs/10-professional-product-standard.md)
- [Accessibility & Inclusive UX](./accessibility-inclusive-ux.md)
- [Testing Strategy](./testing-strategy.md)
- [Performance Optimization](./performance-optimization.md)
- [Business Directory Architecture](../architectures/business-directory.md)
- [Production Readiness Checklist](../docs/production-readiness-checklist.md)
