import Link from "next/link";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, MidHeadline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { MathRow } from "@/components/MathRow";
import { CompareColumn } from "@/components/CompareColumn";
import { PillTag } from "@/components/PillTag";
import { CTAButton } from "@/components/CTAButton";
import { StanzaLine } from "@/components/StanzaLine";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 pb-24 lg:pb-32 overflow-hidden">
        <GridBg variant="dark" />
        <div className="relative">
          <BrandBar label="Secret Layer" number="The warm-up layer" className="mb-5" />
          <Display className="max-w-[1100px]">
            The <em>middle</em> of your funnel B2B companies are <em>missing</em>.
          </Display>
          <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <Body size="xl" className="text-bone/75 max-w-[620px]">
              You spend to bring traffic. You capture the 1% who are ready. Everyone else leaves
              and never comes back. We build the layer that warms the other 99% — website, AI
              tools, content, SEO, AEO, email nurture, attribution.
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
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-bone/10 pt-8">
            <div>
              <Eyebrow>Guarantee</Eyebrow>
              <p className="mt-2 font-serif text-[22px] leading-[1.2] tracking-[-0.015em]">
                10 leads / 90 days
              </p>
            </div>
            <div>
              <Eyebrow>Team</Eyebrow>
              <p className="mt-2 font-serif text-[22px] leading-[1.2] tracking-[-0.015em]">
                2 humans + AI
              </p>
            </div>
            <div>
              <Eyebrow>Pricing</Eyebrow>
              <p className="mt-2 font-serif text-[22px] leading-[1.2] tracking-[-0.015em]">
                Priced on fit
              </p>
            </div>
            <div>
              <Eyebrow>Engagement</Eyebrow>
              <p className="mt-2 font-serif text-[22px] leading-[1.2] tracking-[-0.015em]">
                {site.pricing.engagement}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Problem: 2-outcome funnel */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-[auto_1fr] gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28 flex flex-col gap-6 max-w-[420px]">
            <BrandBar label="The problem" number="01 / 12" variant="cream" />
            <MidHeadline>
              Today your funnel has <em>two outcomes</em>.
            </MidHeadline>
            <Body size="lg" className="text-ink/75">
              Buyer ready now. Or buyer gone forever. Nothing in between. That&apos;s why your
              pipeline feels thin even when traffic looks fine.
            </Body>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <CompareColumn
              variant="cream"
              label="Outcome 1 · 1%"
              title="Buys now."
              items={[
                "In-market, credit card out",
                "Converts on first visit",
                "Already knew they needed you",
                "The easy win everyone fights over",
              ]}
            />
            <CompareColumn
              variant="cream"
              label="Outcome 2 · 99%"
              title="Leaves forever."
              items={[
                "Not ready yet — still learning",
                "No reason to come back",
                "No second touchpoint, no nurture",
                "Competitor catches them in 6 months",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 3. Math — 100 visitors */}
      <Section variant="ink">
        <BrandBar label="The math" number="02 / 12" className="mb-4" />
        <MidHeadline className="max-w-[900px]">
          100 visitors hit your site. <em>1</em> buys. <em>99</em> leave.
        </MidHeadline>
        <Body size="lg" className="text-bone/70 mt-6 max-w-[640px]">
          Industry average B2B conversion is 1–2%. For the other 98–99 visitors, the current
          internet has no middle layer — so they disappear.
        </Body>
        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-5">
            <MathRow label="Total visitors" value="100" />
            <MathRow label="Ready-now buyers" value="1" emphasis />
            <MathRow label="Leave without a trace" value="99" />
            <MathRow label="Revenue captured" value="1%" />
          </div>
          <div className="flex flex-col gap-6 border-l lg:pl-12 border-bone/10">
            <Eyebrow>What a warm-up layer changes</Eyebrow>
            <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em]">
              Capture <em>30–50</em> of the 99. Nurture. Convert <em>5–10</em> more over the next
              6 months.
            </p>
            <Body className="text-bone/70">
              That&apos;s not a traffic problem. That&apos;s a middle problem. The tools to fix it
              already exist — we just stitch them into one layer.
            </Body>
          </div>
        </div>
      </Section>

      {/* 4. Warm-up engagement */}
      <Section variant="cream">
        <BrandBar label="What warms them up" number="03 / 12" variant="cream" className="mb-4" />
        <Headline className="max-w-[1000px]">
          Give the 99 a reason to <em>stay</em>. Then a reason to <em>come back</em>.
        </Headline>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              tag: "On-site",
              title: "Interactive AI tools",
              body: "Calculators, audits, checkers that give real answers — not just a chat bubble.",
            },
            {
              tag: "On-site",
              title: "Real lead magnets",
              body: "Frameworks, playbooks, teardowns. Something they'd actually save to their desktop.",
            },
            {
              tag: "Off-site",
              title: "Content on 4 channels",
              body: "SEO + AEO pages, LinkedIn, newsletter, YouTube. The layer that keeps you in their feed.",
            },
            {
              tag: "Off-site",
              title: "Email nurture",
              body: "6-month sequences that get opened — because the magnet they downloaded was worth it.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-ink/15 rounded-[4px] p-6 flex flex-col gap-4 bg-ink/[0.02] hover:bg-ink/[0.04] transition-colors"
            >
              <PillTag variant="cream">{item.tag}</PillTag>
              <SmallHeadline as="h3">{item.title}</SmallHeadline>
              <Body size="sm" className="text-ink/70">
                {item.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. 1K visitors math */}
      <Section variant="ink">
        <GridBg variant="dark" />
        <div className="relative">
          <BrandBar label="Scaled math" number="04 / 12" className="mb-4" />
          <Headline className="max-w-[1000px]">
            1,000 visitors / month. Without us: <em>10 buyers</em>. With us: <em>60+</em>.
          </Headline>
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="border border-bone/10 rounded-[4px] p-8">
              <Eyebrow>Without a warm-up layer</Eyebrow>
              <div className="mt-8 flex flex-col gap-5">
                <MathRow label="Monthly visitors" value="1,000" />
                <MathRow label="Convert now (1%)" value="10" />
                <MathRow label="Lost forever" value="990" />
                <MathRow label="Pipeline in 6 months" value="10" />
              </div>
            </div>
            <div className="border border-flame/30 bg-flame/[0.04] rounded-[4px] p-8">
              <Eyebrow className="text-flame">With Secret Layer</Eyebrow>
              <div className="mt-8 flex flex-col gap-5">
                <MathRow label="Monthly visitors" value="1,000" />
                <MathRow label="Convert now (1%)" value="10" />
                <MathRow label="Warm up (35%)" value="350" emphasis />
                <MathRow label="Convert over 6mo" value="50+" emphasis />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Side-by-side table */}
      <Section variant="cream">
        <BrandBar label="The shift" number="05 / 12" variant="cream" className="mb-4" />
        <Headline className="max-w-[960px]">
          What your funnel looks like, <em>before</em> and <em>after</em>.
        </Headline>
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          <CompareColumn
            variant="cream"
            label="Before"
            title="Traffic → maybe-buyer → gone."
            items={[
              "Website is a brochure",
              "No tools, no content, no nurture",
              "One conversion point (a form)",
              "Attribution = a guess",
              "Spend more on ads, hope for better",
            ]}
          />
          <CompareColumn
            variant="cream"
            highlight
            label="After"
            title="Traffic → warmed → ready."
            items={[
              "Website does work for the visitor",
              "AI tools + lead magnets + content",
              "Six conversion points across 6 months",
              "Full attribution, every channel",
              "Same traffic, 5× more pipeline",
            ]}
          />
        </div>
      </Section>

      {/* 7. Value-first methodology */}
      <Section variant="ink">
        <BrandBar label="Our method" number="06 / 12" className="mb-4" />
        <Headline className="max-w-[960px]">
          Every page earns its place by <em>giving value</em> first.
        </Headline>
        <Body size="lg" className="text-bone/70 mt-8 max-w-[640px]">
          Six principles that separate a site that converts from a site that collects bounces.
        </Body>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {[
            {
              num: "01",
              title: "Answer before you ask",
              body: "No email gate before the visitor has gotten something useful.",
            },
            {
              num: "02",
              title: "Tools over copy",
              body: "An interactive calculator converts 8× better than a testimonial wall.",
            },
            {
              num: "03",
              title: "Real magnets, not newsletters",
              body: "A playbook they'd screenshot. Not a generic PDF everyone ignores.",
            },
            {
              num: "04",
              title: "Six touchpoints, not one",
              body: "Capture in different ways for different stages of intent.",
            },
            {
              num: "05",
              title: "Findable by AI, not just Google",
              body: "Schema + llms.txt + answer-first copy so ChatGPT cites you.",
            },
            {
              num: "06",
              title: "Attribution baked in",
              body: "Every lead source tagged at capture. No more 'where did they come from?'",
            },
          ].map((p) => (
            <div key={p.num} className="flex flex-col gap-3 border-t border-bone/10 pt-6">
              <Eyebrow>{p.num}</Eyebrow>
              <SmallHeadline as="h3">{p.title}</SmallHeadline>
              <Body size="sm" className="text-bone/70">
                {p.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. What we build */}
      <Section variant="charcoal">
        <BrandBar label="The build" number="07 / 12" className="mb-4" />
        <Headline className="max-w-[1000px]">
          One bundled build. <em>Twelve months</em>. Two humans + AI.
        </Headline>
        <Body size="lg" className="text-bone/70 mt-8 max-w-[640px]">
          No à-la-carte services. No hand-offs between vendors. One team, one layer, one
          invoice.
        </Body>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            {
              group: "Web Strategy",
              items: [
                "Conversion Strategy",
                "Website Design",
                "Webflow Development",
                "Interactive AI Tools",
                "Lead Magnets",
              ],
            },
            {
              group: "Growth Strategy",
              items: [
                "SEO Strategy",
                "AEO Strategy",
                "Social Media Strategy",
                "Content Marketing",
                "Email Marketing",
              ],
            },
            {
              group: "AI Automation",
              items: [
                "Analytics & Attribution",
                "Workflow Automations",
                "AI Agents",
                "Content Automation",
                "Integrations & APIs",
              ],
            },
          ].map((g) => (
            <div
              key={g.group}
              className="border border-bone/10 rounded-[4px] p-7 flex flex-col gap-5 bg-ink/40"
            >
              <Eyebrow className="text-flame opacity-100">{g.group}</Eyebrow>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-bone/85 leading-[1.5]">
                    <span className="mt-[9px] h-[3px] w-[3px] rounded-full bg-flame shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton href="/services" variant="secondary">
            Explore all services →
          </CTAButton>
        </div>
      </Section>

      {/* 9. Guarantee */}
      <Section variant="ink" className="overflow-hidden">
        <GridBg variant="dark" />
        <div className="relative flex flex-col items-center text-center gap-8">
          <BrandBar label="The guarantee" number="08 / 12" />
          <Display as="h2" className="max-w-[1100px]">
            <em>10 qualified leads</em> in 90 days, <br className="hidden lg:block" />
            or we <em>work free</em>.
          </Display>
          <Body size="xl" className="text-bone/75 max-w-[720px] mx-auto">
            Miss the mark at 90 days, we work free until we hit it. Miss it at 180 days, you get
            a full refund plus a penalty on top. The only warm-up agency priced on outcomes, not
            hours.
          </Body>
          <div className="grid sm:grid-cols-3 gap-8 mt-8 text-left max-w-[900px] w-full">
            <div className="border-t border-bone/10 pt-5">
              <Eyebrow>Day 0</Eyebrow>
              <p className="mt-2 font-serif text-[24px] leading-[1.15] tracking-[-0.02em]">
                Kickoff. Setup starts.
              </p>
            </div>
            <div className="border-t border-flame/40 pt-5">
              <Eyebrow className="text-flame">Day 90</Eyebrow>
              <p className="mt-2 font-serif text-[24px] leading-[1.15] tracking-[-0.02em] text-flame">
                10 qualified leads — or we work free.
              </p>
            </div>
            <div className="border-t border-bone/10 pt-5">
              <Eyebrow>Day 180</Eyebrow>
              <p className="mt-2 font-serif text-[24px] leading-[1.15] tracking-[-0.02em]">
                Still short? Full refund + penalty.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Pricing preview */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16">
          <div>
            <BrandBar label="Pricing" number="09 / 12" variant="cream" className="mb-4" />
            <Headline>
              Priced on <em>fit</em>. Not on tiers.
            </Headline>
          </div>
          <CTAButton href="/pricing" variant="cream-secondary">
            Run the fit check →
          </CTAButton>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 border border-ink/15 rounded-[4px] p-8 lg:p-10 bg-ink text-bone">
            <div className="flex items-center justify-between mb-8">
              <Eyebrow>The Secret Layer build</Eyebrow>
              <PillTag variant="flame">Stage 1 · Active</PillTag>
            </div>
            <MidHeadline as="h3">
              Everything you need to warm the 99% — delivered over 12 months.
            </MidHeadline>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {[
                "Authority-grade website",
                "2–3 interactive AI tools",
                "4 real lead magnets",
                "Content on 4 channels",
                "SEO + AEO baked in",
                "6-month email nurture",
                "Full attribution stack",
                "2 humans + AI team",
                "Monthly outcome reviews",
                "90-day lead guarantee",
              ].map((i) => (
                <div key={i} className="flex gap-3 text-[15px] text-bone/85">
                  <span className="mt-[9px] h-[3px] w-[3px] rounded-full bg-flame shrink-0" />
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-ink/15 rounded-[4px] p-8 flex flex-col gap-6 bg-cream">
            <Eyebrow>How pricing works</Eyebrow>
            <div className="flex flex-col gap-5 border-t border-ink/10 pt-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  Step 01
                </div>
                <p className="font-serif text-[22px] leading-[1.15] tracking-[-0.02em] mt-2">
                  Answer the fit check — ten questions, five minutes.
                </p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  Step 02
                </div>
                <p className="font-serif text-[22px] leading-[1.15] tracking-[-0.02em] mt-2">
                  We reply with your setup, retainer, and 90-day plan.
                </p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  Engagement
                </div>
                <p className="font-serif text-[22px] leading-[1.15] tracking-[-0.02em] mt-2">
                  12 months. Exit any quarter with 30 days&apos; notice.
                </p>
              </div>
            </div>
            <CTAButton href="/pricing" variant="cream-primary">
              Start the fit check →
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* 11. Tool showcase */}
      <Section variant="ink">
        <BrandBar label="Free tools" number="10 / 12" className="mb-4" />
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16">
          <Headline className="max-w-[900px]">
            Try the <em>same tools</em> we build for our clients.
          </Headline>
          <CTAButton href="/resources/tools" variant="secondary">
            All tools →
          </CTAButton>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              tag: "Audit",
              title: "Funnel Audit",
              body: "Paste your URL. We surface the 3 biggest leaks in your middle-of-funnel.",
              href: "/resources/tools/funnel-audit",
            },
            {
              tag: "Check",
              title: "AEO Checker",
              body: "Is ChatGPT citing you? Scan your site against the 2026 AEO checklist.",
              href: "/resources/tools/aeo-checker",
            },
            {
              tag: "Check",
              title: "SEO Checker",
              body: "Technical SEO audit. Performance, schema, answer-first copy, all in one.",
              href: "/resources/tools/seo-checker",
            },
          ].map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group border border-bone/10 rounded-[4px] p-7 flex flex-col gap-5 bg-charcoal hover:border-flame/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <PillTag>{t.tag}</PillTag>
                <span className="text-bone/30 group-hover:text-flame transition-colors text-[20px]">
                  →
                </span>
              </div>
              <SmallHeadline as="h3">{t.title}</SmallHeadline>
              <Body size="sm" className="text-bone/70">
                {t.body}
              </Body>
            </Link>
          ))}
        </div>
      </Section>

      {/* 12. Close CTA */}
      <Section variant="charcoal" className="py-28 lg:py-40">
        <div className="flex flex-col items-center text-center gap-10">
          <BrandBar label="The close" number="12 / 12" />
          <Display as="h2" className="max-w-[1100px]">
            Stop paying for traffic that <em>leaves</em>.
          </Display>
          <StanzaLine className="text-bone/75 max-w-[600px]">
            Start the conversation. We&apos;ll run a free 20-minute audit of your funnel and show
            you exactly what the middle is missing.
          </StanzaLine>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton href="/resources/tools/funnel-audit" size="lg">
              Get your Free Audit →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get in touch
            </CTAButton>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/40 mt-4">
            10 qualified leads in 90 days — or we work free.
          </p>
        </div>
      </Section>
    </>
  );
}
