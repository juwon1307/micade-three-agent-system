const projectStages = [
  "Featured work",
  "Case studies",
  "Products",
  "Community impact",
];

export default function ProjectsPage() {
  return (
    <main className="page-main content-width">
      <p className="eyebrow">Projects</p>
      <h1>Fashion projects will be shown here when the work is real.</h1>
      <p className="lead">
        This page is prepared for approved fashion-brand websites and case studies as
        the Micade Techie portfolio grows. No invented clients, results, or claims are shown.
      </p>
      <div className="notice">
        <strong>Projects are being prepared.</strong>
        <p>Published work will be added only when it is real, approved, and ready to share.</p>
      </div>
      <div className="principle-grid">
        {projectStages.map((stage) => <span key={stage}>{stage}</span>)}
      </div>
    </main>
  );
}
