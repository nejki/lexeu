import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, articleSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Regres za letni dopust 2026 - Višina, rok izplačila, pravice",
  description:
    "Regres za letni dopust 2026: višina, rok izplačila, davčna obravnava, pravice delavcev. Posodobljeno za tekoče leto.",
  keywords: [
    "regres",
    "regres 2026",
    "regres za letni dopust",
    "višina regresa",
    "regres izplačilo",
    "regres davek",
    "regres minimalna plača",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/delovno-pravo/regres/",
  },
  openGraph: {
    title: "Regres za letni dopust 2026 - Višina, rok izplačila, pravice",
    description:
      "Vse o regresu za 2026: višina, rok izplačila, davčna obravnava.",
    url: "https://www.aikrpan.com/delovno-pravo/regres/",
    type: "article",
  },
};

export default function RegresPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Delovno pravo", href: "/delovno-pravo/" },
        { label: "Regres", href: "/delovno-pravo/regres/" },
      ]}
      title="Regres za letni dopust 2026"
      subtitle="Koliko znaša regres, kdaj mora biti izplačan, kakšna je davčna obravnava. Posodobljeno za 2026."
    >
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Delovno pravo", url: "/delovno-pravo/" },
          { name: "Regres", url: "/delovno-pravo/regres/" },
        ])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Regres za letni dopust 2026",
          description:
            "Višina regresa, rok izplačila, davčna obravnava za 2026.",
          url: "/delovno-pravo/regres/",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
        })}
      />

      <ContentPlaceholder topic="regres za letni dopust 2026" />
    </ContentLayout>
  );
}
