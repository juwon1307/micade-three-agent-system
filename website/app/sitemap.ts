import type { MetadataRoute } from "next";
import { getSiteUrl } from "../lib/site-config";

const routes = ["/", "/about", "/solutions", "/services", "/academy", "/resources", "/projects", "/contact", "/privacy", "/services/digital-presence-starter", "/services/growth-system-setup", "/services/ai-and-automation-assist"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly", priority: route === "/" ? 1 : 0.7 }));
}
