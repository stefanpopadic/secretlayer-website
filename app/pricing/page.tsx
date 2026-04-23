import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, MidHeadline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { PillTag } from "@/components/PillTag";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { PricingQualifier } from "./PricingQualifier";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Secret Layer is priced on fit, not on tiers. Answer ten questions — get your custom setup + retainer back within one business day. 10 qualified leads in 90 days or we work free.",
};

const faqs = [
  {
    question: "Why don't you publish prices?",
    answer:
      "Because one public number doesn't fit a post-seed SaaS, a mid-market services firm, and a growth-stage B2B platform. Our setup and retainer flex with revenue band, deal size, and funnel shape. Answer the fit-check form and you get your real numbers — not a range.",
  },
  {
    question: "Why a 12-month engagement?",
    answer:
      "Because the middle of the funnel is a compound asset. Month 1 is setup. Month 3 is the first guarantee checkpoint. Months 4–12 are where content, AEO, and nurture start actually producing. Anything shorter and we'd charge for setup without the payoff.",
  },
  {
    question: "What if I cancel?",
    answer:
      "You can exit at any quarterly checkpoint with 30 days' notice. We hand off everything we've built — site, magnets, content, automations. Your retainer stops; nothing we built becomes hostage.",
  },
  {
    question: "What counts as a qualified lead?",
    answer:
      "A lead with a verified work email, matched to your ICP, with demonstrated intent (tool use, magnet download, or direct inquiry). We define ICP together in week 1 and measure against that definition from day 90 onward.",
  },
  {
    question: "What happens if we miss the guarantee?",
    answer:
      "Day 90 miss: we work free (no new invoices) until we hit 10 qualified leads. Day 180 miss: full refund of everything you've paid, plus a penalty on top. You're made whole if we fail — we carry the risk.",
  },
  {
    question: "Can I just buy one service?",
    answer:
      "No. The middle layer breaks when you buy one piece of it. If you only need one discipline (a website, an SEO audit), we're not the right fit — and we'll say so in reply to your fit check.",
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
          <BrandBar label="Pricing" number="Priced on fit" className="mb-16" />
          <Display>
            Priced on <em>fit</em>. <br />
            Not on <em>tiers</em>.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[720px]">
            One bundled engagement. One retainer cadence. One guarantee. The only thing that
            changes is the setup + retainer number — and that&apos;s calibrated to your revenue,
            deal size, and funnel stage.
          </Body>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <CTAButton href="#qualifier" size="lg">
              Start the fit check →
            </CTAButton>
            <CTAButton href="/resources/tools/funnel-audit" variant="secondary" size="lg">
              Audit your funnel first
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section variant="cream" className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16">
          <div>
            <BrandBar label="How pricing works" number="Three steps" variant="cream" className="mb-8" />
            <Headline className="max-w-[960px]">
              Custom numbers back within <em>one business day</em>.
            </Headline>
          </div>
          <PillTag variant="flame">Active · Taking 3 clients / Q</PillTag>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              num: "01",
              label: "Fit check",
              body: "Answer ten questions — revenue band, deal size, traffic, funnel shape, timeline. Takes five minutes.",
            },
            {
              num: "02",
              label: "We assess",
              body: "We review your answers, your site, and whether the model fits. If it doesn't, we say so and route you elsewhere.",
            },
            {
              num: "03",
              label: "You get your brief",
              body: "Custom setup + retainer, what the 90-day guarantee looks like at your stage, and a recommended start date.",
            },
          ].map((s) => (
            <div
              key={s.num}
              className="border border-ink/15 rounded-[4px] p-8 bg-cream flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-serif text-[28px] leading-none text-flame-dark tabular-nums">
                  {s.num}
                </span>
                <Eyebrow>{s.label}</Eyebrow>
              </div>
              <p className="text-[16px] leading-[1.5] text-ink/80">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's inside (no prices) */}
      <Section variant="ink">
        <BrandBar label="What's inside" number="One bundle" className="mb-10" />
        <Headline className="max-w-[1000px] mb-12">
          All fifteen disciplines. <em>One</em> engagement.
        </Headline>
        <div className="grid md:grid-cols-3 gap-6 max-w-[1100px]">
          {modules.map((m) => (
            <div key={m.group} className="border border-bone/10 rounded-[4px] p-6 flex flex-col gap-4">
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
        <div className="mt-16 border-t border-bone/10 pt-10 max-w-[900px]">
          <Eyebrow>Plus, every engagement</Eyebrow>
          <div className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-3">
            {[
              "Weekly working sessions",
              "Dedicated Slack channel",
              "Monthly outcome reviews",
              "90-day lead guarantee",
              "Quarterly strategy resets",
              "Full attribution dashboard",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-[15px] text-bone/85">
                <span className="mt-[8px] h-[3px] w-[3px] rounded-full bg-flame shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Guarantee */}
      <Section variant="charcoal" className="overflow-hidden">
        <BrandBar label="The guarantee" number="Priced on outcomes" className="mb-10" />
        <Headline className="max-w-[1100px]">
          We carry the <em>risk</em>. Not you.
        </Headline>
        <div className="mt-16 grid sm:grid-cols-3 gap-5">
          <div className="border border-bone/10 rounded-[4px] p-8 flex flex-col gap-3">
            <Eyebrow>Day 0</Eyebrow>
            <SmallHeadline as="h3">Kickoff.</SmallHeadline>
            <Body size="sm" className="text-bone/70">
              Setup starts. Strategy, design, dev, and content all run in parallel from week 1.
            </Body>
          </div>
          <div className="border border-flame/40 bg-flame/[0.06] rounded-[4px] p-8 flex flex-col gap-3">
            <Eyebrow className="text-flame">Day 90</Eyebrow>
            <SmallHeadline as="h3" className="text-flame">
              10 qualified leads — or free.
            </SmallHeadline>
            <Body size="sm" className="text-bone/70">
              Miss the mark? We work free — no new invoices — until we hit it.
            </Body>
          </div>
          <div className="border border-bone/10 rounded-[4px] p-8 flex flex-col gap-3">
            <Eyebrow>Day 180</Eyebrow>
            <SmallHeadline as="h3">Full refund + penalty.</SmallHeadline>
            <Body size="sm" className="text-bone/70">
              Still short of 10 leads? Everything paid gets refunded, plus a penalty on top.
            </Body>
          </div>
        </div>
      </Section>

      {/* Qualifier form */}
      <Section variant="ink" id="qualifier" className="py-24 lg:py-32">
        <BrandBar label="Fit check" number="Ten questions · 5 min" className="mb-10" />
        <MidHeadline className="max-w-[900px] mb-10">
          Answer the fit check. Get your <em>custom pricing + 90-day plan</em> back by tomorrow.
        </MidHeadline>
        <PricingQualifier />
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
            Still reading? <em>Run the fit check.</em>
          </Display>
          <Body size="lg" className="text-bone/70 max-w-[520px]">
            Five minutes in. Custom numbers back in one business day. No call required until you
            want one.
          </Body>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton href="#qualifier" size="lg">
              Start the fit check →
            </CTAButton>
            <CTAButton href="/resources/tools/funnel-audit" variant="secondary" size="lg">
              Audit your funnel
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
