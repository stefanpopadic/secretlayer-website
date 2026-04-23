import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type MathRowProps = {
  label: string;
  value: ReactNode;
  note?: string;
  emphasis?: boolean;
  variant?: "dark" | "cream";
  className?: string;
};

export function MathRow({
  label,
  value,
  note,
  emphasis = false,
  variant = "dark",
  className,
}: MathRowProps) {
  const borderColor = variant === "cream" ? "border-ink/10" : "border-bone/10";
  const labelColor = variant === "cream" ? "text-ink/60" : "text-bone/60";
  const valueColor = emphasis
    ? variant === "cream"
      ? "text-flame-dark"
      : "text-flame"
    : variant === "cream"
    ? "text-ink"
    : "text-bone";

  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-6 border-t pt-4",
        borderColor,
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <span
          className={cn(
            "font-mono text-[11px] uppercase tracking-[0.18em] font-medium",
            labelColor
          )}
        >
          {label}
        </span>
        {note && (
          <span className={cn("text-[13px]", labelColor)}>{note}</span>
        )}
      </div>
      <span
        className={cn(
          "font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tabular-nums",
          valueColor
        )}
      >
        {value}
      </span>
    </div>
  );
}
