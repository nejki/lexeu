import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";

const plans = [
  {
    name: "Pay As You Go",
    price: "€9.90",
    per: "one-time · 5 questions",
    desc: "Try LexEU with five legal questions. Get cited answers grounded in EU law — enough to handle a specific issue like a contract clause or employment dispute.",
    cta: "Get Started — €9.90",
    href: "https://app.lexeu.ai",
    featured: true,
    recommended: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "tailored to your organisation",
    desc: "Custom deployment for legal teams, compliance departments, or multi-entity organisations. Dedicated support, volume pricing, and API access. Contact us to design the right setup.",
    cta: "Contact us →",
    href: "mailto:info@lexeu.ai",
    featured: false,
    recommended: false,
  },
];

const comparison = [
  {
    label: "Contract drafting",
    lawyer: "€300–800 per document",
    lexeu: "Included in every plan",
  },
  {
    label: "Legal opinion",
    lawyer: "€200–500 per issue",
    lexeu: "From €1.98 per question",
  },
  {
    label: "Turnaround",
    lawyer: "3–14 business days",
    lexeu: "Under 60 seconds",
  },
  {
    label: "Availability",
    lawyer: "Office hours, by appointment",
    lexeu: "24/7, no waiting",
  },
  {
    label: "CJEU case law",
    lawyer: "Billed as research hours",
    lexeu: "Always included",
  },
];

type ComparisonRow = (typeof comparison)[number];

export default function Pricing() {
  return (
    <Container as="section" id="pricing" className="py-16 md:py-24">
      {/* Intro */}
      <div className="mb-14">
        <SectionHeading
          label="Pricing"
          labelClassName="mb-4"
          title={<>One lawyer&apos;s hour — or a</>}
          highlight="full month of LexEU?"
          headingClassName="text-heading-md mb-5"
          description={<>Lawyers across the EU charge €150–400 per hour. A simple contract review runs €300–500. A legal opinion on an employment dispute can cost over €1,000 before you&apos;ve even entered a courtroom. LexEU gives you cited, legislation-grounded answers and document drafts — starting at €1.98 per question.</>}
          descriptionClassName="text-[17px] text-site-mid leading-[1.7] max-w-2xl"
        />
      </div>

      {/* Cards grid — 2 plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border border-site-border rounded-xl overflow-hidden">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 sm:p-10 transition-colors duration-200 border-site-border ${
              i < plans.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""
            } ${
              plan.featured
                ? "bg-sage-dark text-white"
                : "bg-site-white hover:bg-warm-pale"
            }`}
          >
            <p className={`label-xs tracking-[0.12em] mb-5 ${plan.featured ? "text-white/60" : "text-site-muted"}`}>
              {plan.name}
            </p>

            <p className={`font-serif font-semibold mb-1 ${plan.featured ? "text-white" : "text-site-text"} ${plan.price === "Custom" ? "text-[28px] leading-tight" : "text-[42px] leading-none"}`}>
              {plan.price}
            </p>
            {plan.per && (
              <p className={`text-[13px] ${plan.featured ? "text-white/60" : "text-site-muted"}`}>
                {plan.per}
              </p>
            )}
            <p className={`text-[11px] mb-6 ${plan.featured ? "text-white/40" : "text-site-muted/70"}`}>
              {plan.price !== "Custom" ? "excl. VAT" : "\u00A0"}
            </p>

            <div className={`h-px mb-6 ${plan.featured ? "bg-white/15" : "bg-site-border"}`} />

            <p className={`text-[13px] leading-[1.7] mb-8 flex-1 ${plan.featured ? "text-white/80" : "text-site-mid"}`}>
              {plan.desc}
            </p>

            <a
              href={plan.href}
              className={`flex items-center justify-center min-h-[52px] text-center py-3 px-4 rounded-sm text-[12px] font-semibold tracking-[0.06em] uppercase transition-all duration-200 border ${
                plan.featured
                  ? "border-white/30 text-white hover:bg-white/15"
                  : "border-site-border text-site-text hover:border-accent hover:text-accent hover:bg-sage-pale"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mt-16">
        <ResponsiveTable<ComparisonRow>
          data={comparison}
          keyExtractor={(row) => row.label}
          breakpoint="md"
          renderCards={(data) => (
            <div className="space-y-4">
              {data.map((row) => (
                <div key={row.label} className="border border-site-border rounded-lg p-5">
                  <p className="label-xs text-site-muted mb-3">
                    {row.label}
                  </p>
                  <div className="flex justify-between items-baseline gap-4">
                    <div>
                      <p className="label-xs tracking-[0.08em] text-site-muted/60 mb-1">Lawyer</p>
                      <p className="text-[14px] text-site-muted">{row.lawyer}</p>
                    </div>
                    <div className="text-right">
                      <p className="label-xs tracking-[0.08em] text-accent/60 mb-1">LexEU</p>
                      <p className="text-[14px] text-accent font-medium">{row.lexeu}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          renderTable={(data) => (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-site-border">
                  <th className="text-left pb-4 px-4 label-xs text-site-muted"></th>
                  <th className="text-left pb-4 px-4 label-xs text-site-muted">Lawyer</th>
                  <th className="text-left pb-4 px-4 label-xs text-accent">LexEU</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.label} className="border-b border-site-border last:border-b-0">
                    <td className="py-5 px-4 text-[14px] font-semibold text-site-text">{row.label}</td>
                    <td className="py-5 px-4 text-[14px] text-site-muted">{row.lawyer}</td>
                    <td className="py-5 px-4 text-[14px] text-accent font-medium">{row.lexeu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        />
      </div>

      {/* Disclaimer */}
      <p className="mt-10 text-center text-[13px] text-site-muted leading-[1.7] max-w-2xl mx-auto">
        LexEU provides AI-generated legal information and document drafts grounded in EU legislation and case law. It is not a substitute for advice from a licensed attorney. For binding legal decisions, court representation, or complex disputes, always consult a qualified legal professional.
      </p>
    </Container>
  );
}
