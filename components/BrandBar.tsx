import { cn } from "@/lib/cn";

type BrandBarProps = {
  label: string;
  number?: string;
  className?: string;
  variant?: "dark" | "cream";
};

export function BrandBar({ label, number, className, variant = "dark" }: BrandBarProps) {
  const color = variant === "cream" ? "text-ink/55" : "text-bone/55";
  return (
    <div
      className={cn(
        "flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] font-medium",
        color,
        className
      )}
    >
      <span>{label}</span>
      {number && <span className="tabular-nums">{number}</span>}
    </div>
  );
}
