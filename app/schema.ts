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
        text: "Ne. AI KRPAN je orodje, ki pripravi prvi osnutek dokumenta, poda pravno usmeritev in preveri zakonodajo — ampak ne more zastopati pred sodiščem, prevzeti odgovornosti za pravni nasvet ali oceniti vseh posebnosti vašega primera. Za enostavne zadeve (pogodba o zaposlitvi vzorec, vprašanje o odpravnini, pregled kratke pogodbe) je dovolj sam. Za zapletene primere je odličen prvi korak pred posvetom z odvetnikom.",
      },
    },
    {
      "@type": "Question",
      name: "Kako zanesljivi so odgovori?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI KRPAN navaja konkretne zakonske člene in sodbe. Vsak vir lahko preverite sami. Model je specializiran za slovensko zakonodajo — ne generira odgovorov iz splošnega znanja kot ChatGPT. Kljub temu nobena AI ni 100-odstotno zanesljiva. Kritične odločitve vedno preverite.",
      },
    },
    {
      "@type": "Question",
      name: "Katere pravne teme pokriva AI KRPAN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delovno pravo (ZDR-1, odpovedi, pogodbe o zaposlitvi, odpravnine), gospodarsko pravo, obligacijsko pravo, pravo EU, dedovanje, GDPR in varstvo osebnih podatkov, davčno pravo. Celotna slovenska zakonodaja in sodna praksa sta vključeni v bazo. Za EU pravo uporabite poseben model Pravo EU.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko časa potrebujem za odgovor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Večina odgovorov je pripravljena v manj kot minuti. Priprava daljšega dokumenta (pogodba, pravno mnenje) traja do 2 minuti. Čakalna vrsta ne obstaja.",
      },
    },
    {
      "@type": "Question",
      name: "Ali so moja vprašanja zaupna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Vaši podatki se ne uporabljajo za učenje modelov. Dokumenti, ki jih naložite, se obdelajo in ne hranijo trajno. Podrobnosti o varovanju podatkov najdete v naši politiki zasebnosti.",
      },
    },
    {
      "@type": "Question",
      name: "Kako se AI KRPAN razlikuje od ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT pozna pravo na splošno. AI KRPAN je specializiran za slovensko zakonodajo — pozna zakone, podzakonske akte in sodno prakso. Navaja točne vire. Pripravlja dokumente po veljavnih predpisih. ChatGPT tega ne zmore, ker nima dostopa do slovenske zakonske baze.",
      },
    },
    {
      "@type": "Question",
      name: "Ali potrebujem pravno predznanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Vprašajte tako, kot bi vprašali kolega — v navadnem jeziku. AI KRPAN razume kontekst in vam odgovori jasno. Če potrebujete pogodbo, jo pripravi. Če potrebujete razlago zakona, jo poda v razumljivem jeziku.",
      },
    },
    {
      "@type": "Question",
      name: "Kako pripravim odpoved pogodbe o zaposlitvi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Izberite model AI KRPAN, opišite situacijo (razlog za odpoved, trajanje zaposlitve, ali gre za redno ali izredno odpoved) in AI KRPAN pripravi osnutek odpovedi pogodbe o zaposlitvi v skladu z ZDR-1. Vključi obvezne sestavine: odpovedni rok, pravni pouk, obrazložitev. Vi osnutek pregledate in prilagodite.",
      },
    },
    {
      "@type": "Question",
      name: "Ali AI KRPAN nadomesti brezplačno pravno pomoč?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI KRPAN ni nadomestek za brezplačno pravno pomoč po Zakonu o brezplačni pravni pomoči — ta vam dodeli odvetnika za zastopanje pred sodiščem. AI KRPAN pa vam pomaga pri vsakdanjih pravnih vprašanjih, ki jih brezplačna pravna pomoč ne pokriva: hitri odgovori, pregled pogodb, priprava dokumentov. Za €3 na vprašanje dobite takojšnjo pravno usmeritev brez čakanja.",
      },
    },
    {
      "@type": "Question",
      name: "Ali AI KRPAN pozna ZDR-1 in zakon o delovnih razmerjih?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Zakon o delovnih razmerjih (ZDR-1) je eden od najpogosteje uporabljanih zakonov v AI KRPAN-u. Model pozna vse člene, vključno z najnovejšimi spremembami. Pokriva odpovedi, pogodbe o zaposlitvi, pogodbe o delu, odpravnine, letni dopust, regres, nadurno delo in vse ostale institute delovnega prava.",
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
