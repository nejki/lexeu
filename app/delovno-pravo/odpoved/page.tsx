import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, articleSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Odpoved pogodbe o zaposlitvi - Pravice, roki, vzorci",
  description:
    "Redna in izredna odpoved pogodbe o zaposlitvi v Sloveniji. Odpovedni roki, postopek, pravice delavca, vzorci odpovedi in predloge za prenos.",
  keywords: [
    "odpoved pogodbe o zaposlitvi",
    "redna odpoved",
    "izredna odpoved",
    "odpovedni rok",
    "odpoved s strani delodajalca",
    "odpoved s strani delavca",
    "vzorec odpovedi",
    "ZDR-1 odpoved",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/delovno-pravo/odpoved/",
  },
  openGraph: {
    title: "Odpoved pogodbe o zaposlitvi - Pravice, roki, vzorci",
    description:
      "Vse o odpovedi pogodbe o zaposlitvi: redna, izredna, odpovedni roki, vzorci dokumentov.",
    url: "https://www.aikrpan.com/delovno-pravo/odpoved/",
    type: "article",
  },
};

export default function OdpovedPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Delovno pravo", href: "/delovno-pravo/" },
        { label: "Odpoved", href: "/delovno-pravo/odpoved/" },
      ]}
      title="Odpoved pogodbe o zaposlitvi"
      subtitle="Redna in izredna odpoved, odpovedni roki, pravice delavcev, vzorci odpovedi in predloge dokumentov."
    >
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Delovno pravo", url: "/delovno-pravo/" },
          { name: "Odpoved", url: "/delovno-pravo/odpoved/" },
        ])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Odpoved pogodbe o zaposlitvi v Sloveniji",
          description:
            "Redna in izredna odpoved, odpovedni roki, vzorci odpovedi.",
          url: "/delovno-pravo/odpoved/",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
        })}
      />

      <ContentPlaceholder topic="odpoved pogodbe o zaposlitvi" />
    </ContentLayout>
  );
}
