import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="bg-sage-dark rounded-xl px-6 md:px-20 py-14 md:py-20 text-center">
          <SectionHeading
            title={<>Your legal question won&apos;t wait.<br /></>}
            highlight="Your answer shouldn't either."
            separator=""
            highlightColor="text-accent-light"
            headingClassName="text-[clamp(36px,5vw,58px)] text-white mb-6"
            description={<>A lawyer takes days and charges hundreds. LexEU gives you a cited, legislation-grounded answer in under a minute — starting at &euro;9.90. No appointment. No queue. No retainer.</>}
            descriptionClassName="text-[17px] text-white/65 leading-[1.7] mb-10 max-w-xl mx-auto"
          />
          <div className="flex flex-wrap justify-center gap-5">
            <Button
              href="https://app.lexeu.ai"
              variant="primary"
              className="bg-white text-site-text hover:bg-warm-light hover:text-site-text hover:-translate-y-0.5 hover:shadow-lg shadow-md"
            >
              START NOW — from €9.90
            </Button>
            <Button href="#demo" variant="text-link">
              See how it works ↑
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
