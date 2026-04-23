import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, SmallHeadline, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { magnets } from "@/lib/resources";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Free lead magnets from Secret Layer — the Middle-of-Funnel Playbook, AEO Checklist, Six Conversion Points, AI Tool Spec Templates, and more.",
};

export default function LibraryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Resources", url: `${site.url}/resources` },
          { name: "Library", url: `${site.url}/resources/library` },
        ]}
      />

      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Library" number={`${magnets.length} magnets · All free`} className="mb-16" />
          <Display>
            Our <em>operating manual</em>, <br />
            public.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            The playbooks, checklists, and templates we use on every client build. Not summaries —
            the real working documents.
          </Body>
        </div>
      </Section>

      <Section variant="cream" className="py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-5">
          {magnets.map((m) => (
            <div
              key={m.slug}
              id={m.slug}
              className="border border-ink/15 rounded-[4px] p-8 flex flex-col gap-5 hover:border-ink/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <PillTag variant="cream">{m.format}</PillTag>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                  {m.pageCount} pages
                </span>
              </div>
              <SmallHeadline as="h3">{m.title}</SmallHeadline>
              <Body className="text-ink/75">{m.description}</Body>
              <CTAButton
                href={`mailto:${site.email}?subject=Library: ${encodeURIComponent(m.title)}`}
                variant="cream-primary"
              >
                Download →
              </CTAButton>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                Coming soon · Email to request early access
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="charcoal" className="py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <SmallHeadline>
            Want all of these — <em>plus the layer that ships them</em>?
          </SmallHeadline>
          <CTAButton href="/pricing" variant="secondary">
            See pricing →
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
