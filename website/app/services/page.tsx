const services = [
  ["digital-presence-starter", "Digital Presence Starter", "For businesses that need a clearer, more credible digital foundation."],
  ["growth-system-setup", "Growth System Setup", "For businesses ready to make their marketing and lead process more repeatable."],
  ["ai-and-automation-assist", "AI and Automation Assist", "For businesses with repetitive work that can be improved with careful automation."],
];

export default function ServicesPage() {
  return (
    <main className="page-main content-width">
      <p className="eyebrow">Services</p>
      <h1>Start with the business problem that matters most.</h1>
      <p className="lead">Micade begins with a focused service engagement, then builds toward the systems and capabilities your business actually needs.</p>
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
