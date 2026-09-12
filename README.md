# Micade Three-Agent System

Micade Three-Agent System is the working prototype for a Micade company-building assistant.

The project is currently focused on Phase 1: Build the Company.

## Current Flow

The default flow creates the first working section of `Micade Brand Guidelines v1.0`.

```bash
npm run brand:foundation
```

When API credits are unavailable, use the local starter draft:

```bash
npm run brand:foundation:starter
```

To inspect the exact prompt that will be sent to the agent system:

```bash
npm run brand:foundation:dry-run
```

Available Brand Guidelines sections:

```bash
npm run brand:foundation
npm run brand:foundation:starter
npm run brand:foundation:dry-run
npm run brand:voice
npm run brand:voice:dry-run
npm run brand:visual
npm run brand:visual:dry-run
npm run brand:governance
npm run brand:governance:dry-run
```

## Company Blueprint Flow

After the Brand Guidelines, the next Phase 1 deliverable is `Micade Company Blueprint v1.0`.

Current Company Blueprint command:

```bash
npm run company:foundation
```

When API credits are unavailable, use:

```bash
npm run company:foundation:starter
```

To inspect the exact prompt:

```bash
npm run company:foundation:dry-run
```

## Setup

To open the Micade website locally:

```bash
pnpm dev
```

Then open `http://localhost:3000`.

The AI agent commands are separate because they require a working OpenAI API account:

```bash
npm run agent:dev
npm run agent:starter
npm run agent:dry-run
```

Create a `.env` file using this format:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Then install dependencies and build:

```bash
pnpm install
npm run build
```

On Windows PowerShell, use `.cmd` shims if script execution is blocked:

```bash
npm.cmd run build
node_modules\.bin\tsx.CMD src\index.ts brand-foundation
```

## Agent Architecture

The manager routes work to these specialists:

- Brand Strategy Agent
- Business Architecture Agent
- Enterprise Architecture Agent
- Technical Specification Agent
- Writer Agent

## Project Rule

Micade follows documentation before implementation.

The project should complete these Phase 1 deliverables before serious website development:

1. `Micade Brand Guidelines v1.0`
2. `Micade Company Blueprint v1.0`
3. `Micade Business Plan`
4. `Micade Website Technical Specification v1.0`
