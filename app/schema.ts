export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.lexeu.ai/#organization",
  name: "LexEU",
  url: "https://www.lexeu.ai",
  logo: {
    "@type": "ImageObject",
    url: "https://www.lexeu.ai/logo-256.png",
    width: 256,
    height: 256,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@lexeu.ai",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [],
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.lexeu.ai/#software",
  name: "LexEU",
  applicationCategory: "LegalService",
  applicationSubCategory: "Legal Research Software",
  operatingSystem: "Web",
  url: "https://app.lexeu.ai",
  description:
    "Advanced AI legal assistant specialised in EU law. Analyses EU legislation and case law, answers legal questions in seconds.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "15",
      priceCurrency: "EUR",
      description: "5 legal questions, no expiry",
    },
    {
      "@type": "Offer",
      name: "Standard",
      price: "35",
      priceCurrency: "EUR",
      description: "15 legal questions with document analysis",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "80",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "RecurringCharge",
        billingDuration: "P1M",
      },
      description: "100 questions/month, all models, priority support",
    },
  ],
  provider: {
    "@id": "https://www.lexeu.ai/#organization",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.lexeu.ai/#website",
  url: "https://www.lexeu.ai",
  name: "LexEU",
  description: "AI Legal Assistant for European Law",
  inLanguage: "en",
  publisher: {
    "@id": "https://www.lexeu.ai/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://app.lexeu.ai/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does LexEU replace a lawyer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. LexEU prepares first drafts, provides legal direction, and checks EU legislation — but cannot represent you in court, assume responsibility for legal advice, or assess every nuance of your case. For straightforward matters it is sufficient on its own. For complex cases it is an excellent first step before consulting a lawyer.",
      },
    },
    {
      "@type": "Question",
      name: "How reliable are the answers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LexEU cites specific EU legislative articles and court decisions. You can verify every source yourself. The model is specialised in EU law — it does not generate answers from general knowledge like ChatGPT. No AI is 100% reliable; always verify critical decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Which legal topics does LexEU cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EU employment law, contract law, GDPR and data protection, competition law, consumer protection, corporate law, and general EU legislation and case law from the Court of Justice of the European Union.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly do I get an answer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most answers are ready in under a minute. Preparing a longer document (contract, legal opinion) takes up to 2 minutes. There is no queue.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your data is not used to train models. Documents you upload are processed and not stored permanently. See our privacy policy for full details.",
      },
    },
    {
      "@type": "Question",
      name: "How is LexEU different from ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT knows law in general. LexEU is specialised in EU law — it knows the regulations, directives, and CJEU case law. It cites exact sources and prepares documents in line with current EU rules. ChatGPT cannot do this because it has no access to an EU legal database.",
      },
    },
  ],
};

export const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.lexeu.ai",
    },
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.lexeu.ai/#legal-service",
  name: "LexEU",
  description:
    "Advanced AI legal assistant for European law. Accurate legal answers backed by EU legislation and case law.",
  url: "https://www.lexeu.ai",
  email: "info@lexeu.ai",
  areaServed: {
    "@type": "Continent",
    name: "Europe",
  },
  availableLanguage: {
    "@type": "Language",
    name: "English",
  },
  priceRange: "€€",
};
