export default function VideoDemo() {
  return (
    <section id="demo" className="bg-site-white border-t border-b border-site-border py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-sage mb-5">
              Demo
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] mb-6 text-site-text">
              Oglejte si AI KRPAN <em className="italic text-sage-dark">v akciji</em>
            </h2>
            <p className="text-[15px] text-site-mid leading-[1.85] mb-8">
              Pravo odgovorjeno v sekundah. Glejte, kako AI KRPAN reši resnično
              pravno vprašanje — z zakonskimi členi in sodno prakso.
            </p>
            <a
              href="https://app.aikrpan.com"
              className="inline-block bg-sage-dark text-white px-8 py-3.5 rounded-sm text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-sage transition-colors duration-200"
            >
              Preizkusite sami →
            </a>
          </div>

          {/* GIF demo */}
          <div className="rounded-xl overflow-hidden border border-site-border shadow-lg bg-stone-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/demo.gif"
              alt="AI KRPAN v akciji — demo"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
