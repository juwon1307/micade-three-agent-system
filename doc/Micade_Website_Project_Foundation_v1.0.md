# Micade Website Project Foundation v1.0

Status: Working foundation
Phase: Phase 1 - Build the Company

## Current State

The repository currently contains the Micade agent system and planning documents. The website runtime has not yet been initialized as a Next.js application because the implementation gate still has unresolved choices around CTA, providers, persistence, privacy, and launch scope.

## Foundation Added

- Framework-neutral design tokens at `website/design-system/tokens.css`.
- Component contracts and usage rules at `website/design-system/README.md`.
- Accessibility-aware focus and reduced-motion defaults.
- Brand direction using professional blue-green, fresh green, clean neutrals, and limited warm accent color.

## Planned Application Mapping

When the website project is initialized, map the foundation as follows:

- Next.js routes for approved launch pages.
- TypeScript for page and form contracts.
- Tailwind theme values sourced from the design tokens.
- React Hook Form and Zod for the inquiry flow.
- Framer Motion only for purposeful, reduced-motion-aware transitions.
- Server-side integrations kept outside client bundles.

## Acceptance Criteria

- The design system has a single initial token source.
- Core controls have visible focus behavior.
- Reduced-motion behavior is defined before interactive implementation.
- Component contracts reflect the approved content and technical specifications.
- Unapproved visual and integration choices remain open rather than being invented.

## Responsive Page Shell

The first static page shell is available at `website/index.html`. It demonstrates the approved launch direction with:

- Micade positioning and tagline.
- Service package overview.
- Learn, Build, Grow. approach sequence.
- Primary conversation CTA.
- Responsive navigation and layout.
- Keyboard focus and reduced-motion defaults from the design tokens.

This shell is a content and design reference until the Next.js project is initialized.

The implementation decisions are tracked in `doc/Micade_Website_Implementation_Gate_v1.0.md`.

The initial Next.js boundary is scaffolded under `website/` with an App Router layout, typed homepage, and the existing Micade design tokens. Frontend dependencies are declared in `website/package.json` but are not installed in the root agent environment yet.

## Next Step

Resolve the implementation-gate decisions, then initialize the Next.js application and map these tokens into the first responsive page shell.
