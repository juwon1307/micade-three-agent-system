import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "business", "businessType", "challenge", "nextStep"] as const;

export async function POST(request: Request) {
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

  const email = payload.email as string;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ message: "The inquiry destination is not configured yet. Please use the email fallback." }, { status: 503 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString(), source: "micade-website" }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Destination returned ${response.status}`);
  } catch {
    return NextResponse.json({ message: "The inquiry destination is unavailable. Please use the email fallback." }, { status: 502 });
  }

  return NextResponse.json({ message: "Inquiry received." });
}
