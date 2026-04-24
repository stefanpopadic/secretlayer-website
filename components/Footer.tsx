import Link from "next/link";
import { site, nav } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-bone/10 mt-0">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link
              href="/"
              className="font-serif text-[32px] leading-none tracking-[-0.025em] text-bone hover:text-flame transition-colors w-fit"
            >
              {site.name}
            </Link>
            <p className="font-serif text-[22px] leading-[1.25] tracking-[-0.015em] text-bone/75 max-w-[380px]">
              {site.tagline}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {nav.primary
              .filter((i) => i.children || ["Pricing", "Resources", "Contact"].includes(i.label))
              .slice(0, 4)
              .map((group) => (
                <div key={group.href} className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] font-medium text-bone/40">
                    {group.label}
                  </span>
                  <Link
                    href={group.href}
                    className="text-[13px] text-bone/75 hover:text-bone transition-colors"
                  >
                    Overview
                  </Link>
                  {group.children?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="text-[13px] text-bone/75 hover:text-bone transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] font-medium text-bone/40">
                Company
              </span>
              <Link href="/about" className="text-[13px] text-bone/75 hover:text-bone transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-[13px] text-bone/75 hover:text-bone transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-[13px] text-bone/75 hover:text-bone transition-colors">
                Contact
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="text-[13px] text-bone/75 hover:text-bone transition-colors"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-bone/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/40">
            © {year} {site.name}. Built by {site.founders.join(" + ")}.
          </p>
          <div className="flex gap-6">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/40 hover:text-bone transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/40 hover:text-bone transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
