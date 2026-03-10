import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { IconBolt, IconScales, IconDocument, IconGlobe } from "@/components/ui/Icons";

const features = [
  {
    icon: <IconBolt className="w-4 h-4" />,
    title: "Odgovori v 3 sekundah",
    desc: "Analiza in odgovor v realnem času, podkrepljen z zakonom in sodno prakso.",
  },
  {
    icon: <IconScales className="w-4 h-4" />,
    title: "Sodna praksa vključena",
    desc: "Vsak odgovor navaja konkretne sodbe in relevantne pravne precedense.",
  },
  {
    icon: <IconDocument className="w-4 h-4" />,
    title: "Analiza vaših dokumentov",
    desc: "Naložite pogodbo ali akt — AI jo pregleda in odgovori na vaša vprašanja.",
  },
  {
    icon: <IconGlobe className="w-4 h-4" />,
    title: "EU zakonodaja",
    desc: "Direktive in uredbe Evropske unije pokrite v enem orodju.",
  },
];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-16">
      {/* Left — stone */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 bg-site-bg border-r border-site-border">
        <SectionLabel className="mb-6">
          Najnaprednejši pravni AI v Sloveniji
        </SectionLabel>

        <h1 className="font-serif text-[clamp(52px,6vw,80px)] font-semibold leading-[1.05] tracking-tight text-site-text mb-7">
          Pravo,<br />
          ki{" "}
          <em className="italic text-sage-dark" style={{ fontStyle: "italic" }}>
            odgovori
          </em>
          <br />
          takoj.
        </h1>

        <p className="text-[16px] text-site-mid leading-[1.8] mb-12 max-w-md">
          AI KRPAN analizira celotno slovensko zakonodajo in sodno prakso.
          Dobite natančne, z zakonom utemeljene odgovore — v sekundah.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="#cenik" variant="primary">Začni zdaj</Button>
          <Button href="#demo" variant="outline">Oglej si demo</Button>
        </div>
      </div>

      {/* Right — sage dark */}
      <div className="relative flex flex-col justify-center px-10 md:px-16 py-20 bg-sage-dark overflow-hidden">
        {/* Decorative § */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-16 -right-8 font-serif text-[400px] leading-none text-white/[0.04]"
        >
          §
        </span>

        {/* Big stat */}
        <div className="mb-12">
          <p className="font-serif text-[80px] font-semibold leading-none text-white mb-2">
            <CountUp target={6} duration={1200} />
          </p>
          <p className="text-sm text-white/60 font-normal">Specializiranih AI modelov</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-10" />

        {/* Feature list */}
        <ul className="flex flex-col gap-6">
          {features.map((f) => (
            <li key={f.title} className="flex gap-4 items-start">
              <span className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-white/70">
                {f.icon}
              </span>
              <div>
                <p className="text-[14px] font-semibold text-white mb-1">{f.title}</p>
                <p className="text-[13px] text-white/60 leading-relaxed">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
