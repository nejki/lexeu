import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="bg-sage-dark rounded-xl px-10 md:px-20 py-20 text-center">
          <h2 className="font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.1] text-white mb-6">
            Postavite svoje prvo<br />
            <em className="italic text-sage-light">pravno vprašanje</em>
          </h2>
          <p className="text-[17px] text-white/65 leading-[1.7] mb-10 max-w-xl mx-auto">
            Izberite paket in v dveh minutah dobite pravno stališče,
            utemeljeno z zakonskimi členi in sodno prakso.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Button
              href="https://app.aikrpan.com"
              variant="custom"
              className="bg-white text-sage-dark hover:bg-warm-light hover:text-site-text hover:-translate-y-0.5 hover:shadow-lg shadow-md"
            >
              Začnite za €15
            </Button>
            <a
              href="#demo"
              className="inline-flex items-center text-[13px] font-medium tracking-[0.04em] text-white/70 hover:text-white transition-colors duration-200"
            >
              Poglejte primer odgovora →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
