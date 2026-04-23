import { cn } from "@/lib/cn";

type GridBgProps = {
  variant?: "dark" | "cream";
  className?: string;
};

export function GridBg({ variant = "dark", className }: GridBgProps) {
  const lineColor =
    variant === "dark" ? "rgba(245, 245, 240, 0.025)" : "rgba(10, 10, 10, 0.04)";

  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
