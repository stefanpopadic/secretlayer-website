import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { ToolForm } from "./ToolForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { tools, findTool } from "@/lib/resources";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const tool = findTool(slug);
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.tagline,
  };
}

export default async function ToolPage({ params }: Params) {
  const { slug } = await params;
  const tool = findTool(slug);
  if (!tool) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Resources", url: `${site.url}/resources` },
          { name: "Tools", url: `${site.url}/resources/tools` },
          { name: tool.title, url: `${site.url}/resources/tools/${tool.slug}` },
        ]}
      />

      {/* Hero + form */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <a
                href="/resources/tools"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55 hover:text-flame transition-colors"
              >
                ← All tools
              </a>
              <span className="text-bone/30">·</span>
              <PillTag variant="flame">Free</PillTag>
            </div>
            <Display>{tool.title}</Display>
            <Body size="xl" className="text-bone/75 max-w-[600px]">
              {tool.tagline}
            </Body>
            <Body size="lg" className="text-bone/60 max-w-[540px]">
              {tool.description}
            </Body>
          </div>
          <div className="lg:sticky lg:top-28">
            <ToolForm tool={tool} />
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section variant="cream">
        <BrandBar label="How it works" number="01 / 02" variant="cream" className="mb-10" />
        <Headline className="max-w-[900px]">
          Three <em>steps</em>. No catch.
        </Headline>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {tool.steps.map((s, i) => (
            <div
              key={i}
              className="border border-ink/15 rounded-[4px] p-7 flex flex-col gap-4"
            >
              <span className="font-serif text-[56px] leading-none text-flame-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <SmallHeadline as="h3">{s.label}</SmallHeadline>
              <Body size="sm" className="text-ink/70">
                {s.detail}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* Want the real thing? */}
      <Section variant="charcoal">
        <BrandBar label="Beyond the tool" number="02 / 02" className="mb-10" />
        <Headline className="max-w-[1000px]">
          The tool is the <em>starter kit</em>. <br />
          The layer is what <em>works</em>.
        </Headline>
        <Body size="lg" className="text-bone/70 mt-8 max-w-[640px]">
          Every tool here runs a slice of the audit we run for paying clients. The difference:
          the client version includes the fix. And the layer that makes the fix stick.
        </Body>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/pricing" size="lg">
            See pricing →
          </CTAButton>
          <CTAButton href="/contact" variant="secondary" size="lg">
            Book a call
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
