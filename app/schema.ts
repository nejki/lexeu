export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.aikrpan.com/#organization",
  name: "AI KRPAN",
  legalName: "Committo d.o.o.",
  url: "https://www.aikrpan.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.aikrpan.com/logo-256.png",
    width: 256,
    height: 256,
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
      name: "Ali AI KRPAN nadomešča odvetnika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. AI KRPAN je orodje za pravno orientacijo — pomaga vam razumeti, kje stojite, preden se odločite za naslednji korak. Za kompleksne zadeve, sodno zastopanje ali pravno zavezujoče dokumente potrebujete odvetnika. Mnogi odvetniki AI KRPAN uporabljajo kot izhodišče za lastno raziskavo.",
      },
    },
    {
      "@type": "Question",
      name: "Kako zanesljivi so odgovori?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vsak odgovor navede zakonske člene in sodne odločbe, na katerih temelji. To pomeni, da lahko vsako trditev sami preverite v uradnih virih. AI KRPAN ne ugiba — odgovarja na podlagi dejanske zakonodaje in sodne prakse.",
      },
    },
    {
      "@type": "Question",
      name: "Katere pravne teme pokriva AI KRPAN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slovensko zakonodajo v celoti — civilno, delovno, gospodarsko, kazensko pravo. Dejansko sodno prakso slovenskih sodišč. Pravo EU z direktivami, uredbami in pravilniki. Smernice informacijske pooblaščenke za varstvo osebnih podatkov in GDPR.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko časa potrebujem za odgovor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Povprečno 1–2 minuti. Zastavite vprašanje v naravnem jeziku — kot bi ga zastavili odvetniku. AI KRPAN analizira vaše vprašanje, identificira relevantne pravne vire in oblikuje utemeljeno stališče.",
      },
    },
    {
      "@type": "Question",
      name: "Ali so moja vprašanja zaupna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Vaša vprašanja in odgovori so zaupni in niso deljeni s tretjimi osebami. Sistem ne hrani vaših podatkov za učenje AI modela.",
      },
    },
    {
      "@type": "Question",
      name: "Kako se AI KRPAN razlikuje od ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT je splošno AI orodje brez dostopa do slovenske zakonodaje in sodne prakse. Pogosto halucinira — citira zakone in sodbe, ki ne obstajajo. AI KRPAN je specializiran za pravo: dostopa do dejanske zakonodaje in sodne prakse, vsak odgovor pa vsebuje preverljive navedbe virov.",
      },
    },
    {
      "@type": "Question",
      name: "Ali potrebujem pravno predznanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Vprašanja postavljate v vsakdanjem jeziku. AI KRPAN razume kontekst in odgovori jasno — tudi če niste pravnik. Orodje je zasnovano tako za odvetnike kot za fizične osebe brez pravnega znanja.",
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
