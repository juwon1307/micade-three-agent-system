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
      <h1>Verified Micade Techie work will live here.</h1>
      <p className="lead">
        This page is prepared for approved projects, products, and case studies as
        the Micade Techie portfolio grows. No unverified results or claims are shown.
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
