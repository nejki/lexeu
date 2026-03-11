import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBolt, IconScales, IconLock } from "@/components/ui/Icons";

const cards = [
  {
    icon: <IconBolt className="w-5 h-5" />,
    title: "Pripravlja dokumente",
    desc: "Pogodba o zaposlitvi, odpoved, sporazum, mnenje — AI KRPAN sestavi osnutek na podlagi veljavne zakonodaje. Vi ga pregledate, popravite, uporabite.",
  },
  {
    icon: <IconScales className="w-5 h-5" />,
    title: "Utemeljeno z zakonom in sodno prakso",
    desc: "Vsak odgovor navaja konkretne člene zakona in relevantne sodbe. Brez splošnih nasvetov, brez ugibanja. Preverite lahko vsak vir.",
  },
  {
    icon: <IconLock className="w-5 h-5" />,
    title: "Zasebno in varno",
    desc: "Vaša vprašanja in dokumenti se ne uporabljajo za učenje modelov. Podatki ostanejo vaši.",
  },
];

export default function About() {
  return (
    <section id="namen" className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
      {/* Left text */}
      <FadeIn>
        <SectionLabel className="mb-5">Namen</SectionLabel>
        <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-semibold leading-[1.1] mb-7 text-site-text">
          Pravna vprašanja zaslužijo več kot{" "}
          <em className="italic text-accent">Google rezultat</em>
        </h2>
        <p className="text-[15px] text-site-mid leading-[1.85]">
          Odvetnik stane €150-300 na uro. Google vrne 10 zakonov brez razlage. ChatGPT ne pozna slovenskih predpisov. AI KRPAN dejansko prebere zakon, preveri sodno prakso in vam pove, kaj to pomeni za vaš primer. Pripravi pogodbo, pregleda dokument ali sestavi pravno mnenje — tako kot bi to naredil pravnik. Razlika: čaka vas 2 minuti, ne 2 tedna.
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
