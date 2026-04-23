import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, SmallHeadline, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { tools } from "@/lib/resources";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Tools",
  description:
    "Free interactive tools for B2B teams — funnel audit, AEO checker, SEO checker, content gap finder, schema validator, attribution check.",
};

export default function ToolsIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Resources", url: `${site.url}/resources` },
          { name: "Tools", url: `${site.url}/resources/tools` },
        ]}
      />

      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Tools" number={`${tools.length} free tools`} className="mb-5" />
          <Display>
            Run the <em>same tools</em> <br />
            we run for <em>clients</em>.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            No signup wall before the answer. Paste your URL, get the report. Email comes after,
            not before.
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
        <Headline className="max-w-[1000px] mb-16">
          <em>Free</em>. Actually free.
        </Headline>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t) => (
            <Link
              key={t.slug}
              href={`/resources/tools/${t.slug}`}
              className="group border border-ink/15 rounded-[4px] p-7 flex flex-col gap-4 hover:border-flame-dark/40 hover:bg-flame-dark/[0.04] transition-colors"
            >
              <div className="flex items-center justify-between">
                <PillTag variant="cream">Tool</PillTag>
                <span className="text-[18px] text-ink/30 group-hover:text-flame-dark transition-colors">
                  →
                </span>
              </div>
              <SmallHeadline as="h3">{t.title}</SmallHeadline>
              <Body size="sm" className="text-ink/70">
                {t.tagline}
              </Body>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
