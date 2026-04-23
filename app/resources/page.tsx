import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, MidHeadline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { tools, magnets, articles } from "@/lib/resources";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools, lead magnets, articles, and case studies from Secret Layer. The working playbook for the middle of the funnel.",
};

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Resources", url: `${site.url}/resources` },
        ]}
      />

      {/* Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Resources" number="Tools · Library · Articles · Cases" className="mb-16" />
          <Display>
            The working <em>playbook</em>, <br />
            public.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            Everything we use to build the warm-up layer for our clients — free. Tools you can
            run right now. Playbooks you can screenshot. Articles from our bench.
          </Body>
        </div>
      </Section>

      {/* Tools grid */}
      <Section variant="cream" id="tools">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
          <div>
            <BrandBar label="Tools" number="01 / 04" variant="cream" className="mb-6" />
            <Headline>
              Free <em>interactive tools</em>.
            </Headline>
          </div>
          <CTAButton href="/resources/tools" variant="cream-secondary">
            All tools →
          </CTAButton>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.slice(0, 6).map((t) => (
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

      {/* Library */}
      <Section variant="ink" id="library">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
          <div>
            <BrandBar label="Library" number="02 / 04" className="mb-6" />
            <Headline>
              <em>Lead magnets</em> we use ourselves.
            </Headline>
          </div>
          <CTAButton href="/resources/library" variant="secondary">
            Full library →
          </CTAButton>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {magnets.slice(0, 6).map((m) => (
            <div
              key={m.slug}
              className="border border-bone/10 rounded-[4px] p-7 flex flex-col gap-4 bg-charcoal"
            >
              <div className="flex items-center justify-between">
                <PillTag>{m.format}</PillTag>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/40">
                  {m.pageCount} pages
                </span>
              </div>
              <SmallHeadline as="h3">{m.title}</SmallHeadline>
              <Body size="sm" className="text-bone/70">
                {m.tagline}
              </Body>
              <CTAButton href={`/resources/library#${m.slug}`} variant="ghost" size="sm">
                Download →
              </CTAButton>
            </div>
          ))}
        </div>
      </Section>

      {/* Articles */}
      <Section variant="cream" id="articles">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
          <div>
            <BrandBar label="Articles" number="03 / 04" variant="cream" className="mb-6" />
            <Headline>
              From the <em>bench</em>.
            </Headline>
          </div>
          <CTAButton href="/resources/articles" variant="cream-secondary">
            All articles →
          </CTAButton>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/articles/${a.slug}`}
              className="group border border-ink/15 rounded-[4px] p-7 flex flex-col gap-4 hover:border-flame-dark/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <PillTag variant="cream">{a.category}</PillTag>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                  {a.readTime}
                </span>
              </div>
              <MidHeadline as="h3">{a.title}</MidHeadline>
              <Body size="sm" className="text-ink/70">
                {a.excerpt}
              </Body>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40 mt-auto">
                {new Date(a.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {a.author}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Case studies */}
      <Section variant="ink" id="case-studies">
        <BrandBar label="Case studies" number="04 / 04" className="mb-6" />
        <Headline className="max-w-[1000px] mb-8">
          Case studies <em>ship Q3 2026</em>.
        </Headline>
        <Body size="lg" className="text-bone/70 mt-6 max-w-[640px]">
          First Secret Layer clients start in Q2 2026. Full case studies — with receipts —
          publish as the first 90-day guarantees close.
        </Body>
        <div className="mt-12">
          <CTAButton href="/resources/case-studies" variant="secondary">
            What&apos;s coming →
          </CTAButton>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="charcoal" className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Display as="h2" className="max-w-[1000px]">
            Want the <em>real thing</em>?
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[500px]">
            Free tools are the starter kit. The warm-up layer is what actually ships the 5×.
          </Body>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton href="/pricing" size="lg">
              See pricing →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Book a call
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
