import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";

const models = [
  {
    num: "01",
    name: "LexEU Main Agent",
    desc: "Your primary legal AI chatbot for EU and national law questions. Covers employment, consumer rights, contracts, business obligations, and cross-border issues across all supported jurisdictions.",
    tag: "General EU Law",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
  {
    num: "02",
    name: "EU Legislation Search",
    desc: "Searches active EU directives, regulations, and their national transpositions. Ask it to find the specific article that governs your situation — it returns the citation, not a summary.",
    tag: "Legislation",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
  {
    num: "03",
    name: "Document QA",
    desc: "Upload a contract, terms of service, or legal notice. Ask questions about specific clauses, and it flags risks, unfair terms, or missing provisions based on applicable EU law.",
    tag: "Document Review",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
  {
    num: "04",
    name: "CJEU Case Law",
    desc: "Searches rulings from the Court of Justice of the European Union. Finds relevant precedents, explains how they apply, and identifies the key legal principles from each judgment.",
    tag: "Case Law",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
  {
    num: "05",
    name: "GDPR & Data Protection",
    desc: "Covers data subject rights, breach notification rules, DPA complaint procedures, and data processing obligations. Built on Regulation 2016/679 and related national data protection laws.",
    tag: "GDPR",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
  {
    num: "06",
    name: "General Assistant",
    desc: "For non-legal tasks — summarising text, translating documents, drafting emails, or any general question that doesn't require legal expertise.",
    tag: "General",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
];

type Model = (typeof models)[number];

export default function Models() {
  return (
    <section id="models" className="bg-site-white border-t border-site-border py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeIn>
          <div className="mb-14">
            <SectionLabel className="mb-4">Models</SectionLabel>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-10">
              Six specialised agents.{" "}
              <em className="italic text-accent">One for each area of law.</em>
            </h2>
            <div className="max-w-2xl mb-14">
              <h3 className="font-serif text-[clamp(22px,2.5vw,30px)] font-semibold leading-[1.2] text-site-text mb-3">
                Not just an answer — a legal position with reasoning and citations.
              </h3>
              <p className="text-[15px] text-site-mid leading-[1.85]">
                Each model is trained on a specific domain of EU law. Pick the one that matches your question, and you&apos;ll get an answer that cites the relevant directive, regulation, or court ruling. Think of them as six different desks at a law firm — each one staffed by a specialist.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Table (lg+) / Cards (mobile) */}
        <FadeIn delay={100}>
          <ResponsiveTable<Model>
            data={models}
            keyExtractor={(m) => m.num}
            breakpoint="lg"
            renderCards={(data) => (
              <>
                {data.map((m) => (
                  <div
                    key={m.num}
                    className="p-6 border-b border-site-border last:border-b-0"
                  >
                    <span className="text-[12px] text-site-muted font-medium">{m.num}</span>
                    <h3 className="font-serif text-[22px] font-semibold text-site-text leading-none mt-2 mb-3">
                      {m.name}
                    </h3>
                    <p className="text-[14px] text-site-mid leading-relaxed mb-4">{m.desc}</p>
                    <span className={`inline-block px-3 py-1 rounded-sm text-[11px] font-semibold tracking-[0.06em] uppercase ${m.tagStyle}`}>
                      {m.tag}
                    </span>
                  </div>
                ))}
              </>
            )}
            renderTable={(data) => (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-site-border">
                    <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted w-14">#</th>
                    <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted w-44">Model</th>
                    <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted">Description</th>
                    <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted w-36">Category</th>
                    <th className="w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((m) => (
                    <tr
                      key={m.num}
                      className="group border-b border-site-border last:border-b-0 hover:bg-stone transition-colors duration-150 cursor-pointer"
                    >
                      <td className="py-6 px-4 text-[12px] text-site-muted font-medium">{m.num}</td>
                      <td className="py-6 px-4">
                        <span className="font-serif text-[22px] font-semibold text-site-text leading-none">
                          {m.name}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-[14px] text-site-mid leading-relaxed">{m.desc}</td>
                      <td className="py-6 px-4">
                        <span className={`inline-block px-3 py-1 rounded-sm text-[11px] font-semibold tracking-[0.06em] uppercase ${m.tagStyle}`}>
                          {m.tag}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-site-muted group-hover:text-accent transition-colors duration-150 text-lg">
                        →
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          />
        </FadeIn>
      </div>
    </section>
  );
}
