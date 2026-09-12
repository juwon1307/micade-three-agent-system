const academyAreas = [
  ["courses", "Courses", "Structured learning paths for practical digital and technology skills."],
  ["training-programs", "Training Programs", "Focused training for learners, founders, teams, and organizations."],
  ["workshops", "Workshops", "Hands-on sessions for software, AI, automation, and digital growth topics."],
  ["learning-resources", "Learning Resources", "Useful materials that support continuous learning and confident action."],
];

export default function AcademyPage() {
  return (
    <main className="page-main content-width">
      <p className="eyebrow">Academy</p>
      <h1>Practical technology learning for real growth.</h1>
      <p className="lead">
        Micade Academy will support people and organizations with practical learning
        experiences across technology, software, AI, automation, and digital growth.
      </p>
      <div className="service-grid page-service-grid">
        {academyAreas.map(([id, title, description], index) => (
          <article className="service-card" id={id} key={id}>
            <p className="card-index">0{index + 1}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
