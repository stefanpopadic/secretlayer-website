"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { site, nav } from "@/lib/site";
import { CTAButton } from "./CTAButton";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur-md border-b border-bone/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[64px]">
        <Link
          href="/"
          className="font-serif text-[22px] leading-none tracking-[-0.02em] text-bone hover:text-flame transition-colors"
        >
          {site.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.primary.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="/resources/tools/funnel-audit" size="sm">
            Audit Your Funnel →
          </CTAButton>
        </div>

        <button
          className="lg:hidden text-bone p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "w-6 h-[1.5px] bg-bone transition-transform",
                mobileOpen && "rotate-45 translate-y-[7px]"
              )}
            />
            <span
              className={cn(
                "w-6 h-[1.5px] bg-bone transition-opacity",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-[1.5px] bg-bone transition-transform",
                mobileOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-bone/10 bg-ink">
          <div className="px-6 py-6 flex flex-col gap-2">
            {nav.primary.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                onClick={() => setMobileOpen(false)}
              />
            ))}
            <div className="pt-4">
              <CTAButton
                href="/resources/tools/funnel-audit"
                size="base"
                className="w-full justify-center"
              >
                Audit Your Funnel →
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

type NavItemType = {
  label: string;
  href: string;
  children?: NavItemType[];
};

function NavItem({ item }: { item: NavItemType }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-[14px] text-bone/75 hover:text-bone transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="px-3 py-2 text-[14px] text-bone/75 hover:text-bone transition-colors flex items-center gap-1"
      >
        {item.label}
        <span className="text-[10px] opacity-60">▾</span>
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-2 min-w-[720px]">
          <div className="bg-charcoal border border-bone/10 rounded-[4px] p-6 shadow-2xl grid grid-cols-3 gap-6">
            {item.children.map((group) => (
              <div key={group.href} className="flex flex-col gap-3">
                <Link
                  href={group.href}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] font-medium text-flame hover:text-flame/80 transition-colors"
                >
                  {group.label}
                </Link>
                {group.children && (
                  <ul className="flex flex-col gap-2">
                    {group.children.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="text-[13px] text-bone/75 hover:text-bone transition-colors leading-[1.4] block"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item,
  onClick,
}: {
  item: NavItemType;
  onClick: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className="py-3 text-[16px] text-bone border-b border-bone/5"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-bone/5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-3 text-[16px] text-bone"
      >
        {item.label}
        <span className="text-[12px] opacity-60">{expanded ? "−" : "+"}</span>
      </button>
      {expanded && (
        <div className="pb-4 pl-4 flex flex-col gap-3">
          {item.children.map((group) => (
            <div key={group.href} className="flex flex-col gap-1.5">
              <Link
                href={group.href}
                onClick={onClick}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-flame py-1"
              >
                {group.label}
              </Link>
              {group.children?.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={onClick}
                  className="text-[13px] text-bone/75 py-1"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
