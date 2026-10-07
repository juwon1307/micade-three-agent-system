export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="content-width footer-main">
        <div className="footer-intro"><a className="wordmark" href="/">Micade Techie</a><p>Digital presence for Lagos fashion designers, built with clear guidance.</p><a className="text-link" href="/contact">Start a conversation -&gt;</a></div>
        <div className="footer-column"><h2>Explore</h2><a href="/">Home</a><a href="/about">About</a><a href="/services">Services</a><a href="/resources">Resources</a><a href="/contact">Contact</a></div>
        <div className="footer-column"><h2>Focus areas</h2><a href="/services">Fashion brand websites</a><a href="/services">Digital presentation</a><a href="/services">Customer discovery</a><a href="/resources">Learning resources</a></div>
        <div className="footer-column"><h2>Information</h2><a href="mailto:micadetechie@gmail.com">Email</a><a href="https://wa.me/2348125711144" target="_blank" rel="noreferrer">WhatsApp</a><a href="/privacy">Privacy notice</a><a href="/sitemap.xml">Sitemap</a></div>
      </div>
      <div className="content-width footer-bottom"><span>&copy; {year} Micade Techie. All rights reserved.</span><span>Built for clear, responsible progress.</span></div>
    </footer>
  );
}
