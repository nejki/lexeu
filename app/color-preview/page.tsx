"use client";

import { useState } from "react";

const palettes = [
  {
    name: "Current (Sage Green)",
    description: "Existing color scheme for reference",
    colors: {
      primary: "#4A7060",
      primaryHover: "#7A9E8E",
      primaryLight: "#B8D4C8",
      primaryPale: "#E4EFE8",
      link: "#4A7060",
      linkHover: "#7A9E8E",
    },
  },
  {
    name: "Dark Navy",
    description: "Deep navy blue, almost black — elegant and authoritative",
    colors: {
      primary: "#1A2332",
      primaryHover: "#2C3E50",
      primaryLight: "#8FA3B8",
      primaryPale: "#E8ECF1",
      link: "#C87A3A",
      linkHover: "#D4915A",
    },
  },
  {
    name: "True Black",
    description: "Pure black with warm undertone — bold and modern",
    colors: {
      primary: "#1A1714",
      primaryHover: "#2A2520",
      primaryLight: "#9A938A",
      primaryPale: "#EDEAE6",
      link: "#BF7A3B",
      linkHover: "#D08E55",
    },
  },
];

/* Stone/pastel background colors (kept the same across all palettes) */
const bg = {
  stone: "#F4F1ED",
  stoneDark: "#E8E3DB",
  white: "#FAFAF8",
  text: "#2A2520",
  mid: "#5C5650",
  muted: "#9A938A",
  border: "#E0D9D0",
  warm: "#C8A882",
  warmLight: "#ECD9C4",
};

function PalettePreview({ palette, index }: { palette: typeof palettes[0]; index: number }) {
  const c = palette.colors;

  return (
    <div className="flex-1 min-w-[340px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-semibold mb-1" style={{ color: bg.text }}>
          {index === 0 ? "Current" : `Option ${index}`}: {palette.name}
        </h2>
        <p className="text-sm" style={{ color: bg.mid }}>{palette.description}</p>
      </div>

      {/* Color Swatches */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {Object.entries(c).map(([name, color]) => (
          <div key={name} className="text-center">
            <div
              className="w-14 h-14 rounded-md border mb-1"
              style={{ backgroundColor: color, borderColor: bg.border }}
            />
            <span className="text-[10px] block" style={{ color: bg.muted }}>{name}</span>
            <span className="text-[10px] block font-mono" style={{ color: bg.mid }}>{color}</span>
          </div>
        ))}
      </div>

      {/* Mini Nav Preview */}
      <div
        className="rounded-md border mb-4 px-5 py-3 flex items-center justify-between"
        style={{ backgroundColor: bg.stone, borderColor: bg.border }}
      >
        <span className="font-serif font-bold text-sm" style={{ color: bg.text }}>AI KRPAN</span>
        <div className="flex items-center gap-5">
          {["Namen", "Modeli", "Cenik"].map((l) => (
            <span
              key={l}
              className="text-[11px] font-medium uppercase tracking-wider cursor-pointer transition-colors"
              style={{ color: bg.mid }}
              onMouseEnter={(e) => (e.currentTarget.style.color = c.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = bg.mid)}
            >
              {l}
            </span>
          ))}
          <span
            className="text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-sm text-white cursor-pointer transition-colors"
            style={{ backgroundColor: c.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = c.primaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = c.primary)}
          >
            Naroci se
          </span>
        </div>
      </div>

      {/* Mini Hero Preview */}
      <div className="rounded-md border overflow-hidden mb-4" style={{ borderColor: bg.border }}>
        <div className="grid grid-cols-2">
          {/* Left */}
          <div className="p-6" style={{ backgroundColor: bg.stone }}>
            <span
              className="text-[10px] uppercase tracking-widest font-medium block mb-3"
              style={{ color: c.primary }}
            >
              Najnaprednejsi pravni AI
            </span>
            <h3 className="font-serif text-xl font-semibold leading-tight mb-2" style={{ color: bg.text }}>
              Pravni nasvet,{" "}
              <em style={{ color: c.primary, fontStyle: "italic" }}>ne iskanje.</em>
            </h3>
            <p className="text-[12px] leading-relaxed mb-4" style={{ color: bg.mid }}>
              AI KRPAN analizira celotno slovensko zakonodajo in sodno prakso.
            </p>
            <div className="flex gap-2">
              <span
                className="text-[10px] font-semibold uppercase tracking-wider px-4 py-2 rounded-sm text-white cursor-pointer transition-colors"
                style={{ backgroundColor: c.primary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = c.primaryHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = c.primary)}
              >
                Zacni zdaj
              </span>
              <span
                className="text-[10px] font-semibold uppercase tracking-wider px-4 py-2 rounded-sm border cursor-pointer transition-colors"
                style={{ borderColor: bg.border, color: bg.mid }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.primary;
                  e.currentTarget.style.color = c.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = bg.border;
                  e.currentTarget.style.color = bg.mid;
                }}
              >
                Oglej si demo
              </span>
            </div>
          </div>
          {/* Right */}
          <div className="p-6 relative" style={{ backgroundColor: c.primary }}>
            <div
              className="rounded-md p-3 mb-3"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p className="text-[11px] text-white/80 mb-2">Ali lahko delodajalec odpove pogodbo?</p>
              <p className="text-[10px] text-white/50 leading-relaxed">
                Po 89. clenu ZDR-1 je odpoved pogodbe o zaposlitvi mozna le ob upostevanju zakonskih pogojev...
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 text-[10px]" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                3s
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 text-[10px]" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                AI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Preview */}
      <div
        className="rounded-md border p-5 mb-4"
        style={{ backgroundColor: bg.white, borderColor: bg.border }}
      >
        <p className="text-[11px] font-medium uppercase tracking-wider mb-3" style={{ color: bg.muted }}>
          Links & Text
        </p>
        <p className="text-[13px] leading-relaxed mb-2" style={{ color: bg.text }}>
          Za vec informacij o delovnem pravu obiščite{" "}
          <span
            className="underline cursor-pointer transition-colors font-medium"
            style={{ color: c.link }}
            onMouseEnter={(e) => (e.currentTarget.style.color = c.linkHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = c.link)}
          >
            stran o delovnem pravu
          </span>{" "}
          ali preberite nas{" "}
          <span
            className="underline cursor-pointer transition-colors font-medium"
            style={{ color: c.link }}
            onMouseEnter={(e) => (e.currentTarget.style.color = c.linkHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = c.link)}
          >
            blog o pravnih nasvetih
          </span>
          .
        </p>
        <p className="text-[13px] leading-relaxed" style={{ color: bg.mid }}>
          Poglejte tudi{" "}
          <span
            className="underline cursor-pointer transition-colors font-medium"
            style={{ color: c.link }}
            onMouseEnter={(e) => (e.currentTarget.style.color = c.linkHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = c.link)}
          >
            pogosta vprasanja
          </span>{" "}
          in{" "}
          <span
            className="underline cursor-pointer transition-colors font-medium"
            style={{ color: c.link }}
            onMouseEnter={(e) => (e.currentTarget.style.color = c.linkHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = c.link)}
          >
            navodila za uporabo
          </span>
          .
        </p>
      </div>

      {/* Pricing Card Preview */}
      <div className="rounded-md border overflow-hidden mb-4" style={{ borderColor: bg.border }}>
        <div
          className="p-5 text-center"
          style={{ backgroundColor: c.primary }}
        >
          <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Profesionalni</p>
          <p className="font-serif text-3xl font-semibold text-white">29,99 EUR</p>
          <p className="text-[11px] text-white/50 mt-1">/ mesec</p>
        </div>
        <div className="p-5" style={{ backgroundColor: bg.white }}>
          <ul className="space-y-2 mb-4">
            {["Neomejeni pogovori", "Analiza dokumentov", "Sodna praksa"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[12px]" style={{ color: bg.mid }}>
                <span style={{ color: c.primary }}>&#10003;</span> {f}
              </li>
            ))}
          </ul>
          <span
            className="block text-center text-[11px] font-semibold uppercase tracking-wider px-4 py-2.5 rounded-sm text-white cursor-pointer transition-colors"
            style={{ backgroundColor: c.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = c.primaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = c.primary)}
          >
            Izberi nacrt
          </span>
        </div>
      </div>

      {/* CTA Preview */}
      <div
        className="rounded-md p-6 text-center"
        style={{ backgroundColor: c.primary }}
      >
        <h3 className="font-serif text-xl font-semibold text-white mb-2">
          Pripravljeni na pravni nasvet?
        </h3>
        <p className="text-[12px] text-white/60 mb-4">
          Zacnite uporabljati AI KRPAN danes.
        </p>
        <span
          className="inline-block text-[11px] font-semibold uppercase tracking-wider px-6 py-2.5 rounded-sm cursor-pointer transition-colors"
          style={{ backgroundColor: "white", color: c.primary }}
        >
          Zacni brezplacno
        </span>
      </div>
    </div>
  );
}

export default function ColorPreviewPage() {
  const [side, setSide] = useState(false);

  return (
    <div className="min-h-screen py-12 px-6 md:px-12" style={{ backgroundColor: bg.stone }}>
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-serif text-4xl font-semibold mb-2" style={{ color: bg.text }}>
          Color Palette Preview
        </h1>
        <p className="text-sm mb-2" style={{ color: bg.mid }}>
          3 options side by side. Pastel backgrounds stay the same. Hover over buttons and links to see hover states.
        </p>
        <label className="flex items-center gap-2 mb-10 cursor-pointer text-sm" style={{ color: bg.mid }}>
          <input type="checkbox" checked={side} onChange={() => setSide(!side)} />
          Stack vertically (for narrow screens)
        </label>

        <div className={side ? "flex flex-col gap-12" : "flex gap-8 flex-wrap"}>
          {palettes.map((p, i) => (
            <PalettePreview key={p.name} palette={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
