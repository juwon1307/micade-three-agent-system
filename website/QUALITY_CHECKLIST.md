# Micade Website Quality Checklist

## Current Automated Checks

- Next.js production build.
- Root agent TypeScript build.
- Route generation for Home, About, Services, package pages, Contact, sitemap, and robots.

## Required Before Launch

- Run keyboard-only navigation through the homepage, services, package, and contact flows.
- Verify focus states and form error announcements with a screen reader.
- Run responsive checks at mobile, tablet, and desktop widths.
- Measure Core Web Vitals in preview: LCP at or below 2.5 seconds, INP at or below 200 milliseconds, CLS at or below 0.1.
- Confirm sitemap, robots, canonical URLs, metadata, and approved structured data.
- Configure an approved analytics provider without sending inquiry content or email addresses.
- Configure INQUIRY_WEBHOOK_URL only after contact destination and privacy rules are approved.
- Test integration outage, fallback email, and rollback procedures.
