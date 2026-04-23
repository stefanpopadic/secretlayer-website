import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { BrandBar } from "@/components/BrandBar";
import { Display, Headline, SmallHeadline, Eyebrow, Body } from "@/components/Typography";
import { ContactForm } from "./ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start the conversation. Free 20-minute funnel audit. We'll tell you what your middle is missing.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Contact", url: `${site.url}/contact` },
        ]}
      />

      {/* Hero */}
      <Section variant="ink" className="pt-28 lg:pt-36 overflow-hidden">
        <GridBg />
        <div className="relative">
          <BrandBar label="Contact" number="Start the conversation" className="mb-16" />
          <Display>
            <em>Let&apos;s</em> see if <br />
            we&apos;re a <em>fit</em>.
          </Display>
          <Body size="xl" className="text-bone/75 mt-10 max-w-[640px]">
            Tell us where you are. We&apos;ll respond within one business day with either a
            calendar link — or an honest note that we&apos;re not the right match.
          </Body>
        </div>
      </Section>

      {/* Form + info */}
      <Section variant="cream" className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <div className="flex flex-col gap-10 lg:sticky lg:top-28 self-start">
            <BrandBar label="Two ways in" number="01 / 02" variant="cream" />
            <Headline>
              Book a call, or <em>send a note</em>.
            </Headline>
            <div className="flex flex-col gap-6">
              <div className="border-t border-ink/10 pt-5">
                <Eyebrow>1 · Book directly</Eyebrow>
                <p className="mt-3 font-serif text-[24px] leading-[1.2] tracking-[-0.02em]">
                  20-min funnel audit call.
                </p>
                <p className="mt-2 text-[15px] text-ink/70">
                  We walk through your site live and surface the 3 biggest leaks in your middle
                  layer. No slides. No pitch.
                </p>
                <div className="mt-4 border border-ink/15 rounded-[4px] p-5 bg-ink/[0.02]">
                  <Eyebrow className="opacity-60">Calendar embed</Eyebrow>
                  <p className="mt-2 text-[13px] text-ink/60">
                    Calendly / Cal.com embed goes here once scheduling is connected.
                  </p>
                  <a
                    href={`mailto:${site.email}?subject=Book a call`}
                    className="inline-flex mt-3 text-[14px] font-medium text-ink underline underline-offset-4"
                  >
                    Or email us → {site.email}
                  </a>
                </div>
              </div>
              <div className="border-t border-ink/10 pt-5">
                <Eyebrow>2 · Send a note</Eyebrow>
                <p className="mt-3 font-serif text-[24px] leading-[1.2] tracking-[-0.02em]">
                  Use the form.
                </p>
                <p className="mt-2 text-[15px] text-ink/70">
                  Not ready to book? Tell us what&apos;s on your mind. Response within one
                  business day.
                </p>
              </div>
              <div className="border-t border-ink/10 pt-5">
                <Eyebrow>Based in</Eyebrow>
                <p className="mt-3 text-[16px] text-ink">Da Nang, Vietnam · ICT (UTC+7)</p>
                <p className="mt-1 text-[14px] text-ink/60">
                  We work async across timezones. Live calls: your timezone, not ours.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <BrandBar label="The form" number="02 / 02" variant="cream" />
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="ink">
        <BrandBar label="Before you book" number="Quick check" className="mb-10" />
        <Headline className="mb-16">Is Secret Layer a fit?</Headline>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              label: "We're probably a fit",
              items: [
                "B2B, past $500K ARR or post-seed",
                "Traffic but thin pipeline",
                "Willing to commit 12 months",
                "Want a bundled system, not tactics",
              ],
            },
            {
              label: "We're probably not",
              items: [
                "Under $500K ARR",
                "Ecommerce, local services, D2C",
                "Need a one-month tactical sprint",
                "Want to buy one discipline only",
              ],
            },
            {
              label: "If you're unsure",
              items: [
                "Book the audit call",
                "We'll give you an honest answer",
                "No pressure, no hard sell",
                "Referral network if we aren't the match",
              ],
            },
          ].map((col) => (
            <div
              key={col.label}
              className="border border-bone/10 rounded-[4px] p-7 flex flex-col gap-4"
            >
              <SmallHeadline as="h3">{col.label}</SmallHeadline>
              <ul className="flex flex-col gap-2">
                {col.items.map((i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-bone/80 leading-[1.5]">
                    <span className="mt-[9px] h-[3px] w-[3px] rounded-full bg-flame shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
