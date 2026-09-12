const whatWeDo = [
  [
    "Software and Web Development",
    "Websites, digital platforms, and practical software experiences built around clear business goals.",
    "/images/img4.png",
  ],
  [
    "Digital Marketing and Growth",
    "Brand visibility, content direction, and growth systems that help people find, trust, and act.",
    "/images/img5.png",
  ],
  [
    "AI and Automation",
    "Responsible automation ideas that reduce repetitive work while keeping human judgment visible.",
    "/images/img6.png",
  ],
  [
    "Technology Education and Training",
    "Practical learning paths that help people understand modern tools and build useful digital skills.",
    "/images/img7.png",
  ],
  [
    "Business and Technology Consulting",
    "Guidance for turning ideas, needs, and constraints into sensible technology decisions.",
    "/images/img3.png",
  ],
];

const audiences = [
  "Individuals and learners",
  "Entrepreneurs",
  "Startups",
  "SMEs",
  "Schools",
  "Churches",
  "NGOs",
  "Corporate organizations",
];

const differences = [
  "Practical learning",
  "Technology and marketing combination",
  "AI-driven thinking",
  "Business-focused solutions",
  "Human-centered approach",
  "Continuous innovation",
];

const values = [
  "Innovation",
  "Excellence",
  "Integrity",
  "Learning",
  "Creativity",
  "Collaboration",
  "Impact",
  "Continuous Improvement",
];

const ecosystem = [
  ["Technology", "Digital products, websites, software systems, and useful technical solutions."],
  ["Academy and Education", "Learning experiences for practical digital skills and technology confidence."],
  ["Digital Growth", "Marketing, visibility, content, and growth strategy for modern organizations."],
  ["AI", "Automation, intelligent workflows, and responsible AI adoption."],
  ["Products", "Future tools and platforms shaped by real user and business needs."],
  ["Community", "A growing network for learning, building, collaboration, and shared progress."],
];

const milestones = [
  "Idea",
  "Brand",
  "First Project",
  "First Client",
  "First Product",
  "Expansion",
];

export default function AboutPage() {
  return (
    <main>
      <section className="about-page-hero">
        <div className="content-width about-page-hero-inner">
          <div>
            <p className="eyebrow">About Micade Techie</p>
            <h1>Technology. Knowledge. Growth.</h1>
            <p className="lead">
              Micade Techie helps people and organizations learn, build, and grow through
              practical technology, digital strategy, and future-ready thinking.
            </p>
            <div className="action-row">
              <a className="button button-light" href="/contact">Work With Us</a>
              <a className="about-hero-link" href="/services">Explore Services -&gt;</a>
            </div>
          </div>
          <div className="about-page-image" role="img" aria-label="Micade Techie technology workspace" />
        </div>
      </section>

      <section className="content-width page-section about-intro-grid">
        <div className="section-heading">
          <p className="eyebrow">Who we are</p>
          <h2>A digital growth brand built for practical progress.</h2>
        </div>
        <div className="about-copy-stack">
          <p>
            Micade Techie is an integrated technology and digital growth company. We
            connect software development, web experiences, digital marketing, AI,
            automation, training, and consulting into one clear direction.
          </p>
          <p>
            We serve learners, founders, small businesses, institutions, and organizations
            that want technology to become more understandable, useful, and measurable.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="content-width page-section about-story-grid">
          <div className="story-card">
            <p className="eyebrow">Our story</p>
            <h2>Created from the journey of learning, building, and serving.</h2>
            <p>
              Micade Techie started from a founder's journey through frontend development,
              digital marketing, and technology education. The brand was created to make
              technology feel less distant and more useful for people with real goals,
              businesses, and communities to grow.
            </p>
          </div>
          <div className="story-visual-panel">
            <div className="story-image" role="img" aria-label="Micade Techie founder presenting technology strategy" />
            <div className="origin-panel">
              <span>Meaning of Micade</span>
              <p>
                Micade represents a personal brand foundation with a wider mission: turning
                individual learning and digital creativity into solutions that can help others
                move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-width page-section purpose-mission-grid">
        <article>
          <p className="eyebrow">Our purpose</p>
          <h2>Helping people learn, build, and grow through technology.</h2>
          <p>
            Micade Techie exists because technology should open doors, not create confusion.
            Our purpose is to help people gain useful knowledge, turn ideas into digital
            solutions, and use technology to create meaningful progress.
          </p>
        </article>
        <article>
          <p className="eyebrow">Our mission</p>
          <h2>Make modern technology practical and valuable.</h2>
          <p>
            We are committed to delivering useful websites, software, digital growth
            support, training, AI guidance, and consulting that help clients take the next
            right step with confidence.
          </p>
        </article>
        <article>
          <p className="eyebrow">Our vision</p>
          <h2>Build a globally relevant technology ecosystem.</h2>
          <p>
            Our vision is to grow Micade Techie into a trusted ecosystem across technology,
            education, AI, digital growth, software, and products with positive global impact.
          </p>
        </article>
      </section>

      <section className="section-band">
        <div className="content-width page-section">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>Focused services for learning, building, and growth.</h2>
            <p>Each service area is designed to support a practical outcome, not technology for show.</p>
          </div>
          <div className="service-grid about-service-grid">
            {whatWeDo.map(([title, description, image], index) => (
              <article className={index === 2 ? "service-card service-card-featured" : "service-card"} key={title}>
                <img className="service-card-image" src={image} alt="" loading="lazy" />
                <p className="card-index">0{index + 1}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-width page-section">
        <div className="section-heading">
          <p className="eyebrow">Who we serve</p>
          <h2>Support for people and organizations at different stages.</h2>
          <p>
            Micade Techie works with audiences who need clearer digital skills, stronger
            systems, better visibility, or a more confident technology direction.
          </p>
        </div>
        <div className="audience-list">
          {audiences.map((audience) => <span key={audience}>{audience}</span>)}
        </div>
      </section>

      <section className="section-band">
        <div className="content-width page-section about-difference-grid">
          <div className="section-heading">
            <p className="eyebrow">What makes Micade different</p>
            <h2>Technology thinking connected to real human and business needs.</h2>
            <p>
              We combine technical execution, learning design, marketing awareness, and AI
              curiosity so every solution stays useful beyond launch day.
            </p>
          </div>
          <div className="difference-list">
            {differences.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="content-width page-section">
        <div className="section-heading">
          <p className="eyebrow">Our approach</p>
          <h2>Learn. Build. Grow.</h2>
          <p>This simple framework keeps the work clear, practical, and easy to expand.</p>
        </div>
        <div className="about-purpose-grid approach-feature-grid">
          <div>
            <strong>Learn</strong>
            <p>Acquire practical digital knowledge and understand the opportunity clearly.</p>
          </div>
          <div>
            <strong>Build</strong>
            <p>Turn knowledge, goals, and ideas into websites, systems, content, or workflows.</p>
          </div>
          <div>
            <strong>Grow</strong>
            <p>Use technology and digital strategy to create measurable progress over time.</p>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="content-width page-section">
          <div className="section-heading">
            <p className="eyebrow">Our core values</p>
            <h2>The standards behind the work.</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-width page-section founder-grid">
        <div className="founder-photo" role="img" aria-label="Professional founder portrait placeholder" />
        <div>
          <p className="eyebrow">Meet the founder</p>
          <h2>A builder shaped by frontend development, digital marketing, and technology education.</h2>
          <p>
            Micade Techie is led by a founder whose background connects the technical,
            strategic, and educational sides of digital growth. That mix shapes how the
            company explains technology, builds solutions, and supports people learning new
            skills.
          </p>
          <blockquote>
            "Micade Techie exists to help people understand technology, build with purpose,
            and grow with confidence."
          </blockquote>
        </div>
      </section>

      <section className="section-band">
        <div className="content-width page-section">
          <div className="section-heading">
            <p className="eyebrow">Our ecosystem</p>
            <h2>The future of Micade is bigger than one service.</h2>
            <p>
              The long-term vision is an ecosystem where technology, education, AI,
              products, growth support, and community reinforce one another.
            </p>
          </div>
          <div className="future-grid ecosystem-grid">
            {ecosystem.map(([title, description]) => (
              <div className="future-item" key={title}>
                <strong>{title}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-width page-section">
        <div className="section-heading">
          <p className="eyebrow">Our journey</p>
          <h2>A timeline designed to grow with the company.</h2>
          <p>Milestones will be documented as they become real, verified parts of the Micade Techie story.</p>
        </div>
        <div className="milestone-timeline" aria-label="Micade Techie journey milestones">
          {milestones.map((milestone, index) => (
            <div className="milestone-item" key={milestone}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{milestone}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="about-impact-band">
        <div className="content-width about-impact-content">
          <p className="eyebrow">Technology with human impact</p>
          <h2>We care about what technology does for people.</h2>
          <p>
            Micade Techie is not interested in technology merely for technology's sake. The
            goal is to improve people, businesses, and communities through useful knowledge,
            thoughtful systems, and digital growth that can be understood and sustained.
          </p>
        </div>
      </section>

      <section className="contact-band">
        <div className="content-width contact-layout about-final-cta">
          <div>
            <p className="eyebrow">Ready to learn, build, or grow?</p>
            <h2>Start the next practical step with Micade Techie.</h2>
            <p>Bring the idea, challenge, or growth goal. We will help shape it into a clearer direction.</p>
          </div>
          <div className="cta-button-group">
            <a className="button button-light" href="/contact">Work With Us</a>
            <a className="button button-outline-light" href="/resources">Start Learning</a>
            <a className="button button-outline-light" href="/contact">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
