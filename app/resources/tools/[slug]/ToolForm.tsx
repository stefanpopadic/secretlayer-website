"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/cn";
import type { Tool } from "@/lib/resources";

type Status = "idle" | "submitting" | "processing" | "success";

export function ToolForm({ tool }: { tool: Tool }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("processing");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="border border-flame/40 rounded-[4px] p-8 bg-flame/[0.06] flex flex-col gap-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-flame font-medium">
          Audit queued
        </div>
        <p className="font-serif text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.2] tracking-[-0.02em]">
          We&apos;ll email your report within 24 hours.
        </p>
        <p className="text-[14px] text-bone/70 leading-[1.55]">
          Most reports return the same day. If you want it faster — or want to walk through it
          live — book a call and we&apos;ll run it together.
        </p>
        <div className="flex gap-3 mt-2">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-sans font-medium tracking-[-0.01em] rounded-[3px] px-5 py-3 text-[14px] bg-flame text-ink hover:bg-flame-dark hover:text-bone transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-bone/15 rounded-[4px] p-8 bg-charcoal flex flex-col gap-5"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-flame font-medium">
        Run it free
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/60 font-medium">
          {tool.inputLabel}
        </span>
        <input
          type="text"
          name="input"
          required
          placeholder={tool.inputPlaceholder}
          className="border border-bone/20 rounded-[3px] px-4 py-3 bg-ink text-bone text-[15px] placeholder:text-bone/30 focus:outline-none focus:border-flame transition-colors"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/60 font-medium">
          Email · we send the report here
        </span>
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className="border border-bone/20 rounded-[3px] px-4 py-3 bg-ink text-bone text-[15px] placeholder:text-bone/30 focus:outline-none focus:border-flame transition-colors"
        />
      </label>

      <button
        type="submit"
        disabled={status !== "idle"}
        className={cn(
          "mt-2 inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[-0.01em] rounded-[3px] px-6 py-3.5 text-[15px] transition-colors border",
          status === "idle"
            ? "bg-flame text-ink border-flame hover:bg-flame-dark hover:text-bone hover:border-flame-dark"
            : "bg-flame/40 text-ink/60 border-flame/40 cursor-wait"
        )}
      >
        {status === "idle" && `${tool.submitLabel}`}
        {status === "submitting" && "Queuing…"}
        {status === "processing" && "Running audit…"}
      </button>

      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/40">
        No newsletter opt-in · Report emailed once · Then we&apos;re out of your inbox
      </p>
    </form>
  );
}
