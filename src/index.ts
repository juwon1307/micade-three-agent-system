import "dotenv/config";
import { run } from "@openai/agents";
import { managerAgent } from "./agents/manager-agent.js";
import { loadOpenAiApiKey } from "./config/openai.js";
import { createBrandGuidelinesStarterDraft } from "./flows/brand-guidelines-drafts.js";
import { createBrandGuidelinesRequest } from "./flows/brand-guidelines-flow.js";
import { createBusinessPlanStarterDraft } from "./flows/business-plan-drafts.js";
import { createBusinessPlanRequest } from "./flows/business-plan-flow.js";
import { createCompanyBlueprintStarterDraft } from "./flows/company-blueprint-drafts.js";
import { createCompanyBlueprintRequest } from "./flows/company-blueprint-flow.js";
import { createWebsiteSpecStarterDraft } from "./flows/website-spec-drafts.js";
import { createWebsiteSpecRequest } from "./flows/website-spec-flow.js";
import { createWebsiteBacklogRequest } from "./flows/website-backlog-flow.js";
import { createWebsiteBacklogStarterDraft } from "./flows/website-backlog-drafts.js";
import { createWebsiteContentBriefRequest } from "./flows/website-content-flow.js";
import { createWebsiteContentBriefStarterDraft } from "./flows/website-content-drafts.js";

async function main(): Promise<void> {
  const flow = process.argv[2] ?? "brand";
  const sectionId = process.argv[3] ?? "brand-foundation";
  const dryRun = process.argv.includes("--dry-run");
  const starterDraft = process.argv.includes("--starter-draft");
  const userRequest = createRequest(flow, sectionId);

  if (starterDraft) {
    console.log("\nStarter draft:\n");
    console.log(createStarterDraft(flow, sectionId));
    return;
  }

  if (dryRun) {
    console.log("\nAgent request:\n");
    console.log(userRequest);
    return;
  }

  const apiKey = loadOpenAiApiKey();

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is missing. Add it to your .env file.",
    );
  }

  process.env.OPENAI_API_KEY = apiKey;

  const result = await run(managerAgent, userRequest);

  console.log("\nFinal answer:\n");
  console.log(result.finalOutput);
}

function createRequest(flow: string, sectionId: string): string {
  if (flow === "website-backlog") {
    return createWebsiteBacklogRequest();
  }

  if (flow === "website-content") {
    return createWebsiteContentBriefRequest();
  }

  if (flow === "business") {
    return createBusinessPlanRequest(sectionId);
  }

  if (flow === "website") {
    return createWebsiteSpecRequest(sectionId);
  }

  if (flow === "company") {
    return createCompanyBlueprintRequest(sectionId);
  }

  return createBrandGuidelinesRequest(sectionId);
}

function createStarterDraft(flow: string, sectionId: string): string {
  if (flow === "website-backlog") {
    return createWebsiteBacklogStarterDraft();
  }

  if (flow === "website-content") {
    return createWebsiteContentBriefStarterDraft();
  }

  if (flow === "business") {
    return createBusinessPlanStarterDraft(sectionId);
  }

  if (flow === "website") {
    return createWebsiteSpecStarterDraft(sectionId);
  }

  if (flow === "company") {
    return createCompanyBlueprintStarterDraft(sectionId);
  }

  return createBrandGuidelinesStarterDraft(sectionId);
}

main().catch((error: unknown) => {
  if (error instanceof Error) {
    console.error("Application error:", error.message);
  } else {
    console.error("An unknown error occurred.");
  }

  process.exit(1);
});
