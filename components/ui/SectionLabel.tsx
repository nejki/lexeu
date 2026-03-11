import { twMerge } from "tailwind-merge";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={twMerge("section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-accent", className)}>
      {children}
    </p>
  );
}
