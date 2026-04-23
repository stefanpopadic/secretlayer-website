import { cn } from "@/lib/cn";
import { ReactNode, ElementType } from "react";

type DisplayProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Display({ as: Tag = "h1", className, children }: DisplayProps) {
  return (
    <Tag
      className={cn(
        "font-display font-normal uppercase leading-[100%] tracking-[-0.035em]",
        "text-[clamp(3.5rem,9vw,8.75rem)]",
        "[&_em]:italic [&_em]:tracking-[-2px] [&_em]:leading-[100%]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Headline({ as: Tag = "h2", className, children }: DisplayProps) {
  return (
    <Tag
      className={cn(
        "font-display font-normal uppercase leading-[100%] tracking-[-0.03em]",
        "text-[clamp(2.25rem,5.5vw,4.75rem)]",
        "[&_em]:italic [&_em]:leading-[100%]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function MidHeadline({ as: Tag = "h2", className, children }: DisplayProps) {
  return (
    <Tag
      className={cn(
        "font-serif font-normal leading-[100%] tracking-[-0.025em]",
        "text-[clamp(1.875rem,4vw,3.5rem)]",
        "[&_em]:italic [&_em]:leading-[100%]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function SmallHeadline({
  as: Tag = "h3",
  className,
  children,
}: DisplayProps) {
  return (
    <Tag
      className={cn(
        "font-serif font-normal leading-[100%] tracking-[-0.02em]",
        "text-[clamp(1.5rem,2.75vw,2.75rem)]",
        "[&_em]:italic [&_em]:leading-[100%]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type EyebrowProps = {
  className?: string;
  children: ReactNode;
};

export function Eyebrow({ className, children }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em] font-medium opacity-60",
        className
      )}
    >
      {children}
    </span>
  );
}

type BodyProps = {
  className?: string;
  children: ReactNode;
  size?: "sm" | "base" | "lg" | "xl";
};

export function Body({ className, children, size = "base" }: BodyProps) {
  const sizes = {
    sm: "text-base",
    base: "text-[18px] leading-[1.55]",
    lg: "text-[20px] leading-[1.55]",
    xl: "text-[22px] leading-[1.6]",
  };
  return (
    <p
      className={cn(
        "font-sans font-normal tracking-[-0.005em] max-w-[640px] prose-body",
        sizes[size],
        className
      )}
    >
      {children}
    </p>
  );
}

export function Prose({ className, children }: BodyProps) {
  return (
    <div
      className={cn(
        "font-sans font-normal tracking-[-0.005em] text-[19px] leading-[1.6] max-w-[720px] prose-body",
        "[&>p+p]:mt-[14px]",
        className
      )}
    >
      {children}
    </div>
  );
}
