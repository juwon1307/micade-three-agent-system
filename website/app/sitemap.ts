import type { MetadataRoute } from "next";

const routes = ["/", "/about", "/solutions", "/services", "/academy", "/resources", "/projects", "/contact", "/services/digital-presence-starter", "/services/growth-system-setup", "/services/ai-and-automation-assist"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly", priority: route === "/" ? 1 : 0.7 }));
}
