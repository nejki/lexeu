"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Namen", href: "#namen" },
  { label: "Modeli", href: "#modeli" },
  { label: "Cenik", href: "#cenik" },
  { label: "Navodila", href: "https://www.aikrpan.com/video-navodila/" },
  { label: "Mediji", href: "#mediji" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-stone/95 backdrop-blur-xl border-b border-site-border shadow-sm"
          : "bg-stone/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="font-serif text-xl font-semibold tracking-[0.12em] uppercase text-site-text">
        AI <span className="text-sage-dark">KRPAN</span>
      </a>

      {/* Links — hidden on mobile */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] font-medium tracking-[0.04em] uppercase text-site-mid hover:text-sage-dark transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <a
          href="https://app.aikrpan.com"
          className="hidden sm:block text-[13px] font-medium tracking-[0.04em] uppercase text-site-mid hover:text-sage-dark transition-colors duration-200"
        >
          Prijava
        </a>
        <a
          href="#cenik"
          className="bg-sage-dark text-white px-5 py-2.5 rounded-sm text-[12px] font-semibold tracking-[0.08em] uppercase hover:bg-sage transition-colors duration-200"
        >
          Naroči se
        </a>
      </div>
    </nav>
  );
}
