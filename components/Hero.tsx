import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { HeroChat } from "@/components/HeroChat";
import { IconBolt, IconScales, IconDocument, IconGlobe, HeroDecoration } from "@/components/ui/Icons";

const features = [
  {
    icon: <IconBolt className="w-4 h-4" />,
    title: "Answer in under a minute",
  },
  {
    icon: <IconScales className="w-4 h-4" />,
    title: "CJEU case law included",
  },
  {
    icon: <IconDocument className="w-4 h-4" />,
    title: "Drafts and reviews documents",
  },
  {
    icon: <IconGlobe className="w-4 h-4" />,
    title: "EU + national law (6 countries)",
  },
];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-screen pt-16">
      {/* Left — stone */}
      <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-12 lg:py-20 bg-site-bg border-r border-site-border">
        <SectionLabel className="mb-6">
          AI LEGAL ASSISTANT FOR EU LAW
        </SectionLabel>

        <h1 className="font-serif text-[clamp(36px,6vw,80px)] font-semibold leading-[1.05] tracking-tight text-site-text mb-4">
          Contracts. Opinions.<br />
          Answers.{" "}
          <em className="italic text-accent" style={{ fontStyle: "italic" }}>
            In minutes.
          </em>
        </h1>

        <p className="text-[20px] font-serif font-semibold text-site-text mb-4">
          The legal AI chatbot built for EU law.
        </p>

        <p className="text-[16px] text-site-mid leading-[1.8] mb-12 max-w-md">
          A lawyer charges €150–400/hour and needs two weeks. Google returns ten statutes without explanation. ChatGPT doesn&apos;t know which directive applies. LexEU reads active legislation and court rulings across six EU jurisdictions, gives you a cited answer, and drafts the document you need. From €9.90.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="https://app.lexeu.ai" variant="primary">START NOW — from €9.90</Button>
          <Button href="#demo" variant="outline">SEE THE DEMO ↓</Button>
        </div>
      </div>

      {/* Right — sage dark */}
      <div className="relative flex flex-col justify-center px-6 md:px-16 py-12 lg:py-20 bg-sage-dark overflow-hidden">
        {/* Decorative § -inspired flowing curves */}
        <HeroDecoration className="pointer-events-none select-none absolute -bottom-24 -right-16 w-[500px] h-[750px] text-white" />

        {/* Interactive AI demo */}
        <HeroChat />

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Feature list */}
        <ul className="flex flex-col gap-4">
          {features.map((f) => (
            <li key={f.title} className="flex gap-3 items-center">
              <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-white/70">
                {f.icon}
              </span>
              <p className="text-[14px] font-semibold text-white">{f.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
