"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Typography";

type State = "idle" | "submitting" | "sent";

const revenueBands = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M – $10M",
  "$10M+",
];

const dealBands = [
  "Under $5K",
  "$5K – $25K",
  "$25K – $100K",
  "$100K+",
];

const trafficBands = [
  "Under 1K / mo",
  "1K – 10K / mo",
  "10K – 50K / mo",
  "50K+ / mo",
];

const timelineBands = [
  "Ready now",
  "Next 30 days",
  "Next quarter",
  "Just exploring",
];

export function PricingQualifier() {
  const [state, setState] = useState<State>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // Placeholder: wire to Formspree / server action later
    setTimeout(() => setState("sent"), 600);
  }

  if (state === "sent") {
    return (
      <div className="border border-flame/40 bg-flame/[0.06] rounded-[4px] p-10 lg:p-14 flex flex-col gap-6 max-w-[760px]">
        <Eyebrow className="text-flame">Submitted</Eyebrow>
        <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[100%] tracking-[-0.025em]">
          Thanks. We&apos;ll review and reply within <em className="italic">one business day</em>.
        </h3>
        <p className="text-[17px] leading-[1.55] text-bone/75 max-w-[560px]">
          If we&apos;re a fit, you&apos;ll get back a short brief: your custom setup + retainer,
          what the first 90 days look like, and the guarantee terms for your revenue band. If
          we&apos;re not a fit, we&apos;ll tell you and point you to someone who is.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-bone/10 rounded-[4px] p-8 lg:p-12 bg-charcoal flex flex-col gap-10 max-w-[900px]"
    >
      <div className="flex flex-col gap-3">
        <Eyebrow>Fit check</Eyebrow>
        <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[100%] tracking-[-0.025em]">
          Ten questions. Custom pricing back within one <em className="italic">business day</em>.
        </h3>
        <p className="text-[15px] leading-[1.55] text-bone/65 max-w-[560px]">
          Secret Layer is priced on fit — revenue band, deal size, funnel shape — not on tiers.
          Answer the questions and we&apos;ll send your setup + retainer numbers, what the 90-day
          guarantee looks like for your stage, and whether we think we&apos;re the right team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" required />
        <Field label="Company website" name="website" required placeholder="https://" />
        <Select label="Annual revenue" name="revenue" options={revenueBands} required />
        <Select label="Average deal size" name="deal" options={dealBands} required />
        <Select label="Monthly website traffic" name="traffic" options={trafficBands} required />
        <Select label="When do you want to start?" name="timeline" options={timelineBands} required />
      </div>

      <Textarea
        label="What does your current middle-of-funnel look like?"
        name="funnel"
        placeholder="Anything you've tried, what's working, what's missing…"
        required
      />
      <Textarea
        label="Who is your buyer, and what do they usually search to find you?"
        name="buyer"
        placeholder="One or two sentences is plenty."
      />

      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between border-t border-bone/10 pt-8">
        <p className="text-[13px] leading-[1.5] text-bone/55 max-w-[420px]">
          We reply within one business day. If we&apos;re not the right fit, we say so — and route
          you to someone who is.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 font-sans font-medium tracking-[-0.01em] transition-colors duration-200 rounded-[3px] px-7 py-4 text-[15px] bg-flame text-ink hover:bg-flame-dark hover:text-bone border border-flame hover:border-flame-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending…" : "Get my pricing →"}
        </button>
      </div>
    </form>
  );
}

function Field({
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
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-ink border border-bone/10 rounded-[3px] px-4 py-3 text-[15px] text-bone placeholder:text-bone/30 focus:outline-none focus:border-flame/60 transition-colors"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
        {label}
        {required ? " *" : ""}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="bg-ink border border-bone/10 rounded-[3px] px-4 py-3 text-[15px] text-bone focus:outline-none focus:border-flame/60 transition-colors appearance-none"
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

function Textarea({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
        {label}
        {required ? " *" : ""}
      </span>
      <textarea
        name={name}
        rows={4}
        required={required}
        placeholder={placeholder}
        className="bg-ink border border-bone/10 rounded-[3px] px-4 py-3 text-[15px] text-bone placeholder:text-bone/30 focus:outline-none focus:border-flame/60 transition-colors resize-y"
      />
    </label>
  );
}
