import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export const metadata: Metadata = {
  title: "Odpravnina - Kdaj pripada, izračun, kalkulator",
  description:
    "Odpravnina ob odpovedi pogodbe o zaposlitvi in ob upokojitvi. Kako se izračuna, koliko znaša, kalkulator odpravnine za 2026.",
  keywords: [
    "odpravnina",
    "odpravnina izračun",
    "odpravnina ob odpovedi",
    "odpravnina ob upokojitvi",
    "kalkulator odpravnine",
    "odpravnina 2026",
    "ZDR-1 odpravnina",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/delovno-pravo/odpravnina/",
  },
  openGraph: {
    title: "Odpravnina - Kdaj pripada, izračun, kalkulator",
    description:
      "Vse o odpravnini: kdaj pripada, koliko znaša, kalkulator za 2026.",
    url: "https://www.aikrpan.com/delovno-pravo/odpravnina/",
    type: "article",
  },
};

export default function OdpravninaPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Delovno pravo", href: "/delovno-pravo/" },
        { label: "Odpravnina", href: "/delovno-pravo/odpravnina/" },
      ]}
      title="Odpravnina"
      subtitle="Kdaj vam pripada odpravnina, kako se izračuna in koliko znaša. Kalkulator odpravnine za 2026."
      article={{
        title: "Odpravnina v Sloveniji",
        description:
          "Odpravnina ob odpovedi in upokojitvi: izračun, kalkulator, zakonska podlaga.",
        url: "/delovno-pravo/odpravnina/",
        datePublished: "2026-03-10",
        dateModified: "2026-03-10",
      }}
    >
      <ContentPlaceholder topic="odpravnina — razlaga in kalkulator" />
    </ContentLayout>
  );
}
