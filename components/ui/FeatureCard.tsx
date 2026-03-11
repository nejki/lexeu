interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  iconBg?: string;
}

export function FeatureCard({ icon, title, desc, iconBg = "bg-sage-pale text-accent" }: FeatureCardProps) {
  return (
    <div className="group flex gap-5 items-start bg-site-white border border-site-border rounded-lg p-7 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-site-text mb-1.5">{title}</h3>
        <p className="text-[13px] text-site-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
