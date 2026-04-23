import { cn } from "@/lib/cn";
import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "cream-primary" | "cream-secondary" | "ghost";
  size?: "sm" | "base" | "lg";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "base",
  className,
}: CTAButtonProps) {
  const styles = {
    primary:
      "bg-flame text-ink hover:bg-flame-dark hover:text-bone border border-flame hover:border-flame-dark",
    secondary:
      "border border-bone/30 text-bone hover:border-bone hover:bg-bone hover:text-ink",
    "cream-primary":
      "bg-flame-dark text-bone hover:bg-ink border border-flame-dark hover:border-ink",
    "cream-secondary":
      "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-bone",
    ghost: "text-bone/70 hover:text-bone underline underline-offset-4",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    base: "px-6 py-3 text-[14px]",
    lg: "px-7 py-4 text-[15px]",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-sans font-medium tracking-[-0.01em] transition-colors duration-200 rounded-[3px]",
        styles[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
