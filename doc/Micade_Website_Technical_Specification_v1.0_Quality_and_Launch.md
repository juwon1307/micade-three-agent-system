# Micade Website Technical Specification v1.0

## Section 4: Quality and Launch Requirements

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Technical Specification Agent
Supporting agents: Enterprise Architecture Agent, Technical Specification Agent

## 4.1 Quality Baseline

The launch website must be reliable, understandable, accessible, secure, measurable, and maintainable. Quality checks should run before merge and against the production build in preview.

## 4.2 Accessibility

Target WCAG 2.2 AA. Use semantic HTML, logical headings, keyboard navigation, visible focus states, sufficient contrast, labeled forms, useful errors, meaningful image alt text, reduced-motion support, and screen-reader testing for representative flows.

## 4.3 Performance

Proposed targets on representative mobile and desktop pages:

- LCP at or below 2.5 seconds.
- INP at or below 200 milliseconds.
- CLS at or below 0.1.
- No avoidable layout shifts.
- Optimized images and fonts.
- Minimal client-side JavaScript on content pages.

Measure performance in preview and monitor after launch. Targets remain proposed until real hosting and content profiles are available.

## 4.4 Security

Keep secrets out of client bundles, validate external input server-side, apply form spam controls and rate limits, use HTTPS and secure headers, enforce least-privilege access, review dependencies, avoid logging personal data or internal prompts, and document incident ownership and integration disablement.

## 4.5 Testing

Required checks include TypeScript build, validation tests, route and component tests, an end-to-end inquiry flow, accessibility checks, responsive checks, SEO metadata checks, sitemap/robots/structured-data checks, and a production preview smoke test. Test fixtures must use fake contact data.

## 4.6 Deployment and Monitoring

Use local, preview, and production environments with separately managed configuration. Verify domain, DNS, redirects, error pages, sitemap, robots rules, and HTTPS before launch.

Monitor availability, server errors, form success/failure, Core Web Vitals, broken links, analytics health, and integration delivery. Assign alert ownership, response expectations, and rollback or disablement steps.

## 4.7 Launch Checklist

Launch requires approved content and CTA decisions, contact-handling and privacy rules, tested forms and fallback path, completed accessibility/responsive/performance/security/SEO/smoke checks, production analytics without sensitive data, verified domain and HTTPS, and documented monitoring ownership.

## 4.8 Decisions Captured

- WCAG 2.2 AA is the accessibility target.
- Core Web Vitals are the performance baseline, with proposed thresholds of LCP 2.5s, INP 200ms, and CLS 0.1.
- Local, preview, and production environments are required.
- Automated build, validation, route, accessibility, SEO, and smoke checks are required before launch.
- Monitoring and operational ownership are launch requirements.

## 4.9 Important Questions For Approval

1. Who owns production alerts, form follow-up, and emergency decisions?
2. What response time and rollback method should be used for launch incidents?
3. Which accessibility and performance tools will be part of CI checks?
4. What review gate defines launch readiness?

## 4.10 Recommended Next Step

Review all four website specification sections together, approve the open decisions, and then begin the implementation backlog for the Micade launch website.
