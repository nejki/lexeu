import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, articleSchema } from "@/app/content-schema";

interface Breadcrumb {
  label: string;
  href: string;
}

interface ContentLayoutProps {
  children: React.ReactNode;
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle?: string;
  article?: {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
  };
}

export default function ContentLayout({
  children,
  breadcrumbs,
  title,
  subtitle,
  article,
}: ContentLayoutProps) {
  return (
    <main>
      <SchemaScript
        schema={breadcrumbSchema(
          breadcrumbs.map((b) => ({ name: b.label, url: b.href }))
        )}
      />
      {article && <SchemaScript schema={articleSchema(article)} />}
      <Nav />
      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1200px] mx-auto px-6 md:px-12 pt-6 pb-2"
      >
        <ol className="flex items-center gap-2 text-[13px] text-site-muted">
          <li>
            <Link
              href="/"
              className="hover:text-sage-dark transition-colors duration-200"
            >
              Domov
            </Link>
          </li>
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {i === breadcrumbs.length - 1 ? (
                <span className="text-site-text font-medium">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="hover:text-sage-dark transition-colors duration-200"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Hero */}
      <header className="max-w-[1200px] mx-auto px-6 md:px-12 pt-10 pb-12 md:pt-16 md:pb-16">
        <FadeIn>
          <h1 className="font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.1] text-site-text mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[18px] text-site-mid leading-[1.7] max-w-2xl">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </header>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20">
        {children}
      </div>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="bg-sage-dark rounded-xl px-10 md:px-20 py-16 text-center">
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] text-white mb-4">
              Imate pravno vprašanje?
            </h2>
            <p className="text-[17px] text-white/65 leading-[1.7] mb-8 max-w-xl mx-auto">
              AI KRPAN analizira vaše vprašanje in vam v minutah poda stališče,
              utemeljeno z zakonskimi členi in sodno prakso.
            </p>
            <Button
              href="https://app.aikrpan.com"
              variant="primary"
              className="bg-white text-sage-dark hover:bg-warm-light hover:text-site-text hover:-translate-y-0.5 hover:shadow-lg shadow-md"
            >
              Začnite za €15
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
