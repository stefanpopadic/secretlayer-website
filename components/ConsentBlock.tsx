"use client";

import Link from "next/link";
import type { Jurisdiction } from "@/lib/geo";
import { needsExplicitConsent } from "@/lib/geo";

type Props = {
  jurisdiction: Jurisdiction;
  marketingConsent: boolean;
  onConsentChange: (v: boolean) => void;
  variant?: "dark" | "cream";
};

export function ConsentBlock({
  jurisdiction,
  marketingConsent,
  onConsentChange,
  variant = "dark",
}: Props) {
  const explicit = needsExplicitConsent(jurisdiction);
  const noticeColor = variant === "cream" ? "text-ink/60" : "text-bone/60";
  const linkColor = variant === "cream" ? "text-ink" : "text-bone";
  const checkColor = variant === "cream" ? "text-ink/75" : "text-bone/75";

  return (
    <div className="flex flex-col gap-3">
      <p className={`font-mono text-[11px] leading-[1.5] tracking-[0.02em] ${noticeColor}`}>
        We&apos;ll email your report to this address and send occasional related insights.
        Unsubscribe anytime. See our{" "}
        <Link href="/privacy" className={`underline underline-offset-2 ${linkColor}`}>
          Privacy Policy
        </Link>
        .
      </p>
      {explicit && (
        <label className={`flex items-start gap-2.5 cursor-pointer font-mono text-[11px] leading-[1.5] tracking-[0.02em] ${checkColor}`}>
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => onConsentChange(e.target.checked)}
            className="mt-[2px] h-[14px] w-[14px] shrink-0 accent-flame cursor-pointer"
          />
          <span>
            I agree to receive the email series and occasional related emails from Secret
            Layer. Unsubscribe anytime.
          </span>
        </label>
      )}
    </div>
  );
}
