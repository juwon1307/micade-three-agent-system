# Micade Website Technical Specification v1.0

Status: Consolidated working draft
Phase: Phase 1 - Build the Company
Primary audience: Small businesses
Launch segment: Local service businesses
Primary owner: Technical Specification Agent

## 1. Purpose and Direction

The Micade website is the primary public entry point for an integrated digital growth company. The first release should explain Micade clearly, present its service-led offers, capture qualified inquiries, and establish a foundation for future education, AI, software, resources, and community experiences.

Approved foundation:

- Business position: integrated digital growth company.
- Starting model: service-led growth.
- Working tagline: Learn. Build. Grow.
- Voice: balanced, professional, practical, and clear.
- First packages: Digital Presence Starter, Growth System Setup, AI and Automation Assist.

## 2. Launch Experience

Primary navigation:

- Home
- About
- Services
- Resources
- Contact

The Services area should link to dedicated pages for each approved package. The homepage should explain Micade, identify the small-business audience, summarize the packages, explain the engagement process, and lead with Start a conversation and Explore services.

The primary CTA is Start a conversation. Contextual actions include Request an audit, Explore the right starting package, Apply this to my business, and Send inquiry. Final CTA wording and destinations require approval.

## 3. Content and Discovery

Content should move visitors through five stages: understand Micade, recognize a relevant problem, identify a starting service, build trust through process and proof, and begin a qualified conversation.

Every indexable page needs a unique title, meta description, H1, structured headings, canonical URL, social preview data, alt text, and internal links. Use Organization, Service, Article, BreadcrumbList, and FAQPage structured data only when it accurately reflects visible content.

GEO readiness depends on clear definitions, direct answers, consistent company facts, useful examples, and crawlable content. Public claims about results, client work, pricing, partnerships, or capabilities require evidence and approval.

## 4. Functional Scope

Launch features:

- Responsive navigation and content pages.
- Service comparison and package detail pages.
- Contact/discovery inquiry form.
- Shared client/server validation using Zod.
- Success, error, timeout, duplicate, spam, and integration-outage states.
- Spam protection and rate limiting.
- Analytics for meaningful visitor and conversion actions.
- SEO metadata, sitemap, robots rules, and approved structured data.
- Basic resource/blog publishing.

The inquiry flow is visitor action, form completion, validation, spam control, approved recording, confirmation, and team follow-up. Do not collect unnecessary sensitive data or send form contents to analytics.

Proposed integration boundaries include Supabase for optional persistence, an email or CRM destination for follow-up, analytics, Cloudflare, and Vercel. Exact providers, access, cost, ownership, privacy, and retention rules remain open.

## 5. Technical Direction

Planned stack:

- Next.js and TypeScript.
- Tailwind CSS and Framer Motion.
- React Hook Form and Zod.
- Supabase when persistent data needs are approved.
- Cloudflare, Vercel, GitHub, and Analytics.

Use static or server-rendered pages where practical. Keep the initial website service-led and avoid accounts, payments, dashboards, academy delivery, AI tools, or software product workflows until separately approved.

## 6. Quality and Launch Gate

Quality baseline:

- WCAG 2.2 AA accessibility target.
- Proposed Core Web Vitals targets: LCP 2.5 seconds or less, INP 200 milliseconds or less, CLS 0.1 or less.
- Secure server-side validation, HTTPS, secure headers, least-privilege access, dependency review, and no secret or private-prompt exposure.
- Local, preview, and production environments.
- Build, validation, route, end-to-end inquiry, accessibility, responsive, SEO, and preview smoke tests.
- Monitoring for availability, errors, form outcomes, Core Web Vitals, broken links, analytics health, and integration delivery.

Launch requires approved content and CTA decisions, contact-handling and privacy rules, tested forms and fallback contact path, completed quality checks, production analytics without sensitive data, verified domain and HTTPS, and documented ownership, monitoring, and rollback steps.

## 7. Open Decisions Before Implementation

1. Choose the final primary CTA: Start a conversation, Request an audit, or Book a discovery call.
2. Confirm the exact launch page list and URL convention.
3. Decide whether Resources and Blog launch together.
4. Select the email, CRM, task, and analytics providers.
5. Decide whether Supabase is enabled at launch.
6. Approve pricing visibility and the first public proof points.
7. Define inquiry retention, alert ownership, incident response, rollback, and the launch review gate.

## 8. Implementation Gate

Once the open decisions are approved, convert this specification into an implementation backlog covering content production, page routes, design system, inquiry flow, integrations, analytics, testing, deployment, and launch operations.

Decision register:

- `Micade_Website_Implementation_Gate_v1.0.md`

Supporting section documents:

- `Micade_Website_Technical_Specification_v1.0_Architecture_Overview.md`
- `Micade_Website_Technical_Specification_v1.0_Content_and_Pages.md`
- `Micade_Website_Technical_Specification_v1.0_Features_and_Integrations.md`
- `Micade_Website_Technical_Specification_v1.0_Quality_and_Launch.md`
