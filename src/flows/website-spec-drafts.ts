import { websiteSpecSections } from "./website-spec-flow.js";

export function createWebsiteSpecStarterDraft(
  sectionId = "architecture-overview",
): string {
  if (sectionId === "content-and-pages") {
    return `# Micade Website Technical Specification v1.0

## Section 2: Content and Pages

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Technical Specification Agent
Supporting agents: Brand Strategy Agent, Business Architecture Agent

## 2.1 Content Strategy

The launch website should make Micade easy to understand and easy to contact for small businesses, especially local service businesses. Content should lead with practical business outcomes: a clearer digital presence, a repeatable growth system, and useful automation.

The content hierarchy should be:

1. Explain what Micade does.
2. Show who Micade helps.
3. Present the approved service packages.
4. Establish credibility through process, proof, and useful resources.
5. Move qualified visitors toward a discovery conversation or audit request.

Content should use the approved voice: balanced, professional, practical, and clear. It should avoid inflated claims, unexplained technical language, and promises of guaranteed growth.

## 2.2 Launch Navigation

Proposed primary navigation:

- Home
- About
- Services
- Resources
- Contact

The Services page should link to the three initial package pages:

- Digital Presence Starter
- Growth System Setup
- AI and Automation Assist

Blog and package detail pages may be launched as independent routes while remaining under the Resources and Services content groups.

## 2.3 Page Requirements

### Homepage

Purpose: Establish Micade's position and route visitors to the right next action.

Required content:

- Clear statement that Micade is an integrated digital growth company.
- Primary audience statement for small businesses and local service businesses.
- Working tagline: Learn. Build. Grow.
- Summary of the three initial service packages.
- Simple explanation of the engagement process.
- Trust-building proof or credibility section, when approved evidence is available.
- Primary CTA: Start a conversation.
- Secondary CTA: Explore services.

### About

Purpose: Explain Micade's approach, operating principles, and broader growth-company direction.

Required content:

- Micade story and purpose.
- Integrated digital growth company positioning.
- How learning, building, and growth connect.
- Principles for practical, responsible technology use.
- CTA to explore services or contact Micade.

### Services

Purpose: Help a small-business visitor identify the most relevant starting point.

Required content:

- Service model overview.
- Package comparison by business problem, outcome, scope, and next step.
- Clear indication of what is included and what requires custom scope.
- Links to each package detail page.
- CTA to request an audit or start a conversation.

### Service Package Pages

Purpose: Convert interest into a well-informed inquiry.

Each package page should include:

- The business problem addressed.
- Best-fit customer profile.
- Outcomes and deliverables.
- Delivery stages.
- Customer responsibilities and required inputs.
- Scope boundaries and assumptions.
- Indicative starting position where approved.
- Frequently asked questions.
- CTA to start a conversation.

### Resources and Blog

Purpose: Build trust, support discovery, and create reusable SEO/GEO content.

Required content model:

- Resource title and summary.
- Content type and topic.
- Audience and relevant business problem.
- Author or organization.
- Publication and update dates.
- Related service package.
- Structured headings and practical next steps.
- CTA connected to the reader's likely next action.

### Contact

Purpose: Capture enough context to qualify an inquiry without creating unnecessary friction.

Required fields should be limited to:

- Name
- Email
- Business name
- Website or social link, if available
- Business type
- Main growth challenge
- Preferred next step

The form must show a clear privacy notice, validation errors, success state, and alternative contact path.

## 2.4 CTA Hierarchy

Primary CTA across the launch site: Start a conversation.

Contextual CTAs:

- Services: Explore the right starting package.
- Package pages: Request an audit or start a conversation.
- Resources: Apply this to my business.
- Contact: Send inquiry.

CTA labels should describe the action and avoid pressure-based language. The exact destination and conversion event for each CTA must be defined before implementation.

## 2.5 SEO and GEO Content Requirements

Each indexable page should define:

- Unique title tag.
- Unique meta description.
- One clear H1.
- Logical H2 and H3 structure.
- Canonical URL.
- Open Graph and social preview data.
- Descriptive image alt text.
- Internal links to related pages.
- Author, organization, and update information where relevant.

The site should use structured data where it accurately represents the page, such as Organization, Service, Article, BreadcrumbList, and FAQPage when the visible content supports it.

GEO readiness should come from clear definitions, direct answers, consistent company facts, useful examples, and crawlable page content. The system should not generate unsupported claims or hide important content inside client-only interactions.

## 2.6 Content Operations

Every page should have an owner, status, source notes, review date, and approval state. Claims about results, client work, pricing, partnerships, or capabilities require explicit approval before publication.

Initial content dependencies:

- Approved company description.
- Final service package scope and pricing language.
- Founder or team information, if used.
- Testimonials, case studies, or proof points, if available.
- Contact and privacy details.
- First resource topics and publishing owners.

## 2.7 Decisions Captured

- The launch website will prioritize clarity for small businesses and local service businesses.
- Primary navigation will focus on Home, About, Services, Resources, and Contact.
- The three approved service packages will have dedicated detail pages.
- The primary site CTA will be Start a conversation, with contextual audit and service actions.
- SEO and GEO requirements are part of the content model, not a post-launch add-on.
- Content claims must be evidence-based and approved before publication.

## 2.8 Why These Decisions Matter

This structure connects Micade's positioning to a practical visitor journey: understand the company, recognize a relevant business problem, choose a starting service, and begin a qualified conversation.

It also gives future academy, AI, software, community, and resource experiences a clear place to grow without confusing the initial service-led offer.

## 2.9 Suggested Improvements

- Confirm the final launch navigation and URL naming convention.
- Produce the homepage and service-page content briefs.
- Create a reusable page metadata and structured-data checklist.
- Confirm whether audit requests and discovery conversations use one form or separate flows.
- Gather approved proof points before publishing credibility claims.

## 2.10 Important Questions For Approval

1. Should the primary CTA be labeled Start a conversation, Request an audit, or Book a discovery call?
2. Should Resources and Blog launch together or should Resources launch first?
3. Which proof points are approved for the first public release?
4. Should package pages show indicative starting prices or require an inquiry for all pricing?

## 2.11 Recommended Next Section

After this section is reviewed and approved, the next section should be:

Section 3: Features and Integrations
`;
  }

  if (sectionId === "features-and-integrations") {
    return `# Micade Website Technical Specification v1.0

## Section 3: Features and Integrations

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Technical Specification Agent
Supporting agents: Enterprise Architecture Agent, Business Architecture Agent

## 3.1 Launch Feature Scope

The first release should support a fast, trustworthy service discovery and inquiry journey. Required features are responsive navigation and page layouts, service package comparison and detail pages, a contact/discovery inquiry form, shared validation, success and error states, spam protection, analytics events, SEO metadata, sitemap and robots rules, structured data where approved, and basic resource/blog publishing.

Accounts, payments, customer dashboards, course delivery, AI tools, and software product workflows are future scope unless separately approved.

## 3.2 Lead Capture Flow

The primary flow is visitor action, form completion, client/server validation, spam control, approved submission recording, confirmation, and team follow-up. Entered values should survive validation errors, and private integration details must remain server-side.

## 3.3 Validation and Data Handling

Use a shared Zod schema for email, field length, URL, and free-text validation. An initial inquiry record may include contact details, business context, selected service or CTA source, privacy acknowledgement, timestamp, and source page.

Retention, access, deletion, and export rules must be defined before production storage is enabled. Do not collect unnecessary sensitive personal data.

## 3.4 Proposed Integrations

- Supabase for optional inquiry persistence and future content/dashboard needs.
- Email or CRM destination for team notification and follow-up ownership.
- Analytics for page views, CTA selection, form starts, validation failures, and successful submissions.
- Cloudflare for DNS, security controls, and edge protection where appropriate.
- Vercel for deployment, previews, and hosting.

The exact CRM, email provider, analytics provider, and Supabase launch status remain proposed pending access, privacy, cost, and ownership decisions.

## 3.5 Analytics Events

Initial stable event names:

- page_view
- cta_selected
- service_viewed
- resource_viewed
- contact_form_started
- contact_form_validation_failed
- contact_form_submitted

Use only non-sensitive properties such as page path, CTA name, service slug, content type, and form context. Do not send message content or email addresses to analytics systems.

## 3.6 Failure, Recovery, Security, and Privacy

Support invalid input, timeout, duplicate submission, spam rejection, integration outage, and successful submission states. Log failures without exposing secrets or sensitive form contents, and keep a team-owned fallback contact path.

Keep credentials server-side, validate submitted values, use request protections where applicable, apply spam controls, restrict database access, and document consent, retention, and deletion before launch.

## 3.7 Decisions Captured

- The launch feature set is centered on service discovery and qualified inquiry capture.
- Forms require shared schema validation and clear failure states.
- Analytics must avoid sensitive form content.
- Persistent storage and CRM/email integrations remain proposed until operational decisions are approved.
- Product accounts, payments, dashboards, academy, AI tools, and software workflows are future scope.

## 3.8 Important Questions For Approval

1. Which email, CRM, or task destination should receive new inquiries?
2. Should Supabase be enabled for launch or deferred?
3. Which analytics provider and consent model should be used?
4. What retention period and owner should govern inquiry records?

## 3.9 Recommended Next Section

Section 4: Quality and Launch Requirements
`;
  }

  if (sectionId === "quality-and-launch") {
    return `# Micade Website Technical Specification v1.0

## Section 4: Quality and Launch Requirements

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Technical Specification Agent
Supporting agents: Enterprise Architecture Agent, Technical Specification Agent

## 4.1 Quality Baseline

The launch website must be reliable, understandable, accessible, secure, measurable, and maintainable. Quality checks should run before merge and again against the production build in preview.

## 4.2 Accessibility Requirements

- Target WCAG 2.2 AA for the launch experience.
- Use semantic HTML and a logical heading structure.
- Support keyboard navigation for menus, forms, dialogs, and interactive controls.
- Provide visible focus states and sufficient color contrast.
- Provide labels, instructions, and useful error messages for forms.
- Provide alt text for meaningful images and empty alt text for decorative images.
- Respect reduced-motion preferences.
- Test representative flows with keyboard-only navigation and a screen reader.

## 4.3 Performance Requirements

Target the following baseline on representative mobile and desktop pages:

- Largest Contentful Paint at or below 2.5 seconds.
- Interaction to Next Paint at or below 200 milliseconds.
- Cumulative Layout Shift at or below 0.1.
- No avoidable layout shifts from images, fonts, or late-loading content.
- Optimized responsive images and modern font loading.
- Minimal client-side JavaScript on content-first pages.
- Server rendering or static generation where it improves delivery.

Performance results should be measured in preview and monitored after launch. Targets are proposed until real hosting and content profiles are available.

## 4.4 Security Requirements

- Keep secrets in environment configuration and outside client bundles.
- Validate all external input on the server.
- Apply spam controls, rate limits, and request-size limits to forms.
- Use secure headers and HTTPS in production.
- Apply least-privilege access to deployment, analytics, database, and contact systems.
- Review dependencies for known vulnerabilities before launch.
- Avoid logging personal data, credentials, or internal prompts.
- Document incident ownership and the process for disabling a failing integration.

## 4.5 Testing Requirements

Required checks:

- TypeScript build passes.
- Unit tests cover validation and content transformation logic.
- Component or route tests cover navigation, service pages, and contact form states.
- End-to-end tests cover primary CTA to successful inquiry confirmation.
- Accessibility checks cover the launch navigation, service pages, and form.
- Responsive checks cover mobile, tablet, and desktop layouts.
- SEO checks cover metadata, canonical URLs, sitemap, robots rules, and structured data.
- Production build smoke test passes in preview.

Test fixtures must use fake contact data. Failed tests must not send real inquiries or production analytics events.

## 4.6 Deployment and Environments

Use three environments:

- Local for development.
- Preview for pull-request and stakeholder review.
- Production for the public website.

Deployments should be traceable to a reviewed change. Production environment variables must be configured separately from preview values. Domain, DNS, redirects, error pages, sitemap, robots rules, and HTTPS must be checked before public launch.

## 4.7 Monitoring and Operations

Monitor:

- Availability and server errors.
- Form submission success and failure rates.
- Core Web Vitals.
- Broken links and failed requests.
- Analytics collection health.
- Integration delivery and follow-up ownership.

Define an owner for alerts, a response expectation, and a rollback or disablement path. Review website content, dependencies, and access permissions on a recurring schedule.

## 4.8 Launch Checklist

Launch approval requires:

- Approved brand, company, business, and website content.
- Approved CTA, contact-handling destination, privacy language, and retention rules.
- Validated forms with spam controls and a tested fallback path.
- Completed accessibility, responsive, performance, security, SEO, and smoke tests.
- Production analytics configured without sensitive data collection.
- Domain and HTTPS verified.
- Monitoring, ownership, and rollback steps documented.

## 4.9 Decisions Captured

- WCAG 2.2 AA is the accessibility target.
- Core Web Vitals are the performance baseline, with proposed thresholds of LCP 2.5s, INP 200ms, and CLS 0.1.
- Local, preview, and production environments are required.
- Automated build, validation, route, accessibility, SEO, and smoke checks are required before launch.
- Monitoring and operational ownership are launch requirements, not post-launch extras.

## 4.10 Important Questions For Approval

1. Who owns production alerts, form follow-up, and emergency decisions?
2. What response time and rollback method should be used for launch incidents?
3. Which accessibility and performance tools will be part of the CI checks?
4. What date or review gate defines launch readiness?

## 4.11 Recommended Next Step

Review all four website specification sections together, approve the open decisions, and then begin the implementation backlog for the Micade launch website.
`;
  }

  if (sectionId !== "architecture-overview") {
    const availableSections = websiteSpecSections
      .map((section) => section.id)
      .join(", ");

    throw new Error(
      `Starter draft is not available for "${sectionId}". Available flow sections: ${availableSections}.`,
    );
  }

  return `# Micade Website Technical Specification v1.0

## Section 1: Architecture Overview

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Technical Specification Agent
Supporting agent: Enterprise Architecture Agent

## 1.1 Website Purpose

The Micade website should be the primary public entry point for the company.

It should explain Micade as an integrated digital growth company, communicate the value of its first service-led offers, support lead generation, and prepare the foundation for future education, AI, software, resources, and product experiences.

## 1.2 Approved Business Foundation

- Micade is an integrated digital growth company.
- First priority audience: small businesses.
- First launch segment: local service businesses.
- Starting business model: service-led growth.
- First approved packages: Digital Presence Starter, Growth System Setup, AI and Automation Assist.
- Working tagline: Learn. Build. Grow.
- Brand voice: balanced, professional, practical, and clear.

## 1.3 Website Goals

The website should:

- Clearly explain what Micade is.
- Build trust with small businesses and local service businesses.
- Present the first service packages.
- Capture qualified leads.
- Support discovery calls and audits.
- Publish educational and SEO/GEO content.
- Prepare future expansion into academy, AI products, software, resources, blog, careers, and community.

## 1.4 Primary User Groups

Primary users:

- Small-business owners
- Local service business owners and managers

Secondary users:

- Entrepreneurs
- Learners
- Potential partners
- Future employees
- Investors or business reviewers

## 1.5 Initial Page Architecture

Proposed initial pages:

- Homepage
- About
- Services
- Digital Presence Starter
- Growth System Setup
- AI and Automation Assist
- Resources
- Blog
- Contact

Future expansion pages:

- Technology
- Academy
- AI
- Software Products
- Case Studies
- Careers
- Community
- Events

## 1.6 Recommended Technology Stack

Planned stack:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Supabase
- Cloudflare
- Vercel
- GitHub
- Analytics

## 1.7 Architecture Principles

The website architecture should be:

- SEO and GEO ready
- Fast
- Accessible
- Mobile-first
- Secure
- Maintainable
- Content-scalable
- Analytics-ready
- Easy to expand into future products and education

## 1.8 Data and Content Needs

Initial data/content needs:

- Service package content
- Lead capture form submissions
- Contact inquiries
- Blog/resource content
- Analytics events
- SEO metadata
- Future case studies
- Future newsletter or email list

Proposed backend direction:

- Use static or server-rendered pages where possible.
- Use Supabase when persistent data, form storage, auth, or dashboard needs are approved.
- Avoid adding complex backend systems before clear requirements exist.

## 1.9 Environment Direction

Recommended environments:

- Local development
- Preview/staging
- Production

Deployment direction:

- GitHub for source control.
- Vercel for hosting.
- Cloudflare for DNS, protection, and edge-level support where needed.

## 1.10 Security, Accessibility, and Performance Baseline

Security baseline:

- Protect environment variables.
- Validate form inputs with Zod.
- Avoid exposing private keys or internal prompts.
- Use secure defaults for forms and integrations.

Accessibility baseline:

- Semantic HTML
- Strong color contrast
- Keyboard-accessible navigation and forms
- Clear focus states
- Readable text
- Responsive layouts

Performance baseline:

- Optimize images and fonts.
- Avoid unnecessary client-side JavaScript.
- Use server rendering or static generation where appropriate.
- Track Core Web Vitals during launch preparation.

## 1.11 Decisions Captured

- The website should start as a business and lead-generation website, not a full SaaS product.
- The website should support Micade's service-led growth model first.
- The architecture should prepare for future education, AI, software, resources, and community expansion.
- The planned stack remains Next.js, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, Supabase, Cloudflare, Vercel, GitHub, and Analytics.
- Security, accessibility, performance, SEO, GEO, analytics, and maintainability are baseline requirements.

## 1.12 Why These Decisions Matter

These decisions keep the website aligned with Micade's current business stage.

They prevent premature product complexity while giving the site enough structure to grow into a larger Micade ecosystem.

## 1.13 Suggested Improvements

- Define the exact launch page list.
- Define the lead capture and discovery call flow.
- Define the first website content outline.
- Decide whether blog/resources launch immediately or after the first service pages.
- Define analytics events before development.

## 1.14 Important Questions For Approval

1. Should the first website launch focus only on company, services, resources, and contact pages?
2. Should Supabase be included at launch or reserved until persistent data needs are confirmed?
3. Should the blog launch immediately or after the first service pages are complete?
4. What should be the primary website CTA: book a discovery call, request an audit, or contact Micade?

## 1.15 Recommended Next Section

After this section is reviewed and approved, the next section should be:

Section 2: Content and Pages
`;
}
