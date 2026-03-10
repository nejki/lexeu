import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import SchemaScript from "@/components/SchemaScript";
import NavodilaFAQ from "@/components/NavodilaFAQ";
import {
  breadcrumbSchema,
  videoObjectSchema,
  howToSchema,
  faqPageSchema,
} from "@/app/content-schema";

export const metadata: Metadata = {
  title:
    "Navodila za uporabo AI KRPAN - Video vodnik in koraki",
  description:
    "Naučite se uporabljati AI KRPAN v 5 minutah. Video navodila, korak za korakom vodnik, nasveti za boljše pravne odgovore in pogosta vprašanja.",
  keywords: [
    "AI KRPAN navodila",
    "kako uporabljati AI KRPAN",
    "AI KRPAN vodnik",
    "AI KRPAN video",
    "pravni AI navodila",
    "AI KRPAN uporaba",
    "AI pravna pomoč navodila",
    "AI KRPAN tutorial",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/navodila/",
  },
  openGraph: {
    title: "Navodila za uporabo AI KRPAN - Video vodnik",
    description:
      "Video navodila in korak-za-korakom vodnik za uporabo AI KRPAN. Začnite s pravnim vprašanjem v minutah.",
    url: "https://www.aikrpan.com/navodila/",
    type: "article",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=bVIDFEarsx8",
        width: 1280,
        height: 720,
        type: "text/html",
      },
    ],
  },
};

const steps = [
  {
    number: "01",
    title: "Izberite paket",
    description:
      "Obiščite app.aikrpan.com in izberite paket, ki ustreza vašim potrebam. Na voljo so paketi od €15 za posamezna vprašanja do mesečnih naročnin za redne uporabnike.",
  },
  {
    number: "02",
    title: "Zastavite vprašanje",
    description:
      "Vpišite svoje pravno vprašanje v naravnem jeziku — kot bi ga zastavili odvetniku. Opišite okoliščine, navedite ključne datume, zneske in vloge vpletenih strank.",
  },
  {
    number: "03",
    title: "Izberite AI model",
    description:
      "Izberite med različnimi AI modeli glede na želeno podrobnost odgovora. Hitri modeli so idealni za preproste poizvedbe, poglobljeni pa za kompleksne pravne situacije.",
  },
  {
    number: "04",
    title: "Prejmite pravno stališče",
    description:
      "V 1–2 minutah prejmete utemeljeno pravno stališče z navedbami zakonskih členov, sodne prakse in povezavami do uradnih virov, ki jih lahko samostojno preverite.",
  },
  {
    number: "05",
    title: "Poglobite se ali nadaljujte",
    description:
      "Zastavite dodatna vprašanja za poglobitev ali razjasnitev. Vsako vprašanje se obravnava neodvisno — raziskujete lahko različne vidike brez omejitev.",
  },
];

const tips = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
    title: "Bodite konkretni",
    description:
      "Namesto \"Kakšne so moje pravice?\" vprašajte \"Delodajalec mi je vročil redno odpoved po 8 letih zaposlitve. Kakšna odpravnina mi pripada po ZDR-1?\"",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
    title: "Navedite datume in zneske",
    description:
      "Konkretne številke omogočajo natančnejši odgovor — npr. datum zaposlitve, višino plače ali rok, ki vas zanima.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
    title: "Preverite vire",
    description:
      "Kliknite na navedene zakonske člene in sodne odločbe za neposreden dostop do uradnih virov — PisRS in SOVS.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
    title: "Zastavljajte dodatna vprašanja",
    description:
      "Če želite poglobitev, zastavite novo vprašanje z dodatnimi podrobnostmi ali prosite za razlago specifičnega člena.",
  },
];

export default function NavodilaPage() {
  return (
    <main>
      <Nav />
      <div className="h-16" />

      {/* ── Schemas ── */}
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Navodila", url: "/navodila/" },
        ])}
      />
      <SchemaScript
        schema={videoObjectSchema({
          name: "AI KRPAN — Navodila za uporabo",
          description:
            "Video navodila za uporabo AI KRPAN. Naučite se, kako zastaviti pravno vprašanje in prejeti utemeljeno pravno stališče v minutah.",
          thumbnailUrl: "https://img.youtube.com/vi/bVIDFEarsx8/maxresdefault.jpg",
          uploadDate: "2026-03-10",
          contentUrl: "https://www.youtube.com/watch?v=bVIDFEarsx8",
          embedUrl: "https://www.youtube-nocookie.com/embed/bVIDFEarsx8",
        })}
      />
      <SchemaScript
        schema={howToSchema({
          name: "Kako uporabljati AI KRPAN",
          description:
            "Korak za korakom vodnik za uporabo AI KRPAN — od izbire paketa do prejetja pravnega stališča.",
          steps: steps.map((s) => ({ name: s.title, text: s.description })),
        })}
      />
      <SchemaScript
        schema={faqPageSchema([
          {
            question: "Ali moram imeti pravno predznanje za uporabo AI KRPAN?",
            answer:
              "Ne. Vprašanja postavljate v vsakdanjem jeziku — kot bi jih zastavili odvetniku. AI KRPAN razume kontekst in odgovori jasno, tudi če niste pravnik.",
          },
          {
            question: "Kako dolgo traja, da dobim odgovor?",
            answer:
              "Povprečno 1–2 minuti. AI KRPAN analizira vaše vprašanje, identificira relevantne pravne vire in oblikuje utemeljeno stališče z navedbami zakonskih členov in sodne prakse.",
          },
          {
            question: "Ali lahko zastavim več vprašanj zapored?",
            answer:
              "Da. Vsako vprašanje se obravnava neodvisno. Lahko zastavite poljubno število vprašanj v okviru svojega paketa — brez omejitev na dan ali temo.",
          },
          {
            question: "Kako natančno naj opišem svojo situacijo?",
            answer:
              "Bolj kot je vaše vprašanje podrobno, boljši bo odgovor. Navedite ključne okoliščine: datume, zneske, vloge strank in kaj želite doseči.",
          },
          {
            question: "Ali lahko prilagodim podrobnost odgovora?",
            answer:
              "Da. Ob zastavljanju vprašanja lahko izberete med različnimi AI modeli — od hitrega pregleda do poglobljene pravne analize.",
          },
          {
            question: "Ali so moja vprašanja zaupna?",
            answer:
              "Da. Vaša vprašanja in odgovori so zaupni in niso deljeni s tretjimi osebami. Sistem ne hrani vaših podatkov za učenje AI modela.",
          },
          {
            question: "Kako preverim navedene zakonske člene?",
            answer:
              "Vsak odgovor vsebuje sklice na zakonske člene in sodne odločbe. Kliki vas preusmerijo na uradne vire — PisRS za zakonodajo in SOVS za sodno prakso.",
          },
          {
            question: "Ali AI KRPAN nadomešča odvetnika?",
            answer:
              "Ne. AI KRPAN je orodje za pravno orientacijo — pomaga razumeti, kje stojite, preden se odločite za naslednji korak.",
          },
        ])}
      />

      {/* ── Breadcrumbs ── */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1200px] mx-auto px-6 md:px-12 pt-6 pb-2"
      >
        <ol className="flex items-center gap-2 text-[13px] text-site-muted">
          <li>
            <a
              href="/"
              className="hover:text-sage-dark transition-colors duration-200"
            >
              Domov
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <span className="text-site-text font-medium">Navodila</span>
          </li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <header className="max-w-[1200px] mx-auto px-6 md:px-12 pt-10 pb-6 md:pt-16 md:pb-10">
        <FadeIn>
          <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
            Vodnik za uporabo
          </p>
          <h1 className="font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.1] text-site-text mb-4">
            Navodila za uporabo{" "}
            <em className="italic text-sage-dark">AI KRPAN</em>
          </h1>
          <p className="text-[18px] text-site-mid leading-[1.7] max-w-2xl">
            Oglejte si kratek video vodnik ali sledite korakom spodaj.
            Do prvega pravnega stališča ste oddaljeni le nekaj minut.
          </p>
        </FadeIn>
      </header>

      {/* ── Video embed ── */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20">
        <FadeIn>
          <div className="relative w-full rounded-xl overflow-hidden border border-site-border shadow-lg bg-stone-dark">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/bVIDFEarsx8?rel=0&modestbranding=1"
                title="AI KRPAN — Navodila za uporabo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <p className="text-[13px] text-site-muted mt-4 text-center">
            Video vodnik: Kako uporabljati AI KRPAN za pravna vprašanja
          </p>
        </FadeIn>
      </section>

      {/* ── Steps ── */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20">
        <FadeIn>
          <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
            Korak za korakom
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-4">
            Kako uporabljati{" "}
            <em className="italic text-sage-dark">AI KRPAN</em>
          </h2>
          <p className="text-[17px] text-site-mid leading-[1.7] max-w-2xl mb-14">
            Od registracije do pravnega stališča v petih preprostih korakih.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-site-border rounded-xl overflow-hidden border border-site-border">
          {steps.map((step, i) => (
            <FadeIn
              key={step.number}
              delay={i * 80}
              className={`bg-site-white p-8 ${
                i === steps.length - 1 && steps.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <span className="inline-block text-[48px] font-serif font-semibold text-sage-pale leading-none mb-4">
                {step.number}
              </span>
              <h3 className="text-[17px] font-semibold text-site-text mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-site-mid leading-[1.8]">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Tips ── */}
      <section className="bg-sage-pale/40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20">
          <FadeIn>
            <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
              Nasveti za boljše odgovore
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-14">
              Kako dobiti{" "}
              <em className="italic text-sage-dark">najboljše rezultate</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, i) => (
              <FadeIn key={tip.title} delay={i * 80}>
                <div className="flex gap-5 bg-site-white border border-site-border rounded-lg p-6 hover:border-sage hover:shadow-sm transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage-dark">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-site-text mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-[14px] text-site-mid leading-[1.8]">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <NavodilaFAQ />
      </div>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="bg-sage-dark rounded-xl px-10 md:px-20 py-16 text-center">
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] text-white mb-4">
              Pripravljeni na vaše prvo vprašanje?
            </h2>
            <p className="text-[17px] text-white/65 leading-[1.7] mb-8 max-w-xl mx-auto">
              Izberite paket in v dveh minutah dobite pravno stališče,
              utemeljeno z zakonskimi členi in sodno prakso.
            </p>
            <Button
              href="https://app.aikrpan.com"
              variant="primary"
              className="bg-white text-sage-dark hover:bg-warm-light hover:text-site-text hover:-translate-y-0.5 hover:shadow-lg shadow-md"
            >
              Začnite za €15
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
