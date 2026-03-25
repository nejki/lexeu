export const BASE_URL = "https://www.lexeu.ai";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.url}`,
      })),
    ],
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}${url}`,
    datePublished,
    dateModified,
    author: {
      "@id": `${BASE_URL}/#organization`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${url}`,
    },
    inLanguage: "en",
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface HowToStep {
  name: string;
  text: string;
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function videoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl,
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: "en",
  };
}

export function personSchema({
  name,
  jobTitle,
  description,
  url,
  image,
  sameAs,
  worksFor,
  alumniOf,
  awards,
  knowsAbout,
}: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  sameAs: string[];
  worksFor: { name: string; url: string }[];
  alumniOf: string;
  awards: string[];
  knowsAbout: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: `${BASE_URL}${url}`,
    image: `${BASE_URL}${image}`,
    sameAs,
    worksFor: worksFor.map((org) => ({
      "@type": "Organization",
      name: org.name,
      url: org.url,
    })),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: alumniOf,
    },
    award: awards,
    knowsAbout,
  };
}

// Homepage FAQ data — single source of truth used by both schema.ts and UI
export const HOME_FAQS: FAQItem[] = [
  {
    question: "Does LexEU replace a lawyer?",
    answer:
      "No. LexEU prepares first drafts, provides legal direction, and checks EU legislation — but cannot represent you in court, assume responsibility for legal advice, or assess every nuance of your case. For straightforward matters it is sufficient on its own. For complex cases it is an excellent first step before consulting a lawyer.",
  },
  {
    question: "How reliable are the answers?",
    answer:
      "LexEU cites specific EU legislative articles and court decisions. You can verify every source yourself. The model is specialised in EU law — it does not generate answers from general knowledge like ChatGPT. No AI is 100% reliable; always verify critical decisions.",
  },
  {
    question: "Which legal topics does LexEU cover?",
    answer:
      "EU employment law, contract law, GDPR and data protection, competition law, consumer protection, corporate law, and general EU legislation and case law from the Court of Justice of the European Union.",
  },
  {
    question: "How quickly do I get an answer?",
    answer:
      "Most answers are ready in under a minute. Preparing a longer document (contract, legal opinion) takes up to 2 minutes. There is no queue.",
  },
  {
    question: "Is my data confidential?",
    answer:
      "Yes. Your data is not used to train models. Documents you upload are processed and not stored permanently. See our privacy policy for full details.",
  },
  {
    question: "How is LexEU different from ChatGPT?",
    answer:
      "ChatGPT knows law in general. LexEU is specialised in EU law — it knows the regulations, directives, and CJEU case law. It cites exact sources and prepares documents in line with current EU rules. ChatGPT cannot do this because it has no access to an EU legal database.",
  },
];
