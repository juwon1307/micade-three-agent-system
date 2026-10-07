import { notFound } from "next/navigation";

const serviceData: Record<string, { title: string; audience: string; description: string; outcomes: string[] }> = {
  "digital-presence-starter": { title: "Fashion Digital Presence Starter", audience: "Lagos fashion designers who rely heavily on Instagram or WhatsApp and need a professional digital home.", description: "Create an owned destination that introduces your fashion brand, presents selected work, and guides a customer's next step.", outcomes: ["An owned home for the brand", "A clearer presentation of selected work", "A practical connection to Instagram and WhatsApp"] },
  "growth-system-setup": { title: "Fashion Brand Discovery Setup", audience: "Fashion designers who want a clearer path from customer discovery to enquiry.", description: "Organize the digital touchpoints that help potential customers find, understand, and contact your fashion brand.", outcomes: ["Clearer customer touchpoints", "A more organized enquiry path", "A foundation that can be measured and improved"] },
  "ai-and-automation-assist": { title: "Guided Digital Handover", audience: "Fashion business owners who want to understand the website and what to improve after launch.", description: "Receive clear guidance on how the digital presence works, how it connects to current channels, and what comes next.", outcomes: ["A plain-language handover", "More confidence using the digital presence", "A prioritized next-step plan"] },
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
