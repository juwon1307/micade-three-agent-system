import { InquiryForm } from "./inquiry-form";

export default function ContactPage() {
  return (
    <main className="page-main content-width">
      <p className="eyebrow">Contact Micade</p>
      <h1>Bring us the business problem you want to solve.</h1>
      <p className="lead">Tell us where things stand. We will use that context to identify a sensible starting point.</p>
      <div className="contact-panel"><h2>Start a conversation</h2><p>Share a little context and we will identify a sensible starting point. This preview does not store submissions yet.</p><InquiryForm /><p className="form-note">Prefer email? <a className="text-link" href="mailto:hello@micade.example">Email Micade directly.</a></p></div>
    </main>
  );
}
