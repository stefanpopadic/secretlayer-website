import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, MidHeadline, SmallHeadline, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies ship Q3 2026. First Secret Layer guarantees close in Q2; full receipts publish as each 90-day mark passes.",
};

const upcoming = [
  {
    vertical: "B2B SaaS · Mid-market",
    challenge: "3,000 visitors / mo, 1.2% conversion, no middle-of-funnel layer.",
    expectedShip: "2026-08",
  },
  {
    vertical: "Services · Boutique",
    challenge: "Authority-grade site needed. Pipeline thin after rebrand.",
    expectedShip: "2026-09",
  },
  {
    vertical: "B2B platform · Post-Series A",
    challenge: "Strong top-of-funnel. No structured nurture. AEO-invisible.",
    expectedShip: "2026-10",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Resources", url: `${site.url}/resources` },
          { name: "Case Studies", url: `${site.url}/resources/case-studies` },
        ]}
      />

      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Case studies" number="Ship Q3 2026" className="mb-16" />
          <Display>
            Receipts ship <br />
            <em>Q3 2026</em>.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            Secret Layer started taking clients in Q2 2026. Case studies with real numbers —
            not cherry-picked highlights — publish as each 90-day guarantee closes.
          </Body>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <CTAButton href="/resources/tools/funnel-audit" size="lg">
              Get your Free Audit →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get in touch
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <BrandBar label="In-flight builds" number="Active engagements" variant="cream" className="mb-10" />
        <Headline className="max-w-[900px] mb-16">
          What&apos;s <em>being built</em>.
        </Headline>
        <div className="grid md:grid-cols-3 gap-5">
          {upcoming.map((u, i) => (
            <div
              key={i}
              className="border border-ink/15 rounded-[4px] p-7 flex flex-col gap-4"
            >
              <PillTag variant="cream">Client {String.fromCharCode(65 + i)}</PillTag>
              <SmallHeadline as="h3">{u.vertical}</SmallHeadline>
              <Body size="sm" className="text-ink/70">
                {u.challenge}
              </Body>
              <div className="border-t border-ink/10 pt-4 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55">
                  Case study expected · {u.expectedShip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="charcoal" className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Display as="h2" className="max-w-[1000px]">
            Want to be the <em>next case study</em>?
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[500px]">
            We&apos;re taking 3 clients per quarter. Book the audit call to see if Q3 has a
            slot for you.
          </Body>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton href="/resources/tools/funnel-audit" size="lg">
              Get your Free Audit →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get in touch
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
