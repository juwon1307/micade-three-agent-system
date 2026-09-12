# Micade Website Technical Specification v1.0 Working Flow

## Purpose

This flow creates Micade Website Technical Specification v1.0 one section at a time.

It uses the Brand Guidelines, Company Blueprint, and Business Plan as the foundation for website planning.

Consolidated review document:

- `doc/Micade_Website_Technical_Specification_v1.0.md`

After all four sections are drafted, review the consolidated document, resolve open decisions, and create the implementation backlog.

## Section Order

1. Architecture Overview
2. Content and Pages
3. Features and Integrations
4. Quality and Launch Requirements

## Step 1: Architecture Overview

Command:

```bash
npm run website:architecture
```

Local starter draft command:

```bash
npm run website:architecture:starter
```

Prompt inspection command:

```bash
npm run website:architecture:dry-run
```

Expected output:

- Website purpose
- Business foundation
- Website goals
- User groups
- Initial page architecture
- Technology stack
- Architecture principles
- Data and content needs
- Environment direction
- Security, accessibility, and performance baseline
- Approval questions

## Step 2: Content and Pages

Command:

```bash
npm run website:content
```

Local starter draft command:

```bash
npm run website:content:starter
```

Prompt inspection command:

```bash
npm run website:content:dry-run
```

Saved working draft:

- `doc/Micade_Website_Technical_Specification_v1.0_Content_and_Pages.md`

Expected output:

- Content strategy
- Launch navigation
- Page-by-page requirements
- CTA hierarchy
- SEO and GEO requirements
- Content operations and approval dependencies
- Approval questions

## Step 3: Features and Integrations

Command:

```bash
npm run website:features
```

Local starter draft command:

```bash
npm run website:features:starter
```

Prompt inspection command:

```bash
npm run website:features:dry-run
```

Saved working draft:

- `doc/Micade_Website_Technical_Specification_v1.0_Features_and_Integrations.md`

Expected output:

- Launch feature scope
- Lead capture flow
- Validation and data handling
- Proposed integrations
- Analytics events
- Failure and recovery states
- Security and privacy requirements
- Approval questions

## Step 4: Quality and Launch Requirements

Command:

```bash
npm run website:quality
```

Local starter draft command:

```bash
npm run website:quality:starter
```

Prompt inspection command:

```bash
npm run website:quality:dry-run
```

Saved working draft:

- `doc/Micade_Website_Technical_Specification_v1.0_Quality_and_Launch.md`

Expected output:

- Accessibility requirements
- Performance targets
- Security requirements
- Testing requirements
- Deployment environments
- Monitoring and operations
- Launch checklist
- Approval questions
