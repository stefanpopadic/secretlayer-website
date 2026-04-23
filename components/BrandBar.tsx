import { cn } from "@/lib/cn";

type BrandBarProps = {
  label: string;
  number?: string;
  className?: string;
  variant?: "dark" | "cream";
};

export function BrandBar({ label, className, variant = "dark" }: BrandBarProps) {
  const labelColor = variant === "cream" ? "text-ink" : "text-flame";
  const lineColor = variant === "cream" ? "bg-ink/15" : "bg-bone/15";
  return (
    <div
      className={cn(
        "flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] font-semibold",
        labelColor,
        className
      )}
    >
      <span>{label}</span>
      <span className={cn("h-[1px] flex-1", lineColor)} />
    </div>
  );
}
