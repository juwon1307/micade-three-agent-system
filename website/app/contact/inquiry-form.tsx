"use client";

import { FormEvent, useState } from "react";
import { trackMicadeEvent } from "../../lib/analytics";

type FormValues = {
  name: string;
  email: string;
  business: string;
  businessType: string;
  challenge: string;
  nextStep: string;
  website: string;
  fax: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  business: "",
  businessType: "",
  challenge: "",
  nextStep: "",
  website: "",
  fax: "",
};

type InquiryFormProps = {
  contactEmail: string;
  enabled: boolean;
};

export function InquiryForm({ contactEmail, enabled }: InquiryFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [started, setStarted] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
    setFormError("");
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Enter your name.";
    if (!values.email.includes("@")) nextErrors.email = "Enter a valid email address.";
    if (!values.business.trim()) nextErrors.business = "Enter your business name.";
    if (!values.businessType) nextErrors.businessType = "Choose a business type.";
    if (!values.challenge.trim()) nextErrors.challenge = "Tell us what you want to improve.";
    if (!values.nextStep) nextErrors.nextStep = "Choose a preferred next step.";
    if (values.website.trim()) {
      try {
        const url = new URL(values.website);
        if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error("Invalid protocol");
      } catch {
        nextErrors.website = "Enter a complete link beginning with http:// or https://.";
      }
    }
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      trackMicadeEvent("contact_form_validation_failed");
      return;
    }

    setSubmitting(true);
    setFormError("");
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "The inquiry could not be sent.");
      trackMicadeEvent("contact_form_submitted", { nextStep: values.nextStep });
      setSubmitted(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "The inquiry could not be sent.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!enabled) {
    return (
      <div className="form-availability" role="status">
        <p>The secure inquiry form is being connected.</p>
        {contactEmail ? <a className="button" href={`mailto:${contactEmail}`}>Email Micade directly</a> : <p>Contact details will be available shortly.</p>}
      </div>
    );
  }

  if (submitted) {
    return <div className="form-success" role="status"><h2>Thank you.</h2><p>Your inquiry has been received. Micade will reply using the email address you provided.</p>{contactEmail ? <a className="button" href={`mailto:${contactEmail}`}>Email Micade directly</a> : null}</div>;
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} onFocus={() => { if (!started) { setStarted(true); trackMicadeEvent("contact_form_started"); } }} noValidate>
      <label className="form-honeypot" aria-hidden="true">Fax number<input name="fax" autoComplete="off" tabIndex={-1} maxLength={200} value={values.fax} onChange={(event) => updateField("fax", event.target.value)} /></label>
      <div className="form-grid">
        <label>Name<input name="name" autoComplete="name" maxLength={100} value={values.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}</label>
        <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}</label>
        <label>Business name<input name="business" autoComplete="organization" maxLength={120} value={values.business} onChange={(event) => updateField("business", event.target.value)} aria-invalid={Boolean(errors.business)} aria-describedby={errors.business ? "business-error" : undefined} />{errors.business && <span className="field-error" id="business-error">{errors.business}</span>}</label>
        <label>Business type<select name="businessType" value={values.businessType} onChange={(event) => updateField("businessType", event.target.value)} aria-invalid={Boolean(errors.businessType)} aria-describedby={errors.businessType ? "business-type-error" : undefined}><option value="">Select one</option><option>Independent fashion designer</option><option>Made-to-measure fashion brand</option><option>Emerging fashion label</option><option>Other fashion business</option></select>{errors.businessType && <span className="field-error" id="business-type-error">{errors.businessType}</span>}</label>
      </div>
      <label>Website or social link <span className="optional">Optional</span><input name="website" type="url" inputMode="url" maxLength={500} value={values.website} onChange={(event) => updateField("website", event.target.value)} aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} />{errors.website && <span className="field-error" id="website-error">{errors.website}</span>}</label>
      <label>What is difficult about presenting your work or handling enquiries today?<textarea name="challenge" rows={5} maxLength={3000} value={values.challenge} onChange={(event) => updateField("challenge", event.target.value)} aria-invalid={Boolean(errors.challenge)} aria-describedby={errors.challenge ? "challenge-error" : undefined} />{errors.challenge && <span className="field-error" id="challenge-error">{errors.challenge}</span>}</label>
      <label>Preferred next step<select name="nextStep" value={values.nextStep} onChange={(event) => updateField("nextStep", event.target.value)} aria-invalid={Boolean(errors.nextStep)} aria-describedby={errors.nextStep ? "next-step-error" : undefined}><option value="">Select one</option><option>Share my experience for the research</option><option>Discuss a fashion brand website</option><option>Ask a question</option></select>{errors.nextStep && <span className="field-error" id="next-step-error">{errors.nextStep}</span>}</label>
      <p className="form-note">By sending this form, you agree that Micade may use these details to respond to your inquiry. Read the <a className="text-link" href="/privacy">privacy notice</a>.</p>
      {formError && <p className="form-error" role="alert">{formError} {contactEmail ? <a className="text-link" href={`mailto:${contactEmail}`}>Email Micade directly.</a> : null}</p>}
      <button className="button" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send inquiry"}</button>
    </form>
  );
}
