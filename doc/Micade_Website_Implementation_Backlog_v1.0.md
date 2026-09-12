# Micade Website Implementation Backlog v1.0

Status: Working draft
Phase: Phase 1 - Build the Company
Audience: Small businesses, starting with local service businesses
Owner: Technical Specification Agent

## Current Progress

- Project and design foundation: complete as a Next.js scaffold with Micade tokens.
- Public page routes: complete for Home, About, Services, three package pages, and Contact.
- Inquiry form interface: complete as a preview-only validated flow with success and fallback states.
- Provider-neutral inquiry endpoint: complete, pending `INQUIRY_WEBHOOK_URL` configuration.
- Analytics contract, sitemap, robots, and not-found state: complete, pending provider and production-domain configuration.
- Production submission provider, analytics, persistence, and launch operations: pending approval.

## Delivery Rules

- Resolve open decisions before production integrations or public launch.
- Keep launch scope focused on explanation, service discovery, and qualified inquiry capture.
- Use approved evidence for public claims.
- Keep future product, academy, account, payment, and dashboard work deferred.
- Every item needs a clear acceptance check before completion.

## Work Package 0: Approval Gate

Dependencies: None

Approve the final CTA, launch pages and URLs, Resources/Blog timing, contact and analytics providers, Supabase launch status, pricing visibility, proof points, privacy language, retention, alert ownership, and launch review gate.

Acceptance: all open decisions are approved or deferred, and owners exist for inquiries, alerts, and launch approval.

## Work Package 1: Content Production

Dependencies: Work Package 0

Create approved briefs and copy for Home, About, Services, the three package pages, Contact, privacy content, and the first Resources or Blog topics. Gather evidence-based proof points.

Acceptance: every launch page has approved copy, CTA destination, owner, status, and review date.

## Work Package 2: Project and Design Foundation

Dependencies: Work Package 0

Initialize the Next.js/TypeScript structure, configure the Micade visual direction, define shared UI primitives, and establish local, preview, and production environment conventions.

Acceptance: the application builds, responsive primitives work, focus states are visible, and private configuration is not bundled.

## Work Package 3: Public Pages

Dependencies: Work Packages 1 and 2

Build Home, About, Services, Contact, approved resource routes, and the three package pages. Add shared navigation, footer, metadata, sitemap, robots rules, structured data, and CTA links.

Acceptance: visitors can understand Micade, compare services, view packages, and reach inquiry; routes pass responsive and metadata checks.

## Work Package 4: Inquiry Flow

Dependencies: Work Packages 0, 2, and 3

Implement the validated inquiry form, server-side handling, spam controls, rate limits, approved destination, all failure states, and a fallback contact path.

Acceptance: fake test submissions reach the approved destination, failures recover clearly, and sensitive form data is excluded from analytics.

## Work Package 5: Analytics and Quality Gates

Dependencies: Work Packages 2, 3, and 4

Implement approved non-sensitive analytics events and build, validation, route, end-to-end, accessibility, responsive, SEO, security, and preview smoke checks. Measure Core Web Vitals.

Acceptance: required checks pass and proposed targets are measured: LCP 2.5 seconds or less, INP 200 milliseconds or less, CLS 0.1 or less.

## Work Package 6: Launch Operations

Dependencies: Work Packages 0 through 5

Configure domain, DNS, HTTPS, redirects, errors, production variables, monitoring, alert response, rollback, integration disablement, content review, and access review.

Acceptance: the launch checklist is signed off and operational ownership is documented.

## Deferred Scope

User accounts, dashboards, payments, academy delivery, AI tools, software products, community, events, careers, and advanced product areas.

## Recommended Next Implementation Step

Complete Work Package 0: Approval Gate, then produce the homepage and service-page content briefs.
