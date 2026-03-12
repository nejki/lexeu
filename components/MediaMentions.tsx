"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const mentions = [
  {
    outlet: "UI-Slovenija",
    title: "Umetna inteligenca je revolucionirala pravni svet",
    description:
      "Video pogovor s Petrom Mesarcem o tem, kako umetna inteligenca spreminja pravni svet.",
    url: "https://www.youtube.com/watch?v=U30TZzfo1ZA",
    type: "Video",
    favicon: "/media/favicons/youtube.png",
  },
  {
    outlet: "Gospodarski Izzivi",
    title: "Ali je vaše podjetje pripravljeno na umetno inteligenco?",
    description:
      "Članek o pripravljenosti podjetij na umetno inteligenco in vlogi AI Krpana pri pravnih rešitvah.",
    url: "https://www.gospodarski-izzivi.si/2024/11/28/ali-je-vase-podjetje-pripravljeno-na-umetno-inteligenco/",
    type: "Članek",
    favicon: "/media/favicons/gospodarski-izzivi.png",
  },
  {
    outlet: "Maribor24",
    title: "Umetna inteligenca v službi prava",
    description:
      "Slovenski AI KRPAN, ki se širi tudi v tujino, je prihodnost reševanja vsakodnevnih pravnih izzivov.",
    url: "https://maribor24.si/tehnologija/dnevna-umetna-inteligenca-jo-izkoristiti-ali-plavati-proti-toku/",
    type: "Članek",
    favicon: "/media/favicons/maribor24.png",
  },
  {
    outlet: "Maribor24",
    title: "AI KRPAN, vaš najboljši pravni pomočnik",
    description:
      "AI Krpan prejemnik zlata za najboljšo inovacijo Podravja 2024.",
    url: "https://maribor24.si/tehnologija/",
    type: "Nagrada",
    favicon: "/media/favicons/maribor24.png",
  },
  {
    outlet: "Maribor24",
    title:
      "Tudi umetna inteligenca podpira Štajersko gospodarsko odličnost",
    description:
      "AI Krpan kot inovacijski partner pri podelitvi nagrad za štajersko gospodarsko odličnost.",
    url: "https://maribor24.si/stajerska-gospodarska-odlicnost/tudi-umetna-inteligenca-podpira-stajersko-gospodarsko-odlicnost/",
    type: "Članek",
    favicon: "/media/favicons/maribor24.png",
  },
  {
    outlet: "Maribor24",
    title:
      "Če potrebujete pravni nasvet, vam odslej ni potrebno iskati pravnika",
    description:
      "Namesto tega se lahko zanesete na slovensko visokotehnološko rešitev, AI Krpan.",
    url: "https://maribor24.si/tehnologija/ce-potrebujete-pravni-nasvet-vam-odslej-ni-potrebno-iskati-pravnika/",
    type: "Članek",
    favicon: "/media/favicons/maribor24.png",
  },
];

export default function MediaMentions() {
  return (
    <section
      id="mediji"
      className="bg-site-white border-t border-site-border py-16 md:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left label */}
          <FadeIn className="lg:pt-2">
            <SectionLabel className="mb-5">Mediji</SectionLabel>
            <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-site-text">
              Kaj govorijo{" "}
              <em className="italic text-accent">mediji</em> o nas
            </h2>
          </FadeIn>

          {/* Right media mentions */}
          <div className="flex flex-col">
            {mentions.map((m, i) => (
              <FadeIn key={i} delay={i * 80}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex gap-5 py-9 border-b border-site-border hover:pl-6 transition-all duration-300${i === 0 ? " border-t" : ""}`}
                >
                  {/* Favicon */}
                  <div className="hidden sm:flex flex-shrink-0 w-[100px] h-[68px] rounded-md border border-site-border bg-stone-50 items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.favicon}
                      alt={m.outlet}
                      width={40}
                      height={40}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] font-semibold tracking-widest uppercase text-accent">
                        {m.outlet}
                      </span>
                      <span className="text-[11px] font-medium tracking-wide uppercase text-site-muted">
                        {m.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-[16px] md:text-[19px] font-semibold leading-[1.4] text-site-text mb-1.5 group-hover:text-accent transition-colors duration-300">
                      {m.title}
                    </h3>
                    <p className="text-[14px] text-site-mid leading-[1.7]">
                      {m.description}
                    </p>
                    <span className="inline-block mt-3 text-[13px] font-medium text-accent group-hover:translate-x-1 transition-transform duration-300">
                      Preberi več &rarr;
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
