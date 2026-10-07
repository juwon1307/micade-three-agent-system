export type CompanyBlueprintSection = {
  id: string;
  title: string;
  purpose: string;
  owner: string;
};

export const companyBlueprintSections: CompanyBlueprintSection[] = [
  {
    id: "company-foundation",
    title: "Company Foundation",
    purpose:
      "Define Micade's company category, purpose, audiences, launch segment, offers, and operating direction.",
    owner: "Business Architecture Agent",
  },
  {
    id: "services-model",
    title: "Services and Offer Model",
    purpose:
      "Define Micade's initial services, packages, delivery model, and value proposition.",
    owner: "Business Architecture Agent",
  },
  {
    id: "operating-model",
    title: "Operating Model",
    purpose:
      "Define departments, workflows, roles, governance, and delivery processes.",
    owner: "Business Architecture Agent",
  },
  {
    id: "growth-model",
    title: "Growth Model",
    purpose:
      "Define Micade's phased growth path across services, education, AI products, SaaS, community, and partnerships.",
    owner: "Enterprise Architecture Agent",
  },
];

export function createCompanyBlueprintRequest(
  sectionId = "company-foundation",
): string {
  const section = companyBlueprintSections.find((item) => item.id === sectionId);

  if (!section) {
    const availableSections = companyBlueprintSections
      .map((item) => item.id)
      .join(", ");

    throw new Error(
      `Unknown Company Blueprint section "${sectionId}". Available sections: ${availableSections}.`,
    );
  }

  return `
Create the first working draft section for Micade Company Blueprint v1.0.

Current phase:
- Phase 1: Build the Company
- Current deliverable: Micade Company Blueprint v1.0
- Current section: ${section.title}
- Section purpose: ${section.purpose}
- Primary owner: ${section.owner}

Approved launch foundation:
- Micade is a founder-led digital presence and growth company.
- First launch audience: independent fashion designers in Lagos.
- Initial focus: an owned, professional digital presence beyond dependence on Instagram and WhatsApp.
- Founder advantage: frontend development, digital marketing, and technology instruction.
- Treat customer problems as hypotheses until interviews validate them.
- Read doc/Micade_Founder_Story_and_Launch_Positioning_v1.0.md as the source of truth.
- Voice: balanced, professional, practical, and clear.
- Visual direction: balanced technology and growth direction.

Working rules:
- Work only on this section.
- Do not jump ahead to business plan, website design, or implementation.
- Mark unapproved items as proposed.
- Produce professional documentation suitable for future partners, employees, designers, developers, and investors.
- End with:
  1. Decisions captured
  2. Why these decisions matter
  3. Suggested improvements
  4. Important questions for approval
  5. Recommended next section
`;
}
