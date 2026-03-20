const clients = [
  "Covers 6 EU jurisdictions",
  "500+ legal questions answered",
  "EU legislation + CJEU case law",
  "Answers in under 60 seconds",
  "Built by an EU-licensed attorney",
  "GDPR-compliant data handling",
  "Austria · Germany · Italy · Poland · Serbia",
  "Document drafting included",
  "From €9.90 per session",
  "Active EU directives and regulations",
];

export default function Marquee() {
  return (
    <div className="border-t border-b border-site-border bg-site-white overflow-hidden py-5">
      <div className="flex gap-14 whitespace-nowrap animate-marquee">
        {clients.map((name, i) => (
          <span key={i} className="font-serif text-lg font-medium text-site-muted flex-shrink-0">
            {name}
            <span className="text-accent mx-4">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
