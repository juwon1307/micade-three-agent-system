export type WebsiteSpecSection = {
  id: string;
  title: string;
  purpose: string;
  owner: string;
};

export const websiteSpecSections: WebsiteSpecSection[] = [
  {
    id: "architecture-overview",
    title: "Architecture Overview",
    purpose:
      "Define the website purpose, users, pages, stack, environments, and architectural principles.",
    owner: "Technical Specification Agent",
  },
  {
    id: "content-and-pages",
    title: "Content and Pages",
    purpose:
      "Define page structure, content requirements, SEO/GEO needs, calls to action, and messaging alignment.",
    owner: "Technical Specification Agent",
  },
  {
    id: "features-and-integrations",
    title: "Features and Integrations",
    purpose:
      "Define website functionality, forms, analytics, CRM/contact handling, CMS needs, and integrations.",
    owner: "Technical Specification Agent",
  },
  {
    id: "quality-and-launch",
    title: "Quality and Launch Requirements",
    purpose:
      "Define performance, accessibility, security, testing, deployment, monitoring, and launch requirements.",
    owner: "Technical Specification Agent",
  },
];

export function createWebsiteSpecRequest(
  sectionId = "architecture-overview",
): string {
  const section = websiteSpecSections.find((item) => item.id === sectionId);

  if (!section) {
    const availableSections = websiteSpecSections
      .map((item) => item.id)
      .join(", ");

    throw new Error(
      `Unknown Website Technical Specification section "${sectionId}". Available sections: ${availableSections}.`,
    );
  }

  return `
Create the first working draft section for Micade Website Technical Specification v1.0.

Current phase:
- Phase 1: Build the Company
- Current deliverable: Micade Website Technical Specification v1.0
- Current section: ${section.title}
- Section purpose: ${section.purpose}
- Primary owner: ${section.owner}

Approved foundation:
- Micade is an integrated digital growth company.
- First priority audience: small businesses.
- First launch segment: local service businesses.
- Business model: service-led growth first.
- First packages: Digital Presence Starter, Growth System Setup, AI and Automation Assist.
- Brand tagline: Learn. Build. Grow.
- Brand voice: balanced, professional, practical, and clear.
- Visual direction: deep professional blue-green, fresh green, clean neutrals, limited warm accents.
- Planned stack: Next.js, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, Supabase, Cloudflare, Vercel, GitHub, Analytics.

Working rules:
- Work only on this section.
- Do not start implementation.
- Mark unapproved items as proposed.
- Include security, accessibility, performance, SEO, GEO, analytics, and maintainability requirements.
- Produce professional technical documentation suitable for designers, developers, operators, and business stakeholders.
- End with:
  1. Decisions captured
  2. Why these decisions matter
  3. Suggested improvements
  4. Important questions for approval
  5. Recommended next section
`;
}
