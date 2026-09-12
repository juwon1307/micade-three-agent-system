export function createWebsiteBacklogStarterDraft(): string {
  return `# Micade Website Implementation Backlog v1.0

Status: Working draft
Phase: Phase 1 - Build the Company
Audience: Small businesses, starting with local service businesses
Owner: Technical Specification Agent

## Delivery Rules

- Resolve open decisions before production integrations or public launch.
- Keep launch scope focused on explanation, service discovery, and qualified inquiry capture.
- Use approved evidence for public claims.
- Keep future product, academy, account, payment, and dashboard work deferred.
- Every item needs a clear acceptance check before it is considered complete.

## Work Package 0: Approval Gate

Dependencies: None
Owner: Micade decision owner

Tasks:

- Approve the final primary CTA and destination.
- Confirm launch pages and URL naming convention.
- Decide whether Resources and Blog launch together.
- Select contact-handling and analytics providers.
- Decide whether Supabase is enabled at launch.
- Approve pricing visibility, proof points, privacy language, retention, alert ownership, and launch review gate.

Acceptance criteria:

- Open decisions are recorded as approved or deferred.
- A named owner exists for inquiries, alerts, and launch approval.

## Work Package 1: Content Production

Dependencies: Work Package 0
Owner: Brand Strategy Agent and business owner

Tasks:

- Create homepage content brief.
- Create About content brief.
- Create Services comparison content.
- Create the three package page briefs.
- Create Contact and privacy content.
- Define the first Resources or Blog topics.
- Gather and approve evidence-based proof points.

Acceptance criteria:

- Every launch page has approved copy, CTA destination, owner, status, and review date.
- Claims and package scope are traceable to approved source material.

## Work Package 2: Project and Design Foundation

Dependencies: Work Package 0
Owner: Technical Specification Agent and implementation owner

Tasks:

- Initialize the approved Next.js and TypeScript application structure.
- Configure Tailwind CSS and the Micade visual direction.
- Define typography, colors, spacing, buttons, links, forms, focus states, and responsive layout primitives.
- Configure local, preview, and production environment conventions.

Acceptance criteria:

- The application builds successfully.
- Core components have stable responsive behavior and keyboard-visible focus states.
- No secret or private agent configuration is bundled for the client.

## Work Package 3: Public Pages

Dependencies: Work Packages 1 and 2
Owner: Implementation owner

Tasks:

- Build Home, About, Services, Contact, and approved resource routes.
- Build Digital Presence Starter, Growth System Setup, and AI and Automation Assist pages.
- Add shared navigation, footer, metadata, sitemap, robots rules, and approved structured data.
- Connect contextual CTAs to the approved inquiry flow.

Acceptance criteria:

- Visitors can understand Micade, compare services, view package details, and reach the inquiry flow.
- Every indexable route has required metadata and internal links.
- Pages work at mobile, tablet, and desktop widths.

## Work Package 4: Inquiry Flow

Dependencies: Work Packages 0, 2, and 3
Owner: Implementation owner and operations owner

Tasks:

- Implement the inquiry form with shared Zod validation.
- Add server-side handling, spam controls, rate limits, and request-size limits.
- Connect only the approved email, CRM, task, or storage destination.
- Add success, validation, timeout, duplicate, spam, and integration-outage states.
- Provide a tested fallback contact path.

Acceptance criteria:

- Valid test submissions reach the approved destination.
- Invalid and failed submissions provide useful recovery guidance.
- Test data is fake and no sensitive form data reaches analytics.

## Work Package 5: Analytics and Quality Gates

Dependencies: Work Packages 2, 3, and 4
Owner: Implementation owner and operations owner

Tasks:

- Implement page_view, CTA, service, resource, and inquiry events.
- Add build, validation, route, end-to-end, accessibility, responsive, SEO, and smoke checks.
- Measure Core Web Vitals in preview.
- Review dependencies and security headers.

Acceptance criteria:

- Required checks pass in preview.
- Analytics records useful non-sensitive properties only.
- Proposed targets are measured: LCP 2.5 seconds or less, INP 200 milliseconds or less, CLS 0.1 or less.

## Work Package 6: Launch Operations

Dependencies: Work Packages 0 through 5
Owner: Operations owner

Tasks:

- Configure production domain, DNS, HTTPS, redirects, error pages, and environment variables.
- Configure monitoring for availability, errors, form outcomes, Core Web Vitals, broken links, analytics health, and integration delivery.
- Document alert response, rollback, integration disablement, content review, and access review.
- Run final launch review.

Acceptance criteria:

- Launch checklist is complete and signed off.
- Owners and response expectations are documented.
- Rollback or disablement can be performed without exposing secrets or losing inquiry continuity.

## Deferred Scope

- User accounts and customer dashboards.
- Payments and ecommerce.
- Academy and course delivery.
- AI tools and software product workflows.
- Community, events, careers, and advanced product areas.

## Recommended Next Implementation Step

Complete Work Package 0: Approval Gate, then produce the homepage and service-page content briefs.
`;
}
