import { SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";
import { qualityChecklist, qualityControls, qualityProfiles } from "../src/quality-policy";

describe("DeveloperB reusable quality policy", () => {
  it("preserves all 86 unique source checklist controls", () => {
    expect(qualityControls).toHaveLength(86);
    expect(new Set(qualityControls.map(c => c.id)).size).toBe(86);
    const counts = Object.fromEntries(
      ["web-quality", "app-security", "key-hygiene", "agent-rules", "generated-code"]
        .map(category => [category, qualityControls.filter(c => c.category === category).length]),
    );
    expect(counts).toEqual({
      "web-quality": 20,
      "app-security": 19,
      "key-hygiene": 16,
      "agent-rules": 15,
      "generated-code": 16,
    });
  });

  it("never marks unverified reference-screen checks as passing", () => {
    for (const profile of Object.keys(qualityProfiles)) {
      const report = qualityChecklist(profile);
      expect(report).not.toBeNull();
      expect(report?.total).toBe(86);
      for (const c of report?.checks ?? []) {
        expect(c.evidence).toBeNull();
        expect(c.status).toBe(c.applicability === "applicable" ? "unverified" : "not-applicable");
      }
    }
  });

  it("does not invent multi-tenant, authentication or webhook requirements for a portfolio", () => {
    const report = qualityChecklist("portfolio");
    expect(report?.checks.find(c => c.id === "S01")?.status).toBe("not-applicable");
    expect(report?.checks.find(c => c.id === "S02")?.status).toBe("not-applicable");
    expect(report?.checks.find(c => c.id === "S19")?.status).toBe("not-applicable");
    expect(report?.checks.find(c => c.id === "U20")?.status).toBe("unverified");
    expect(report?.checks.find(c => c.id === "S15")?.status).toBe("unverified");
    expect(report?.checks.find(c => c.id === "G16")?.status).toBe("unverified");
  });

  it("activates tenant and auth controls for multi-tenant SaaS", () => {
    const report = qualityChecklist("multi-tenant-saas");
    expect(report?.checks.find(c => c.id === "S01")?.applicability).toBe("applicable");
    expect(report?.checks.find(c => c.id === "S02")?.applicability).toBe("applicable");
    expect(report?.checks.find(c => c.id === "G15")?.applicability).toBe("applicable");
  });

  it("activates webhook and payment controls only where used", () => {
    expect(qualityChecklist("ecommerce")?.checks.find(c => c.id === "S19")?.status).toBe("unverified");
    expect(qualityChecklist("ecommerce")?.checks.find(c => c.id === "A11")?.status).toBe("unverified");
    expect(qualityChecklist("public-website")?.checks.find(c => c.id === "A11")?.status).toBe("not-applicable");
  });

  it("refuses unknown profiles without falling back silently", () => {
    expect(qualityChecklist("not-a-product")).toBeNull();
  });

  it("exposes read-only quality controls without pretending they are results", async () => {
    const response = await SELF.fetch("https://developerb.test/api/quality/checklist?profile=portfolio");
    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("no-store");
    const data = (await response.json()) as {
      data: { policy: string; total: number; checks: Array<{ id: string; status: string; evidence: null }> };
    };
    expect(data.data.policy).toBe("developerb-quality-v1");
    expect(data.data.total).toBe(86);
    expect(data.data.checks).toHaveLength(86);
    expect(data.data.checks.every(x => x.status !== "pass" && x.evidence === null)).toBe(true);
  });

  it("returns a safe, actionable error for unsupported API profiles", async () => {
    const response = await SELF.fetch("https://developerb.test/api/quality/checklist?profile=unknown");
    expect(response.status).toBe(400);
    const payload = (await response.json()) as { error: { code: string; supportedProfiles: string[] } };
    expect(payload.error.code).toBe("INVALID_QUALITY_PROFILE");
    expect(payload.error.supportedProfiles).toContain("portfolio");
  });
});
