import Logo from "@/components/Logo";

const footerLinks = {
  Produkt: [
    { label: "Namen", href: "#namen" },
    { label: "Modeli", href: "#modeli" },
    { label: "Cenik", href: "#cenik" },
    { label: "Navodila", href: "https://www.aikrpan.com/video-navodila/" },
  ],
  Paketi: [
    { label: "Mini", href: "#cenik" },
    { label: "Standard", href: "#cenik" },
    { label: "Poslovni", href: "#cenik" },
    { label: "Po meri", href: "mailto:info@aikrpan.com" },
  ],
  Podjetje: [
    { label: "Mediji o nas", href: "#mediji" },
    { label: "Pogoji uporabe", href: "https://www.aikrpan.com/pogoji/" },
    { label: "Kontakt", href: "mailto:info@aikrpan.com" },
    { label: "info@aikrpan.com", href: "mailto:info@aikrpan.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-site-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-10">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo variant="full" size={28} />
            </div>
            <p className="text-[14px] text-site-muted leading-[1.75]">
              Napreden pravni pomočnik za slovensko zakonodajo in sodno prakso.
              Committo d.o.o.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
                {col}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-site-muted hover:text-sage-dark transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-site-border">
          <p className="text-[13px] text-site-muted">
            © 2024 Committo d.o.o. Vse pravice pridržane.
          </p>
          <p className="text-[13px] text-site-muted">
            Ustvaril{" "}
            <a href="https://stejt.si" className="hover:text-sage-dark transition-colors duration-200">
              Stejt digital agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
