import type { Metadata } from "next";

export const LEGAL_DATES = {
  datePublished: "2026-03-01",
  dateModified: "2026-03-24",
} as const;

export const LEGAL_PAGES = {
  privacy: {
    title: "Privacy Policy",
    description:
      "Privacy Policy for LexEU — how we collect, use, and protect your personal data under GDPR.",
    slug: "/privacy/",
    subtitle: "How we collect, use, and protect your personal data.",
  },
  terms: {
    title: "Terms of Use",
    description:
      "Terms of Use for LexEU — AI-powered legal information service for EU law. Read our terms before using the platform.",
    slug: "/terms/",
    subtitle:
      "Please read these terms carefully before using the LexEU service.",
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "Cookie Policy for LexEU — learn about the cookies we use, their purpose, and how to manage them.",
    slug: "/cookies/",
    subtitle: "Learn about the cookies we use and how to manage them.",
  },
} as const;

type LegalPageConfig = (typeof LEGAL_PAGES)[keyof typeof LEGAL_PAGES];

export function createLegalPageMetadata(config: LegalPageConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: `https://www.lexeu.ai${config.slug}` },
  };
}
