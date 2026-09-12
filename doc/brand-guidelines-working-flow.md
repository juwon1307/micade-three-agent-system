# Micade Brand Guidelines v1.0 Working Flow

## Purpose

This flow creates Micade Brand Guidelines v1.0 one section at a time.

The goal is to produce approval-ready documentation before website design, product design, or implementation begins.

## Flow Owner

Primary owner: Brand Strategy Agent

Supporting agents:

- Manager Agent
- Enterprise Architecture Agent
- Writer Agent

## Section Order

1. Brand Foundation
2. Brand Voice and Messaging
3. Visual Identity Direction
4. Brand Governance

## Step 1: Brand Foundation

Command:

```bash
npm run brand:foundation
```

Local starter draft command:

```bash
npm run brand:foundation:starter
```

Prompt inspection command:

```bash
npm run brand:foundation:dry-run
```

Expected output:

- Proposed Micade brand identity
- Vision and mission alignment
- Target audience assumptions
- Brand values
- Positioning statement
- Brand personality
- Decisions captured
- Why these decisions matter
- Suggested improvements
- Important questions for approval
- Recommended next section

Approval rule:

The project should not continue to Brand Voice and Messaging until the Brand Foundation section is reviewed and approved.

Current saved draft:

`doc/Micade_Brand_Guidelines_v1.0_Brand_Foundation.md`

## Step 2: Brand Voice and Messaging

Command:

```bash
npm run brand:voice
```

Local starter draft command:

```bash
npm run brand:voice:starter
```

Prompt inspection command:

```bash
npm run brand:voice:dry-run
```

Expected output:

- Voice principles
- Tone guidelines
- Messaging pillars
- Writing rules
- Tagline and slogan options
- Approved and proposed language
- Open questions

Current saved draft:

`doc/Micade_Brand_Guidelines_v1.0_Brand_Voice_and_Messaging.md`

## Step 3: Visual Identity Direction

Command:

```bash
npm run brand:visual
```

Local starter draft command:

```bash
npm run brand:visual:starter
```

Prompt inspection command:

```bash
npm run brand:visual:dry-run
```

Expected output:

- High-level visual principles
- Color direction
- Typography direction
- Logo direction
- Layout and imagery principles
- Accessibility expectations
- Open design decisions

Current saved draft:

`doc/Micade_Brand_Guidelines_v1.0_Visual_Identity_Direction.md`

## Step 4: Brand Governance

Command:

```bash
npm run brand:governance
```

Local starter draft command:

```bash
npm run brand:governance:starter
```

Prompt inspection command:

```bash
npm run brand:governance:dry-run
```

Expected output:

- Document ownership
- Versioning rules
- Review and approval process
- Naming conventions
- Brand usage rules
- Governance questions

Current saved draft:

`doc/Micade_Brand_Guidelines_v1.0_Brand_Governance.md`

## Current Blocker

The flow compiles successfully, but the live API run requires an OpenAI account with available API credits.

## Consolidated Document

Current consolidated working draft:

`doc/Micade_Brand_Guidelines_v1.0.md`
