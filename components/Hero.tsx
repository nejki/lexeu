import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { HeroChat } from "@/components/HeroChat";
import { IconBolt, IconScales, IconDocument, IconGlobe, HeroDecoration } from "@/components/ui/Icons";

const features = [
  {
    icon: <IconBolt className="w-4 h-4" />,
    title: "Odgovor v manj kot minuti",
  },
  {
    icon: <IconScales className="w-4 h-4" />,
    title: "Sodna praksa vključena",
  },
  {
    icon: <IconDocument className="w-4 h-4" />,
    title: "Pripravi in pregleda dokumente",
  },
  {
    icon: <IconGlobe className="w-4 h-4" />,
    title: "Slovensko + EU pravo",
  },
];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-screen pt-16">
      {/* Left — stone */}
      <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-12 lg:py-20 bg-site-bg border-r border-site-border">
        <SectionLabel className="mb-6">
          PRAVNI AI AGENT ZA SLOVENSKO IN EU PRAVO
        </SectionLabel>

        <h1 className="font-serif text-[clamp(36px,6vw,80px)] font-semibold leading-[1.05] tracking-tight text-site-text mb-4">
          Pogodbe. Mnenja.<br />
          Dokumenti.{" "}
          <em className="italic text-accent" style={{ fontStyle: "italic" }}>
            V minutah.
          </em>
        </h1>

        <p className="text-[20px] font-serif font-semibold text-site-text mb-4">
          AI, ki dela kot pravnik.
        </p>

        <p className="text-[16px] text-site-mid leading-[1.8] mb-12 max-w-md">
          Odpoved pogodbe o zaposlitvi, pogodba o delu, pravno mnenje o odpravnini. AI KRPAN pripravi dokument, preveri zakonodajo in sodno prakso ter vam poda pravno usmeritev. Pravna pomoč za vsakogar, od €3 na vprašanje.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="https://app.aikrpan.com" variant="primary">ZAČNI ZDAJ - od €3 na vprašanje</Button>
          <Button href="#demo" variant="outline">OGLEJ SI DEMO ↓</Button>
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
