import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { serviceGroups } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fifteen disciplines across three groups — Web Strategy, Growth Strategy, AI Automation. One bundled build, delivered over 12 months.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
        ]}
      />

      {/* Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Services" number="15 disciplines · 3 groups" className="mb-16" />
          <Display>
            The <em>middle layer</em>, <br />
            all fifteen parts of it.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            We don&apos;t sell services à la carte. Every Secret Layer build includes the full
            stack — because the middle of your funnel breaks when one part is missing.
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

      {/* Three groups */}
      {serviceGroups.map((group, idx) => (
        <Section
          key={group.slug}
          variant={idx % 2 === 0 ? "cream" : "ink"}
          className="py-24 lg:py-32"
        >
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-24">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6 max-w-[420px] self-start">
              <BrandBar
                label={`Group 0${idx + 1}`}
                number={`${group.subpages.length} disciplines`}
                variant={idx % 2 === 0 ? "cream" : "dark"}
              />
              <Headline>{group.title}</Headline>
              <Body size="lg" className={idx % 2 === 0 ? "text-ink/75" : "text-bone/75"}>
                {group.tagline}
              </Body>
              <Body size="sm" className={idx % 2 === 0 ? "text-ink/60" : "text-bone/60"}>
                {group.summary}
              </Body>
              <div>
                <CTAButton
                  href={`/services/${group.slug}`}
                  variant={idx % 2 === 0 ? "cream-secondary" : "secondary"}
                >
                  Group overview →
                </CTAButton>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 self-start">
              {group.subpages.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/services/${group.slug}/${sub.slug}`}
                  className={`group border rounded-[4px] p-7 flex flex-col gap-4 transition-colors ${
                    idx % 2 === 0
                      ? "border-ink/15 hover:border-flame-dark/40 hover:bg-flame-dark/[0.04]"
                      : "border-bone/10 hover:border-flame/40 hover:bg-flame/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Eyebrow>Discipline</Eyebrow>
                    <span
                      className={`text-[18px] transition-colors ${
                        idx % 2 === 0
                          ? "text-ink/30 group-hover:text-flame-dark"
                          : "text-bone/30 group-hover:text-flame"
                      }`}
                    >
                      →
                    </span>
                  </div>
                  <SmallHeadline as="h3">{sub.title}</SmallHeadline>
                  <Body size="sm" className={idx % 2 === 0 ? "text-ink/70" : "text-bone/70"}>
                    {sub.tagline}
                  </Body>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section variant="charcoal" className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Display as="h2">
            Want the <em>whole layer</em>?
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[500px]">
            One setup, one retainer, all fifteen disciplines — over twelve months.
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
