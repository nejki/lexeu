"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const credentials = [
  { label: "Izobrazba", value: "mag. prav., Univerza v Mariboru" },
  { label: "Praksa", value: "Odvetnik, Odvetniška pisarna Kumer" },
  { label: "Inovacija", value: "Zlato za najboljšo inovacijo Podravja 2024" },
  { label: "Priznanje", value: "Bron na državnem nivoju za inovacijo 2024" },
];

export default function Founder() {
  return (
    <section className="border-t border-site-border py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left — Photo + name */}
          <FadeIn>
            <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden border border-site-border shadow-sm">
              <Image
                src="/media/founder-source.webp"
                alt="mag. Aleksander Kumer — ustanovitelj AI Krpan"
                fill
                className="object-cover object-[center_15%]"
                sizes="280px"
              />
            </div>
            <div className="mt-6">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">
                Ustanovitelj
              </p>
              <h3 className="font-serif text-[24px] font-semibold leading-[1.2] text-site-text">
                mag. Aleksander Kumer
              </h3>
              <p className="text-[14px] text-site-muted mt-1">
                Odvetnik &middot; Pravni inovator
              </p>
            </div>
          </FadeIn>

          {/* Right — Bio + credentials */}
          <div>
            <FadeIn>
              <SectionLabel className="mb-5">Za AI Krpanom</SectionLabel>
              <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-site-text mb-8">
                Odvetnik, ki gradi{" "}
                <em className="italic text-accent">prihodnost prava</em>
              </h2>
            </FadeIn>

            <FadeIn delay={80}>
              <p className="text-[16px] md:text-[17px] text-site-mid leading-[1.85] mb-5">
                Aleksander Kumer je magister prava z Univerze v Mariboru in
                aktivni odvetnik s prakso na področju civilnega, gospodarskega
                in nepremičninskega prava. Iz neposrednih izkušenj z
                vsakodnevnimi pravnimi izzivi je prepoznal potrebo po orodju,
                ki bi pravno znanje približalo vsakomur.
              </p>
              <p className="text-[16px] md:text-[17px] text-site-mid leading-[1.85] mb-10">
                Tako je nastal AI Krpan — napreden pravni asistent, ki
                analizira slovensko zakonodajo in sodno prakso ter ponuja
                utemeljene odgovore z navedbami zakonskih členov. Za to
                inovacijo je prejel zlato nagrado za najboljšo inovacijo
                Podravja 2024 in bronasto priznanje na državnem nivoju.
              </p>
            </FadeIn>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-site-border rounded-xl overflow-hidden border border-site-border">
              {credentials.map((c, i) => (
                <FadeIn
                  key={c.label}
                  delay={160 + i * 60}
                  className="bg-site-white p-6"
                >
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">
                    {c.label}
                  </p>
                  <p className="text-[15px] font-medium text-site-text leading-[1.5]">
                    {c.value}
                  </p>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400}>
              <Link
                href="/o-meni/"
                className="inline-block mt-8 text-[14px] font-medium text-accent hover:translate-x-1 transition-transform duration-300"
              >
                Več o ustanovitelju &rarr;
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
