import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, articleSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Pogodbe - Pogodbeno pravo v Sloveniji",
  description:
    "Pogodbeno pravo v Sloveniji: vrste pogodb, obvezne sestavine, neveljavnost, vzorci. OZ in ZOR razumljivo razložena.",
  keywords: [
    "pogodbe",
    "pogodbeno pravo",
    "pogodba vzorec",
    "obligacijsko pravo",
    "OZ",
    "kupoprodajna pogodba",
    "najemna pogodba",
    "pogodba o delu",
    "darilna pogodba",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/pogodbe/",
  },
  openGraph: {
    title: "Pogodbe - Pogodbeno pravo v Sloveniji",
    description:
      "Vrste pogodb, obvezne sestavine, neveljavnost, vzorci. Razumljivo razloženo.",
    url: "https://www.aikrpan.com/pogodbe/",
    type: "article",
  },
};

export default function PogodbePage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Pogodbe", href: "/pogodbe/" }]}
      title="Pogodbe"
      subtitle="Vodnik po pogodbenem pravu v Sloveniji. Vrste pogodb, obvezne sestavine, neveljavnost, praktični vzorci."
    >
      <SchemaScript
        schema={breadcrumbSchema([{ name: "Pogodbe", url: "/pogodbe/" }])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Pogodbeno pravo v Sloveniji",
          description:
            "Vrste pogodb, obvezne sestavine, neveljavnost, vzorci pogodb.",
          url: "/pogodbe/",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
        })}
      />

      <ContentPlaceholder topic="pogodbeno pravo — glavni vsebinski hub" />
    </ContentLayout>
  );
}
