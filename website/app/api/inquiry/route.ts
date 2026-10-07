import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "business", "businessType", "challenge", "nextStep"] as const;
const limits = { name: 100, email: 254, business: 120, businessType: 100, challenge: 3000, nextStep: 100, website: 500 } as const;

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ message: "The inquiry must be sent as JSON." }, { status: 415 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "The inquiry could not be read." }, { status: 400 });
  }

  const invalidField = requiredFields.find((field) => typeof payload[field] !== "string" || !payload[field].trim());
  if (invalidField) {
    return NextResponse.json({ message: `The ${invalidField} field is required.` }, { status: 400 });
  }

  const tooLongField = Object.entries(limits).find(([field, limit]) => typeof payload[field] === "string" && payload[field].length > limit);
  if (tooLongField) {
    return NextResponse.json({ message: `The ${tooLongField[0]} field is too long.` }, { status: 400 });
  }

  const email = payload.email as string;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ message: "The inquiry destination is not configured yet. Please use the email fallback." }, { status: 503 });
  }

  let destination: URL;
  try {
    destination = new URL(webhookUrl);
    if (destination.protocol !== "https:") throw new Error("Webhook must use HTTPS");
  } catch {
    return NextResponse.json({ message: "The inquiry destination is not configured correctly. Please use the email fallback." }, { status: 503 });
  }

  const submission = {
    name: String(payload.name).trim(),
    email: email.trim(),
    business: String(payload.business).trim(),
    businessType: String(payload.businessType).trim(),
    challenge: String(payload.challenge).trim(),
    nextStep: String(payload.nextStep).trim(),
    website: typeof payload.website === "string" ? payload.website.trim() : "",
    submittedAt: new Date().toISOString(),
    source: "micade-website",
  };

  try {
    const response = await fetch(destination, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Destination returned ${response.status}`);
  } catch {
    return NextResponse.json({ message: "The inquiry destination is unavailable. Please use the email fallback." }, { status: 502 });
  }

  return NextResponse.json({ message: "Inquiry received." });
}
