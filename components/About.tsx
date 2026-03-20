import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBolt, IconScales, IconLock } from "@/components/ui/Icons";

const cards = [
  {
    icon: <IconBolt className="w-5 h-5" />,
    title: "Drafts Legal Documents",
    desc: "Employment contracts, NDAs, termination notices, legal opinions. LexEU generates a draft grounded in the legislation that applies to your jurisdiction. You review it, adjust the details, and use it — the same workflow a lawyer follows, at a fraction of the cost.",
  },
  {
    icon: <IconScales className="w-5 h-5" />,
    title: "Grounded in EU Law and Case Law",
    desc: "Every answer cites specific articles from EU directives, regulations, and CJEU rulings. No general-knowledge guessing. You can verify every source yourself. That said, no AI is 100% reliable — always confirm critical decisions with a qualified professional.",
  },
  {
    icon: <IconLock className="w-5 h-5" />,
    title: "Private and GDPR-Compliant",
    desc: "Your questions and uploaded documents are never used to train AI models. All data is processed in compliance with Regulation 2016/679 (GDPR) and stored within the EU. You have full data subject rights — access, erasure, portability — at any time.",
  },
];

export default function About() {
  return (
    <section id="purpose" className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
      {/* Left text */}
      <FadeIn>
        <SectionLabel className="mb-5">Purpose</SectionLabel>
        <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-semibold leading-[1.1] mb-7 text-site-text">
          Legal questions deserve better than{" "}
          <em className="italic text-accent">a Google result</em>
        </h2>
        <p className="text-[15px] text-site-mid leading-[1.85]">
          Across the EU, fewer than half of citizens believe they can afford a legal dispute. A first consultation in Germany can cost €226. A court dispute over €11,000 risks €5,434 in fees before a judge even looks at your case. Google returns ten statutes and no explanation. ChatGPT generates confident answers without knowing which directive applies in your country. LexEU works differently: it reads the actual regulation, checks CJEU case law, and tells you what the law means for your specific situation — in under a minute, from €9.90.
        </p>
      </FadeIn>

      {/* Right cards */}
      <div className="flex flex-col gap-5">
        {cards.map((c, i) => (
          <FadeIn key={c.title} delay={i * 100}>
            <FeatureCard icon={c.icon} title={c.title} desc={c.desc} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
