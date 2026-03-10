"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Kaj je AI KRPAN?",
    a: "AI KRPAN je napreden pravni pomočnik, ki temelji na umetni inteligenci. Analizira celotno slovensko zakonodajo in sodno prakso ter odgovori na pravna vprašanja v sekundah — z navajanjem konkretnih zakonskih členov in sodb.",
  },
  {
    q: "Za koga je AI KRPAN primeren?",
    a: "Primeren je za odvetnike, pravnike, notarje, računovodje, stečajne upravitelje in podjetja vseh velikosti, ki potrebujejo pravno jasnost brez dragih svetovalnih ur.",
  },
  {
    q: "Ali AI KRPAN pokriva EU zakonodajo?",
    a: "Da. AI KRPAN vključuje poseben model za EU zakonodajo — direktive, uredbe in ostale predpise Evropske unije, poleg celotne slovenske zakonodaje.",
  },
  {
    q: "Kako hitro dobim odgovor?",
    a: "AI KRPAN odgovori povprečno v 3 sekundah. Vsak odgovor je podkrepljen s konkretnimi zakonskimi členi in relevantno sodno prakso.",
  },
  {
    q: "Ali so moji podatki varni?",
    a: "Da. Vaše poizvedbe in dokumenti niso nikoli deljeni z zunanjimi stranmi. AI KRPAN zagotavlja popolno zasebnost vaših pravnih vprašanj.",
  },
  {
    q: "Ali lahko naložim lasten dokument?",
    a: "Da. Model Document QA vam omogoča nalaganje lastnih dokumentov (pogodb, sodb, aktov) in postavljanje vprašanj neposredno o vsebini dokumenta.",
  },
  {
    q: "Kaj se zgodi, ko porabim vsa vprašanja?",
    a: "Vprašanja lahko kadarkoli dokupite, ne glede na paket. Paketi Mini in Standard nimajo datumske omejitve — vprašanja se ne iztečejo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
        {/* Left */}
        <div className="lg:pt-2">
          <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
            Pogosta vprašanja
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-6">
            Pogosta{" "}
            <em className="italic text-sage-dark">vprašanja</em>
          </h2>
          <p className="text-[14px] text-site-muted leading-relaxed mb-8">
            Ne najdete odgovora? Pišite nam na{" "}
            <a href="mailto:info@aikrpan.com" className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors">
              info@aikrpan.com
            </a>
          </p>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-site-border first:border-t">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-semibold text-site-text group-hover:text-sage-dark transition-colors duration-200">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-site-border flex items-center justify-center text-site-muted transition-all duration-300 ${
                    open === i ? "bg-sage-dark border-sage-dark text-white rotate-45" : "group-hover:border-sage"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[14px] text-site-mid leading-[1.8]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
