import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import SchemaScript from "@/components/SchemaScript";
import NavodilaFAQ from "@/components/NavodilaFAQ";
import {
  IconFileText,
  IconCalendar,
  IconShieldCheck,
  IconArrowsExchange,
} from "@/components/ui/Icons";
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
    "Naučite se uporabljati AI KRPAN v 6 korakih. Video navodila, korak za korakom vodnik, nasveti za boljše pravne odgovore in pogosta vprašanja.",
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
  {
    number: "06",
    title: "Preverite vire",
    description:
      "Vsak odgovor vsebuje sklice na zakonske člene in sodne odločbe. Kliknite nanje za neposreden dostop do uradnih virov — PisRS za zakonodajo in SOVS za sodno prakso.",
  },
];

const tips = [
  {
    icon: <IconFileText className="w-5 h-5" />,
    title: "Bodite konkretni",
    description:
      "Namesto \"Kakšne so moje pravice?\" vprašajte \"Delodajalec mi je vročil redno odpoved po 8 letih zaposlitve. Kakšna odpravnina mi pripada po ZDR-1?\"",
  },
  {
    icon: <IconCalendar className="w-5 h-5" />,
    title: "Navedite datume in zneske",
    description:
      "Konkretne številke omogočajo natančnejši odgovor — npr. datum zaposlitve, višino plače ali rok, ki vas zanima.",
  },
  {
    icon: <IconShieldCheck className="w-5 h-5" />,
    title: "Preverite vire",
    description:
      "Kliknite na navedene zakonske člene in sodne odločbe za neposreden dostop do uradnih virov — PisRS in SOVS.",
  },
  {
    icon: <IconArrowsExchange className="w-5 h-5" />,
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
            <Link
              href="/"
              className="hover:text-sage-dark transition-colors duration-200"
            >
              Domov
            </Link>
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
            Od registracije do pravnega stališča v šestih preprostih korakih.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-site-border rounded-xl overflow-hidden border border-site-border">
          {steps.map((step, i) => (
            <FadeIn
              key={step.number}
              delay={i * 80}
              className="bg-site-white p-8"
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
