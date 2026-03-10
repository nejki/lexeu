interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage ${className}`}>
      {children}
    </p>
  );
}
