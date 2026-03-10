import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
  faqSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "./schema";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://www.aikrpan.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AI KRPAN — Najnaprednejši pravni AI v Sloveniji",
    template: "%s | AI KRPAN",
  },
  description:
    "AI KRPAN analizira celotno slovensko zakonodajo in sodno prakso. Natančni, z zakonom utemeljeni pravni odgovori v sekundah. Za odvetnike, pravnike, podjetja.",
  keywords: [
    "pravni AI",
    "AI pravo slovenija",
    "slovensko pravo umetna inteligenca",
    "pravni nasvet AI",
    "zakonodaja AI",
    "sodna praksa AI",
    "pravni pomočnik",
    "AI odvetnik",
    "pravna vprašanja",
    "ZDR-1",
    "ZPP",
    "ZIZ",
    "EU pravo AI",
    "GDPR AI",
    "AI KRPAN",
    "Committo",
  ],
  authors: [{ name: "Committo d.o.o.", url: BASE_URL }],
  creator: "Committo d.o.o.",
  publisher: "Committo d.o.o.",
  category: "Legal Technology",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "sl-SI": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: BASE_URL,
    siteName: "AI KRPAN",
    title: "AI KRPAN — Najnaprednejši pravni AI v Sloveniji",
    description:
      "Natančni pravni odgovori, utemeljeni z zakonom in sodno prakso — v sekundah. Za odvetnike, notarje, računovodje in podjetja.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI KRPAN — Pravni AI za slovensko zakonodajo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aikrpan",
    creator: "@aikrpan",
    title: "AI KRPAN — Najnaprednejši pravni AI v Sloveniji",
    description:
      "Natančni pravni odgovori, utemeljeni z zakonom in sodno prakso — v sekundah.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "YOUR_YANDEX_TOKEN",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

const schemas = [
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
  faqSchema,
  breadcrumbSchema,
  localBusinessSchema,
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Schema JSON-LD */}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
