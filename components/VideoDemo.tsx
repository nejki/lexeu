export default function VideoDemo() {
  return (
    <section id="demo" className="bg-site-white border-t border-b border-site-border py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="section-label-line text-[11px] font-semibold tracking-widest2 uppercase text-accent mb-5">
              Demo
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] mb-6 text-site-text">
              Poglejte, kako AI KRPAN{" "}
              <em className="italic text-accent">pripravi pogodbo</em>
            </h2>
            <p className="text-[15px] text-site-mid leading-[1.85] mb-8">
              V 47 sekundah od vprašanja do osnutka pogodbe o zaposlitvi — z vsemi obveznimi sestavinami po ZDR-1. Brez čakanja, brez najemanja odvetnika za prvo verzijo.
            </p>
            <a
              href="https://app.aikrpan.com"
              className="inline-block bg-sage-dark text-white px-8 py-3.5 rounded-sm text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-sage transition-colors duration-200"
            >
              PREIZKUSITE SAMI →
            </a>
          </div>

          {/* Optimized video (WebM → MP4 → GIF fallback) */}
          <div className="rounded-xl overflow-hidden border border-site-border shadow-lg bg-stone-dark">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
              aria-label="AI KRPAN demo — pravno vprašanje odgovorjeno v sekundah"
            >
              <source src="/demo.webm" type="video/webm" />
              <source src="/demo.mp4" type="video/mp4" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo.gif" alt="AI KRPAN demo" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
