import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, MidHeadline, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { articles } from "@/lib/resources";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Working-playbook essays from Secret Layer — strategy, AEO, operations, and the case for the middle-of-funnel.",
};

export default function ArticlesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Resources", url: `${site.url}/resources` },
          { name: "Articles", url: `${site.url}/resources/articles` },
        ]}
      />

      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Articles" number={`${articles.length} pieces`} className="mb-16" />
          <Display>
            Essays from the <em>bench</em>.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            Not &ldquo;5 tips&rdquo; posts. The arguments, teardowns, and frameworks we&apos;re
            publishing as we build.
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
          Most recent <em>first</em>.
        </Headline>
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
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40 mt-auto pt-2">
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
    </>
  );
}
