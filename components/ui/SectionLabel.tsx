import { twMerge } from "tailwind-merge";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={twMerge("section-label-line label-xs tracking-widest2 text-accent", className)}>
      {children}
    </p>
  );
}
