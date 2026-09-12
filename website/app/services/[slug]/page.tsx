import { notFound } from "next/navigation";

const serviceData: Record<string, { title: string; audience: string; description: string; outcomes: string[] }> = {
  "digital-presence-starter": { title: "Digital Presence Starter", audience: "Local service businesses with an unclear, outdated, or inconsistent digital presence.", description: "Build a credible, consistent foundation for how your business is found and understood.", outcomes: ["A clearer digital presence", "More consistent customer touchpoints", "A practical foundation for future growth"] },
  "growth-system-setup": { title: "Growth System Setup", audience: "Local service businesses that need a more repeatable marketing and lead process.", description: "Organize the digital touchpoints and routines that help your business grow more deliberately.", outcomes: ["A clearer growth process", "Better-organized lead touchpoints", "A system that can be improved over time"] },
  "ai-and-automation-assist": { title: "AI and Automation Assist", audience: "Small businesses with repetitive work or clear opportunities for practical automation.", description: "Reduce repetitive work with practical automation, clear safeguards, and human oversight.", outcomes: ["Less avoidable repetitive work", "Clearer automation opportunities", "Human review around important decisions"] },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) notFound();

  return (
    <main className="page-main content-width">
      <p className="eyebrow">Micade service</p>
      <h1>{service.title}</h1>
      <p className="lead">{service.description}</p>
      <div className="split-content">
        <section><h2>Best fit</h2><p>{service.audience}</p></section>
        <section><h2>Potential outcomes</h2><ul>{service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
      </div>
      <div className="notice"><strong>Working scope:</strong> final deliverables, timing, pricing, and integrations are confirmed during the initial conversation.</div>
      <a className="button" href="/contact">Start a conversation</a>
    </main>
  );
}
