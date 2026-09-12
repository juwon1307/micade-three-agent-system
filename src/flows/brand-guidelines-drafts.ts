import { brandGuidelinesSections } from "./brand-guidelines-flow.js";

export function createBrandGuidelinesStarterDraft(sectionId = "brand-foundation"): string {
  if (sectionId === "brand-governance") {
    return `# Micade Brand Guidelines v1.0

## Section 4: Brand Governance

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Enterprise Architecture Agent
Supporting agents: Brand Strategy Agent, Writer Agent

## 4.1 Governance Purpose

Brand governance defines how Micade protects consistency, quality, and decision-making across brand, business, website, content, product, AI, marketing, and operations.

This section ensures that Micade's identity is maintained as the company grows.

## 4.2 Approved Brand Decisions

The following decisions are approved for Micade Brand Guidelines v1.0:

- Micade is an integrated digital growth company.
- The first priority audience is small businesses.
- The first approved launch segment is local service businesses.
- The working tagline is "Learn. Build. Grow."
- The approved voice is balanced: professional enough for businesses, simple enough for learners.
- The approved visual direction is balanced, modern, practical, trustworthy, intelligent, growth-oriented, accessible, and scalable.
- The approved palette direction is deep professional blue-green, fresh green, clean neutrals, and limited warm accents.
- The approved logo direction is a combination mark.

## 4.3 Document Ownership

Proposed ownership model:

- Brand owner: Micade leadership
- Strategic review: Enterprise Architecture Agent
- Brand development support: Brand Strategy Agent
- Documentation polish: Writer Agent
- Future design translation: Design System owner
- Future website translation: Website Technical Specification owner

No brand rule should be treated as final unless it is captured in the approved Brand Guidelines document.

## 4.4 Versioning Rules

Version format:

- Draft documents: v0.x
- First approved release: v1.0
- Minor updates: v1.1, v1.2, v1.3
- Major strategic changes: v2.0

Recommended filename format:

- Micade_Brand_Guidelines_v1.0.md
- Micade_Brand_Guidelines_v1.1.md
- Micade_Brand_Guidelines_v2.0.md

Every version should include:

- Version number
- Date
- Status
- Owner
- Summary of changes
- Approval notes

## 4.5 Approval Rules

Brand decisions should move through four stages:

1. Proposed
2. Reviewed
3. Approved
4. Archived or replaced

A decision can be marked approved only when it has been reviewed and accepted by the project owner.

Any major change to identity, audience, tagline, voice, color direction, logo direction, or positioning should be reviewed before it affects website, content, product, or marketing work.

## 4.6 Naming Conventions

Recommended document naming:

- Use Micade_ as the filename prefix.
- Use clear document names.
- Include version numbers for major documents.
- Avoid temporary names in final documentation.

Examples:

- Micade_Brand_Guidelines_v1.0.md
- Micade_Company_Blueprint_v1.0.md
- Micade_Business_Plan_v1.0.md
- Micade_Website_Technical_Specification_v1.0.md

## 4.7 Brand Usage Rules

Micade should be presented consistently as:

Micade, an integrated digital growth company.

Approved short description:

Micade helps small businesses learn, build, and grow through technology, AI, software, education, and digital growth solutions.

Brand usage should avoid:

- Presenting Micade as only a web design agency.
- Presenting Micade as only a training platform.
- Presenting Micade as only an AI company.
- Presenting Micade as only a software company.
- Making unsupported claims about outcomes, revenue, clients, partnerships, or market position.

## 4.8 Review Checklist

Before any Micade public content, document, website page, product page, proposal, or marketing asset is approved, it should answer:

- Does it present Micade as an integrated digital growth company?
- Does it support small businesses clearly?
- Does it use the balanced brand voice?
- Does it connect to Learn, Build, Grow, or Automate?
- Does it avoid hype and unsupported claims?
- Does it maintain professional quality?
- Does it support accessibility and clarity?
- Does it align with the approved brand foundation?

## 4.9 Decision Log

Initial approved decisions:

- Company category: Integrated digital growth company
- First priority audience: Small businesses
- First launch segment: Local service businesses
- Working tagline: Learn. Build. Grow.
- Voice direction: Balanced
- Visual direction: Balanced technology and growth direction
- Palette direction: Deep professional blue-green, fresh green, clean neutrals, limited warm accent
- Logo direction: Combination mark

## 4.10 Decisions Captured

- Micade now has a basic brand governance model.
- Approved brand decisions are separated from proposed future work.
- Versioning, ownership, naming, and approval rules are defined.
- Brand usage rules prevent Micade from being reduced to only one business category.

## 4.11 Why These Decisions Matter

Governance protects consistency as Micade grows.

Without governance, brand, business, website, product, AI, content, and marketing decisions can drift apart. This section gives future work a simple system for deciding what is approved, what is proposed, and what needs review.

## 4.12 Suggested Improvements

- Convert all Brand Guidelines sections into one consolidated v1.0 document after approval.
- Add an approval date and project owner name.
- Create a formal decision log for future strategic changes.
- Add a document control table to all major Micade documents.

## 4.13 Important Questions For Approval

1. Should this governance model be used across all Micade Phase 1 documents?
2. Who should be listed as the human document owner for approvals?
3. Should Micade use markdown as the working format before converting final documents to Word or PDF?

## 4.14 Recommended Next Step

After this section is reviewed and approved, consolidate the four sections into:

Micade_Brand_Guidelines_v1.0.md

Then move to the next Phase 1 deliverable:

Micade Company Blueprint v1.0
`;
  }

  if (sectionId === "visual-direction") {
    return `# Micade Brand Guidelines v1.0

## Section 3: Visual Identity Direction

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Brand Strategy Agent
Supporting agent: Enterprise Architecture Agent

## 3.1 Visual Identity Foundation

Micade's visual identity should express the brand as an integrated digital growth company for small businesses.

Approved brand direction:

- Micade is an integrated digital growth company.
- The first priority audience is small businesses.
- The first approved launch segment is local service businesses.
- The working tagline is "Learn. Build. Grow."
- The approved voice is balanced: professional enough for businesses, simple enough for learners.

## 3.2 Visual Principles

Micade's visual system should feel:

- Clear
- Modern
- Practical
- Trustworthy
- Intelligent
- Growth-oriented
- Accessible
- Scalable

The visual system should avoid:

- Overly playful styling
- Generic technology visuals
- Heavy visual clutter
- Hype-driven AI imagery
- Designs that feel like a course platform only
- Designs that feel like a narrow marketing agency only

## 3.3 Color Direction

Approved color direction:

- Primary color should communicate trust, intelligence, and digital capability.
- Secondary color should communicate growth, momentum, and practical progress.
- Neutral colors should support readability, professionalism, and long-form documentation.
- Accent colors should be used carefully for actions, highlights, status, and data.

Approved palette direction:

- Deep professional blue-green for trust, technology, and intelligent growth.
- Fresh green for growth and progress.
- Clean white, soft gray, and dark charcoal for structure and readability.
- Limited warm accent for important highlights.

Decision rule:

Final color values should be selected during the future Design System phase, after the brand foundation is approved.

## 3.4 Typography Direction

Proposed typography direction:

- Use clean, modern, highly readable typefaces.
- Prioritize clarity over decoration.
- Support long-form education content, business documents, dashboards, and website pages.
- Avoid fonts that feel too playful, too luxury-focused, or too experimental.

Recommended typography personality:

- Headings: confident, clear, modern.
- Body text: readable, calm, professional.
- Interface text: compact, legible, and direct.

## 3.5 Logo Direction

Approved logo direction:

The Micade logo should use a combination mark: a clear wordmark supported by a simple symbol. It should be scalable and suitable for technology, education, AI, software, and digital growth contexts.

The logo should work across:

- Website
- Documents
- Social media
- Course materials
- Software interfaces
- Proposals
- Presentations
- Future apps and products

Logo should avoid:

- Overly complex marks
- Generic circuit or robot symbols
- Trend-based AI visuals
- Designs that only represent one part of the business

## 3.6 Imagery Direction

Micade imagery should show useful digital transformation, practical business growth, learning, software, AI-supported workflows, and real-world outcomes.

Preferred imagery themes:

- Small businesses improving operations
- Teams learning and applying digital skills
- Clean software and dashboard environments
- AI-assisted workflows
- Strategy, planning, and measurable growth

Avoid imagery that feels:

- Dark and abstract
- Too corporate and distant
- Too casual for business trust
- Generic stock photography
- Unclear about what Micade actually does

## 3.7 Layout Direction

Micade layouts should be structured, readable, and action-oriented.

Recommended layout principles:

- Clear hierarchy
- Strong spacing discipline
- Practical sections
- Easy scanning
- Consistent document structure
- Accessible contrast
- Mobile-friendly content flow

## 3.8 Accessibility Direction

Accessibility should be treated as part of the brand quality standard.

Visual identity decisions should support:

- Strong text contrast
- Readable font sizes
- Clear interactive states
- Keyboard-friendly interfaces
- Plain language
- Responsive layouts
- Avoidance of meaning conveyed by color alone

## 3.9 Decisions Captured

- Micade's visual direction should be clear, modern, practical, trustworthy, intelligent, growth-oriented, accessible, and scalable.
- Micade's approved primary visual direction is balanced: technology-focused enough to feel modern and capable, growth-focused enough to connect with small-business outcomes.
- Micade's approved palette direction is deep professional blue-green, fresh green, clean neutrals, and limited warm accents.
- Micade's approved logo direction is a combination mark.
- The visual identity should support small businesses first while remaining suitable for learners, organizations, partners, employees, and investors.
- Final color values, typography choices, and final logo artwork should wait for the future Design System phase.
- Visual decisions should avoid narrow agency, course-only, or hype-driven AI styling.

## 3.10 Why These Decisions Matter

These decisions give designers and developers a clear direction without forcing premature design choices.

They keep Micade visually flexible enough to support services, education, AI, software, products, content, and future growth.

## 3.11 Suggested Improvements

- Create two or three future moodboard directions before choosing final colors and typography.
- Define exact accessibility standards in the Website Technical Specification.
- Create logo exploration criteria before commissioning or designing the logo.
- Build a formal Design System after the Brand Guidelines and Company Blueprint are approved.

## 3.12 Important Questions For Approval

1. Are the visual principles approved as the foundation for the future Design System?
2. Should any visual direction be restricted before logo and UI exploration begins?

## 3.13 Recommended Next Section

After this section is reviewed and approved, the next section should be:

Section 4: Brand Governance
`;
  }

  if (sectionId === "brand-voice") {
    return `# Micade Brand Guidelines v1.0

## Section 2: Brand Voice and Messaging

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Brand Strategy Agent
Supporting agent: Writer Agent

## 2.1 Voice Foundation

Micade's voice should communicate the confidence of a serious digital growth company and the clarity of a practical education partner.

Approved brand direction:

- Micade is an integrated digital growth company.
- The first priority audience is small businesses.
- The brand should remain professional, practical, scalable, and outcome-focused.

Approved launch-segment context:

- Local service businesses are the approved first small-business segment.

## 2.2 Voice Principles

Micade's voice should be:

- Clear: Explain ideas without unnecessary jargon.
- Practical: Connect every message to a real business, learning, or growth outcome.
- Trustworthy: Avoid hype, exaggeration, and unsupported claims.
- Intelligent: Show strategic thinking without sounding complicated.
- Helpful: Guide users toward useful next steps.
- Ambitious: Communicate growth, quality, and long-term vision.

## 2.3 Tone Guidelines

Approved default tone:

- Balanced
- Professional
- Direct
- Helpful
- Calm
- Confident
- Easy to understand

Tone should shift slightly by context:

- Website pages should sound clear, credible, and benefit-focused.
- Educational content should sound simple, patient, and practical.
- Business proposals should sound structured, confident, and outcome-driven.
- Product and software content should sound precise, reliable, and user-centered.
- AI content should sound responsible, practical, and grounded in real use cases.

## 2.4 Messaging Pillars

Proposed messaging pillars:

1. Learn

Micade helps people and teams gain practical digital, AI, software, and growth skills.

2. Build

Micade helps businesses create websites, software, systems, automation, and digital products that solve real problems.

3. Grow

Micade helps businesses improve visibility, operations, customer acquisition, and long-term digital performance.

4. Automate

Micade helps businesses use AI and automation responsibly to save time, improve consistency, and support better decisions.

## 2.5 Core Message

Approved core message:

Micade helps small businesses learn, build, and grow through integrated technology, education, AI, software, and digital growth solutions.

Short version:

Micade helps small businesses use technology, AI, software, and education to grow.

## 2.6 Messaging Rules

Micade should:

- Lead with practical outcomes.
- Explain technology in business-friendly language.
- Use simple sentences where possible.
- Connect services, products, and education under one brand story.
- Speak to business growth, skill development, and operational improvement.
- Use evidence and examples when making claims.

Micade should not:

- Overpromise results.
- Use vague claims like "best solution" without proof.
- Sound like a generic agency.
- Sound like a course platform only.
- Present AI as magic or a replacement for business judgment.
- Use technical language where plain language would work better.

## 2.7 Tagline Directions

Proposed tagline options:

- Learn. Build. Grow.
- Digital growth, built intelligently.
- Practical technology for business growth.
- Helping small businesses learn, build, and grow.
- Technology, AI, and education for practical growth.

Approved working tagline:

Learn. Build. Grow.

Reason:

It is short, memorable, flexible, and already aligns with Micade's vision.

## 2.8 Sample Brand Language

Website introduction:

Micade is an integrated digital growth company helping small businesses use technology, AI, software, and practical education to build better systems and grow with confidence.

Service introduction:

We help small businesses improve their digital presence, automate workflows, adopt practical AI, and build growth systems that support real business outcomes.

Education introduction:

Micade creates practical learning experiences that help people and teams understand digital tools, build useful skills, and apply technology with confidence.

AI introduction:

Micade helps businesses use AI responsibly for automation, productivity, customer support, content, operations, and better decision-making.

## 2.9 Decisions Captured

- Micade's voice should be clear, practical, trustworthy, intelligent, helpful, and ambitious.
- The core message should connect small-business growth with technology, education, AI, software, and digital growth.
- "Learn. Build. Grow." is approved as the working tagline.
- Micade's approved voice is balanced: professional enough for businesses, simple enough for learners.
- Messaging should avoid hype and focus on practical outcomes.

## 2.10 Why These Decisions Matter

These decisions make Micade easier to understand.

They also prevent the brand from sounding scattered across education, AI, software, and growth services. The message becomes unified around helping small businesses learn, build, and grow.

## 2.11 Suggested Improvements

- Decide whether Micade should use "we" language, "Micade" language, or both depending on channel.
- Create messaging examples for each main website page after the website specification is approved.
- Create a glossary of approved and avoided words.

## 2.12 Important Questions For Approval

1. Should Micade use "we" language, "Micade" language, or both depending on channel?
2. Should the core message focus mostly on small-business growth, or include learners equally from the beginning?
3. Are the proposed messaging pillars approved: Learn, Build, Grow, Automate?

## 2.13 Recommended Next Section

After this section is reviewed and approved, the next section should be:

Section 3: Visual Identity Direction
`;
  }

  if (sectionId !== "brand-foundation") {
    const availableSections = brandGuidelinesSections
      .map((section) => section.id)
      .join(", ");

    throw new Error(
      `Starter draft is not available for "${sectionId}". Available flow sections: ${availableSections}.`,
    );
  }

  return `# Micade Brand Guidelines v1.0

## Section 1: Brand Foundation

Status: Working draft
Phase: Phase 1 - Build the Company
Owner: Brand Strategy Agent
Supporting agent: Enterprise Architecture Agent

## 1.1 Brand Identity

Micade is a technology, education, AI, software, and digital growth company.

Micade exists to help people and organizations learn, build, and grow through practical knowledge, intelligent systems, software solutions, and digital growth services.

Approved identity statement:

Micade is an integrated digital growth company that combines technology, artificial intelligence, education, software, and growth strategy to solve practical problems and create long-term value.

## 1.2 Vision

To build Micade into a globally respected technology, education, AI, software, and digital growth company that empowers people and organizations to learn, build, and grow.

## 1.3 Mission

To create innovative digital solutions, educational platforms, and growth services that combine technology, artificial intelligence, and practical knowledge to solve real-world problems.

## 1.4 Brand Purpose

Micade's purpose is to make digital transformation practical, accessible, and valuable.

The brand should stand for useful innovation rather than technology for its own sake. Every Micade product, service, course, and content asset should help users move from confusion to clarity, from idea to execution, and from effort to measurable growth.

## 1.5 Target Audiences

Primary approved audience:

- Small businesses that need digital tools, websites, automation, practical AI adoption, education, and growth support.

First approved launch segment:

- Local service businesses that need stronger websites, clearer digital presence, better lead generation, workflow automation, practical AI support, and growth systems.

Secondary proposed audiences:

- Individuals who want to learn practical technology, AI, software, and digital skills.
- Entrepreneurs and small businesses that need digital tools, websites, automation, and growth support.
- Organizations that need technology strategy, software solutions, AI adoption, training, or digital transformation support.
- Future partners, employees, investors, and collaborators who need to understand Micade's direction clearly.

## 1.6 Brand Values

Proposed values:

- Excellence over speed
- Practical innovation
- User-centered thinking
- Ethical AI and responsible technology
- Continuous learning
- Clear communication
- Sustainable business growth
- Measurable outcomes

## 1.7 Brand Positioning

Approved positioning statement:

For small businesses that want to compete and grow in the digital economy, Micade provides integrated technology, education, AI, software, and digital growth solutions that turn ideas into practical outcomes.

Unlike narrow agencies, course platforms, or software vendors, Micade is designed as an integrated ecosystem where learning, building, automation, and growth work together.

## 1.8 Brand Personality

Micade should feel:

- Professional
- Clear
- Helpful
- Intelligent
- Practical
- Trustworthy
- Modern
- Ambitious

Micade should not feel:

- Hype-driven
- Confusing
- Overly casual
- Generic
- Trend-chasing
- Unfocused

## 1.9 Brand Promise

Proposed promise:

Micade helps people and organizations use technology, AI, education, and digital strategy to build useful skills, better systems, and measurable growth.

## 1.10 Decisions Captured

- Micade is positioned first as an integrated digital growth company, not only a website, agency, course platform, or software product.
- The brand foundation combines technology, education, AI, software, and digital growth.
- The guiding brand direction is practical, professional, scalable, and outcome-focused.
- The first priority audience is small businesses.
- The first approved small-business launch segment is local service businesses.
- Learners, entrepreneurs, organizations, partners, employees, and investors remain important secondary audiences.

## 1.11 Why These Decisions Matter

These decisions protect Micade from becoming too narrow too early.

They allow future work across courses, AI products, SaaS products, mobile apps, services, community, events, and certifications while keeping one clear brand identity.

They also give future website, content, product, and business planning work a stable foundation.

## 1.12 Suggested Improvements

- Use a balanced voice: professional enough for businesses, simple enough for learners.
- Create a shorter one-sentence brand description for website and social media use.

## 1.13 Important Questions For Approval

1. Are the proposed values approved, or should any be added, removed, or renamed?
2. Is the approved positioning statement accurate enough to guide future business and website planning?

## 1.14 Recommended Next Section

After this section is reviewed and approved, the next section should be:

Section 2: Brand Voice and Messaging
`;
}
