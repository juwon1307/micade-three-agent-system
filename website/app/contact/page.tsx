import { InquiryForm } from "./inquiry-form";
import { getContactEmail } from "../../lib/site-config";

export default function ContactPage() {
  const contactEmail = getContactEmail();
  const formEnabled = Boolean(process.env.INQUIRY_WEBHOOK_URL?.trim());

  return (
    <main className="page-main content-width">
      <p className="eyebrow">Contact Micade</p>
      <h1>Tell us how customers currently discover your fashion work.</h1>
      <p className="lead">Micade is speaking with Lagos fashion designers before finalizing its first offer. Share your experience or ask about an early project conversation.</p>
      <div className="contact-options" aria-label="Contact options">
        <a href="mailto:micadetechie@gmail.com"><span>Email</span><strong>micadetechie@gmail.com</strong></a>
        <a href="tel:+2348074949992"><span>Call</span><strong>0807 494 9992</strong></a>
        <a href="tel:+2348125711144"><span>Call</span><strong>0812 571 1144</strong></a>
        <a href="https://wa.me/2348125711144" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>0812 571 1144</strong></a>
      </div>
      <div className="contact-panel">
        <h2>Start a conversation</h2>
        <p>Share a little context and we will identify a sensible starting point.</p>
        <InquiryForm contactEmail={contactEmail} enabled={formEnabled} />
        {contactEmail ? <p className="form-note">Prefer email? <a className="text-link" href={`mailto:${contactEmail}`}>Email Micade directly.</a></p> : null}
      </div>
    </main>
  );
}
