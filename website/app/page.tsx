const services = [
  [
    "A professional home for your fashion brand",
    "A focused website that introduces your brand, presents selected work, and gives customers a clear next step.",
    "/images/img4.png",
  ],
  [
    "A clearer way to present your collections",
    "Organize your story, services, portfolio, and contact information beyond a fast-moving social media feed.",
    "/images/img5.png",
  ],
  [
    "A foundation for customer discovery",
    "Connect your website with Instagram and WhatsApp, then create a digital presence you can improve over time.",
    "/images/img3.png",
  ],
];

const outcomes = [
  ["Own your digital home", "Your brand has a destination that is not controlled by a social platform.", "/images/img4.png"],
  ["Show your work clearly", "Customers can understand your style and selected work without searching through old posts.", "/images/img5.png"],
  ["Guide the next step", "Make it easier for interested customers to know how to contact or enquire.", "/images/img6.png"],
  ["Grow from a foundation", "Build a presence that can develop as your fashion business develops.", "/images/img8.png"],
];

export default function HomePage() {
  return (
    <>
      <div className="announcement">
        <div className="content-width">
          <strong>Now focusing on Lagos fashion designers.</strong>
          <span>Customer research and early project conversations are open.</span>
        </div>
      </div>

      <main id="top">
        <section className="home-hero-bg">
          <div className="hero content-width">
            <div className="home-hero-copy">
              <p className="eyebrow">Digital presence for Lagos fashion designers</p>
              <h1>Your fashion deserves more than a social media feed.</h1>
              <p className="hero-text">
                Micade Techie helps fashion designers build a professional digital
                home for their brand—one they can own, understand, and grow beyond
                Instagram and WhatsApp.
              </p>
              <div className="action-row">
                <a className="button button-light" href="/contact">Discuss your fashion brand</a>
                <a className="home-hero-link" href="#services">See the starting service -&gt;</a>
              </div>
            </div>

            <div className="hero-signal home-hero-signal" aria-label="Micade Techie approach">
              <div className="signal-step"><span>01</span><strong>Listen</strong><small>Understand your brand, customers, and current challenges</small></div>
              <div className="signal-step"><span>02</span><strong>Build</strong><small>Create a clear digital home around what matters now</small></div>
              <div className="signal-step"><span>03</span><strong>Guide</strong><small>Explain the work so you can use it with confidence</small></div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="content-width">
            <p className="eyebrow">The experience behind Micade</p>
            <div className="trust-items">
              <span>Frontend development</span>
              <span>Digital marketing</span>
              <span>Technology instruction</span>
              <span>About 100 students taught</span>
            </div>
          </div>
        </section>

        <section className="about-visual">
          <div className="content-width home-section">
            <div className="section-heading">
              <p className="eyebrow">Why Micade exists</p>
              <h2>Built by someone who had to start again.</h2>
              <p>
                Programming did not make sense to Micade's founder overnight. After
                financial pressure, an accident, and a difficult learning journey,
                starting again from the basics changed everything. Teaching HTML,
                CSS, Bootstrap, and JavaScript later became proof that technology can
                be made understandable—with patience and the right support.
              </p>
            </div>
            <a className="text-link" href="/about">Read the founder's journey -&gt;</a>
          </div>
        </section>

        <section className="section-band" id="services">
          <div className="content-width">
            <div className="section-heading">
              <p className="eyebrow">A focused starting service</p>
              <h2>Move from scattered posts to a digital presence you own.</h2>
              <p>
                The exact scope is shaped through a conversation. These are the three
                parts of the working offer—not promises of sales or instant growth.
              </p>
            </div>
            <div className="service-grid">
              {services.map(([title, description, image], index) => (
                <article className="service-card home-image-card" key={title}>
                  <img className="service-card-image" src={image} alt="" loading="lazy" />
                  <p className="card-index">0{index + 1}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <small className="card-status">Working scope—confirmed after discovery.</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-width home-section">
          <div className="section-heading">
            <p className="eyebrow">Who this is for</p>
            <h2>Independent fashion designers building their name in Lagos.</h2>
            <p>
              This first Micade offer is for designers who rely heavily on Instagram
              and WhatsApp, want to present their work more professionally, and need
              a digital partner who will explain the process without unnecessary jargon.
            </p>
          </div>
          <div className="audience-list">
            <span>Fashion designers</span>
            <span>Made-to-measure brands</span>
            <span>Emerging fashion labels</span>
            <span>Lagos-based businesses</span>
          </div>
        </section>

        <section className="section-band" id="outcomes">
          <div className="content-width">
            <div className="section-heading">
              <p className="eyebrow">What a stronger foundation can do</p>
              <h2>Give your brand a clearer place to be seen and understood.</h2>
            </div>
            <div className="outcome-grid">
              {outcomes.map(([title, description, image]) => (
                <article className="outcome-item outcome-image-card" key={title} style={{ backgroundImage: `linear-gradient(rgb(11 45 52 / 0.2), rgb(11 45 52 / 0.9)), url("${image}")` }}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-width home-section" id="approach">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>You should understand what is being built for your business.</h2>
          </div>
          <div className="approach-list">
            <div><span>01</span><p><strong>Listen.</strong> Talk about your fashion brand, customers, current platforms, and most important challenge.</p></div>
            <div><span>02</span><p><strong>Focus.</strong> Agree on the smallest useful first version and what it must help customers understand or do.</p></div>
            <div><span>03</span><p><strong>Build.</strong> Create the digital experience and review it with you in clear language.</p></div>
            <div><span>04</span><p><strong>Guide.</strong> Explain the handover, connect the right customer touchpoints, and identify the next improvement.</p></div>
          </div>
        </section>

        <section className="section-band">
          <div className="content-width home-section">
            <div className="section-heading">
              <p className="eyebrow">Honest stage of the journey</p>
              <h2>Micade is listening before pretending to have every answer.</h2>
              <p>
                The first offer is still being validated with Lagos fashion designers.
                If you are willing to describe how you currently present your work and
                handle enquiries, your experience can help shape a service grounded in
                real needs.
              </p>
            </div>
            <a className="button" href="/contact">Share your experience</a>
          </div>
        </section>

        <section className="contact-band">
          <div className="content-width contact-layout">
            <div>
              <p className="eyebrow">For Lagos fashion designers</p>
              <h2>Tell us how your customers currently find your work.</h2>
              <p>Start with a conversation. No inflated promise and no pressure to buy.</p>
            </div>
            <a className="button button-light" href="/contact">Start the conversation -&gt;</a>
          </div>
        </section>
      </main>
    </>
  );
}
