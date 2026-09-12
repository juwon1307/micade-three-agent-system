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
};

const initialValues: FormValues = {
  name: "",
  email: "",
  business: "",
  businessType: "",
  challenge: "",
  nextStep: "",
  website: "",
};

export function InquiryForm() {
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

  if (submitted) {
    return <div className="form-success" role="status"><h2>Thank you.</h2><p>Your preview inquiry is ready. The production submission connection will be enabled after Micade approves the contact-handling provider.</p><a className="button" href="mailto:hello@micade.example">Email Micade directly -&gt;</a></div>;
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} onFocus={() => { if (!started) { setStarted(true); trackMicadeEvent("contact_form_started"); } }} noValidate>
      <div className="form-grid">
        <label>Name<input value={values.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} />{errors.name && <span className="field-error">{errors.name}</span>}</label>
        <label>Email<input type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} />{errors.email && <span className="field-error">{errors.email}</span>}</label>
        <label>Business name<input value={values.business} onChange={(event) => updateField("business", event.target.value)} aria-invalid={Boolean(errors.business)} />{errors.business && <span className="field-error">{errors.business}</span>}</label>
        <label>Business type<select value={values.businessType} onChange={(event) => updateField("businessType", event.target.value)} aria-invalid={Boolean(errors.businessType)}><option value="">Select one</option><option>Home or property service</option><option>Health, wellness, or beauty</option><option>Professional local service</option><option>Other small business</option></select>{errors.businessType && <span className="field-error">{errors.businessType}</span>}</label>
      </div>
      <label>Website or social link <span className="optional">Optional</span><input type="url" value={values.website} onChange={(event) => updateField("website", event.target.value)} /></label>
      <label>Main growth challenge<textarea rows={5} value={values.challenge} onChange={(event) => updateField("challenge", event.target.value)} aria-invalid={Boolean(errors.challenge)} />{errors.challenge && <span className="field-error">{errors.challenge}</span>}</label>
      <label>Preferred next step<select value={values.nextStep} onChange={(event) => updateField("nextStep", event.target.value)} aria-invalid={Boolean(errors.nextStep)}><option value="">Select one</option><option>Start a conversation</option><option>Request an audit</option><option>Discuss a service</option></select>{errors.nextStep && <span className="field-error">{errors.nextStep}</span>}</label>
      <p className="form-note">Your information is sent only after a destination is configured. Use the email fallback for a live inquiry.</p>
      {formError && <p className="form-error" role="alert">{formError} <a className="text-link" href="mailto:hello@micade.example">Email Micade directly.</a></p>}
      <button className="button" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send inquiry"}</button>
    </form>
  );
}
