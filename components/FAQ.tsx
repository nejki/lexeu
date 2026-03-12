import FAQAccordion from "./FAQAccordion";

const faqs = [
  {
    q: "Ali AI KRPAN nadomešča odvetnika?",
    a: "Ne. AI KRPAN je orodje, ki pripravi prvi osnutek dokumenta, poda pravno usmeritev in preveri zakonodajo, ampak ne more zastopati pred sodiščem, prevzeti odgovornosti za pravni nasvet ali oceniti vseh posebnosti vašega primera. Za enostavne zadeve (pogodba o zaposlitvi vzorec, vprašanje o odpravnini, pregled kratke pogodbe) je dovolj sam. Za zapletene primere je odličen prvi korak pred posvetom z odvetnikom.",
  },
  {
    q: "Kako zanesljivi so odgovori?",
    a: "AI KRPAN navaja konkretne zakonske člene in sodbe. Vsak vir lahko preverite sami. Model je specializiran za slovensko zakonodajo in ne generira odgovorov iz splošnega znanja kot ChatGPT. Kljub temu nobena AI ni 100-odstotno zanesljiva. Kritične odločitve vedno preverite.",
  },
  {
    q: "Katere pravne teme pokriva?",
    a: "Delovno pravo (ZDR-1, odpovedi, pogodbe o zaposlitvi, odpravnine), gospodarsko pravo, obligacijsko pravo, pravo EU, dedovanje, GDPR in varstvo osebnih podatkov, davčno pravo. Celotna slovenska zakonodaja in sodna praksa sta vključeni v bazo. Za EU pravo uporabite poseben model Pravo EU.",
  },
  {
    q: "Koliko časa potrebujem za odgovor?",
    a: "Večina odgovorov je pripravljena v manj kot minuti. Priprava daljšega dokumenta (pogodba, pravno mnenje) traja do 2 minuti. Čakalna vrsta ne obstaja.",
  },
  {
    q: "Ali so moja vprašanja zaupna?",
    a: "Da. Vaši podatki se ne uporabljajo za učenje modelov. Dokumenti, ki jih naložite, se obdelajo in ne hranijo trajno. Podrobnosti o varovanju podatkov najdete v naši politiki zasebnosti.",
  },
  {
    q: "Kako se AI KRPAN razlikuje od ChatGPT?",
    a: "ChatGPT pozna pravo na splošno. AI KRPAN je specializiran za slovensko zakonodajo. Pozna zakone, podzakonske akte in sodno prakso. Navaja točne vire. Pripravlja dokumente po veljavnih predpisih. ChatGPT tega ne zmore, ker nima dostopa do slovenske zakonske baze.",
  },
  {
    q: "Ali potrebujem pravno predznanje?",
    a: "Ne. Vprašajte tako, kot bi vprašali kolega, v navadnem jeziku. AI KRPAN razume kontekst in vam odgovori jasno. Če potrebujete pogodbo, jo pripravi. Če potrebujete razlago zakona, jo poda v razumljivem jeziku.",
  },
  {
    q: "Kako pripravim odpoved pogodbe o zaposlitvi?",
    a: "Izberite model AI KRPAN, opišite situacijo (razlog za odpoved, trajanje zaposlitve, ali gre za redno ali izredno odpoved) in AI KRPAN pripravi osnutek odpovedi pogodbe o zaposlitvi v skladu z ZDR-1. Vključi obvezne sestavine: odpovedni rok, pravni pouk, obrazložitev. Vi osnutek pregledate in prilagodite.",
  },
  {
    q: "Ali AI KRPAN nadomesti brezplačno pravno pomoč?",
    a: "AI KRPAN ni nadomestek za brezplačno pravno pomoč po Zakonu o brezplačni pravni pomoči. Ta vam dodeli odvetnika za zastopanje pred sodiščem. AI KRPAN pa vam pomaga pri vsakdanjih pravnih vprašanjih, ki jih brezplačna pravna pomoč ne pokriva: hitri odgovori, pregled pogodb, priprava dokumentov. Za €3 na vprašanje dobite takojšnjo pravno usmeritev brez čakanja.",
  },
  {
    q: "Ali AI KRPAN pozna ZDR-1 in zakon o delovnih razmerjih?",
    a: "Da. Zakon o delovnih razmerjih (ZDR-1) je eden od najpogosteje uporabljanih zakonov v AI KRPAN-u. Model pozna vse člene, vključno z najnovejšimi spremembami. Pokriva odpovedi, pogodbe o zaposlitvi, pogodbe o delu, odpravnine, letni dopust, regres, nadurno delo in vse ostale institute delovnega prava.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
        {/* Left */}
        <div className="lg:pt-2">
          <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-accent mb-5">
            Pogosta vprašanja
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-6">
            Pogosta{" "}
            <em className="italic text-accent">vprašanja</em>
          </h2>
          <p className="text-[14px] text-site-muted leading-relaxed mb-8">
            Odgovori na najpogostejša vprašanja o AI KRPAN-u. Če ne najdete svojega, vprašajte kar AI KRPAN.
          </p>
        </div>

        {/* Right — accordion */}
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
