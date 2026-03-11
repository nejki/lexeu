import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, personSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title:
    "mag. Aleksander Kumer — Odvetnik in ustanovitelj AI Krpan",
  description:
    "Spoznajte mag. Aleksandra Kumra, mariborskega odvetnika in ustanovitelja nagrajene pravne AI platforme AI Krpan. Izkušnje, strokovnost in vizija.",
  keywords: [
    "Aleksander Kumer",
    "AI Krpan ustanovitelj",
    "odvetnik Maribor",
    "pravni AI Slovenija",
    "Committo",
    "odvetniška pisarna Kumer",
    "pravna inovacija",
    "EEAT",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/o-meni/",
  },
  openGraph: {
    title: "mag. Aleksander Kumer — Ustanovitelj AI Krpan",
    description:
      "Odvetnik in pravni inovator, ki stoji za nagrjeno AI platformo AI Krpan.",
    url: "https://www.aikrpan.com/o-meni/",
    type: "profile",
    images: [
      {
        url: "https://www.aikrpan.com/media/founder-source.webp",
        width: 1024,
        height: 576,
        alt: "mag. Aleksander Kumer — ustanovitelj AI Krpan",
      },
    ],
  },
};

const timeline = [
  {
    year: "2013",
    title: "Diploma na Pravni fakulteti",
    description:
      "Zaključek študija na Univerzi v Mariboru s temo o franšiznih pogodbah pod mentorstvom dr. Vesne Kranjc.",
  },
  {
    year: "2022",
    title: "Samostojni odvetnik",
    description:
      "Odprtje lastne odvetniške pisarne v Mariboru s fokusom na civilno, gospodarsko in nepremičninsko pravo.",
  },
  {
    year: "2024",
    title: "Rojstvo AI Krpana",
    description:
      "Razvoj in lansiranje AI Krpan — naprednega pravnega AI asistenta za slovensko zakonodajo in sodno prakso.",
  },
  {
    year: "2024",
    title: "Zlato za inovacijo Podravja",
    description:
      "Prejemnik zlate nagrade Štajerske gospodarske zbornice za najboljšo inovacijo Podravja 2024.",
  },
  {
    year: "2024",
    title: "Bronasto priznanje na državnem nivoju",
    description:
      "Priznanje na nacionalni ravni za inovativnost AI Krpan platforme.",
  },
  {
    year: "2025",
    title: "Širitev v tujino",
    description:
      "Razširitev AI Krpan na hrvaško zakonodajo in pravo EU ter načrti za avstrijsko in nemško pravo.",
  },
];

const expertise = [
  "Civilno pravo",
  "Gospodarsko pravo",
  "Nepremičninsko pravo",
  "Insolvenčno pravo",
  "Dedno pravo",
  "Delovno pravo",
  "Odškodninsko pravo",
  "Pravna informatika",
];

const mediaAppearances = [
  {
    outlet: "RTV Slovenija — Radio Maribor",
    title: "Umetna inteligenca na področju prava: program AI Krpan",
    description: "Podkast Zorni kot o uporabi AI v pravni praksi.",
    url: "https://365.rtvslo.si/podkast/zorni-kot/175046092",
  },
  {
    outlet: "UI-Slovenija",
    title: "AI Krpan: Inovativna uporaba umetne inteligence v odvetništvu",
    description: "Poglobljen intervju o razvoju in viziji AI Krpana.",
    url: "https://ui-slovenija.si/ui-v-podjetjih/ai-krpan-inovativna-uporaba-umetne-inteligence-v-odvetnistvu/",
  },
  {
    outlet: "Konferenca AI x Pravo 2025",
    title: "Umetnointeligenčni pravni asistenti",
    description:
      "Predavanje na Fakulteti za matematiko in fiziko v Ljubljani o slovenskem LegalTech ekosistemu.",
    url: "https://law-brainer.com/program/",
  },
  {
    outlet: "AHK Blog",
    title: "Committo — AI KRPAN: Implementacija pravnih UI tehnologij",
    description:
      "Članek Nemško-slovenske gospodarske zbornice o implementaciji pravnih AI tehnologij.",
    url: "https://ahkblog.si/inovacije/umetna-inteligenca/committo-ai-krpan-implementacija-pravnih-ui-tehnologij-v-podjetjih-za-prihodnost/",
  },
  {
    outlet: "Gospodarski Izzivi",
    title: "Ali je vaše podjetje pripravljeno na umetno inteligenco?",
    description:
      "O pripravljenosti slovenskega gospodarstva na AI revolucijo.",
    url: "https://www.gospodarski-izzivi.si/2024/09/08/ai-krpan/",
  },
  {
    outlet: "Maribor24",
    title: "Umetna inteligenca v službi prava",
    description:
      "Slovenski AI KRPAN, ki se širi tudi v tujino, je prihodnost reševanja pravnih izzivov.",
    url: "https://maribor24.si/tehnologija/umetna-inteligenca-v-sluzbi-prava-slovenski-ai-krpan-ki-se-siri-tudi-v-tujino-je-prihodnost-resevanja-vsakodnevnih-pravnih-izzivov/",
  },
];

export default function OMeniPage() {
  return (
    <main>
      <Nav />
      <div className="h-16" />

      {/* ── Schemas ── */}
      <SchemaScript
        schema={breadcrumbSchema([{ name: "O meni", url: "/o-meni/" }])}
      />
      <SchemaScript
        schema={personSchema({
          name: "mag. Aleksander Kumer",
          jobTitle: "Odvetnik in ustanovitelj AI Krpan",
          description:
            "Aleksander Kumer je magister prava z Univerze v Mariboru, aktivni odvetnik v Mariboru in ustanovitelj nagrajenega pravnega AI asistenta AI Krpan.",
          url: "/o-meni/",
          image: "/media/founder-source.webp",
          sameAs: [
            "https://www.odvetnik-kumer.si/",
            "https://www.facebook.com/aikrpan",
            "https://www.linkedin.com/in/aikrpan/",
          ],
          worksFor: [
            {
              name: "Odvetniška pisarna Aleksander Kumer",
              url: "https://www.odvetnik-kumer.si/",
            },
            {
              name: "Committo d.o.o.",
              url: "https://www.aikrpan.com/",
            },
          ],
          alumniOf: "Univerza v Mariboru, Pravna fakulteta",
          awards: [
            "Zlata nagrada za najboljšo inovacijo Podravja 2024",
            "Bronasto priznanje za inovacijo na državnem nivoju 2024",
          ],
          knowsAbout: [
            "Slovensko pravo",
            "Umetna inteligenca v pravu",
            "Civilno pravo",
            "Gospodarsko pravo",
            "LegalTech",
          ],
        })}
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
            <span className="text-site-text font-medium">O meni</span>
          </li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <header className="max-w-[1200px] mx-auto px-6 md:px-12 pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Photo */}
          <FadeIn>
            <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 aspect-[3/4] rounded-xl overflow-hidden border border-site-border shadow-sm">
              <Image
                src="/media/founder-source.webp"
                alt="mag. Aleksander Kumer prejema nagrado za inovacijo AI Krpan"
                fill
                priority
                className="object-cover object-[center_15%]"
                sizes="(max-width: 1024px) 320px, 280px"
              />
            </div>
          </FadeIn>

          {/* Bio */}
          <div>
            <FadeIn>
              <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
                Ustanovitelj AI Krpan
              </p>
              <h1 className="font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.1] text-site-text mb-4">
                mag. Aleksander{" "}
                <em className="italic text-sage-dark">Kumer</em>
              </h1>
              <p className="text-[15px] font-medium text-site-muted mb-8">
                Odvetnik &middot; Pravni inovator &middot; Maribor, Slovenija
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              <p className="text-[16px] md:text-[17px] text-site-mid leading-[1.85] mb-5">
                Aleksander Kumer je magister prava z Univerze v Mariboru in
                aktivni odvetnik s pisarno na Zagrebški cesti 29 v Mariboru.
                Specializiran je za civilno, gospodarsko, nepremičninsko in
                insolvenčno pravo ter ima bogate izkušnje z zastopanjem strank
                v zahtevnih pravnih postopkih.
              </p>
              <p className="text-[16px] md:text-[17px] text-site-mid leading-[1.85] mb-5">
                Iz prakse je spoznal, kako pogosto se posamezniki in podjetja
                srečujejo s pravnimi vprašanji, za katera ne najdejo hitrega
                in dostopnega odgovora. To spoznanje ga je vodilo k razvoju
                AI Krpana — naprednega pravnega AI asistenta, ki analizira
                celotno slovensko zakonodajo in sodno prakso ter nudi
                utemeljene odgovore z navedbami zakonskih členov.
              </p>
              <p className="text-[16px] md:text-[17px] text-site-mid leading-[1.85]">
                AI Krpan je bil razvit v sodelovanju s podjetjem Committo
                d.o.o. in je leta 2024 prejel zlato nagrado za najboljšo
                inovacijo Podravja ter bronasto priznanje na državnem nivoju.
                Platforma se danes širi na hrvaško zakonodajo, pravo EU,
                ter načrtuje vstop na avstrijski in nemški trg.
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* ── Expertise ── */}
      <section className="bg-site-white border-t border-site-border py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
              Pravna področja
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-12">
              Področja{" "}
              <em className="italic text-sage-dark">strokovnosti</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-site-border rounded-xl overflow-hidden border border-site-border">
            {expertise.map((area, i) => (
              <FadeIn
                key={area}
                delay={i * 60}
                className="bg-site-white p-6 md:p-8"
              >
                <p className="text-[15px] md:text-[16px] font-medium text-site-text">
                  {area}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-t border-site-border py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
              Pot
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-14">
              Od prava do{" "}
              <em className="italic text-sage-dark">inovacije</em>
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div
                  className={`group flex gap-6 md:gap-10 py-8 border-b border-site-border${i === 0 ? " border-t" : ""}`}
                >
                  <span className="flex-shrink-0 font-serif text-[28px] md:text-[36px] font-semibold text-sage-pale leading-none pt-1 w-[70px] md:w-[90px]">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-site-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-site-mid leading-[1.75]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media & Speaking ── */}
      <section className="bg-site-white border-t border-site-border py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
              Mediji in nastopi
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-14">
              V{" "}
              <em className="italic text-sage-dark">medijih</em> in na odru
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-site-border rounded-xl overflow-hidden border border-site-border">
            {mediaAppearances.map((m, i) => (
              <FadeIn
                key={i}
                delay={i * 60}
                className="bg-site-white p-7"
              >
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-sage mb-2">
                    {m.outlet}
                  </p>
                  <h3 className="text-[16px] font-semibold text-site-text mb-2 group-hover:text-sage-dark transition-colors duration-200">
                    {m.title}
                  </h3>
                  <p className="text-[14px] text-site-mid leading-[1.7] mb-3">
                    {m.description}
                  </p>
                  <span className="text-[13px] font-medium text-sage-dark group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Preberi &rarr;
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="bg-sage-dark rounded-xl px-10 md:px-20 py-16 text-center">
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] text-white mb-4">
              Imate pravno vprašanje?
            </h2>
            <p className="text-[17px] text-white/65 leading-[1.7] mb-8 max-w-xl mx-auto">
              Preizkusite AI Krpan in v dveh minutah dobite pravno stališče,
              utemeljeno z zakonskimi členi in sodno prakso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://app.aikrpan.com"
                variant="primary"
                className="bg-white text-sage-dark hover:bg-warm-light hover:text-site-text hover:-translate-y-0.5 hover:shadow-lg shadow-md"
              >
                Preizkusite AI Krpan
              </Button>
              <Button
                href="https://www.odvetnik-kumer.si/"
                variant="primary"
                className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:-translate-y-0.5"
              >
                Odvetniška pisarna Kumer
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
