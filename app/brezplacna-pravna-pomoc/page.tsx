import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, articleSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Brezplačna pravna pomoč v Sloveniji - Pogoji, postopek, vloga",
  description:
    "Brezplačna pravna pomoč v Sloveniji: kdo je upravičen, pogoji, postopek, vloga. Kako AI KRPAN dopolnjuje brezplačno pravno pomoč.",
  keywords: [
    "brezplačna pravna pomoč",
    "brezplačna pravna pomoč slovenija",
    "BPP",
    "pogoji brezplačna pravna pomoč",
    "vloga za brezplačno pravno pomoč",
    "pravna pomoč",
    "zastonj pravni nasvet",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/brezplacna-pravna-pomoc/",
  },
  openGraph: {
    title: "Brezplačna pravna pomoč v Sloveniji - Pogoji, postopek, vloga",
    description:
      "Kdo je upravičen do BPP, pogoji, postopek, vloga. Kako AI dopolnjuje pravno pomoč.",
    url: "https://www.aikrpan.com/brezplacna-pravna-pomoc/",
    type: "article",
  },
};

export default function BrezplacnaPravnaPomocPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        {
          label: "Brezplačna pravna pomoč",
          href: "/brezplacna-pravna-pomoc/",
        },
      ]}
      title="Brezplačna pravna pomoč"
      subtitle="Kdo je upravičen do brezplačne pravne pomoči v Sloveniji, kakšni so pogoji in kako AI KRPAN dopolnjuje ta sistem."
    >
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Brezplačna pravna pomoč", url: "/brezplacna-pravna-pomoc/" },
        ])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Brezplačna pravna pomoč v Sloveniji",
          description:
            "Pogoji za BPP, postopek, vloga in vloga AI pri pravni pomoči.",
          url: "/brezplacna-pravna-pomoc/",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
        })}
      />

      <ContentPlaceholder topic="brezplačna pravna pomoč — bridge stran za konverzijo" />
    </ContentLayout>
  );
}
