import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, MidHeadline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { serviceGroups, findSubpage } from "@/lib/services";
import { site } from "@/lib/site";

function primaryOffer(slug: string): { href: string; label: string } {
  switch (slug) {
    case "aeo-strategy":
      return { href: "/resources/tools/aeo-checker", label: "Check your AEO →" };
    case "seo-strategy":
      return { href: "/resources/tools/seo-checker", label: "Run your SEO audit →" };
    case "conversion-strategy":
      return { href: "/resources/tools/funnel-audit", label: "Audit your funnel →" };
    case "website-design":
    case "webflow-development":
      return { href: "/resources/tools/funnel-audit", label: "Audit your funnel →" };
    case "interactive-ai-tools":
      return { href: "/resources/tools", label: "See the AI tools →" };
    case "lead-magnets":
      return { href: "/resources/library", label: "Browse the library →" };
    case "content-marketing":
    case "content-automation":
      return { href: "/resources/library", label: "Get the Content OS →" };
    case "email-marketing":
      return { href: "/resources/library", label: "Get the Nurture Starter →" };
    case "social-media-strategy":
      return { href: "/resources/library", label: "Get the LinkedIn Playbook →" };
    case "analytics-attribution":
      return { href: "/resources/tools/funnel-audit", label: "Audit your attribution →" };
    case "workflow-automations":
    case "ai-agents":
    case "integrations-apis":
      return { href: "/resources/library", label: "See the playbooks →" };
    default:
      return { href: "/resources/tools/funnel-audit", label: "Audit your funnel →" };
  }
}

export async function generateStaticParams() {
  return serviceGroups.flatMap((g) =>
    g.subpages.map((s) => ({ group: g.slug, slug: s.slug }))
  );
}

type Params = { params: Promise<{ group: string; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { group, slug } = await params;
  const match = findSubpage(group, slug);
  if (!match) return {};
  return {
    title: match.sub.title,
    description: match.sub.tagline,
  };
}

export default async function SubpagePage({ params }: Params) {
  const { group: groupSlug, slug } = await params;
  const match = findSubpage(groupSlug, slug);
  if (!match) notFound();
  const { group, sub } = match;

  const subIdx = group.subpages.findIndex((s) => s.slug === sub.slug);
  const nextSub = group.subpages[(subIdx + 1) % group.subpages.length];
  const offer = primaryOffer(sub.slug);

  const url = `${site.url}/services/${group.slug}/${sub.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: group.title, url: `${site.url}/services/${group.slug}` },
          { name: sub.title, url },
        ]}
      />
      <ServiceJsonLd name={sub.title} description={sub.tagline} url={url} />
      <FAQJsonLd items={sub.faqs} />

      {/* Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <div className="flex items-center gap-3 mb-10">
            <Link
              href={`/services/${group.slug}`}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55 hover:text-flame transition-colors"
            >
              ← {group.title}
            </Link>
            <span className="text-bone/30">·</span>
            <PillTag variant="flame">Included in Stage 1</PillTag>
          </div>
          <Display>{sub.title}</Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[720px]">
            {sub.tagline}
          </Body>
          <Body size="lg" className="text-bone/60 mt-6 max-w-[640px]">
            {sub.summary}
          </Body>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <CTAButton href={offer.href} size="lg">
              {offer.label}
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Book a call
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* What it is */}
      <Section variant="cream" className="py-24 lg:py-32">
        <BrandBar label="What it is" number="01 / 05" variant="cream" className="mb-10" />
        <Headline className="max-w-[960px] mb-12">
          The short <em>version</em>.
        </Headline>
        <div className="max-w-[780px] flex flex-col gap-5">
          {sub.whatItIs.map((p, i) => (
            <p
              key={i}
              className="font-sans text-[20px] leading-[1.55] tracking-[-0.005em] text-ink/85 [&_em]:italic [&_em]:font-serif"
            >
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section variant="ink">
        <BrandBar label="What's included" number="02 / 05" className="mb-10" />
        <Headline className="max-w-[960px] mb-12">
          Everything in the <em>scope</em>.
        </Headline>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-[1000px]">
          {sub.included.map((item, i) => (
            <div key={i} className="flex gap-4 border-t border-bone/10 pt-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-flame mt-[5px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[16px] leading-[1.5] text-bone/85">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section variant="charcoal">
        <BrandBar label="Deliverables" number="03 / 05" className="mb-10" />
        <Headline className="max-w-[960px] mb-12">
          What you <em>receive</em>.
        </Headline>
        <div className="grid md:grid-cols-2 gap-5 max-w-[900px]">
          {sub.deliverables.map((d, i) => (
            <div
              key={i}
              className="border border-bone/10 rounded-[4px] p-6 flex gap-4 bg-ink/40"
            >
              <span className="font-serif text-[32px] leading-none text-flame tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[16px] leading-[1.5] text-bone/90 mt-[6px]">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it fits */}
      <Section variant="cream">
        <BrandBar label="How it fits the funnel" number="04 / 05" variant="cream" className="mb-10" />
        <Headline className="max-w-[1000px] mb-10">
          Why this <em>matters</em> for the middle.
        </Headline>
        <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.3] tracking-[-0.02em] max-w-[900px] text-ink [&_em]:italic">
          {sub.fitsFunnel}
        </p>
      </Section>

      {/* FAQ */}
      <Section variant="ink">
        <BrandBar label="FAQ" number="05 / 05" className="mb-10" />
        <Headline className="mb-16">Common questions.</Headline>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1200px]">
          {sub.faqs.map((faq) => (
            <div key={faq.question} className="border-t border-bone/10 pt-6 flex flex-col gap-3">
              <SmallHeadline as="h3">{faq.question}</SmallHeadline>
              <Body className="text-bone/75">{faq.answer}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* Related / next */}
      <Section variant="charcoal">
        <BrandBar label="Next" number="Keep reading" className="mb-10" />
        <div className="grid md:grid-cols-2 gap-5">
          <Link
            href={`/services/${group.slug}`}
            className="group border border-bone/10 rounded-[4px] p-8 flex flex-col gap-4 hover:border-bone/30 transition-colors"
          >
            <Eyebrow>Group overview</Eyebrow>
            <MidHeadline as="h3">{group.title}</MidHeadline>
            <span className="text-bone/60 group-hover:text-bone transition-colors">
              See all five disciplines →
            </span>
          </Link>
          <Link
            href={`/services/${group.slug}/${nextSub.slug}`}
            className="group border border-flame/30 bg-flame/[0.04] rounded-[4px] p-8 flex flex-col gap-4 hover:border-flame/60 transition-colors"
          >
            <Eyebrow className="text-flame">Next discipline</Eyebrow>
            <MidHeadline as="h3">{nextSub.title}</MidHeadline>
            <span className="text-flame">{nextSub.tagline} →</span>
          </Link>
        </div>
      </Section>

      {/* Close CTA */}
      <Section variant="ink" className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Display as="h2" className="max-w-[900px]">
            {sub.title} is one <em>piece</em>. <br />
            The <em>whole layer</em> is what works.
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[520px]">
            Every Secret Layer build includes {sub.title} as part of the bundle. One setup, one
            retainer, twelve months.
          </Body>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton href={offer.href} size="lg">
              {offer.label}
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
