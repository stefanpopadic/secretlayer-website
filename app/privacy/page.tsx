import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { BrandBar } from "@/components/BrandBar";
import { Display, Body } from "@/components/Typography";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Secret Layer.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section variant="ink" className="pt-28 lg:pt-36 pb-24 lg:pb-32">
      <div className="max-w-[760px] flex flex-col gap-8">
        <BrandBar label="Privacy" />
        <Display>Privacy Policy</Display>
        <Body size="lg" className="text-bone/75">
          Privacy policy coming soon — for questions contact{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 text-bone hover:text-flame transition-colors"
          >
            {site.email}
          </a>
          .
        </Body>
        <Body className="text-bone/60">
          In short: we use the email you give us to send the report you asked for and
          occasional related insights. You can unsubscribe from every email we send. We
          don&apos;t sell your data.
        </Body>
      </div>
    </Section>
  );
}
