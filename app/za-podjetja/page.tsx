import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export const metadata: Metadata = {
  title: "AI KRPAN za podjetja - Pravni AI za vaše poslovanje",
  description:
    "AI KRPAN za podjetja: hitri pravni odgovori, analiza pogodb, delovno pravo, GDPR skladnost. Prihranite čas in denar pri vsakodnevnih pravnih vprašanjih.",
  keywords: [
    "AI za podjetja",
    "pravni AI za podjetja",
    "pravna pomoč podjetje",
    "GDPR skladnost",
    "analiza pogodb",
    "delovno pravo podjetje",
    "gospodarski spori",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/za-podjetja/",
  },
  openGraph: {
    title: "AI KRPAN za podjetja - Pravni AI za vaše poslovanje",
    description:
      "Hitri pravni odgovori, analiza pogodb, GDPR skladnost. Prihranite čas in denar.",
    url: "https://www.aikrpan.com/za-podjetja/",
    type: "website",
  },
};

export default function ZaPodjetjaPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Za podjetja", href: "/za-podjetja/" }]}
      title="AI KRPAN za podjetja"
      subtitle="Hitri pravni odgovori za vsakodnevna poslovna vprašanja. Pogodbe, delovno pravo, GDPR skladnost — vse na enem mestu."
      article={{
        title: "AI KRPAN za podjetja",
        description:
          "Pravni AI za podjetja: pogodbe, delovno pravo, GDPR.",
        url: "/za-podjetja/",
        datePublished: "2026-03-10",
        dateModified: "2026-03-10",
      }}
    >
      <ContentPlaceholder topic="AI KRPAN za podjetja — B2B segment" />
    </ContentLayout>
  );
}
