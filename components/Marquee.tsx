const clients = [
  "Odvetniška pisarna Ketiš",
  "Nova Reha d.o.o.",
  "Odvetniška pisarna Kumer",
  "Kreativna Bajta d.o.o.",
  "500+ aktivnih strank",
  "Odvetniška pisarna Ketiš",
  "Nova Reha d.o.o.",
  "Odvetniška pisarna Kumer",
  "Kreativna Bajta d.o.o.",
  "500+ aktivnih strank",
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
