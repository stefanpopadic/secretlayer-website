"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Consent decision:
 * This is a purely transactional/sales inquiry form — the submission is a
 * one-to-one reply only, with no marketing nurture sequence attached. Under
 * GDPR/UK-GDPR and US state law this falls under legitimate interest / service
 * communication, so no ConsentBlock or explicit opt-in checkbox is required —
 * regardless of jurisdiction. If this form ever feeds a marketing sequence,
 * switch to ConsentBlock + pass `jurisdiction` in from the page.
 *
 * TODO: log consent to backend (jurisdiction-agnostic for now — transactional)
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder — wire to Formspree / server action later
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="border border-ink rounded-[4px] p-10 bg-ink text-bone flex flex-col gap-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-flame font-medium">
          Message received
        </div>
        <p className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.02em]">
          Thanks. We&apos;ll be in touch within one business day.
        </p>
        <p className="text-[15px] text-bone/70 leading-[1.55]">
          If you shared a URL, we&apos;ll walk through it before we reply — so the response
          actually moves things forward.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ink/15 rounded-[4px] p-6 lg:p-8 bg-ink/[0.02] flex flex-col gap-5"
    >
      <FormField label="Name" name="name" required />
      <FormField label="Work email" name="email" type="email" required />
      <FormField label="Company" name="company" required />
      <FormField label="Website URL" name="url" type="url" placeholder="https://" />
      <FormSelect
        label="Annual revenue"
        name="revenue"
        options={[
          "Pre-seed / under $500K",
          "$500K – $2M",
          "$2M – $10M",
          "$10M+",
        ]}
      />
      <FormTextarea
        label="What are you trying to fix?"
        name="message"
        placeholder="Thin pipeline, site that doesn't convert, no attribution, etc."
        required
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-2 inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[-0.01em] rounded-[3px] px-7 py-4 text-[15px] transition-colors border",
          status === "submitting"
            ? "bg-ink/50 text-bone/60 border-ink/50 cursor-wait"
            : "bg-ink text-bone border-ink hover:bg-flame-dark hover:border-flame-dark"
        )}
      >
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40 mt-2">
        We respond within one business day · No sales sequences
      </p>
      <p className="font-mono text-[11px] leading-[1.5] tracking-[0.02em] text-ink/60">
        We&apos;ll only use this to reply to your inquiry. See our{" "}
        <a
          href="/privacy"
          className="underline underline-offset-2 text-ink hover:text-flame-dark transition-colors"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 font-medium">
        {label} {required && <span className="text-flame-dark">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="border border-ink/20 rounded-[3px] px-4 py-3 bg-cream text-ink text-[15px] focus:outline-none focus:border-ink transition-colors"
      />
    </label>
  );
}

function FormTextarea({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 font-medium">
        {label} {required && <span className="text-flame-dark">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="border border-ink/20 rounded-[3px] px-4 py-3 bg-cream text-ink text-[15px] focus:outline-none focus:border-ink transition-colors resize-y"
      />
    </label>
  );
}

function FormSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 font-medium">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="border border-ink/20 rounded-[3px] px-4 py-3 bg-cream text-ink text-[15px] focus:outline-none focus:border-ink transition-colors"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
