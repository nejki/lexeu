import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, articleSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Družinsko pravo - Ločitev, preživnina, skrbništvo",
  description:
    "Družinsko pravo v Sloveniji: razveza zakonske zveze, preživnina, skrbništvo nad otroki, delitev skupnega premoženja, DZ razumljivo.",
  keywords: [
    "družinsko pravo",
    "ločitev",
    "razveza zakonske zveze",
    "preživnina",
    "skrbništvo",
    "delitev premoženja",
    "DZ",
    "družinski zakonik",
    "varstvo in vzgoja otrok",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/druzinsko-pravo/",
  },
  openGraph: {
    title: "Družinsko pravo - Ločitev, preživnina, skrbništvo",
    description:
      "Razveza, preživnina, skrbništvo, delitev premoženja. Razumljivo razloženo.",
    url: "https://www.aikrpan.com/druzinsko-pravo/",
    type: "article",
  },
};

export default function DruzinskoPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Družinsko pravo", href: "/druzinsko-pravo/" },
      ]}
      title="Družinsko pravo"
      subtitle="Vodnik po družinskem pravu: razveza zakonske zveze, preživnina, skrbništvo nad otroki, delitev skupnega premoženja."
    >
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Družinsko pravo", url: "/druzinsko-pravo/" },
        ])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Družinsko pravo v Sloveniji",
          description:
            "Razveza, preživnina, skrbništvo, delitev premoženja po Družinskem zakoniku.",
          url: "/druzinsko-pravo/",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
        })}
      />

      <ContentPlaceholder topic="družinsko pravo — glavni vsebinski hub" />
    </ContentLayout>
  );
}
