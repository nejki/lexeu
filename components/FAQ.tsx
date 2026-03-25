import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import FAQAccordion from "./FAQAccordion";
import { HOME_FAQS } from "@/app/content-schema";

const faqs = HOME_FAQS.map((item) => ({ q: item.question, a: item.answer }));

export default function FAQ() {
  return (
    <Container as="section" id="faq" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
        {/* Left */}
        <div className="lg:pt-2">
          <SectionHeading
            label="FAQ"
            title="Common"
            highlight="questions"
            headingClassName="text-heading-sm mb-6"
            description="Everything you need to know before your first question."
            descriptionClassName="text-[14px] text-site-muted leading-relaxed mb-8"
          />
        </div>

        {/* Right — accordion */}
        <FAQAccordion items={faqs} />
      </div>
    </Container>
  );
}
