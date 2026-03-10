import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export const metadata: Metadata = {
  title: "Minimalna plača 2026 - Bruto, neto, izračun",
  description:
    "Minimalna plača v Sloveniji za 2026: bruto in neto znesek, izračun, zgodovina sprememb, vpliv na dodatke.",
  keywords: [
    "minimalna plača",
    "minimalna plača 2026",
    "minimalna plača slovenija",
    "minimalna plača neto",
    "minimalna plača bruto",
    "izračun minimalne plače",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/delovno-pravo/minimalna-placa/",
  },
  openGraph: {
    title: "Minimalna plača 2026 - Bruto, neto, izračun",
    description:
      "Minimalna plača v Sloveniji za 2026: bruto, neto, izračun, zgodovina.",
    url: "https://www.aikrpan.com/delovno-pravo/minimalna-placa/",
    type: "article",
  },
};

export default function MinimalnaPlacaPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Delovno pravo", href: "/delovno-pravo/" },
        { label: "Minimalna plača", href: "/delovno-pravo/minimalna-placa/" },
      ]}
      title="Minimalna plača 2026"
      subtitle="Aktualna minimalna plača v Sloveniji: bruto in neto znesek, izračun, zgodovinski pregled."
      article={{
        title: "Minimalna plača v Sloveniji 2026",
        description:
          "Bruto in neto minimalna plača, izračun, zgodovinski pregled.",
        url: "/delovno-pravo/minimalna-placa/",
        datePublished: "2026-03-10",
        dateModified: "2026-03-10",
      }}
    >
      <ContentPlaceholder topic="minimalna plača 2026" />
    </ContentLayout>
  );
}
