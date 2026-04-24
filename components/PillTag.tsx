import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type PillTagProps = {
  children: ReactNode;
  variant?: "dark" | "cream" | "flame";
  className?: string;
};

export function PillTag({ children, variant = "dark", className }: PillTagProps) {
  const styles = {
    dark: "border-bone/20 text-bone/70",
    cream: "border-ink/20 text-ink/70",
    flame: "border-flame/40 text-flame bg-flame/[0.06]",
  };

  return (
    <span
      className={cn(
        "inline-flex self-start items-center border rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] font-medium w-fit",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
