const plans = [
  {
    name: "Mini",
    price: "€15",
    per: "Enkratni nakup · 5 vprašanj",
    desc: "Za posamezno pravno dilemo. Postavite vprašanje in v 2 minutah dobite utemeljeno stališče.",
    cta: "Začnite z MINI →",
    href: "https://app.aikrpan.com",
    featured: false,
    recommended: false,
  },
  {
    name: "Standard",
    price: "€35",
    per: "Enkratni nakup · 15 vprašanj",
    desc: "Za temeljitejšo pravno raziskavo. Pokrijte več vidikov istega problema ali več različnih vprašanj.",
    cta: "Izberite STANDARD →",
    href: "https://app.aikrpan.com",
    featured: false,
    recommended: false,
  },
  {
    name: "Poslovni — mesečni",
    price: "€80",
    per: "/ mesec · 100 vprašanj",
    desc: "Za pisarne, ki se redno srečujejo s pravnimi vprašanji. Pravna usmeritev kadarkoli jo potrebujete.",
    cta: "Izberite POSLOVNI →",
    href: "https://app.aikrpan.com",
    featured: true,
    recommended: true,
  },
  {
    name: "Poslovni — letni",
    price: "€960",
    per: "/ leto · 1.200 vprašanj · €0,80 na vprašanje",
    desc: "Za pisarne, ki AI KRPAN uporabljajo vsak dan. Najnižja cena na vprašanje.",
    cta: "Izberite letni paket →",
    href: "https://app.aikrpan.com",
    featured: false,
    recommended: false,
  },
  {
    name: "Po meri",
    price: "Po povpraševanju",
    per: "",
    desc: "Za organizacije s specifičnimi potrebami — več uporabnikov, prilagojena baza, integracija v obstoječe sisteme.",
    cta: "Kontaktirajte nas →",
    href: "https://www.aikrpan.com/#kontakt",
    featured: false,
    recommended: false,
  },
];

const comparison = [
  {
    label: "Cena za osnovno usmeritev",
    lawyer: "€150–300",
    aikrpan: "€15 (5 vprašanj)",
  },
  {
    label: "Čas do odgovora",
    lawyer: "2–5 delovnih dni",
    aikrpan: "2 minuti",
  },
  {
    label: "Dostopnost",
    lawyer: "Uradne ure",
    aikrpan: "24/7",
  },
  {
    label: "Navedeni pravni viri",
    lawyer: "Odvisno od odvetnika",
    aikrpan: "Vedno — zakonski členi + sodbe",
  },
];

export default function Pricing() {
  return (
    <section id="cenik" className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Intro */}
      <div className="mb-14">
        <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-accent mb-4">
          Cenik
        </p>
        <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-site-text mb-5">
          Cenik
        </h2>
        <p className="text-[17px] text-site-mid leading-[1.7] max-w-2xl">
          Ura odvetnikovega časa stane €150–300. AI KRPAN vam da pravno
          usmeritev od €3 na vprašanje.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-site-border rounded-xl overflow-hidden">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 sm:p-10 transition-colors duration-200 border-site-border ${
              i < plans.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
            } ${
              i % 2 === 0 && i < plans.length - 1 ? "sm:border-r" : ""
            } ${
              plan.featured
                ? "bg-sage-dark text-white"
                : "bg-site-white hover:bg-warm-pale"
            }`}
          >
            {plan.recommended && (
              <div className="flex justify-center mb-4">
                <span className="bg-warm text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-sm whitespace-nowrap">
                  Priporočamo
                </span>
              </div>
            )}

            <p className={`text-[11px] font-semibold tracking-[0.12em] uppercase mb-5 ${plan.featured ? "text-white/60" : "text-site-muted"}`}>
              {plan.name}
            </p>

            <p className={`font-serif font-semibold mb-1 ${plan.featured ? "text-white" : "text-site-text"} ${plan.price === "Po povpraševanju" ? "text-[28px] leading-tight" : "text-[42px] leading-none"}`}>
              {plan.price}
            </p>
            {plan.per && (
              <p className={`text-[13px] ${plan.featured ? "text-white/60" : "text-site-muted"}`}>
                {plan.per}
              </p>
            )}
            <p className={`text-[11px] mb-6 ${plan.featured ? "text-white/40" : "text-site-muted/70"}`}>
              {plan.price !== "Po povpraševanju" ? "brez DDV" : "\u00A0"}
            </p>

            <div className={`h-px mb-6 ${plan.featured ? "bg-white/15" : "bg-site-border"}`} />

            <p className={`text-[13px] leading-[1.7] mb-8 flex-1 ${plan.featured ? "text-white/80" : "text-site-mid"}`}>
              {plan.desc}
            </p>

            <a
              href={plan.href}
              className={`block text-center py-3 rounded-sm text-[12px] font-semibold tracking-[0.06em] uppercase transition-all duration-200 border ${
                plan.featured
                  ? "border-white/30 text-white hover:bg-white/15"
                  : "border-site-border text-site-text hover:border-accent hover:text-accent hover:bg-sage-pale"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mt-16">
        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          {comparison.map((row) => (
            <div key={row.label} className="border border-site-border rounded-lg p-5">
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted mb-3">
                {row.label}
              </p>
              <div className="flex justify-between items-baseline gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-site-muted/60 mb-1">Odvetnik</p>
                  <p className="text-[14px] text-site-muted">{row.lawyer}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-accent/60 mb-1">AI KRPAN</p>
                  <p className="text-[14px] text-accent font-medium">{row.aikrpan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-site-border">
                <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted"></th>
                <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted">Odvetnik</th>
                <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-accent">AI KRPAN</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-site-border last:border-b-0">
                  <td className="py-5 px-4 text-[14px] font-semibold text-site-text">{row.label}</td>
                  <td className="py-5 px-4 text-[14px] text-site-muted">{row.lawyer}</td>
                  <td className="py-5 px-4 text-[14px] text-accent font-medium">{row.aikrpan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-10 text-center text-[13px] text-site-muted leading-[1.7] max-w-2xl mx-auto">
        AI KRPAN ne nadomešča odvetnika. Je orodje, ki vam pomaga razumeti
        pravno situacijo, preden se odločite za naslednji korak — ali kot
        dnevni pomočnik za pravne strokovnjake.
      </p>
    </section>
  );
}
