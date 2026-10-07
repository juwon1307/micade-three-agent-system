import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Micade Techie handles information shared through its website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="page-main content-width legal-page">
      <p className="eyebrow">Privacy notice</p>
      <h1>Your information should be handled with care.</h1>
      <p className="lead">This notice explains what Micade receives when you contact us through this website and how that information is used.</p>

      <section>
        <h2>Information you choose to share</h2>
        <p>The inquiry form may collect your name, email address, business name and type, website or social link, current challenge, and preferred next step.</p>
      </section>
      <section>
        <h2>How the information is used</h2>
        <p>Micade uses inquiry details only to understand your request, respond to you, and improve the early service offer. Inquiry content is not used for advertising profiles or sold to third parties.</p>
      </section>
      <section>
        <h2>Service providers</h2>
        <p>Website hosting and the approved form-delivery provider may process the minimum technical and inquiry data needed to operate the site and deliver your message.</p>
      </section>
      <section>
        <h2>Retention and your choices</h2>
        <p>Inquiry information is kept only as long as needed to respond, maintain appropriate business records, and meet legal obligations. You may contact Micade to ask about, correct, or request deletion of your inquiry information.</p>
      </section>
      <section>
        <h2>Updates</h2>
        <p>This notice is effective 24 September 2026 and will be updated if the website begins collecting information in new ways.</p>
      </section>
      <a className="button" href="/contact">Contact Micade</a>
    </main>
  );
}
