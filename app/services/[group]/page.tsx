import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { serviceGroups, findGroup } from "@/lib/services";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return serviceGroups.map((g) => ({ group: g.slug }));
}

type Params = { params: Promise<{ group: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { group } = await params;
  const g = findGroup(group);
  if (!g) return {};
  return {
    title: g.title,
    description: g.tagline,
  };
}

export default async function GroupPage({ params }: Params) {
  const { group: groupSlug } = await params;
  const group = findGroup(groupSlug);
  if (!group) notFound();

  const groupIdx = serviceGroups.findIndex((g) => g.slug === group.slug);
  const nextGroup = serviceGroups[(groupIdx + 1) % serviceGroups.length];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: group.title, url: `${site.url}/services/${group.slug}` },
        ]}
      />

      {/* Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar
            label={`Services · ${group.title}`}
            number={`${group.subpages.length} disciplines`}
            className="mb-16"
          />
          <Display>{group.title}</Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[720px]">
            {group.tagline}
          </Body>
          <Body size="lg" className="text-bone/60 mt-6 max-w-[640px]">
            {group.summary}
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

      {/* Disciplines */}
      <Section variant="cream" className="py-24 lg:py-32">
        <BrandBar
          label="Disciplines"
          number={`01 / 0${group.subpages.length}`}
          variant="cream"
          className="mb-10"
        />
        <Headline className="max-w-[1000px] mb-16">
          The <em>five parts</em> of {group.title.toLowerCase()}.
        </Headline>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {group.subpages.map((sub, i) => (
            <Link
              key={sub.slug}
              href={`/services/${group.slug}/${sub.slug}`}
              className="group border border-ink/15 rounded-[4px] p-7 flex flex-col gap-4 hover:border-flame-dark/40 hover:bg-flame-dark/[0.04] transition-colors"
            >
              <div className="flex items-center justify-between">
                <Eyebrow>0{i + 1}</Eyebrow>
                <span className="text-[18px] text-ink/30 group-hover:text-flame-dark transition-colors">
                  →
                </span>
              </div>
              <SmallHeadline as="h3">{sub.title}</SmallHeadline>
              <Body size="sm" className="text-ink/70">
                {sub.tagline}
              </Body>
            </Link>
          ))}
        </div>
      </Section>

      {/* How it fits */}
      <Section variant="ink">
        <BrandBar label="How this group fits" number="Why bundled" className="mb-10" />
        <Headline className="max-w-[1000px]">
          {group.title} is <em>one-third</em> of the warm-up layer.
        </Headline>
        <Body size="lg" className="text-bone/70 mt-8 max-w-[640px]">
          Every Secret Layer build includes all three groups. Web Strategy is what&apos;s on the
          site. Growth Strategy is what&apos;s off the site. AI Automation is what runs the
          system without burning a team.
        </Body>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {serviceGroups.map((g) => (
            <Link
              key={g.slug}
              href={`/services/${g.slug}`}
              className={`border rounded-[4px] p-7 flex flex-col gap-4 transition-colors ${
                g.slug === group.slug
                  ? "border-flame/40 bg-flame/[0.06]"
                  : "border-bone/10 hover:border-bone/30"
              }`}
            >
              <Eyebrow className={g.slug === group.slug ? "text-flame" : ""}>
                {g.slug === group.slug ? "This group" : "Group"}
              </Eyebrow>
              <SmallHeadline as="h3">{g.title}</SmallHeadline>
              <Body size="sm" className="text-bone/70">
                {g.tagline}
              </Body>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="charcoal" className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Display as="h2">
            Ready to see the <em>whole layer</em>?
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[500px]">
            {group.title} only works as part of the bundle. See how the full twelve-month build
            comes together.
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
