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
        "text-[clamp(2.8rem,7.2vw,7rem)]",
        "[&_em]:not-italic [&_em]:tracking-[-2px] [&_em]:leading-[100%]",
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
        "text-[clamp(3.5rem,7vw,7rem)]",
        "[&_em]:not-italic [&_em]:leading-[100%]",
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
        "font-display font-normal uppercase leading-[100%] tracking-[-0.025em]",
        "text-[clamp(2.75rem,5.5vw,5rem)]",
        "[&_em]:not-italic [&_em]:leading-[100%]",
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
        "font-display font-normal uppercase leading-[100%] tracking-[-0.02em]",
        "text-[clamp(2.25rem,4.5vw,4rem)]",
        "[&_em]:not-italic [&_em]:leading-[100%]",
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
    sm: "text-[18px] leading-[1.4]",
    base: "text-[18px] leading-[1.4]",
    lg: "text-[18px] leading-[1.4]",
    xl: "text-[18px] leading-[1.4]",
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
