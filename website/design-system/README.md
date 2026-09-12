# Micade Website Design System Foundation

Status: Working foundation
Source: Micade Brand Guidelines v1.0 and Website Technical Specification v1.0

## Direction

The visual system balances professional technology with practical growth. It should feel clear, capable, approachable, and useful to small-business owners.

## Tokens

Use `tokens.css` as the source for initial color, type, spacing, radius, shadow, content-width, and focus values. Tailwind theme values should map to these tokens when the Next.js application is initialized.

## Component Contracts

Initial components:

- SiteHeader: responsive navigation, current-page state, keyboard access.
- Button: primary, secondary, and text actions with icon support where useful.
- ServiceCard: package name, best-fit audience, outcome, scope signal, and action.
- SectionHeading: short eyebrow, heading, and supporting copy.
- ContentSection: constrained readable width with responsive spacing.
- InquiryForm: labeled fields, validation, pending, success, error, and fallback states.
- SiteFooter: navigation, contact path, privacy link, and company identity.

## Usage Rules

- Prefer flat page sections and restrained framing over nested cards.
- Keep repeated items scannable and consistent.
- Use color for hierarchy and action, not decoration alone.
- Preserve readable line lengths and stable control dimensions.
- Make keyboard focus, error, and disabled states visible.
- Use motion only when it clarifies a state change and respect reduced-motion preferences.

## Open Decisions

- Final font selection.
- Final logo asset and combination-mark lockup.
- Exact CTA wording and destinations.
- Approved imagery and proof-point treatment.
- Tailwind theme mapping during Next.js project creation.
