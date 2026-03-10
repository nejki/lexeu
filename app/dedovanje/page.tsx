import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, articleSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Dedovanje v Sloveniji - Dediči, oporoka, zapuščina",
  description:
    "Dedno pravo v Sloveniji: zakonito in oporočno dedovanje, dedni redi, nujni delež, zapuščinski postopek, davek na dediščino.",
  keywords: [
    "dedovanje",
    "dedno pravo",
    "oporoka",
    "zapuščina",
    "dedni red",
    "nujni delež",
    "zapuščinski postopek",
    "davek na dediščino",
    "ZD",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/dedovanje/",
  },
  openGraph: {
    title: "Dedovanje v Sloveniji - Dediči, oporoka, zapuščina",
    description:
      "Zakonito in oporočno dedovanje, dedni redi, nujni delež, zapuščinski postopek.",
    url: "https://www.aikrpan.com/dedovanje/",
    type: "article",
  },
};

export default function DedovanjePage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Dedovanje", href: "/dedovanje/" }]}
      title="Dedovanje"
      subtitle="Celovit vodnik po dednem pravu v Sloveniji. Zakonito in oporočno dedovanje, dedni redi, nujni delež, zapuščinski postopek."
    >
      <SchemaScript
        schema={breadcrumbSchema([{ name: "Dedovanje", url: "/dedovanje/" }])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Dedovanje v Sloveniji",
          description:
            "Zakonito in oporočno dedovanje, dedni redi, nujni delež, zapuščinski postopek.",
          url: "/dedovanje/",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
        })}
      />

      <ContentPlaceholder topic="dedno pravo — glavni vsebinski hub" />
    </ContentLayout>
  );
}
