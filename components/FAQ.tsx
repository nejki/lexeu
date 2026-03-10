"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Ali AI KRPAN nadomešča odvetnika?",
    a: "Ne. AI KRPAN je orodje za pravno orientacijo — pomaga vam razumeti, kje stojite, preden se odločite za naslednji korak. Za kompleksne zadeve, sodno zastopanje ali pravno zavezujoče dokumente potrebujete odvetnika. Mnogi odvetniki AI KRPAN uporabljajo kot izhodišče za lastno raziskavo.",
  },
  {
    q: "Kako zanesljivi so odgovori?",
    a: "Vsak odgovor navede zakonske člene in sodne odločbe, na katerih temelji. To pomeni, da lahko vsako trditev sami preverite v uradnih virih. AI KRPAN ne ugiba — odgovarja na podlagi dejanske zakonodaje in sodne prakse.",
  },
  {
    q: "Katere pravne teme pokriva?",
    a: "Slovensko zakonodajo v celoti — civilno, delovno, gospodarsko, kazensko pravo. Dejansko sodno prakso slovenskih sodišč. Pravo EU z direktivami, uredbami in pravilniki. Smernice informacijske pooblaščenke za varstvo osebnih podatkov in GDPR.",
  },
  {
    q: "Koliko časa potrebujem za odgovor?",
    a: "Povprečno 1–2 minuti. Zastavite vprašanje v naravnem jeziku — kot bi ga zastavili odvetniku. AI KRPAN analizira vaše vprašanje, identificira relevantne pravne vire in oblikuje utemeljeno stališče.",
  },
  {
    q: "Ali so moja vprašanja zaupna?",
    a: "Da. Vaša vprašanja in odgovori so zaupni in niso deljeni s tretjimi osebami. Sistem ne hrani vaših podatkov za učenje AI modela.",
  },
  {
    q: "Kako se AI KRPAN razlikuje od ChatGPT?",
    a: "ChatGPT je splošno AI orodje brez dostopa do slovenske zakonodaje in sodne prakse. Pogosto halucinira — citira zakone in sodbe, ki ne obstajajo. AI KRPAN je specializiran za pravo: dostopa do dejanske zakonodaje in sodne prakse, vsak odgovor pa vsebuje preverljive navedbe virov.",
  },
  {
    q: "Ali potrebujem pravno predznanje?",
    a: "Ne. Vprašanja postavljate v vsakdanjem jeziku. AI KRPAN razume kontekst in odgovori jasno — tudi če niste pravnik. Orodje je zasnovano tako za odvetnike kot za fizične osebe brez pravnega znanja.",
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
                  open === i ? "max-h-64 pb-6" : "max-h-0"
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
