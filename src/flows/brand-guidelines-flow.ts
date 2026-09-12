export type BrandGuidelinesSection = {
  id: string;
  title: string;
  purpose: string;
  owner: string;
};

export const brandGuidelinesSections: BrandGuidelinesSection[] = [
  {
    id: "brand-foundation",
    title: "Brand Foundation",
    purpose:
      "Define Micade's identity, purpose, vision, mission, audience, values, and positioning.",
    owner: "Brand Strategy Agent",
  },
  {
    id: "brand-voice",
    title: "Brand Voice and Messaging",
    purpose:
      "Define how Micade speaks, writes, explains value, and stays consistent across channels.",
    owner: "Brand Strategy Agent",
  },
  {
    id: "visual-direction",
    title: "Visual Identity Direction",
    purpose:
      "Define high-level visual principles before logo, website UI, or design system work begins.",
    owner: "Brand Strategy Agent",
  },
  {
    id: "brand-governance",
    title: "Brand Governance",
    purpose:
      "Define versioning, review rules, approval flow, naming conventions, and ownership.",
    owner: "Enterprise Architecture Agent",
  },
];

export function createBrandGuidelinesRequest(sectionId = "brand-foundation"): string {
  const section = brandGuidelinesSections.find((item) => item.id === sectionId);

  if (!section) {
    const availableSections = brandGuidelinesSections
      .map((item) => item.id)
      .join(", ");

    throw new Error(
      `Unknown Brand Guidelines section "${sectionId}". Available sections: ${availableSections}.`,
    );
  }

  return `
Create the first working draft section for Micade Brand Guidelines v1.0.

Current phase:
- Phase 1: Build the Company
- Current deliverable: Micade Brand Guidelines v1.0
- Current section: ${section.title}
- Section purpose: ${section.purpose}
- Primary owner: ${section.owner}

Micade identity:
- Micade is a technology, education, AI, software, and digital growth company.
- Vision: To build Micade into a globally respected technology, education, AI, software, and digital growth company that empowers people and organizations to learn, build, and grow.
- Mission: To create innovative digital solutions, educational platforms, and growth services that combine technology, artificial intelligence, and practical knowledge to solve real-world problems.

Working rules:
- Work only on this section.
- Do not jump ahead to website design or implementation.
- Mark unapproved items as proposed.
- Produce professional documentation suitable for future designers, developers, partners, employees, and investors.
- End with:
  1. Decisions captured
  2. Why these decisions matter
  3. Suggested improvements
  4. Important questions for approval
  5. Recommended next section
`;
}
