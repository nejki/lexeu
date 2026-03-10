const plans = [
  {
    name: "Mini",
    price: "€15",
    per: "5 vprašanj · brez roka",
    features: ["5 pravnih vprašanj", "Vsi modeli vključeni", "Brez datumske omejitve", "Dokup vprašanj možen"],
    cta: "Naroči Mini",
    href: "https://app.aikrpan.com",
    featured: false,
    recommended: false,
  },
  {
    name: "Standard",
    price: "€35",
    per: "15 vprašanj · brez roka",
    features: ["15 pravnih vprašanj", "Vsi modeli vključeni", "Analiza dokumentov", "Dokup vprašanj možen"],
    cta: "Naroči Standard",
    href: "https://app.aikrpan.com",
    featured: false,
    recommended: false,
  },
  {
    name: "Poslovni",
    price: "€80",
    per: "/ mesec · 100 vprašanj",
    features: [
      "100 vprašanj/mesec",
      "Vsi 6 modelov",
      "Analiza dokumentov",
      "Dokup vprašanj možen",
      "Prioritetna podpora",
    ],
    cta: "Naroči Poslovni",
    href: "https://app.aikrpan.com",
    featured: true,
    recommended: true,
  },
  {
    name: "Letni Poslovni",
    price: "€960",
    per: "/ leto · 1.200 vprašanj",
    features: [
      "1.200 vprašanj/leto",
      "Prihranite 2 meseca",
      "Vsi modeli vključeni",
      "Dokup vprašanj možen",
      "Prioritetna podpora",
    ],
    cta: "Naroči Letni",
    href: "https://app.aikrpan.com",
    featured: false,
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="cenik" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      {/* Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-14">
        <div>
          <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-4">
            Cenik
          </p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-site-text">
            Preprosto<br />in pošteno.
          </h2>
        </div>
        <p className="text-[15px] text-site-mid leading-[1.8] lg:self-end">
          Transparentne cene brez skritih stroškov. Paketi za vsakogar — od
          posameznika do večje odvetniške pisarne. Vse cene vključujejo dostop
          do vseh modelov.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-site-border rounded-xl overflow-hidden">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 sm:p-10 transition-colors duration-200 ${
              i < plans.length - 1 ? "border-b lg:border-b-0 lg:border-r border-site-border" : ""
            } ${
              plan.featured
                ? "bg-sage-dark text-white"
                : "bg-site-white hover:bg-warm-pale"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-warm text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full whitespace-nowrap">
                ✦ Priporočamo
              </span>
            )}

            <p className={`text-[11px] font-semibold tracking-[0.12em] uppercase mb-5 ${plan.featured ? "text-white/60" : "text-site-muted"}`}>
              {plan.name}
            </p>

            <p className={`font-serif text-[52px] font-semibold leading-none mb-1 ${plan.featured ? "text-white" : "text-site-text"}`}>
              {plan.price}
            </p>
            <p className={`text-[13px] ${plan.featured ? "text-white/60" : "text-site-muted"}`}>
              {plan.per}
            </p>
            <p className={`text-[11px] mb-8 ${plan.featured ? "text-white/40" : "text-site-muted/70"}`}>
              brez DDV
            </p>

            <div className={`h-px mb-7 ${plan.featured ? "bg-white/15" : "bg-site-border"}`} />

            <ul className="flex flex-col gap-3 mb-9 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={`text-[13px] leading-snug flex gap-2.5 ${plan.featured ? "text-white/80" : "text-site-mid"}`}
                >
                  <span className={`flex-shrink-0 font-normal ${plan.featured ? "text-sage-light" : "text-sage"}`}>—</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              className={`block text-center py-3 rounded-sm text-[12px] font-semibold tracking-[0.06em] uppercase transition-all duration-200 border ${
                plan.featured
                  ? "border-white/30 text-white hover:bg-white/15"
                  : "border-site-border text-site-text hover:border-sage hover:text-sage-dark hover:bg-sage-pale"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-8 text-center text-[13px] text-site-muted">
        Potrebujete prilagojeni paket?{" "}
        <a href="https://www.aikrpan.com/#kontakt" className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors">
          Pišite nam
        </a>{" "}
        — pripravimo vam ponudbo po meri.
      </p>
    </section>
  );
}
