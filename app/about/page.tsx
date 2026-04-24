import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CompareColumn } from "@/components/CompareColumn";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Two humans plus AI, building the warm-up layer B2B companies are missing. Meet the team behind Secret Layer — Stefan and Nenad Popadic.",
};

const faqs = [
  {
    question: "Why only two people?",
    answer:
      "Because AI lets two operators ship what used to take ten. Small team, zero coordination overhead, senior hands on every deliverable.",
  },
  {
    question: "Who do you work with?",
    answer:
      "B2B companies past the pre-revenue stage — post-seed and up. Not consulting firms (those go to our sister studio Indlead). Not local services. Not ecommerce. We work with SaaS, B2B products, and agencies whose problem is a missing middle, not a missing top.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "About", url: `${site.url}/about` },
        ]}
      />
      <FAQJsonLd items={faqs} />

      {/* Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="About" number="The team" className="mb-5" />
          <Display>
            Two humans. <em>One AI</em>. <br />
            The warm-up <em>layer</em>.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            Secret Layer is a two-person studio. We build the middle of the funnel nobody else
            bothers with — because to do it well you&apos;d need five specialists, and nobody
            wants to coordinate five specialists.
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

      {/* Founders */}
      <Section variant="cream">
        <BrandBar label="Founders" number="01 / 04" variant="cream" className="mb-5" />
        <div className="grid lg:grid-cols-2 gap-12">
          {[
            {
              name: "Stefan Popadic",
              role: "Strategy, design, AI, copy, sales",
              bio: "Ten years in web and brand design. The last three operating solo with AI instead of hiring. I design the funnel, write the copy, build the AI tools, and run the sales conversation. One throat to choke, one hand on the wheel.",
            },
            {
              name: "Nenad Popadic",
              role: "Webflow development, engineering",
              bio: "Senior Webflow developer. Every Secret Layer site is hand-built, not a template. He ships the production build — fast, clean, and indexable by both Google and ChatGPT.",
            },
          ].map((person) => (
            <div
              key={person.name}
              className="border border-ink/15 rounded-[4px] p-8 lg:p-10 flex flex-col gap-5"
            >
              <Eyebrow>{person.role}</Eyebrow>
              <Headline as="h3">{person.name}</Headline>
              <Body className="text-ink/75">{person.bio}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* Operating model */}
      <Section variant="ink">
        <BrandBar label="Operating model" number="02 / 04" className="mb-4" />
        <Headline className="max-w-[900px]">
          Two humans and an AI layer. <em>No agency overhead.</em>
        </Headline>
        <Body size="lg" className="text-bone/70 mt-8 max-w-[640px]">
          Agencies sell process. We sell outcomes — because our process is compressed into two
          brains plus Claude, Claude Code, and a stack of internal tools we built for ourselves.
        </Body>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            {
              num: "01",
              title: "Strategy + design layer",
              body: "Stefan. Positioning, funnel architecture, design, copy, AI tool spec, client relationship.",
            },
            {
              num: "02",
              title: "Engineering layer",
              body: "Nenad. Production Webflow builds, integrations, technical SEO, attribution stack.",
            },
            {
              num: "03",
              title: "AI operator layer",
              body: "Claude + custom tools. Content at scale, nurture at scale, attribution at scale. Our senior hires without the senior salaries.",
            },
          ].map((l) => (
            <div
              key={l.num}
              className="border border-bone/10 rounded-[4px] p-7 flex flex-col gap-4 bg-charcoal"
            >
              <Eyebrow>{l.num}</Eyebrow>
              <SmallHeadline as="h3">{l.title}</SmallHeadline>
              <Body size="sm" className="text-bone/70">
                {l.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* Counter-positioning */}
      <Section variant="cream">
        <BrandBar label="What we are not" number="04 / 04" variant="cream" className="mb-4" />
        <Headline className="max-w-[960px]">
          Half of clarity is saying <em>no</em>. Here&apos;s the list.
        </Headline>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              label: "Not a marketing agency",
              items: [
                "No paid media management",
                "No generic SEO services",
                "No brand book projects",
              ],
            },
            {
              label: "Not a website shop",
              items: [
                "No brochure sites",
                "No template resales",
                "No 'just the website' option",
              ],
            },
            {
              label: "Not a consulting firm brand",
              items: [
                "Strategy/legal/accounting firms",
                "→ go to our sister studio Indlead",
                "Different buyer, different promise",
              ],
            },
            {
              label: "Not for everyone",
              items: [
                "Pre-revenue / too early stage",
                "Ecom / local services → wrong shape",
                "Wants tactics, not a system → pass",
              ],
            },
          ].map((col) => (
            <CompareColumn
              key={col.label}
              variant="cream"
              label="No"
              title={col.label}
              items={col.items}
            />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="ink">
        <BrandBar label="FAQ" number="Answers" className="mb-4" />
        <Headline className="mb-16">What people ask us.</Headline>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-t border-bone/10 pt-6 flex flex-col gap-3">
              <SmallHeadline as="h3">{faq.question}</SmallHeadline>
              <Body className="text-bone/75">{faq.answer}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* Close CTA */}
      <Section variant="charcoal" className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Display as="h2" className="max-w-[900px]">
            Still reading? <em>Let&apos;s talk.</em>
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[500px]">
            Free 20-min funnel audit. No slides. We&apos;ll tell you what your middle is
            missing.
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
