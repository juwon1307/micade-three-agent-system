const fallbackSiteUrl = "https://micadetechie.name.ng";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) return fallbackSiteUrl;

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export function getContactEmail() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "micadetechie@gmail.com";
  return /^\S+@\S+\.\S+$/.test(email) ? email : "";
}
