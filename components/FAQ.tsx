import { SectionHeading } from "@/components/ui/SectionHeading";
import FAQAccordion from "./FAQAccordion";

const faqs = [
  {
    q: "Does LexEU replace a lawyer?",
    a: "No. LexEU is an AI legal chatbot that provides information and document drafts grounded in EU legislation and case law. It's built to help you understand your legal position quickly — but it's not a law firm and doesn't provide formal legal advice. For court representation, binding opinions, or high-stakes disputes, you should always work with a licensed attorney. Think of LexEU as the research step before (or instead of) that first expensive consultation.",
  },
  {
    q: "How reliable are the answers?",
    a: "LexEU cites specific articles from EU directives, regulations, and CJEU rulings. Every citation is verifiable. The system is built by an EU-licensed attorney and grounded in active legislation — it doesn't generate answers from general knowledge the way ChatGPT does. That said, no AI is perfect. We recommend verifying answers for critical decisions and always consulting a professional for matters involving court proceedings or significant financial exposure.",
  },
  {
    q: "What areas of EU law are covered?",
    a: "LexEU covers employment law, consumer protection, contract law, GDPR and data protection, VAT and cross-border trade, unfair commercial practices, late payment rules, and product liability — all based on active EU directives and regulations. National transpositions are available for Austria, Germany, Italy, Poland, and Serbia. The system also searches CJEU case law for relevant precedents.",
  },
  {
    q: "How long does it take to get an answer?",
    a: "Most answers arrive in under 60 seconds. Complex questions involving multiple directives or document analysis may take slightly longer, but you'll rarely wait more than two minutes. Compare that to the 3–14 business days a typical law firm quotes for a written opinion.",
  },
  {
    q: "Is my data confidential?",
    a: "Yes. LexEU is fully GDPR-compliant under Regulation 2016/679. Your questions and uploaded documents are never used to train AI models. All data is stored within the EU. You have full data subject rights at any time — including the right to access, erasure, and data portability. If you want to file a data subject rights request, contact info@lexeu.ai.",
  },
  {
    q: "How is LexEU different from ChatGPT?",
    a: "ChatGPT is a general-purpose AI. It doesn't know which EU directive applies to your situation, doesn't track legislative amendments, and often generates plausible-sounding answers that cite articles that don't exist. LexEU is purpose-built for EU law. It searches actual legislation databases, cites real articles, and includes CJEU case law. When it answers a question about probationary periods, it points you to Art. 8(2) of Directive 2019/1152 — not a hallucinated statute.",
  },
  {
    q: "Do I need legal knowledge to use it?",
    a: "Not at all. Ask your question the way you'd explain the problem to a friend. LexEU is designed for people without legal training — employees, freelancers, small business owners, tenants, consumers. It responds in plain language and explains what each cited article means in practice.",
  },
  {
    q: "How do I get a contract drafted?",
    a: "Choose the LexEU Main Agent or Document QA model and describe what you need — for example, \"Draft an employment contract for a part-time role in Germany\" or \"Write an NDA for a B2B partnership in Austria.\" LexEU generates a draft based on the relevant legislation. You review, adjust, and use it. For document review, upload an existing contract and ask specific questions about its clauses.",
  },
  {
    q: "Does LexEU cover CJEU case law?",
    a: "Yes. The CJEU Case Law model searches rulings from the Court of Justice of the European Union and identifies precedents relevant to your question. It explains the key legal principles from each judgment and how they apply to your situation. This is particularly useful for questions where EU directives have been interpreted differently across member states.",
  },
  {
    q: "Can businesses use LexEU for compliance work?",
    a: "Absolutely. Common use cases include GDPR compliance checks, employment law reviews when hiring across EU countries, VAT threshold monitoring for cross-border sales, and supplier contract reviews against the Late Payment Directive. Enterprise clients can also request API access and custom deployments.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
        {/* Left */}
        <div className="lg:pt-2">
          <SectionHeading
            label="FAQ"
            title="Common"
            highlight="questions"
            headingClassName="text-[clamp(32px,4vw,48px)] mb-6"
            description="Everything you need to know before your first question."
            descriptionClassName="text-[14px] text-site-muted leading-relaxed mb-8"
          />
        </div>

        {/* Right — accordion */}
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
