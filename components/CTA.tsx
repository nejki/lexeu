const stats = [
  { num: "3s", label: "Povprečni čas odgovora" },
  { num: "500+", label: "Zadovoljnih strank" },
  { num: "6", label: "Specializiranih AI modelov" },
];

export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden">
          {/* Left */}
          <div className="bg-sage-dark px-10 md:px-16 py-16">
            <h2 className="font-serif text-[clamp(40px,5vw,62px)] font-semibold leading-[1.05] text-white mb-6">
              Začnite danes.<br />
              <em className="italic text-sage-light">Pravo odgovorjeno.</em>
            </h2>
            <p className="text-[16px] text-white/65 leading-[1.7] mb-10">
              Pridružite se stotim podjetjem in pravnikom, ki že varčujejo čas z
              AI KRPAN.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cenik"
                className="bg-site-white text-sage-dark px-8 py-3.5 rounded-sm text-[13px] font-bold tracking-[0.06em] uppercase hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                Naroči se zdaj
              </a>
              <a
                href="https://www.aikrpan.com/video-navodila/"
                className="border border-white/30 text-white/85 px-7 py-3.5 rounded-sm text-[13px] font-medium tracking-[0.04em] uppercase hover:border-white/60 transition-colors duration-200"
              >
                Oglejte si navodila →
              </a>
            </div>
          </div>

          {/* Right stats */}
          <div className="bg-black/[0.14] backdrop-blur-sm bg-sage-dark/80 px-10 md:px-16 py-16 flex flex-col justify-center gap-8 border-t lg:border-t-0 lg:border-l border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-white/20 pl-6">
                <p className="font-serif text-[52px] font-semibold text-white leading-none">{s.num}</p>
                <p className="text-[14px] text-white/55 mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
