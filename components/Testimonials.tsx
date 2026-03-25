import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "We needed a quick answer on whether our supplier contract complied with the Late Payment Directive. LexEU cited the exact articles and gave us a clear position in about 40 seconds. Our lawyer confirmed it was spot-on.",
    company: "Koller & Wirth GmbH",
    type: "Import/export, Austria",
  },
  {
    quote:
      "I was dealing with a GDPR data deletion request and had no idea about the deadlines. LexEU walked me through Art. 12 and Art. 17 step by step — saved me a €400 consultation fee.",
    company: "NovaTech Solutions",
    type: "SaaS startup, Poland",
  },
  {
    quote:
      "As a freelancer selling across three EU countries, VAT rules were a nightmare. LexEU explained the OSS scheme and the €10,000 threshold in plain language. I set it up the same afternoon.",
    company: "Studio Ferretti",
    type: "E-commerce, Italy",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-site-white border-t border-site-border py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left label */}
          <FadeIn className="lg:pt-2">
            <SectionHeading
              label="Clients"
              title="What early"
              highlight="users say"
              headingClassName="text-[clamp(36px,4vw,52px)]"
            />
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
