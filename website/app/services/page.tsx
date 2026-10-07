const services = [
  ["digital-presence-starter", "Fashion Digital Presence Starter", "For Lagos fashion designers who need a professional digital home beyond Instagram and WhatsApp."],
  ["growth-system-setup", "Fashion Brand Discovery Setup", "For designers ready to organize how customers discover their work and take the next step."],
  ["ai-and-automation-assist", "Guided Digital Handover", "For fashion business owners who want the website explained clearly and a practical plan for maintaining it."],
];

export default function ServicesPage() {
  return (
    <main className="page-main content-width">
      <p className="eyebrow">Services</p>
      <h1>Build a digital home for your fashion brand.</h1>
      <p className="lead">Micade's first offer is being shaped for Lagos fashion designers who want to present their work professionally without depending entirely on social media.</p>
      <div className="service-grid page-service-grid">
        {services.map(([slug, title, description], index) => (
          <article className="service-card" key={slug}>
            <p className="card-index">0{index + 1}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="text-link" href={`/services/${slug}`}>View service -&gt;</a>
          </article>
        ))}
      </div>
    </main>
  );
}
