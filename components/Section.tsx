import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  variant?: "ink" | "charcoal" | "cream";
  className?: string;
  container?: boolean;
  id?: string;
};

export function Section({
  children,
  variant = "ink",
  className,
  container = true,
  id,
}: SectionProps) {
  const bgs = {
    ink: "bg-ink text-bone",
    charcoal: "bg-charcoal text-bone",
    cream: "bg-cream text-ink",
  };

  return (
    <section
      id={id}
      className={cn("relative py-20 lg:py-28", bgs[variant], className)}
    >
      {container ? (
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
