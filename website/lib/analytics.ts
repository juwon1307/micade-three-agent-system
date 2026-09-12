export type MicadeEventName =
  | "page_view"
  | "cta_selected"
  | "service_viewed"
  | "resource_viewed"
  | "contact_form_started"
  | "contact_form_validation_failed"
  | "contact_form_submitted";

export type MicadeEventProperties = Record<string, string | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

export function trackMicadeEvent(name: MicadeEventName, properties: MicadeEventProperties = {}) {
  if (typeof window === "undefined") return;
  const safeProperties = Object.fromEntries(Object.entries(properties).filter(([, value]) => value));
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...safeProperties });
}
