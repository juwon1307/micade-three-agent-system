import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { POST } from "./route.ts";

const validInquiry = {
  name: "Ada Example",
  email: "ada@example.com",
  business: "Ada Studio",
  businessType: "Independent fashion designer",
  challenge: "I need a clearer way to present my work.",
  nextStep: "Discuss a fashion brand website",
  website: "https://example.com/ada",
  fax: "",
};

const originalWebhookUrl = process.env.INQUIRY_WEBHOOK_URL;
const originalFetch = globalThis.fetch;

afterEach(() => {
  if (originalWebhookUrl === undefined) delete process.env.INQUIRY_WEBHOOK_URL;
  else process.env.INQUIRY_WEBHOOK_URL = originalWebhookUrl;
  globalThis.fetch = originalFetch;
});

function request(body: unknown, contentType = "application/json") {
  return new Request("https://micade.example/api/inquiry", {
    method: "POST",
    headers: { "content-type": contentType },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("rejects unsupported content types", async () => {
  const response = await POST(request("name=Ada", "application/x-www-form-urlencoded"));
  assert.equal(response.status, 415);
});

test("rejects malformed and non-object JSON without throwing", async () => {
  assert.equal((await POST(request("{"))).status, 400);
  assert.equal((await POST(request(null))).status, 400);
  assert.equal((await POST(request([]))).status, 400);
});

test("rejects oversized inquiries", async () => {
  const response = await POST(request({ ...validInquiry, challenge: "x".repeat(17_000) }));
  assert.equal(response.status, 413);
});

test("validates required fields, email, selections, and website URL", async () => {
  assert.equal((await POST(request({ ...validInquiry, name: "" }))).status, 400);
  assert.equal((await POST(request({ ...validInquiry, email: "invalid" }))).status, 400);
  assert.equal((await POST(request({ ...validInquiry, businessType: "Injected option" }))).status, 400);
  assert.equal((await POST(request({ ...validInquiry, nextStep: "Injected option" }))).status, 400);
  assert.equal((await POST(request({ ...validInquiry, website: "javascript:alert(1)" }))).status, 400);
});

test("requires a valid HTTPS webhook", async () => {
  delete process.env.INQUIRY_WEBHOOK_URL;
  assert.equal((await POST(request(validInquiry))).status, 503);

  process.env.INQUIRY_WEBHOOK_URL = "http://example.com/inquiry";
  assert.equal((await POST(request(validInquiry))).status, 503);
});

test("does not forward honeypot submissions", async () => {
  let forwarded = false;
  globalThis.fetch = async () => {
    forwarded = true;
    return new Response(null, { status: 200 });
  };

  const response = await POST(request({ ...validInquiry, fax: "12345" }));
  assert.equal(response.status, 200);
  assert.equal(forwarded, false);
});

test("forwards a normalized valid inquiry", async () => {
  process.env.INQUIRY_WEBHOOK_URL = "https://forms.example.com/inquiry";
  let forwardedRequest: { url: string; init?: RequestInit } | undefined;
  globalThis.fetch = async (input, init) => {
    forwardedRequest = { url: String(input), init };
    return new Response(null, { status: 204 });
  };

  const response = await POST(request({ ...validInquiry, name: "  Ada Example  " }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(forwardedRequest?.url, "https://forms.example.com/inquiry");
  assert.equal(forwardedRequest?.init?.redirect, "error");

  const forwardedBody = JSON.parse(String(forwardedRequest?.init?.body));
  assert.equal(forwardedBody.name, "Ada Example");
  assert.equal(forwardedBody.source, "micade-website");
  assert.match(forwardedBody.submittedAt, /^\d{4}-\d{2}-\d{2}T/);
  assert.equal("fax" in forwardedBody, false);
});

test("returns a safe error when the webhook rejects the inquiry", async () => {
  process.env.INQUIRY_WEBHOOK_URL = "https://forms.example.com/inquiry";
  globalThis.fetch = async () => new Response(null, { status: 500 });

  const response = await POST(request(validInquiry));
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), { message: "The inquiry destination is unavailable. Please use the email fallback." });
});
