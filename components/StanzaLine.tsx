import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type StanzaLineProps = {
  children: ReactNode;
  break_?: boolean;
  className?: string;
};

export function StanzaLine({ children, break_ = false, className }: StanzaLineProps) {
  return (
    <p
      className={cn(
        "font-sans text-[22px] leading-[1.55] tracking-[-0.005em] [&_em]:italic [&_em]:font-serif [&_em]:tracking-[-0.015em]",
        break_ && "mt-6",
        className
      )}
    >
      {children}
    </p>
  );
}
