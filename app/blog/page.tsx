import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export const metadata: Metadata = {
  title: "Blog - Legal Insights & News",
  description:
    "LexEU Blog: practical EU legal tips, answers to common legal questions, legislative updates, and how-to guides.",
  keywords: [
    "EU law blog",
    "legal insights",
    "legislative updates",
    "legal questions",
    "AI law blog",
  ],
  alternates: {
    canonical: "https://www.lexeu.ai/blog/",
  },
  openGraph: {
    title: "Blog - Legal Insights & News | LexEU",
    description:
      "Practical EU legal tips, answers to common questions, and legislative updates.",
    url: "https://www.lexeu.ai/blog/",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Blog", href: "/blog/" }]}
      title="Blog"
      subtitle="Legal insights, answers to common questions, and EU legislative updates."
    >
      <ContentPlaceholder topic="blog — seasonal and Q&A content hub" />
    </ContentLayout>
  );
}
