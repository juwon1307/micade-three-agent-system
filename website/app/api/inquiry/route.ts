import { NextResponse } from "next/server.js";

const requiredFields = ["name", "email", "business", "businessType", "challenge", "nextStep"] as const;
const limits = { name: 100, email: 254, business: 120, businessType: 100, challenge: 3000, nextStep: 100, website: 500, fax: 200 } as const;
const businessTypes = new Set(["Independent fashion designer", "Made-to-measure fashion brand", "Emerging fashion label", "Other fashion business"]);
const nextSteps = new Set(["Share my experience for the research", "Discuss a fashion brand website", "Ask a question"]);
const maximumBodyBytes = 16 * 1024;

function json(message: string, status = 200) {
  return NextResponse.json({ message }, { status, headers: { "cache-control": "no-store" } });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json("The inquiry must be sent as JSON.", 415);
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > maximumBodyBytes) {
    return json("The inquiry is too large.", 413);
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > maximumBodyBytes) return json("The inquiry is too large.", 413);
    payload = JSON.parse(body);
  } catch {
    return json("The inquiry could not be read.", 400);
  }

  if (!isRecord(payload)) {
    return json("The inquiry could not be read.", 400);
  }

  // A hidden honeypot catches simple form bots without revealing the filter.
  if (typeof payload.fax === "string" && payload.fax.trim()) {
    return json("Inquiry received.");
  }

  const invalidField = requiredFields.find((field) => typeof payload[field] !== "string" || !payload[field].trim());
  if (invalidField) {
    return json(`The ${invalidField} field is required.`, 400);
  }

  const invalidTypeField = Object.keys(limits).find((field) => payload[field] !== undefined && typeof payload[field] !== "string");
  if (invalidTypeField) {
    return json(`The ${invalidTypeField} field is invalid.`, 400);
  }

  const tooLongField = Object.entries(limits).find(([field, limit]) => typeof payload[field] === "string" && payload[field].length > limit);
  if (tooLongField) {
    return json(`The ${tooLongField[0]} field is too long.`, 400);
  }

  const email = (payload.email as string).trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return json("Enter a valid email address.", 400);
  }

  const businessType = (payload.businessType as string).trim();
  if (!businessTypes.has(businessType)) {
    return json("Choose a valid business type.", 400);
  }

  const nextStep = (payload.nextStep as string).trim();
  if (!nextSteps.has(nextStep)) {
    return json("Choose a valid next step.", 400);
  }

  const website = typeof payload.website === "string" ? payload.website.trim() : "";
  if (website && !isHttpUrl(website)) {
    return json("Enter a valid website or social link.", 400);
  }

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return json("The inquiry destination is not configured yet. Please use the email fallback.", 503);
  }

  let destination: URL;
  try {
    destination = new URL(webhookUrl);
    if (destination.protocol !== "https:" || destination.username || destination.password) throw new Error("Webhook must be a credential-free HTTPS URL");
  } catch {
    return json("The inquiry destination is not configured correctly. Please use the email fallback.", 503);
  }

  const submission = {
    name: String(payload.name).trim(),
    email,
    business: String(payload.business).trim(),
    businessType,
    challenge: String(payload.challenge).trim(),
    nextStep,
    website,
    submittedAt: new Date().toISOString(),
    source: "micade-website",
  };

  try {
    const response = await fetch(destination, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });
    if (!response.ok) throw new Error(`Destination returned ${response.status}`);
  } catch {
    return json("The inquiry destination is unavailable. Please use the email fallback.", 502);
  }

  return json("Inquiry received.");
}
