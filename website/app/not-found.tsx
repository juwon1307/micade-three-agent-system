import Link from "next/link";

export default function NotFound() {
  return <main className="page-main content-width"><p className="eyebrow">Page not found</p><h1>That page is not part of the current Micade launch.</h1><p className="lead">Return to the homepage or explore the services currently available.</p><div className="action-row"><Link className="button" href="/">Return home</Link><Link className="text-link" href="/services">Explore services -&gt;</Link></div></main>;
}
