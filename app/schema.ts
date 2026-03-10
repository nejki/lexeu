export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.aikrpan.com/#organization",
  name: "AI KRPAN",
  legalName: "Committo d.o.o.",
  url: "https://www.aikrpan.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.aikrpan.com/logo.png",
    width: 200,
    height: 60,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+386-40-451-562",
    email: "info@aikrpan.com",
    contactType: "customer service",
    availableLanguage: ["Slovenian"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "SI",
  },
  sameAs: [
    "https://www.facebook.com/aikrpan",
    "https://twitter.com/aikrpan",
    "https://www.youtube.com/@aikrpan",
  ],
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.aikrpan.com/#software",
  name: "AI KRPAN",
  applicationCategory: "LegalService",
  applicationSubCategory: "Legal Research Software",
  operatingSystem: "Web",
  url: "https://app.aikrpan.com",
  description:
    "Napreden pravni pomočnik, ki temelji na umetni inteligenci. Analizira celotno slovensko zakonodajo in sodno prakso ter odgovori na pravna vprašanja v sekundah.",
  offers: [
    {
      "@type": "Offer",
      name: "Mini",
      price: "15",
      priceCurrency: "EUR",
      description: "5 pravnih vprašanj brez datumske omejitve",
    },
    {
      "@type": "Offer",
      name: "Standard",
      price: "35",
      priceCurrency: "EUR",
      description: "15 pravnih vprašanj z analizo dokumentov",
    },
    {
      "@type": "Offer",
      name: "Poslovni",
      price: "80",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "RecurringCharge",
        billingDuration: "P1M",
      },
      description: "100 vprašanj mesečno, vsi modeli, prioritetna podpora",
    },
    {
      "@type": "Offer",
      name: "Letni Poslovni",
      price: "960",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "RecurringCharge",
        billingDuration: "P1Y",
      },
      description: "1200 vprašanj letno, vsi modeli, prioritetna podpora",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "4",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Organization", name: "Odvetniška pisarna Ketiš, Janžekovič in partnerji" },
      reviewBody:
        "AiKrpan je enostaven za uporabo, odgovori so natančni in izčrpni ter podkrepljeni z relevantno sodno prakso.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Organization", name: "Nova Reha d.o.o." },
      reviewBody:
        "Orodje je bistveno vplivalo na našo učinkovitost pri vsakodnevnih pravnih nalogah. Hitro in zanesljivo.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Organization", name: "Odvetniška pisarna Kumer" },
      reviewBody:
        "Analiza kompleksnih primerov z obsežnimi informacijami je zdaj precej hitrejša.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Organization", name: "Kreativna Bajta d.o.o." },
      reviewBody:
        "Za malo podjetje je prihranek časa ogromen. Konkretni odgovori s primeri in ugodna cena.",
    },
  ],
  provider: {
    "@id": "https://www.aikrpan.com/#organization",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.aikrpan.com/#website",
  url: "https://www.aikrpan.com",
  name: "AI KRPAN",
  description: "Najnaprednejši pravni AI v Sloveniji",
  inLanguage: "sl",
  publisher: {
    "@id": "https://www.aikrpan.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://app.aikrpan.com/?q={search_term_string}",
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
      name: "Kaj je AI KRPAN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI KRPAN je napreden pravni pomočnik, ki temelji na umetni inteligenci. Analizira celotno slovensko zakonodajo in sodno prakso ter odgovori na pravna vprašanja v sekundah, pri čemer navaja konkretne zakonske člene in sodbe.",
      },
    },
    {
      "@type": "Question",
      name: "Za koga je AI KRPAN primeren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI KRPAN je primeren za odvetnike, pravnike, notarje, računovodje, stečajne upravitelje in podjetja, ki potrebujejo pravno jasnost brez dragih svetovalnih ur.",
      },
    },
    {
      "@type": "Question",
      name: "Ali AI KRPAN pokriva EU zakonodajo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, AI KRPAN vključuje poseben model za EU zakonodajo — direktive, uredbe in ostale predpise Evropske unije.",
      },
    },
    {
      "@type": "Question",
      name: "Kako hitro dobim odgovor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI KRPAN odgovori povprečno v 3 sekundah. Vsak odgovor je podkrepljen s konkretnimi zakonskimi členi in relevantno sodno prakso.",
      },
    },
    {
      "@type": "Question",
      name: "Ali so moji podatki varni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Vaše poizvedbe in dokumenti niso nikoli deljeni z zunanjimi stranmi. AI KRPAN zagotavlja popolno zasebnost vaših pravnih vprašanj.",
      },
    },
    {
      "@type": "Question",
      name: "Kaj vključuje paket Mini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paket Mini za 15 € vključuje 5 pravnih vprašanj brez datumske omejitve in dostop do vseh modelov.",
      },
    },
    {
      "@type": "Question",
      name: "Ali lahko naložim lasten dokument za analizo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Model Document QA vam omogoča nalaganje lastnih dokumentov (pogodb, sodb, aktov) in postavljanje vprašanj neposredno o njih.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Domov",
      item: "https://www.aikrpan.com",
    },
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.aikrpan.com/#legal-service",
  name: "AI KRPAN",
  description:
    "Najnaprednejši AI pravni pomočnik v Sloveniji. Natančni pravni odgovori, utemeljeni z zakonom in sodno prakso.",
  url: "https://www.aikrpan.com",
  telephone: "+386-40-451-562",
  email: "info@aikrpan.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SI",
  },
  areaServed: {
    "@type": "Country",
    name: "Slovenia",
  },
  availableLanguage: {
    "@type": "Language",
    name: "Slovenian",
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "4",
    bestRating: "5",
  },
};
