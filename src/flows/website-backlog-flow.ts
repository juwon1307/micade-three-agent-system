export function createWebsiteBacklogRequest(): string {
  return `
Create the first implementation backlog for the Micade launch website.

Use the consolidated Micade Website Technical Specification v1.0 and the approved foundation:
- Micade is an integrated digital growth company.
- First priority audience: small businesses.
- First launch segment: local service businesses.
- Business model: service-led growth first.
- First packages: Digital Presence Starter, Growth System Setup, AI and Automation Assist.
- Brand tagline: Learn. Build. Grow.
- Brand voice: balanced, professional, practical, and clear.

Create a sequenced backlog with work package, rationale, dependencies, owner, acceptance criteria, and open decision flags. Separate launch-critical work from deferred scope. Do not invent providers, prices, clients, timelines, or technical requirements that are not in the specification.

End with:
1. Decisions captured
2. Why these decisions matter
3. Suggested improvements
4. Important questions for approval
5. Recommended next implementation step
`;
}
