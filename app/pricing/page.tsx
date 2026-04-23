import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, MidHeadline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { MathRow } from "@/components/MathRow";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One price. No tiers. $15,000 setup + $5,000 per 28 days, over 12 months. 10 qualified leads in 90 days or we work free.",
};

const faqs = [
  {
    question: "Why a 12-month engagement?",
    answer:
      "Because the middle of the funnel is a compound asset. Month 1 is setup. Month 3 is the first guarantee checkpoint. Months 4–12 are where content, AEO, and nurture start actually producing. Anything shorter and we'd be charging you for the setup without the payoff.",
  },
  {
    question: "What if I cancel?",
    answer:
      "You can exit at any quarterly checkpoint with 30 days' notice. We'll hand off everything we've built — site, magnets, content, automations. Your retainer stops; nothing we built becomes hostage.",
  },
  {
    question: "What counts as a qualified lead?",
    answer:
      "A lead with verified work email, matched to your ICP, with demonstrated intent (tool use, magnet download, or direct inquiry). We define ICP together in week 1 — and we measure against that definition from day 90 onward.",
  },
  {
    question: "What happens if we miss the guarantee?",
    answer:
      "Day 90 miss: we work free (no new invoices) until we hit 10 qualified leads. Day 180 miss: full refund of everything you've paid, plus a $2K penalty. You're made whole if we fail — and we take on the risk.",
  },
  {
    question: "Can I just buy one service?",
    answer:
      "No. The middle layer breaks when you buy one piece of it. If you only need one discipline (e.g. just a website, just SEO), we're not the right fit — and we'll tell you so in discovery.",
  },
  {
    question: "Is there a payment plan?",
    answer:
      "The $15K setup is split 50% on kickoff, 50% on site launch (usually week 4). The $5K / 28 days billing starts at site launch. No long-term contracts — you pay per 28-day cycle.",
  },
];

const modules = [
  {
    group: "Web Strategy",
    items: [
      "Conversion Strategy",
      "Website Design",
      "Webflow Development",
      "Interactive AI Tools (2–3)",
      "Lead Magnets (4)",
    ],
  },
  {
    group: "Growth Strategy",
    items: [
      "SEO Strategy",
      "AEO Strategy",
      "Social Media Strategy",
      "Content Marketing (4–8 / mo)",
      "Email Marketing",
    ],
  },
  {
    group: "AI Automation",
    items: [
      "Analytics & Attribution",
      "Workflow Automations (5–10)",
      "AI Agents (1–3)",
      "Content Automation",
      "Integrations & APIs",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Pricing", url: `${site.url}/pricing` },
        ]}
      />
      <FAQJsonLd items={faqs} />

      {/* Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Pricing" number="One stage · Active now" className="mb-16" />
          <Display>
            <em>$15K</em> setup. <br />
            <em>$5K</em> per 28 days. <br />
            <em>12 months</em>.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[700px]">
            No tiers. No modules to bolt on. No hidden scope. Every Secret Layer client gets the
            full stack — and the full guarantee.
          </Body>
          <div className="mt-10">
            <CTAButton href="/contact" size="lg">
              Start the conversation →
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Main pricing card */}
      <Section variant="cream" className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-12">
          <div>
            <BrandBar label="Stage 1" number="The build" variant="cream" className="mb-8" />
            <Headline className="max-w-[900px]">
              The <em>Secret Layer</em> build, one price.
            </Headline>
          </div>
          <PillTag variant="flame">Active · Taking 3 clients / Q</PillTag>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-5">
          <div className="border border-ink/15 rounded-[4px] p-8 lg:p-10 bg-ink text-bone flex flex-col gap-8">
            <div>
              <Eyebrow>What you get</Eyebrow>
              <MidHeadline as="h3" className="mt-4">
                All 15 disciplines, across 3 groups, over 12 months.
              </MidHeadline>
            </div>
            <div className="grid md:grid-cols-3 gap-6 border-t border-bone/10 pt-6">
              {modules.map((m) => (
                <div key={m.group} className="flex flex-col gap-3">
                  <Eyebrow className="text-flame opacity-100">{m.group}</Eyebrow>
                  <ul className="flex flex-col gap-2">
                    {m.items.map((i) => (
                      <li key={i} className="text-[14px] text-bone/85 leading-[1.5]">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-bone/10 pt-6">
              <Eyebrow>Plus</Eyebrow>
              <div className="mt-3 grid md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  "Weekly working sessions",
                  "Dedicated Slack channel",
                  "Monthly outcome reviews",
                  "90-day lead guarantee",
                  "Quarterly strategy resets",
                  "Full attribution dashboard",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-[14px] text-bone/85">
                    <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-flame shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-ink/15 rounded-[4px] p-8 flex flex-col gap-6 bg-cream">
            <Eyebrow>Investment</Eyebrow>
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  Setup (one-time)
                </div>
                <div className="font-serif text-[56px] leading-none tracking-[-0.025em] mt-2">
                  {site.pricing.setup}
                </div>
                <div className="text-[13px] text-ink/60 mt-2">
                  50% on kickoff. 50% on site launch.
                </div>
              </div>
              <div className="border-t border-ink/10 pt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  Retainer
                </div>
                <div className="font-serif text-[40px] leading-none tracking-[-0.025em] mt-2">
                  {site.pricing.retainer}
                </div>
                <div className="text-[13px] text-ink/60 mt-2">
                  Billed every 28 days. Starts at site launch.
                </div>
              </div>
              <div className="border-t border-ink/10 pt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  Engagement
                </div>
                <div className="font-serif text-[32px] leading-none tracking-[-0.02em] mt-2">
                  {site.pricing.engagement}
                </div>
                <div className="text-[13px] text-ink/60 mt-2">
                  Exit any quarter with 30 days&apos; notice.
                </div>
              </div>
              <div className="border-t border-flame-dark/40 pt-6 bg-flame-dark/[0.06] -mx-8 px-8 py-6 -mb-8 rounded-b-[4px]">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-flame-dark font-medium">
                  Guarantee
                </div>
                <div className="font-serif text-[22px] leading-[1.2] tracking-[-0.015em] mt-2">
                  10 leads in 90 days — or we work free.
                </div>
              </div>
            </div>
            <CTAButton href="/contact" variant="cream-primary" size="lg">
              Start the conversation →
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Total investment math */}
      <Section variant="ink">
        <BrandBar label="The math" number="Full engagement" className="mb-10" />
        <Headline className="max-w-[900px]">
          One year, <em>one invoice cadence</em>.
        </Headline>
        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-[1200px]">
          <div className="flex flex-col gap-5">
            <MathRow label="Setup fee" value={site.pricing.setup} />
            <MathRow label="Retainer × 13 cycles" value="$65,000" />
            <MathRow label="Total · 12 months" value="$80,000" emphasis />
          </div>
          <div className="flex flex-col gap-5">
            <Eyebrow>What $80K buys</Eyebrow>
            <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] tracking-[-0.02em]">
              A two-person senior team for a year, running fifteen disciplines, on the
              <em> outcome-pricing</em> model agencies swore off.
            </p>
            <Body className="text-bone/70">
              For context: a single senior marketing hire costs $150K+ fully loaded. We&apos;re
              two senior operators plus an AI layer, at half the burn, with a refund clause.
            </Body>
          </div>
        </div>
      </Section>

      {/* Guarantee */}
      <Section variant="charcoal" className="overflow-hidden">
        <BrandBar label="The guarantee" number="Priced on outcomes" className="mb-10" />
        <Headline className="max-w-[1000px]">
          We carry the <em>risk</em>. Not you.
        </Headline>
        <div className="mt-16 grid sm:grid-cols-3 gap-5">
          <div className="border border-bone/10 rounded-[4px] p-8 flex flex-col gap-3">
            <Eyebrow>Day 0</Eyebrow>
            <SmallHeadline as="h3">Kickoff.</SmallHeadline>
            <Body size="sm" className="text-bone/70">
              $15K setup, 50% on kickoff. Week 1 starts immediately.
            </Body>
          </div>
          <div className="border border-flame/40 bg-flame/[0.06] rounded-[4px] p-8 flex flex-col gap-3">
            <Eyebrow className="text-flame">Day 90</Eyebrow>
            <SmallHeadline as="h3" className="text-flame">
              10 qualified leads — or free.
            </SmallHeadline>
            <Body size="sm" className="text-bone/70">
              Miss the mark? We work free (no new invoices) until we hit it.
            </Body>
          </div>
          <div className="border border-bone/10 rounded-[4px] p-8 flex flex-col gap-3">
            <Eyebrow>Day 180</Eyebrow>
            <SmallHeadline as="h3">Full refund + $2K.</SmallHeadline>
            <Body size="sm" className="text-bone/70">
              Still short of 10 leads? Everything paid gets refunded, plus $2K penalty.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="cream">
        <BrandBar label="FAQ" number="Common questions" variant="cream" className="mb-10" />
        <Headline className="mb-16">Before you ask.</Headline>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-t border-ink/10 pt-6 flex flex-col gap-3">
              <SmallHeadline as="h3">{faq.question}</SmallHeadline>
              <Body className="text-ink/75">{faq.answer}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* Close */}
      <Section variant="ink" className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Display as="h2" className="max-w-[1000px]">
            Still reading? <em>Let&apos;s talk.</em>
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[500px]">
            Free 20-min audit. We&apos;ll tell you if Secret Layer is the right fit, or point
            you elsewhere.
          </Body>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton href="/contact" size="lg">
              Book a call →
            </CTAButton>
            <CTAButton href="/resources/tools/funnel-audit" variant="secondary" size="lg">
              Audit Your Funnel
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
