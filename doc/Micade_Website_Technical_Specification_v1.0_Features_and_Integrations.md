# Micade Website Technical Specification v1.0

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
