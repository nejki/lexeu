import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export const metadata: Metadata = {
  title: "AI KRPAN za pravnike - Hitrejša pravna raziskava",
  description:
    "AI KRPAN za odvetnike in pravnike: hitrejša analiza sodne prakse, priprava vlog, raziskava zakonodaje. Konkurenčna prednost pred TFL in LEXI.",
  keywords: [
    "AI za pravnike",
    "AI za odvetnike",
    "pravna raziskava AI",
    "sodna praksa iskanje",
    "TFL alternativa",
    "LEXI alternativa",
    "analiza sodne prakse",
    "priprava vlog",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/za-pravnike/",
  },
  openGraph: {
    title: "AI KRPAN za pravnike - Hitrejša pravna raziskava",
    description:
      "Hitrejša analiza sodne prakse, priprava vlog, raziskava zakonodaje. AI za odvetnike.",
    url: "https://www.aikrpan.com/za-pravnike/",
    type: "website",
  },
};

export default function ZaPravnikePage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Za pravnike", href: "/za-pravnike/" }]}
      title="AI KRPAN za pravnike"
      subtitle="Hitrejša pravna raziskava, analiza sodne prakse in priprava vlog. AI orodje, zasnovano za odvetnike in pravne strokovnjake."
      article={{
        title: "AI KRPAN za pravnike",
        description:
          "AI orodje za odvetnike: analiza sodne prakse, priprava vlog, raziskava zakonodaje.",
        url: "/za-pravnike/",
        datePublished: "2026-03-10",
        dateModified: "2026-03-10",
      }}
    >
      <ContentPlaceholder topic="AI KRPAN za pravnike — profesionalno pozicioniranje" />
    </ContentLayout>
  );
}
