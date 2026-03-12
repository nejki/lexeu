import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const models = [
  {
    num: "01",
    name: "AI KRPAN",
    desc: "Slovensko pravo in sodna praksa. Pripravi dokumente, poda mnenja, analizira predpise. Vaš glavni pravni AI agent.",
    tag: "Slovensko pravo",
    tagStyle: "bg-sage-pale text-accent",
  },
  {
    num: "02",
    name: "SLO Zakoni",
    desc: "Hitro iskanje po celotni slovenski zakonodaji. Ko potrebujete točen člen, ne interpretacije.",
    tag: "Zakonodaja",
    tagStyle: "bg-sage-pale text-accent",
  },
  {
    num: "03",
    name: "Document QA",
    desc: "Naložite pogodbo ali drug dokument. AI ga prebere, analizira in odgovori na vaša vprašanja o vsebini.",
    tag: "Dokumenti",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
  {
    num: "04",
    name: "Pravo EU",
    desc: "Evropska zakonodaja, direktive, uredbe in sodna praksa Sodišča EU. Za čezmejne zadeve in EU compliance.",
    tag: "EU pravo",
    tagStyle: "bg-sage-pale text-accent",
  },
  {
    num: "05",
    name: "GPT-4 Splošni",
    desc: "Za splošna vprašanja zunaj prava: poslovni nasveti, pisanje besedil, prevajanje.",
    tag: "Splošni",
    tagStyle: "bg-warm-pale text-[#8A6040]",
  },
  {
    num: "06",
    name: "IP Smernice",
    desc: "Smernice informacijske pooblaščenke. Varstvo osebnih podatkov, GDPR, pravice posameznikov.",
    tag: "Varstvo podatkov",
    tagStyle: "bg-rose-light text-[#805050]",
  },
];

export default function Models() {
  return (
    <section id="modeli" className="bg-site-white border-t border-site-border py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeIn>
          <div className="mb-14">
            <SectionLabel className="mb-4">Modeli</SectionLabel>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] text-site-text mb-10">
              6 specializiranih modelov za{" "}
              <em className="italic text-accent">pravo področje</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
              <div>
                <h3 className="font-serif text-[clamp(22px,2.5vw,30px)] font-semibold leading-[1.2] text-site-text mb-3">
                  Ne le odgovor, temveč stališče z argumentacijo
                </h3>
                <p className="text-[15px] text-site-mid leading-[1.85]">
                  AI KRPAN ne kopira zakonskega besedila. Prebere vaš primer, zavzame stališče in ga utemelji s členi zakona ter sodno prakso. Kot pravno mnenje, ne kot iskalnik.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-[clamp(22px,2.5vw,30px)] font-semibold leading-[1.2] text-site-text mb-3">
                  Vsak model pokriva svoje področje
                </h3>
                <p className="text-[15px] text-site-mid leading-[1.85]">
                  Delovno pravo, GDPR, dedovanje, obligacije, pravo EU. Izberete model, ki pozna vaše področje do potankosti.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Table (lg+) / Cards (mobile) */}
        <FadeIn delay={100}>
          {/* Mobile card layout */}
          <div className="lg:hidden">
            {models.map((m) => (
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
          </div>

          {/* Desktop table layout */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-site-border">
                  <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted w-14">#</th>
                  <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted w-44">Model</th>
                  <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted">Opis</th>
                  <th className="text-left pb-4 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-site-muted w-36">Kategorija</th>
                  <th className="w-8"></th>
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
