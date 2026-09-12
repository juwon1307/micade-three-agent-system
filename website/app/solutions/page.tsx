const solutions = [
  [
    "software-web-development",
    "Software & Web Development",
    "Websites, web applications, and digital systems designed to help people and organizations operate more clearly online.",
    "/images/img4.png",
  ],
  [
    "ai-automation",
    "AI & Automation",
    "Responsible automation support for repetitive tasks, internal workflows, and practical business improvement.",
    "/images/img6.png",
  ],
  [
    "digital-marketing-growth",
    "Digital Marketing & Growth",
    "Digital presence, content direction, and growth systems that help brands become easier to find, trust, and choose.",
    "/images/img5.png",
  ],
  [
    "technology-consulting",
    "Technology Consulting",
    "Clear guidance for choosing, planning, and improving technology decisions without unnecessary complexity.",
    "/images/img3.png",
  ],
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="about-page-hero solutions-hero">
        <div className="content-width about-page-hero-inner">
          <div>
            <p className="eyebrow">Solutions</p>
            <h1>Technology solutions built for practical growth.</h1>
            <p className="lead">
              Micade Techie connects software, AI, automation, digital marketing,
              and consulting into focused solutions for people and organizations.
            </p>
            <div className="action-row">
              <a className="button button-light" href="/contact">Let's Work Together</a>
              <a className="about-hero-link" href="#software-web-development">Explore Solutions -&gt;</a>
            </div>
          </div>
          <div className="solutions-hero-image" role="img" aria-label="Micade Techie technology consulting visual" />
        </div>
      </section>

      <section className="content-width page-section">
        <div className="section-heading">
          <p className="eyebrow">Core solution areas</p>
          <h2>Clear digital support without overcrowding the offer.</h2>
          <p>
            Each solution area reflects an approved Micade Techie focus and can grow
            into deeper services as the company expands.
          </p>
        </div>
        <div className="solution-card-grid">
          {solutions.map(([id, title, description, image], index) => (
            <article className="solution-card" id={id} key={id}>
              <img src={image} alt="" loading={index === 0 ? "eager" : "lazy"} />
              <div>
                <p className="card-index">0{index + 1}</p>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band">
        <div className="content-width contact-layout">
          <div>
            <p className="eyebrow">Start with the right solution</p>
            <h2>Bring the goal, challenge, or idea.</h2>
            <p>Micade Techie will help shape it into a practical technology direction.</p>
          </div>
          <a className="button button-light" href="/contact">Contact Us -&gt;</a>
        </div>
      </section>
    </main>
  );
}
