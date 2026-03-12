import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "AiKrpan je enostaven za uporabo, odgovori so natančni in izčrpni ter podkrepljeni z relevantno sodno prakso.",
    company: "Odvetniška pisarna Ketiš, Janžekovič in partnerji",
    type: "Odvetniška pisarna",
  },
  {
    quote:
      "Orodje je bistveno vplivalo na učinkovitost pri vsakodnevnih pravnih nalogah. Hitro in zanesljivo.",
    company: "Nova Reha d.o.o.",
    type: "Zdravstveno podjetje",
  },
  {
    quote:
      "Za malo podjetje je prihranek časa ogromen. Konkretni odgovori s primeri in ugodna cena.",
    company: "Kreativna Bajta d.o.o.",
    type: "Kreativna agencija",
  },
];

export default function Testimonials() {
  return (
    <section id="stranke" className="bg-site-white border-t border-site-border py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left label */}
          <FadeIn className="lg:pt-2">
            <SectionLabel className="mb-5">Stranke</SectionLabel>
            <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-site-text">
              Kaj pravijo{" "}
              <em className="italic text-accent">uporabniki</em>
            </h2>
          </FadeIn>

          {/* Right testimonials */}
          <div className="flex flex-col">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={`group py-9 border-b border-site-border hover:pl-6 transition-all duration-300 cursor-default${i === 0 ? " border-t" : ""}`}>
                  <blockquote className="font-serif text-[16px] md:text-[19px] font-normal italic leading-[1.65] text-site-text mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[14px] font-semibold text-site-text">{t.company}</p>
                      <p className="text-[13px] text-site-muted mt-0.5">{t.type}</p>
                    </div>
                    <span className="text-warm text-[14px] tracking-wider">★★★★★</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
