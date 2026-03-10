import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export const metadata: Metadata = {
  title: "Blog - Pravni nasveti in novosti",
  description:
    "Blog AI KRPAN: sezonski pravni nasveti, odgovori na pogosta pravna vprašanja, novosti v zakonodaji, praktični vodniki.",
  keywords: [
    "pravni blog",
    "pravni nasveti",
    "zakonodaja novosti",
    "pravna vprašanja",
    "AI pravo blog",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/blog/",
  },
  openGraph: {
    title: "Blog - Pravni nasveti in novosti | AI KRPAN",
    description:
      "Sezonski pravni nasveti, odgovori na pogosta vprašanja, novosti v zakonodaji.",
    url: "https://www.aikrpan.com/blog/",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Blog", href: "/blog/" }]}
      title="Blog"
      subtitle="Pravni nasveti, odgovori na pogosta vprašanja in novosti v zakonodaji."
    >
      <ContentPlaceholder topic="blog — sezonski in Q&A vsebinski hub" />
    </ContentLayout>
  );
}
