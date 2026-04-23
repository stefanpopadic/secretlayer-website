import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type CompareColumnProps = {
  label: string;
  title: string;
  items: string[];
  highlight?: boolean;
  variant?: "dark" | "cream";
  children?: ReactNode;
  className?: string;
};

export function CompareColumn({
  label,
  title,
  items,
  highlight = false,
  variant = "dark",
  children,
  className,
}: CompareColumnProps) {
  const base =
    variant === "cream"
      ? highlight
        ? "border-flame-dark/40 bg-flame-dark/[0.06]"
        : "border-ink/15 bg-transparent"
      : highlight
      ? "border-flame/40 bg-flame/[0.06]"
      : "border-bone/15 bg-transparent";

  const labelColor =
    variant === "cream"
      ? highlight
        ? "text-flame-dark"
        : "text-ink/55"
      : highlight
      ? "text-flame"
      : "text-bone/55";

  const titleColor = variant === "cream" ? "text-ink" : "text-bone";
  const itemColor = variant === "cream" ? "text-ink/80" : "text-bone/80";
  const dotColor =
    variant === "cream"
      ? highlight
        ? "bg-flame-dark"
        : "bg-ink/30"
      : highlight
      ? "bg-flame"
      : "bg-bone/30";

  return (
    <div
      className={cn(
        "border rounded-[4px] p-7 flex flex-col gap-5",
        base,
        className
      )}
    >
      <span
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.18em] font-medium",
          labelColor
        )}
      >
        {label}
      </span>
      <h3
        className={cn(
          "font-serif text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.1] tracking-[-0.02em]",
          titleColor
        )}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className={cn(
              "flex gap-3 text-[15px] leading-[1.5]",
              itemColor
            )}
          >
            <span
              className={cn(
                "mt-[9px] h-[3px] w-[3px] rounded-full shrink-0",
                dotColor
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
