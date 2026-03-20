import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="bg-sage-dark rounded-xl px-6 md:px-20 py-14 md:py-20 text-center">
          <h2 className="font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.1] text-white mb-6">
            Your legal question won&apos;t wait.<br />
            <em className="italic text-accent-light">Your answer shouldn&apos;t either.</em>
          </h2>
          <p className="text-[17px] text-white/65 leading-[1.7] mb-10 max-w-xl mx-auto">
            A lawyer takes days and charges hundreds. LexEU gives you a cited, legislation-grounded answer in under a minute — starting at €9.90. No appointment. No queue. No retainer.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Button
              href="https://app.lexeu.ai"
              variant="primary"
              className="bg-white text-site-text hover:bg-warm-light hover:text-site-text hover:-translate-y-0.5 hover:shadow-lg shadow-md"
            >
              START NOW — from €9.90
            </Button>
            <a
              href="#demo"
              className="inline-flex items-center text-[13px] font-medium tracking-[0.04em] text-white/70 hover:text-white transition-colors duration-200"
            >
              See how it works ↑
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
