const cards = [
  {
    icon: "⚡",
    title: "Hitro in natančno",
    desc: "Analiza in odgovor v realnem času. Prihranite ure iskanja po zakonodaji.",
  },
  {
    icon: "⚖️",
    title: "Utemeljeno z zakonom",
    desc: "Vsak odgovor navaja konkretne člene in relevantno sodno prakso.",
  },
  {
    icon: "🔒",
    title: "Zasebnost zagotovljena",
    desc: "Vaše poizvedbe in dokumenti niso nikoli deljeni z zunanjimi stranmi.",
  },
];

export default function About() {
  return (
    <section id="namen" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
      {/* Left text */}
      <div>
        <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
          Namen
        </p>
        <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-semibold leading-[1.1] mb-7 text-site-text">
          Ne iščemo zakonov.{" "}
          <em className="italic text-sage-dark">Razumemo jih.</em>
        </h2>
        <p className="text-[15px] text-site-mid leading-[1.85] mb-5">
          Klasični pravni iskalniki vam pokažejo besedilo zakona. AI KRPAN ga
          razume — in odgovori na vaše vprašanje z jasnim, utemeljenim odgovorom.
        </p>
        <p className="text-[15px] text-site-mid leading-[1.85]">
          Primerno za odvetnike, pravnike, notarje, računovodje in podjetja, ki
          potrebujejo pravno jasnost brez dragih svetovalnih ur.
        </p>
      </div>

      {/* Right cards */}
      <div className="flex flex-col gap-5">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group flex gap-5 items-start bg-site-white border border-site-border rounded-lg p-7 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-lg bg-sage-pale flex items-center justify-center text-xl flex-shrink-0">
              {c.icon}
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-site-text mb-1.5">{c.title}</h3>
              <p className="text-[13px] text-site-muted leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
