/**
 * DeveloperB Quality Policy v1 — reference controls, not asserted audit results.
 *
 * Five real user-provided checklists (20 UX + 19 application security +
 * 16 key hygiene + 15 coding-agent rules + 16 generated-code pitfalls).
 * All 86 controls remain in the catalog, including those not applicable to
 * a particular product. Never infer PASS from the reference screenshots.
 */
export const qualityCapabilities = [
  "web-ui", "public-api", "auth", "multi-tenant", "database", "admin",
  "uploads", "webhooks", "paid-api", "secrets", "ai", "payments",
  "integrations", "user-data",
] as const;

export type QualityCapability = (typeof qualityCapabilities)[number];
export type QualitySeverity = "release-blocker" | "review-required" | "good-practice";
export type QualityCategory = "web-quality" | "app-security" | "key-hygiene" | "agent-rules" | "generated-code";
export type QualityStatus = "unverified" | "pass" | "fail" | "risk-accepted" | "not-applicable";

type RuleRow = readonly [
  id: string, label: string, requires: readonly QualityCapability[], severity: QualitySeverity,
];

const rows: Record<QualityCategory, readonly RuleRow[]> = {
  "web-quality": [
    ["U01", "No horizontal scrolling", ["web-ui"], "review-required"],
    ["U02", "Find and repair broken links", ["web-ui"], "review-required"],
    ["U03", "Provide functional mobile navigation", ["web-ui"], "review-required"],
    ["U04", "Provide the correct favicon", ["web-ui"], "good-practice"],
    ["U05", "Use correct unique page titles", ["web-ui"], "review-required"],
    ["U06", "Verify footer links", ["web-ui"], "review-required"],
    ["U07", "Provide a real custom 404", ["web-ui"], "review-required"],
    ["U08", "Use a correct copyright year", ["web-ui"], "good-practice"],
    ["U09", "Repair broken buttons and CTAs", ["web-ui"], "review-required"],
    ["U10", "Show loading states", ["web-ui"], "review-required"],
    ["U11", "Remove placeholder or fictitious public content", ["web-ui"], "review-required"],
    ["U12", "Remove browser debug logs and private data logging", ["web-ui"], "review-required"],
    ["U13", "Remove genuinely unused navigation", ["web-ui"], "good-practice"],
    ["U14", "Provide useful empty states", ["web-ui"], "review-required"],
    ["U15", "Verify keyboard tab order and focus", ["web-ui"], "review-required"],
    ["U16", "Show safe actionable error messages", ["web-ui"], "review-required"],
    ["U17", "Show truthful success feedback", ["web-ui"], "review-required"],
    ["U18", "Optimize all pages for mobile", ["web-ui"], "review-required"],
    ["U19", "Compress and responsibly serve original images", ["web-ui"], "review-required"],
    ["U20", "Identify and fix mobile overflow", ["web-ui"], "review-required"],
  ],
  "app-security": [
    ["S01", "Enforce tenant row-level data protection", ["multi-tenant", "database"], "release-blocker"],
    ["S02", "Authenticate and authorize protected API routes", ["auth", "public-api"], "release-blocker"],
    ["S03", "Never trust client-supplied authorization or values", ["public-api"], "release-blocker"],
    ["S04", "Enforce appropriate rate limits", ["public-api"], "release-blocker"],
    ["S05", "Validate inputs and escape output by context", ["public-api"], "release-blocker"],
    ["S06", "Parameterize database queries", ["database"], "release-blocker"],
    ["S07", "Restrict CORS to appropriate origins", ["public-api"], "review-required"],
    ["S08", "Enforce HTTPS with verified redirects", ["web-ui"], "release-blocker"],
    ["S09", "Block insecure direct object reference access", ["auth"], "release-blocker"],
    ["S10", "Disable production debug features and stack disclosure", [], "release-blocker"],
    ["S11", "Apply human/bot checks to abuse-prone public forms", ["public-api"], "review-required"],
    ["S12", "Record sensitive administrative actions", ["admin"], "release-blocker"],
    ["S13", "Keep private objects and storage inaccessible by default", ["uploads"], "release-blocker"],
    ["S14", "Authorize administrative pages and backend actions", ["admin"], "release-blocker"],
    ["S15", "Patch known critical/high dependency vulnerabilities", [], "release-blocker"],
    ["S16", "Validate upload content, types and size", ["uploads"], "release-blocker"],
    ["S17", "Complete evidence-based security review", [], "review-required"],
    ["S18", "Apply compatible browser and API security headers", ["web-ui"], "review-required"],
    ["S19", "Verify webhook signatures and replay protection", ["webhooks"], "release-blocker"],
  ],
  "key-hygiene": [
    ["K01", "Store private keys outside source code", ["secrets"], "release-blocker"],
    ["K02", "Ignore real .env and local secret files in Git", [], "release-blocker"],
    ["K03", "Keep private credentials out of browser bundles", ["secrets"], "release-blocker"],
    ["K04", "Audit public environment variables", [], "review-required"],
    ["K05", "Keep database service-role keys private and scoped", ["database"], "release-blocker"],
    ["K06", "Scan tracked code AND Git history for leaks", [], "review-required"],
    ["K07", "Rotate any confirmed leaked credentials", ["secrets"], "release-blocker"],
    ["K08", "Enable secret scanning and push protection where available", [], "review-required"],
    ["K09", "Manage secrets in approved host vault/dashboard", ["secrets"], "release-blocker"],
    ["K10", "Use least-privilege API key permissions", ["secrets"], "review-required"],
    ["K11", "Proxy secret-bearing API calls through a server", ["secrets"], "release-blocker"],
    ["K12", "Review screenshots, demos and support artifacts for secrets", [], "review-required"],
    ["K13", "Do not write credentials or personal data to logs", [], "release-blocker"],
    ["K14", "Separate development and production credentials", ["secrets"], "review-required"],
    ["K15", "Set quotas/budget alerts for chargeable APIs", ["paid-api"], "review-required"],
    ["K16", "Never paste or request keys in chat or tickets", [], "release-blocker"],
  ],
  "agent-rules": [
    ["A01", "Inspect and state the actual stack", [], "good-practice"],
    ["A02", "Plan before broad changes", [], "good-practice"],
    ["A03", "Commit per meaningful verified step", [], "review-required"],
    ["A04", "Never add packages without review and justification", [], "review-required"],
    ["A05", "Keep secrets in server environment or secret manager", ["secrets"], "release-blocker"],
    ["A06", "Build mobile-first when there is a UI", ["web-ui"], "review-required"],
    ["A07", "Reuse shared components and helpers", [], "good-practice"],
    ["A08", "Keep modules cohesive and reasonably sized", [], "good-practice"],
    ["A09", "Do not change authentication without approval", ["auth"], "release-blocker"],
    ["A10", "Seek approval before destructive edits", [], "release-blocker"],
    ["A11", "Test revenue, payment and other core conversion paths", ["payments"], "release-blocker"],
    ["A12", "Report real errors, never invented successes or raw secrets", [], "review-required"],
    ["A13", "Explain each change with tests and risks", [], "review-required"],
    ["A14", "Follow repository-specific agent rules", [], "good-practice"],
    ["A15", "Stop and ask when a material requirement is unknown", [], "review-required"],
  ],
  "generated-code": [
    ["G01", "Check for fabricated or typosquatted packages", [], "release-blocker"],
    ["G02", "Remove synthetic production records and fake proof", [], "release-blocker"],
    ["G03", "Do not hardcode authenticated user IDs", ["auth"], "release-blocker"],
    ["G04", "Ensure tests can meaningfully fail", [], "release-blocker"],
    ["G05", "Avoid silently swallowed runtime exceptions", [], "review-required"],
    ["G06", "Eliminate unjustified TypeScript ignores", [], "review-required"],
    ["G07", "Do not turn off lint rules to make CI green", [], "review-required"],
    ["G08", "Avoid permissive wildcard CORS for private operations", ["public-api"], "release-blocker"],
    ["G09", "Never bypass or comment out required auth", ["auth"], "release-blocker"],
    ["G10", "Detect unnecessary duplicate helper files", [], "good-practice"],
    ["G11", "Success responses must reflect verified upstream outcomes", [], "release-blocker"],
    ["G12", "Remove TODO stubs disguised as complete work", [], "review-required"],
    ["G13", "Avoid surprise major dependency upgrades", [], "review-required"],
    ["G14", "Never expose private keys in the frontend", ["secrets"], "release-blocker"],
    ["G15", "Keep tenant isolation enabled and tested", ["multi-tenant", "database"], "release-blocker"],
    ["G16", "Avoid exposing user or visitor data in logs", ["user-data"], "release-blocker"],
  ],
};

export const qualityProfiles = {
  portfolio: ["web-ui", "public-api", "secrets", "user-data"],
  "public-website": ["web-ui", "public-api", "secrets", "user-data"],
  "api-service": ["public-api", "secrets", "integrations"],
  "ai-chatbot": ["web-ui", "public-api", "ai", "paid-api", "secrets", "user-data"],
  "multi-tenant-saas": ["web-ui", "public-api", "auth", "multi-tenant", "database", "admin", "secrets", "user-data"],
  marketplace: ["web-ui", "public-api", "auth", "database", "admin", "uploads", "payments", "webhooks", "secrets", "user-data"],
  ecommerce: ["web-ui", "public-api", "auth", "database", "admin", "payments", "webhooks", "secrets", "user-data"],
  "news-cms": ["web-ui", "public-api", "auth", "database", "admin", "uploads", "secrets"],
  "business-directory": ["web-ui", "public-api", "auth", "database", "admin", "uploads", "secrets", "user-data"],
} as const satisfies Record<string, readonly QualityCapability[]>;

export type QualityProfile = keyof typeof qualityProfiles;

export type QualityControl = {
  id: string;
  label: string;
  category: QualityCategory;
  requires: readonly QualityCapability[];
  severity: QualitySeverity;
};

export const qualityControls: readonly QualityControl[] = Object.entries(rows)
  .flatMap(([category, entries]) =>
    entries.map(([id, label, requires, severity]) => ({
      id, label, category: category as QualityCategory, requires, severity,
    })),
  );

export type AppliedQualityControl = QualityControl & {
  applicability: "applicable" | "not-applicable";
  status: QualityStatus;
  evidence: null;
};

function buildQualityChecklist(profile: string, capabilities: readonly QualityCapability[]) {
  const applicable = (c: QualityControl) => c.requires.every(capability => capabilities.includes(capability));
  const checks: AppliedQualityControl[] = qualityControls.map(control => {
    const matches = applicable(control);
    return {
      ...control,
      applicability: matches ? "applicable" : "not-applicable",
      status: matches ? "unverified" : "not-applicable",
      evidence: null,
    };
  });
  return {
    policy: "developerb-quality-v1",
    profile,
    capabilities,
    total: checks.length,
    applicableCount: checks.filter(x => x.applicability === "applicable").length,
    // No project results have been measured here: all applicable items start unverified.
    checks,
  };
}

/** Starter profile. Unknown profiles never silently choose a default. */
export function qualityChecklist(profile: string) {
  if (!Object.prototype.hasOwnProperty.call(qualityProfiles, profile)) return null;
  return buildQualityChecklist(profile, qualityProfiles[profile as QualityProfile]);
}

/** Custom product capability set; no persisted audit results or assertions. */
export function qualityChecklistForCapabilities(capabilities: readonly QualityCapability[]) {
  return buildQualityChecklist("custom", [...new Set(capabilities)]);
}
