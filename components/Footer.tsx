import Logo from "@/components/Logo";

const col1 = [
  { label: "Sign in", href: "https://app.lexeu.ai" },
  { label: "Register", href: "https://app.lexeu.ai" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "mailto:info@lexeu.ai" },
];

const col2 = [
  { label: "Terms of Use", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Cookie Policy", href: "/cookies/" },
];

const seoKeywords = [
  "EU law",
  "European law",
  "AI legal assistant",
  "contract analysis",
  "GDPR",
  "employment law EU",
  "legal AI",
  "EU legal advice",
  "European legal research",
  "CJEU case law",
  "EU regulations",
  "data protection",
];

const socials = [
  {
    label: "X",
    href: "https://twitter.com/lexeu_ai",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/lexeu-ai",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-site-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-10">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo variant="full" size={44} />
            </div>
            <p className="text-[14px] text-site-muted leading-[1.75]">
              AI legal assistant for EU law.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-site-border flex items-center justify-center text-site-muted hover:text-accent hover:border-accent transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Links */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
              Links
            </p>
            <ul className="flex flex-col gap-1">
              {col1.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="py-1 text-[14px] text-site-muted hover:text-accent transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
              Legal
            </p>
            <ul className="flex flex-col gap-1">
              {col2.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="py-1 text-[14px] text-site-muted hover:text-accent transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-site-text mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3 text-[14px] text-site-muted">
              <li>LexEU</li>
              <li>
                <a
                  href="mailto:info@lexeu.ai"
                  className="hover:text-accent transition-colors duration-200"
                >
                  info@lexeu.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center pb-6">
          {seoKeywords.map((kw, i) => (
            <span key={kw} className="text-[12px] text-site-muted/50">
              {kw}{i < seoKeywords.length - 1 && " ·"}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-site-border">
          <p className="text-[13px] text-site-muted">
            © 2025 LexEU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
