import {
  BASE_URL,
  breadcrumbSchema,
  faqPageSchema,
  HOME_FAQS,
} from "./content-schema";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "LexEU",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo-256.png`,
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
  "@id": `${BASE_URL}/#software`,
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
    "@id": `${BASE_URL}/#organization`,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "LexEU",
  description: "AI Legal Assistant for European Law",
  inLanguage: "en",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
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

// Reuse the dynamic builders from content-schema — no duplicate FAQ data
export const faqSchema = faqPageSchema(HOME_FAQS);

export const homeBreadcrumbSchema = breadcrumbSchema([]);

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${BASE_URL}/#legal-service`,
  name: "LexEU",
  description:
    "Advanced AI legal assistant for European law. Accurate legal answers backed by EU legislation and case law.",
  url: BASE_URL,
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
