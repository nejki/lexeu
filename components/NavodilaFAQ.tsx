"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Ali moram imeti pravno predznanje za uporabo AI KRPAN?",
    a: "Ne. Vprašanja postavljate v vsakdanjem jeziku — kot bi jih zastavili odvetniku. AI KRPAN razume kontekst in odgovori jasno, tudi če niste pravnik.",
  },
  {
    q: "Kako dolgo traja, da dobim odgovor?",
    a: "Povprečno 1–2 minuti. AI KRPAN analizira vaše vprašanje, identificira relevantne pravne vire in oblikuje utemeljeno stališče z navedbami zakonskih členov in sodne prakse.",
  },
  {
    q: "Ali lahko zastavim več vprašanj zapored?",
    a: "Da. Vsako vprašanje se obravnava neodvisno. Lahko zastavite poljubno število vprašanj v okviru svojega paketa — brez omejitev na dan ali temo.",
  },
  {
    q: "Kako natančno naj opišem svojo situacijo?",
    a: "Bolj kot je vaše vprašanje podrobno, boljši bo odgovor. Navedite ključne okoliščine: datume, zneske, vloge strank in kaj želite doseči. AI KRPAN bo identificiral relevantne zakonske določbe za vašo konkretno situacijo.",
  },
  {
    q: "Ali lahko prilagodim podrobnost odgovora?",
    a: "Da. Ob zastavljanju vprašanja lahko izberete med različnimi AI modeli — od hitrega pregleda do poglobljene pravne analize. Višji modeli podajo obsežnejše odgovore z več pravnimi viri.",
  },
  {
    q: "Ali so moja vprašanja zaupna?",
    a: "Da. Vaša vprašanja in odgovori so zaupni in niso deljeni s tretjimi osebami. Sistem ne hrani vaših podatkov za učenje AI modela.",
  },
  {
    q: "Kako preverim navedene zakonske člene?",
    a: "Vsak odgovor vsebuje sklice na zakonske člene in sodne odločbe. Kliki na navedbe vas preusmerijo na uradne vire — PisRS za zakonodajo in SOVS za sodno prakso — kjer lahko vsako trditev samostojno preverite.",
  },
  {
    q: "Ali AI KRPAN nadomešča odvetnika?",
    a: "Ne. AI KRPAN je orodje za pravno orientacijo — pomaga razumeti, kje stojite, preden se odločite za naslednji korak. Za kompleksne zadeve, sodno zastopanje ali pravno zavezujoče dokumente potrebujete odvetnika.",
  },
];

export default function NavodilaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 border-t border-site-border">
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
          <p className="text-[14px] text-site-muted leading-relaxed">
            Ne najdete odgovora? Pišite nam na{" "}
            <a
              href="mailto:info@aikrpan.com"
              className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
            >
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
                    open === i
                      ? "bg-sage-dark border-sage-dark text-white rotate-45"
                      : "group-hover:border-sage"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1v8M1 5h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[14px] text-site-mid leading-[1.8]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
