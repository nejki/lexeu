import Logo from "@/components/Logo";

const col1 = [
  { label: "Kako deluje", href: "#namen" },
  { label: "Modeli", href: "#modeli" },
  { label: "Cenik", href: "#cenik" },
  { label: "Za podjetja", href: "/za-podjetja/" },
  { label: "Za pravnike", href: "/za-pravnike/" },
  { label: "Navodila", href: "/navodila/" },
  { label: "Blog", href: "/blog/" },
  { label: "O ustanovitelju", href: "/o-meni/" },
];

const col2 = [
  { label: "Delovno pravo", href: "/delovno-pravo/" },
  { label: "Pogodbe", href: "/pogodbe/" },
  { label: "Dedovanje", href: "/dedovanje/" },
  { label: "Družinsko pravo", href: "/druzinsko-pravo/" },
  { label: "Brezplačna pravna pomoč", href: "/brezplacna-pravna-pomoc/" },
];

const col3 = [
  { label: "Pogoji uporabe", href: "https://www.aikrpan.com/pogoji/" },
  { label: "Politika zasebnosti", href: "https://www.aikrpan.com/zasebnost/" },
  { label: "Kontakt", href: "mailto:info@aikrpan.com" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/aikrpan",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/aikrpan",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@aikrpan",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-site-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-10">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo variant="full" size={44} />
            </div>
            <p className="text-[14px] text-site-muted leading-[1.75]">
              Napreden pravni pomočnik za slovensko zakonodajo in sodno prakso.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-site-border flex items-center justify-center text-site-muted hover:text-sage-dark hover:border-sage transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: AI KRPAN */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
              AI KRPAN
            </p>
            <ul className="flex flex-col gap-1">
              {col1.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="py-1 text-[14px] text-site-muted hover:text-sage-dark transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Pravna področja */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
              Pravna področja
            </p>
            <ul className="flex flex-col gap-1">
              {col2.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="py-1 text-[14px] text-site-muted hover:text-sage-dark transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pravno */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
              Pravno
            </p>
            <ul className="flex flex-col gap-1">
              {col3.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="py-1 text-[14px] text-site-muted hover:text-sage-dark transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Podjetje */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
              Podjetje
            </p>
            <ul className="flex flex-col gap-3 text-[14px] text-site-muted">
              <li>Committo d.o.o.</li>
              <li>
                <a
                  href="tel:+38640451562"
                  className="hover:text-sage-dark transition-colors duration-200"
                >
                  +386 40 451 562
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aikrpan.com"
                  className="hover:text-sage-dark transition-colors duration-200"
                >
                  info@aikrpan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-site-border">
          <p className="text-[13px] text-site-muted">
            © 2026 Committo d.o.o. Vse pravice pridržane.
          </p>
          <p className="text-[13px] text-site-muted">
            Ustvaril{" "}
            <a href="https://futuristica.si" className="hover:text-sage-dark transition-colors duration-200">
              Futuristica d.o.o.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
