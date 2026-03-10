import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBolt, IconScales, IconLock } from "@/components/ui/Icons";

const cards = [
  {
    icon: <IconBolt className="w-5 h-5" />,
    title: "Hitro in natančno",
    desc: "Analiza in odgovor v realnem času. Prihranite ure iskanja po zakonodaji.",
  },
  {
    icon: <IconScales className="w-5 h-5" />,
    title: "Utemeljeno z zakonom",
    desc: "Vsak odgovor navaja konkretne člene in relevantno sodno prakso.",
  },
  {
    icon: <IconLock className="w-5 h-5" />,
    title: "Zasebnost zagotovljena",
    desc: "Vaše poizvedbe in dokumenti niso nikoli deljeni z zunanjimi stranmi.",
  },
];

export default function About() {
  return (
    <section id="namen" className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
      {/* Left text */}
      <FadeIn>
        <SectionLabel className="mb-5">Namen</SectionLabel>
        <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-semibold leading-[1.1] mb-7 text-site-text">
          Pravna vprašanja zaslužijo{" "}
          <em className="italic text-sage-dark">pravne odgovore</em>
        </h2>
        <p className="text-[15px] text-site-mid leading-[1.85] mb-5">
          Klasični pravni iskalniki vam pokažejo besedilo zakona. AI KRPAN ga
          razume — in odgovori na vaše vprašanje z jasnim, utemeljenim odgovorom.
        </p>
        <p className="text-[15px] text-site-mid leading-[1.85]">
          Primerno za odvetnike, pravnike, notarje, računovodje in podjetja, ki
          potrebujejo pravno jasnost brez dragih svetovalnih ur.
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
