import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { target: 3, suffix: "s", label: "Povprečni čas odgovora" },
  { target: 500, suffix: "+", label: "Zadovoljnih strank" },
  { target: 6, suffix: "", label: "Specializiranih AI modelov" },
];

export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden">
          {/* Left */}
          <FadeIn className="bg-sage-dark px-10 md:px-16 py-16">
            <h2 className="font-serif text-[clamp(40px,5vw,62px)] font-semibold leading-[1.05] text-white mb-6">
              Začnite danes.<br />
              <em className="italic text-sage-light">Pravo odgovorjeno.</em>
            </h2>
            <p className="text-[16px] text-white/65 leading-[1.7] mb-10">
              Pridružite se stotim podjetjem in pravnikom, ki že varčujejo čas z
              AI KRPAN.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="#cenik"
                variant="primary"
                className="bg-site-white text-sage-dark hover:bg-stone hover:-translate-y-0.5 hover:shadow-md"
              >
                Naroči se zdaj
              </Button>
              <Button
                href="https://www.aikrpan.com/video-navodila/"
                variant="outline"
                className="border-white/30 text-white/85 hover:border-white/60 hover:text-white hover:bg-transparent"
              >
                Oglejte si navodila →
              </Button>
            </div>
          </FadeIn>

          {/* Right stats */}
          <FadeIn delay={150} className="bg-sage-dark/80 px-10 md:px-16 py-16 flex flex-col justify-center gap-8 border-t lg:border-t-0 lg:border-l border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-white/20 pl-6">
                <p className="font-serif text-[52px] font-semibold text-white leading-none">
                  <CountUp target={s.target} suffix={s.suffix} duration={1200} />
                </p>
                <p className="text-[14px] text-white/55 mt-1.5">{s.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
