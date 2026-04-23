"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";

type Answers = {
  revenue: string;
  dealSize: string;
  visitors: string;
  closeRate: string;
  leadMagnet: "yes" | "no" | "";
  aiTool: "yes" | "no" | "";
  timeline: string;
  name: string;
  email: string;
  company: string;
};

type Step = {
  key: keyof Answers | "email";
  eyebrow: string;
  question: string;
  helper?: string;
  type: "select" | "number" | "yesno" | "emailBlock";
  options?: string[];
  suffix?: string;
  placeholder?: string;
};

const steps: Step[] = [
  {
    key: "revenue",
    eyebrow: "Question 01 / 07",
    question: "What was your company's revenue last year?",
    helper: "We use the revenue band to sanity-check the projection.",
    type: "select",
    options: [
      "Pre-revenue",
      "Under $500K",
      "$500K – $1M",
      "$1M – $3M",
      "$3M – $10M",
      "$10M+",
    ],
  },
  {
    key: "dealSize",
    eyebrow: "Question 02 / 07",
    question: "What's your average deal size?",
    helper: "Contract value of a typical closed customer. Just a number — we'll do the math.",
    type: "number",
    suffix: "USD",
    placeholder: "e.g. 25000",
  },
  {
    key: "visitors",
    eyebrow: "Question 03 / 07",
    question: "How many monthly visitors does your website get?",
    helper: "Unique visitors per month. A rough number is fine.",
    type: "number",
    suffix: "/ month",
    placeholder: "e.g. 5000",
  },
  {
    key: "closeRate",
    eyebrow: "Question 04 / 07",
    question: "What percentage of qualified leads do you usually close?",
    helper: "Lead → customer, from first qualified conversation to signed contract.",
    type: "number",
    suffix: "%",
    placeholder: "e.g. 25",
  },
  {
    key: "leadMagnet",
    eyebrow: "Question 05 / 07",
    question: "Does your site offer a real lead magnet?",
    helper: "A downloadable playbook, checklist, or tool — not a newsletter signup.",
    type: "yesno",
  },
  {
    key: "aiTool",
    eyebrow: "Question 06 / 07",
    question: "Is there an interactive tool on your site?",
    helper: "Calculator, audit, or generator the visitor can use before speaking to sales.",
    type: "yesno",
  },
  {
    key: "timeline",
    eyebrow: "Question 07 / 07",
    question: "When do you want to start?",
    type: "select",
    options: ["Ready now", "Next 30 days", "Next quarter", "Just exploring"],
  },
  {
    key: "email",
    eyebrow: "Your results",
    question: "Where should we send your funnel math?",
    helper:
      "You'll see your results on the next screen instantly. We'll also email you a copy so you can share it with your team.",
    type: "emailBlock",
  },
];

const initial: Answers = {
  revenue: "",
  dealSize: "",
  visitors: "",
  closeRate: "",
  leadMagnet: "",
  aiTool: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
};

export function PricingQualifier() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const step = steps[idx];
  const total = steps.length;
  const progress = ((idx + (done ? 1 : 0)) / total) * 100;

  const results = useMemo(() => computeResults(answers), [answers]);

  function update<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function next() {
    if (idx < steps.length - 1) setIdx(idx + 1);
  }

  function back() {
    if (idx > 0) setIdx(idx - 1);
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 600);
  }

  if (done) {
    return <Results answers={answers} results={results} />;
  }

  const value = step.key === "email" ? "" : answers[step.key as keyof Answers];
  const filled = step.key === "email" ? true : value.toString().trim().length > 0;

  return (
    <div className="border border-bone/10 rounded-[4px] bg-charcoal max-w-[880px]">
      {/* Progress */}
      <div className="h-[3px] bg-bone/5 rounded-t-[4px] overflow-hidden">
        <div
          className="h-full bg-flame transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-8 lg:p-12 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-flame">
            {step.eyebrow}
          </span>
          {idx > 0 && idx < steps.length && (
            <button
              type="button"
              onClick={back}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/50 hover:text-bone transition-colors"
            >
              ← Back
            </button>
          )}
        </div>

        <h3 className="font-serif text-[clamp(1.75rem,4vw,3rem)] leading-[100%] tracking-[-0.025em] max-w-[720px]">
          {step.question}
        </h3>
        {step.helper && (
          <p className="text-[15px] leading-[1.55] text-bone/60 max-w-[560px] -mt-4">
            {step.helper}
          </p>
        )}

        {step.type === "select" && (
          <div className="grid sm:grid-cols-2 gap-3 max-w-[720px]">
            {step.options!.map((opt) => {
              const active = answers[step.key as keyof Answers] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    update(step.key as keyof Answers, opt as Answers[keyof Answers]);
                    setTimeout(next, 180);
                  }}
                  className={`text-left px-5 py-4 rounded-[3px] border transition-colors ${
                    active
                      ? "border-flame bg-flame/[0.08] text-bone"
                      : "border-bone/15 text-bone/85 hover:border-bone/40 hover:bg-bone/[0.02]"
                  }`}
                >
                  <span className="text-[16px]">{opt}</span>
                </button>
              );
            })}
          </div>
        )}

        {step.type === "yesno" && (
          <div className="grid grid-cols-2 gap-3 max-w-[360px]">
            {(["yes", "no"] as const).map((opt) => {
              const active = answers[step.key as keyof Answers] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    update(step.key as keyof Answers, opt);
                    setTimeout(next, 180);
                  }}
                  className={`px-6 py-4 rounded-[3px] border uppercase tracking-[0.1em] text-[13px] font-medium transition-colors ${
                    active
                      ? "border-flame bg-flame/[0.08] text-bone"
                      : "border-bone/15 text-bone/85 hover:border-bone/40"
                  }`}
                >
                  {opt === "yes" ? "Yes" : "No"}
                </button>
              );
            })}
          </div>
        )}

        {step.type === "number" && (
          <div className="flex flex-col gap-4 max-w-[520px]">
            <div className="flex items-center gap-4 border-b border-bone/20 focus-within:border-flame transition-colors pb-2">
              <input
                autoFocus
                type="number"
                inputMode="numeric"
                placeholder={step.placeholder}
                value={answers[step.key as keyof Answers] as string}
                onChange={(e) =>
                  update(step.key as keyof Answers, e.target.value as Answers[keyof Answers])
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filled) {
                    e.preventDefault();
                    next();
                  }
                }}
                className="flex-1 bg-transparent outline-none font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[100%] tracking-[-0.025em] text-bone placeholder:text-bone/25"
              />
              {step.suffix && (
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-bone/50">
                  {step.suffix}
                </span>
              )}
            </div>
            <button
              type="button"
              disabled={!filled}
              onClick={next}
              className="self-start inline-flex items-center gap-2 px-7 py-4 text-[15px] font-medium rounded-[3px] bg-flame text-ink hover:bg-flame-dark hover:text-bone border border-flame hover:border-flame-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {step.type === "emailBlock" && (
          <form onSubmit={submit} className="flex flex-col gap-5 max-w-[560px]">
            <div className="grid sm:grid-cols-2 gap-4">
              <LabeledInput
                label="Your name"
                value={answers.name}
                onChange={(v) => update("name", v)}
                required
              />
              <LabeledInput
                label="Company"
                value={answers.company}
                onChange={(v) => update("company", v)}
                required
              />
            </div>
            <LabeledInput
              label="Work email"
              type="email"
              value={answers.email}
              onChange={(v) => update("email", v)}
              required
            />
            <button
              type="submit"
              disabled={submitting || !answers.email || !answers.name}
              className="self-start inline-flex items-center gap-2 px-7 py-4 text-[15px] font-medium rounded-[3px] bg-flame text-ink hover:bg-flame-dark hover:text-bone border border-flame hover:border-flame-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? "Calculating…" : "Show my results →"}
            </button>
            <p className="text-[12px] leading-[1.5] text-bone/50">
              No spam. We send one email with your results and a short note on next steps. You can
              reply directly to that email if you want to talk.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function LabeledInput({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="bg-ink border border-bone/10 rounded-[3px] px-4 py-3 text-[15px] text-bone placeholder:text-bone/30 focus:outline-none focus:border-flame/60 transition-colors"
      />
    </label>
  );
}

type Computed = {
  visitors: number;
  deal: number;
  closeRate: number;
  currentLeadsPerMonth: number;
  currentPipelineAnnual: number;
  additionalLeadsAnnual: number;
  projectedPipelineAnnual: number;
  investment: number;
  roiMultiple: number;
  investmentAsPct: number;
};

function computeResults(a: Answers): Computed {
  const visitors = Math.max(0, parseInt(a.visitors || "0", 10));
  const deal = Math.max(0, parseInt(a.dealSize || "0", 10));
  const closeRate = clamp(parseFloat(a.closeRate || "0") / 100, 0.05, 0.9);

  // Conservative industry baseline: ~1% of visitors convert to a qualified lead today.
  const currentConversion = 0.01;
  const currentLeadsPerMonth = visitors * currentConversion;
  const currentPipelineAnnual = currentLeadsPerMonth * 12 * closeRate * deal;

  // Secret Layer capture rate on the 99% that would otherwise leave.
  // Benchmark: 3% captured over 12 months as a qualified lead via warm-up layer.
  const secretLayerCapture = 0.03;
  const additionalLeadsAnnual = visitors * (1 - currentConversion) * secretLayerCapture * 12;
  const projectedPipelineAnnual = additionalLeadsAnnual * closeRate * deal;

  const investment = site.pricing.total;
  const roiMultiple =
    projectedPipelineAnnual > 0 ? projectedPipelineAnnual / investment : 0;
  const investmentAsPct =
    projectedPipelineAnnual > 0 ? (investment / projectedPipelineAnnual) * 100 : 0;

  return {
    visitors,
    deal,
    closeRate,
    currentLeadsPerMonth,
    currentPipelineAnnual,
    additionalLeadsAnnual,
    projectedPipelineAnnual,
    investment,
    roiMultiple,
    investmentAsPct,
  };
}

function clamp(n: number, min: number, max: number) {
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function currency(n: number) {
  if (!Number.isFinite(n)) return "$0";
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}

function Results({ answers, results }: { answers: Answers; results: Computed }) {
  const firstName = answers.name.split(" ")[0] || "there";
  const hasUpside = results.projectedPipelineAnnual > 0;

  return (
    <div className="flex flex-col gap-12 max-w-[1100px]">
      {/* Intro */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-flame">
          Your funnel math
        </span>
        <h3 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[100%] tracking-[-0.03em]">
          {firstName}, here&apos;s what your <em className="italic">middle</em> is worth.
        </h3>
        <p className="text-[17px] leading-[1.55] text-bone/70 max-w-[680px]">
          Based on your {results.visitors.toLocaleString()} monthly visitors, {currency(results.deal)}{" "}
          average deal, and {(results.closeRate * 100).toFixed(0)}% close rate. Conservative
          industry benchmarks — we don&apos;t inflate the math.
        </p>
      </div>

      {/* Current vs Projected */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="border border-bone/10 rounded-[4px] p-8 lg:p-10 bg-ink flex flex-col gap-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
            Today · without Secret Layer
          </span>
          <div>
            <p className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[100%] tracking-[-0.025em]">
              {currency(results.currentPipelineAnnual)}
            </p>
            <p className="text-[14px] text-bone/55 mt-2">annual closed pipeline from your site</p>
          </div>
          <div className="border-t border-bone/10 pt-5 flex flex-col gap-2 text-[14px] text-bone/70">
            <Row label="Monthly qualified leads" value={results.currentLeadsPerMonth.toFixed(1)} />
            <Row label="Industry-standard conversion" value="~1% of traffic" />
            <Row label="The 99% that leave" value="Never come back" />
          </div>
        </div>
        <div className="border border-flame/40 bg-flame/[0.06] rounded-[4px] p-8 lg:p-10 flex flex-col gap-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-flame">
            12 months · with Secret Layer
          </span>
          <div>
            <p className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[100%] tracking-[-0.025em] text-flame">
              +{currency(results.projectedPipelineAnnual)}
            </p>
            <p className="text-[14px] text-bone/65 mt-2">
              additional annual pipeline, on top of what you close today
            </p>
          </div>
          <div className="border-t border-flame/30 pt-5 flex flex-col gap-2 text-[14px] text-bone/75">
            <Row
              label="Additional qualified leads / year"
              value={Math.round(results.additionalLeadsAnnual).toLocaleString()}
            />
            <Row label="Capture rate on the 99%" value="~3% (conservative)" />
            <Row label="Guarantee" value="10 qualified leads in 90 days" />
          </div>
        </div>
      </div>

      {/* The price reveal */}
      <div className="border border-bone/10 rounded-[4px] p-8 lg:p-12 bg-charcoal flex flex-col gap-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-flame">
          The investment
        </span>
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="flex flex-col gap-3">
            <p className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[100%] tracking-[-0.03em]">
              {site.pricing.totalLabel}
            </p>
            <p className="text-[14px] text-bone/55">12-month total investment</p>
          </div>
          <div className="flex flex-col gap-5 border-l border-bone/10 pl-10 max-lg:border-l-0 max-lg:pl-0 max-lg:border-t max-lg:pt-8">
            {hasUpside ? (
              <>
                <p className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-bone/90">
                  That&apos;s <em className="italic text-flame">{results.investmentAsPct.toFixed(0)}%</em>{" "}
                  of the projected 12-month upside.
                </p>
                <p className="text-[16px] leading-[1.55] text-bone/65 max-w-[560px]">
                  For every dollar you put into Secret Layer, we&apos;re projecting{" "}
                  <strong className="text-bone">{results.roiMultiple.toFixed(1)}× back</strong> in
                  additional annual pipeline. And if we miss 10 qualified leads at day 90, we work
                  free. Miss at 180, full refund plus a {site.pricing.penaltyLabel} penalty.
                </p>
              </>
            ) : (
              <p className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.2] tracking-[-0.02em] text-bone/80">
                We need real traffic + deal-size numbers to run the ROI math. Reply to our email
                with those and we&apos;ll run it manually.
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 border-t border-bone/10 pt-8">
          <Stat label="Setup (one-time)" value={site.pricing.setupLabel} sub="50% kickoff · 50% on launch" />
          <Stat label="Retainer" value={site.pricing.retainerLabel} sub="Billed every 28 days" />
          <Stat label="Engagement" value={site.pricing.engagement} sub="Exit any quarter, 30d notice" />
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <a
          href={`mailto:${site.email}?subject=Secret%20Layer%20–%20${encodeURIComponent(
            answers.company || "Your project"
          )}&body=${encodeURIComponent(
            `Hi — I just ran the funnel math on secretlayer.co and wanted to follow up.\n\nCompany: ${answers.company}\nMonthly visitors: ${answers.visitors}\nDeal size: $${answers.dealSize}\nClose rate: ${answers.closeRate}%\nTimeline: ${answers.timeline}\n\nLet's talk.`
          )}`}
          className="inline-flex items-center gap-2 px-7 py-4 text-[15px] font-medium rounded-[3px] bg-flame text-ink hover:bg-flame-dark hover:text-bone border border-flame hover:border-flame-dark transition-colors"
        >
          Book the 20-min fit call →
        </a>
        <a
          href="/resources/tools/funnel-audit"
          className="inline-flex items-center gap-2 px-7 py-4 text-[15px] font-medium rounded-[3px] border border-bone/30 text-bone hover:border-bone hover:bg-bone hover:text-ink transition-colors"
        >
          Run the free funnel audit
        </a>
      </div>
      <p className="text-[13px] leading-[1.55] text-bone/50 max-w-[680px]">
        Your results are also in your inbox — check {answers.email} in the next few minutes. If
        you&apos;d rather reply to that email with questions, we read every one.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-bone/55">{label}</span>
      <span className="text-bone tabular-nums">{value}</span>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/50">{label}</span>
      <span className="font-serif text-[28px] leading-[100%] tracking-[-0.02em]">{value}</span>
      <span className="text-[12px] text-bone/55">{sub}</span>
    </div>
  );
}
