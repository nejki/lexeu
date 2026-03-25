"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconMenu, IconX } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Purpose", href: "#purpose" },
  { label: "Demo", href: "#demo" },
  { label: "Models", href: "#models" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const pathname = usePathname();
  const isHome = pathname === "/";

  /* On subpages, prefix hash links with / so they navigate back to landing */
  const resolveHref = (href: string) =>
    !isHome && href.startsWith("#") ? `/${href}` : href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-stone/95 backdrop-blur-xl border-b border-site-border shadow-sm"
            : "bg-stone/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" aria-label="LexEU — home">
          <Logo variant="full" size={56} />
        </a>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              href={resolveHref(link.href)}
              variant="nav-link"
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            href="https://app.lexeu.ai"
            variant="nav-link"
            className="hidden sm:block"
          >
            Sign in
          </Button>
          <Button
            href={resolveHref("#pricing")}
            variant="primary"
            size="sm"
            className="py-2.5 tracking-[0.08em]"
          >
            START FROM €9.90
          </Button>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1 text-site-mid hover-accent"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 bg-stone/97 backdrop-blur-md flex flex-col px-6 pt-10 pb-12 gap-1 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={resolveHref(link.href)}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            className={`py-4 border-b border-site-border text-[15px] font-medium tracking-[0.05em] uppercase text-site-mid hover:text-accent transition-all duration-200 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className="mt-8 flex flex-col gap-3">
          <Button
            href="https://app.lexeu.ai"
            onClick={() => setOpen(false)}
            variant="outline"
            className="text-center font-medium px-4"
          >
            Sign in
          </Button>
          <Button
            href={resolveHref("#pricing")}
            onClick={() => setOpen(false)}
            variant="primary"
            className="text-center px-4"
          >
            START FROM €9.90
          </Button>
        </div>
      </div>
    </>
  );
}
