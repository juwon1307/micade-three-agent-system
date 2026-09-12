export type BusinessPlanSection = {
  id: string;
  title: string;
  purpose: string;
  owner: string;
};

export const businessPlanSections: BusinessPlanSection[] = [
  {
    id: "executive-summary",
    title: "Executive Summary",
    purpose:
      "Summarize Micade's business direction, audience, offers, growth model, and early revenue path.",
    owner: "Business Architecture Agent",
  },
  {
    id: "market-and-customer",
    title: "Market and Customer Strategy",
    purpose:
      "Define the target customer segments, customer problems, market assumptions, and outreach direction.",
    owner: "Business Architecture Agent",
  },
  {
    id: "revenue-model",
    title: "Revenue Model",
    purpose:
      "Define pricing logic, service packages, monthly support, future products, and revenue streams.",
    owner: "Business Architecture Agent",
  },
  {
    id: "execution-roadmap",
    title: "Execution Roadmap",
    purpose:
      "Define practical milestones, priorities, KPIs, risks, and next actions for the first operating period.",
    owner: "Enterprise Architecture Agent",
  },
];

export function createBusinessPlanRequest(sectionId = "executive-summary"): string {
  const section = businessPlanSections.find((item) => item.id === sectionId);

  if (!section) {
    const availableSections = businessPlanSections
      .map((item) => item.id)
      .join(", ");

    throw new Error(
      `Unknown Business Plan section "${sectionId}". Available sections: ${availableSections}.`,
    );
  }

  return `
Create the first working draft section for Micade Business Plan.

Current phase:
- Phase 1: Build the Company
- Current deliverable: Micade Business Plan
- Current section: ${section.title}
- Section purpose: ${section.purpose}
- Primary owner: ${section.owner}

Approved foundation:
- Micade is an integrated digital growth company.
- First priority audience: small businesses.
- First launch segment: local service businesses.
- Business model: service-led growth first.
- First packages: Digital Presence Starter, Growth System Setup, AI and Automation Assist.
- Growth path: services, education/templates, automation/AI products, SaaS/software, community/events/certifications.

Working rules:
- Work only on this section.
- Do not jump ahead to website design or implementation.
- Mark unapproved items as proposed.
- Do not invent market data, revenue numbers, clients, or partnerships.
- Produce professional business documentation suitable for planning and investor review.
- End with:
  1. Decisions captured
  2. Why these decisions matter
  3. Suggested improvements
  4. Important questions for approval
  5. Recommended next section
`;
}
