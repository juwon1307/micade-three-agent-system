const services = [
  [
    "Software and Web Development",
    "Digital experiences and practical systems for clearer business operations.",
    "/images/img4.png",
  ],
  [
    "Digital Marketing and Growth",
    "Clearer digital presence, useful content, and repeatable growth touchpoints.",
    "/images/img5.png",
  ],
  [
    "AI and Automation",
    "Practical automation opportunities with human oversight and responsible safeguards.",
    "/images/img6.png",
  ],
  [
    "Technology Training",
    "Useful learning paths for people building modern digital skills.",
    "/images/img7.png",
  ],
  [
    "Business and Technology Consulting",
    "A structured connection between business priorities and technology decisions.",
    "/images/img3.png",
  ],
];

const carouselSlides = [
  ["Technology Consulting", "Strategic solutions for a smarter business tomorrow.", "/images/img3.png"],
  ["Software Development", "Building modern, scalable, and reliable solutions.", "/images/img4.png"],
  ["Digital Marketing", "Data-driven strategies to grow your brand and reach more people.", "/images/img5.png"],
  ["AI and Automation", "Simplify work and unlock new opportunities with responsible automation.", "/images/img6.png"],
  ["Training and Education", "Practical skills for real-world digital success.", "/images/img7.png"],
  ["Innovation and Growth", "Turning ideas into impact through technology.", "/images/img8.png"],
];

const outcomes = [
  ["Build your digital presence", "/images/img5.png"],
  ["Learn in-demand skills", "/images/img7.png"],
  ["Automate your business", "/images/img6.png"],
  ["Grow your audience and revenue", "/images/img8.png"],
];

export default function HomePage() {
  return (
    <>
      {/* Section 1: Announcement / Top Bar */}
      <div className="announcement">
        <div className="content-width">
          <strong>Micade Techie is building the next step.</strong>
          <span>Practical digital growth for people and businesses.</span>
        </div>
      </div>

      <main id="top">
        {/* Section 2: Hero */}
        <section className="home-hero-bg">
          <div className="hero content-width">
            {/* Section 2 child: Hero message and actions */}
            <div className="home-hero-copy">
              <p className="eyebrow">Integrated digital growth company</p>
              <h1>Learn. Build. Grow with technology.</h1>
              <p className="hero-text">
                Micade Techie helps small businesses create clearer digital
                foundations, build useful systems, and move forward with
                practical technology.
              </p>
              <div className="action-row">
                <a className="button button-light" href="/contact">Let's Work Together</a>
                <a className="home-hero-link" href="#services">Explore what we do -&gt;</a>
              </div>
            </div>

            {/* Section 2 child: Learn, Build, Grow visual */}
            <div className="hero-signal home-hero-signal" aria-label="Micade Techie growth framework">
              <div className="signal-step"><span>01</span><strong>Learn</strong><small>Understand the opportunity</small></div>
              <div className="signal-step"><span>02</span><strong>Build</strong><small>Create the right system</small></div>
              <div className="signal-step"><span>03</span><strong>Grow</strong><small>Improve with intention</small></div>
            </div>
          </div>
        </section>

        {/* Section 3: Trust and Credibility */}
        <section className="trust-strip">
          <div className="content-width">
            {/* Section 3 children: Label and credibility items */}
            <p className="eyebrow">Trust and credibility</p>
            <div className="trust-items">
              <span>Clear strategy</span>
              <span>Modern technology</span>
              <span>Responsible AI</span>
              <span>Measurable growth</span>
            </div>
          </div>
        </section>

        {/* Section 4: Image Carousel */}
        <section className="home-carousel-section">
          <div className="content-width">
            <div className="section-heading">
              <p className="eyebrow">Micade Techie in focus</p>
              <h2>Technology areas built around useful progress.</h2>
              <p>Explore the core directions behind Micade Techie's work and future ecosystem.</p>
            </div>
            <div className="image-carousel" aria-label="Micade Techie service image carousel">
              <div className="carousel-track">
                {[...carouselSlides, ...carouselSlides].map(([title, description, image], index) => (
                  <article className="carousel-card" key={`${title}-${index}`}>
                    <img src={image} alt="" loading={index < carouselSlides.length ? "eager" : "lazy"} />
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: About Micade Techie */}
        <section className="about-visual">
          <div className="content-width home-section">
            {/* Section 4 children: Story content and link */}
            <div className="section-heading">
              <p className="eyebrow">About Micade Techie</p>
              <h2>Technology should create useful momentum.</h2>
              <p>
                We bring learning, digital building, and growth thinking
                together. We start with the real context of a person or
                business, then shape a practical next step.
              </p>
            </div>
            <a className="text-link" href="/about">More about Micade Techie -&gt;</a>
          </div>
        </section>

        {/* Section 5: Core Services */}
        <section className="section-band" id="services">
          <div className="content-width">
            {/* Section 5 children: Intro and service cards */}
            <div className="section-heading">
              <p className="eyebrow">Core services</p>
              <h2>Support for the work in front of you.</h2>
              <p>Begin with a focused service and expand when the next need becomes clear.</p>
            </div>
            <div className="service-grid home-service-grid">
              {services.map(([title, description, image], index) => (
                <article className="service-card home-image-card" key={title}>
                  <img className="service-card-image" src={image} alt="" loading="lazy" />
                  <p className="card-index">0{index + 1}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <small className="card-status">
                    {index < 3
                      ? "Available through focused engagements."
                      : "Learning and consulting paths in preparation."}
                  </small>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Who Micade Techie Helps */}
        <section className="content-width home-section">
          <div className="section-heading">
            <p className="eyebrow">Who Micade Techie helps</p>
            <h2>Start where your goals are clearest.</h2>
          </div>
          {/* Section 6 child: Audience list */}
          <div className="audience-list">
            <span>Small businesses</span>
            <span>Local service businesses</span>
            <span>Entrepreneurs</span>
            <span>Startups</span>
            <span>Students and learners</span>
            <span>Schools and organizations</span>
          </div>
        </section>

        {/* Section 7: Featured Outcomes */}
        <section className="section-band" id="outcomes">
          <div className="content-width">
            <div className="section-heading">
              <p className="eyebrow">Featured outcomes</p>
              <h2>From intention to useful progress.</h2>
            </div>
            {/* Section 7 child: Outcome cards */}
            <div className="outcome-grid">
              {outcomes.map(([outcome, image]) => (
                <article className="outcome-item outcome-image-card" key={outcome} style={{ backgroundImage: `linear-gradient(rgb(11 45 52 / 0.2), rgb(11 45 52 / 0.86)), url("${image}")` }}>
                  <h3>{outcome}</h3>
                  <p>Build a clearer next step around the outcome that matters to you.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Micade Techie */}
        <section className="content-width home-section">
          <div className="section-heading">
            <p className="eyebrow">Why choose Micade Techie</p>
            <h2>Practical, modern, and connected to the outcome.</h2>
          </div>
          {/* Section 8 child: Principles */}
          <div className="principle-grid">
            <span>Practical learning</span>
            <span>Modern technology</span>
            <span>Business-focused solutions</span>
            <span>Personalized support</span>
            <span>Responsible AI</span>
            <span>Measurable growth</span>
          </div>
        </section>

        {/* Section 9: Academy, Projects, Results, and AI Innovation */}
        <section className="section-band future-section">
          <div className="content-width">
            <div className="section-heading">
              <p className="eyebrow">Academy and innovation</p>
              <h2>More ways to learn, build, and grow are in preparation.</h2>
              <p>Future paths will include Front-End Development, Digital Marketing, AI and Automation, and other practical technology topics.</p>
            </div>
            {/* Section 9 children: Future ecosystem cards */}
            <div className="future-grid">
              <div className="future-item"><strong>Academy / Learn With Micade Techie</strong><span>Learning paths in preparation</span></div>
              <div className="future-item"><strong>AI and Innovation Spotlight</strong><span>Future workflows and products will be introduced as they launch</span></div>
              <div className="future-item"><strong>Featured Projects</strong><span>Verified work will be added as it becomes available</span></div>
              <div className="future-item"><strong>Results and Success Stories</strong><span>Published only with authentic, approved evidence</span></div>
            </div>
          </div>
        </section>

        {/* Section 10: How Micade Techie Works */}
        <section className="content-width home-section" id="approach">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>Discover, then build with intention.</h2>
          </div>
          {/* Section 10 child: Delivery journey */}
          <div className="approach-list">
            <div><span>01</span><p><strong>Discover.</strong> Understand the people, business, goals, and constraints.</p></div>
            <div><span>02</span><p><strong>Strategize.</strong> Choose a sensible direction and define the next outcome.</p></div>
            <div><span>03</span><p><strong>Design and build.</strong> Create the right experience, system, or learning path.</p></div>
            <div><span>04</span><p><strong>Launch, measure, and grow.</strong> Learn from evidence and improve the next decision.</p></div>
          </div>
        </section>

        {/* Section 11: Resources and Insights */}
        <section className="section-band">
          <div className="content-width">
            <div className="section-heading">
              <p className="eyebrow">Resources and insights</p>
              <h2>Useful ideas for the next decision.</h2>
              <p>Explore practical digital growth guidance, technology education, templates, and insights as the resource library develops.</p>
            </div>
            {/* Section 11 child: Resource CTA */}
            <a className="button" href="/resources">Explore resources</a>
          </div>
        </section>

        {/* Section 12: Community and Newsletter */}
        <section className="content-width home-section">
          <div className="section-heading">
            <p className="eyebrow">Community and newsletter</p>
            <h2>Keep learning with Micade Techie.</h2>
            <p>Newsletter, events, and community invitations will be added when the experience is ready.</p>
          </div>
          {/* Section 12 child: Community CTA */}
          <a className="text-link" href="/contact">Join the conversation -&gt;</a>
        </section>

        {/* Section 13: Final CTA */}
        <section className="contact-band">
          <div className="content-width contact-layout">
            {/* Section 13 children: Closing message and CTA */}
            <div>
              <p className="eyebrow">Ready to learn, build, or grow?</p>
              <h2>Bring Micade Techie the next problem worth solving.</h2>
              <p>Start with a conversation about where you are and what you want to make possible.</p>
            </div>
            <a className="button button-light" href="/contact">Let's Work Together -&gt;</a>
          </div>
        </section>
      </main>
    </>
  );
}
