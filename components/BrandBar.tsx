import { cn } from "@/lib/cn";

type BrandBarProps = {
  label: string;
  number?: string;
  className?: string;
  variant?: "dark" | "cream";
};

export function BrandBar({ label, className, variant = "dark" }: BrandBarProps) {
  const pillColor =
    variant === "cream"
      ? "text-flame-dark border-flame-dark/50"
      : "text-flame border-flame/60";
  return (
    <div className={cn("flex", className)}>
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] font-semibold",
          pillColor
        )}
      >
        {label}
      </span>
    </div>
  );
}
