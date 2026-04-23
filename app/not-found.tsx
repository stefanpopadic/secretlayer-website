import { Section } from "@/components/Section";
import { GridBg } from "@/components/GridBg";
import { Display, Body } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <Section variant="ink" className="pt-28 lg:pt-36 min-h-[70vh] overflow-hidden flex items-center">
      <GridBg />
      <div className="relative flex flex-col items-center text-center gap-8 mx-auto max-w-[900px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-flame font-medium">
          404 · Page not found
        </div>
        <Display as="h1">
          This page <em>left the funnel</em>.
        </Display>
        <Body size="lg" className="text-bone/70 max-w-[500px]">
          Not ready to buy, not ready to leave? Start from the top.
        </Body>
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton href="/" size="lg">
            Back to home →
          </CTAButton>
          <CTAButton href="/resources" variant="secondary" size="lg">
            Browse resources
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
