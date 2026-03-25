import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
  faqSchema,
  homeBreadcrumbSchema,
  localBusinessSchema,
} from "./schema";
import { BASE_URL } from "./content-schema";

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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "LexEU — AI Legal Chatbot for EU Law | From €9.90",
    template: "%s | LexEU",
  },
  description:
    "Get AI legal advice grounded in EU directives, CJEU case law, and national law. Contracts, opinions, GDPR answers in under a minute. Try from €9.90.",
  keywords: [
    "EU law",
    "European law",
    "AI legal assistant",
    "contract analysis",
    "GDPR",
    "employment law EU",
    "legal AI",
    "EU legal advice",
    "European legal research",
    "LexEU",
  ],
  authors: [{ name: "LexEU", url: BASE_URL }],
  creator: "LexEU",
  publisher: "LexEU",
  category: "Legal Technology",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_EU",
    url: BASE_URL,
    siteName: "LexEU",
    title: "LexEU — AI Legal Chatbot for EU Law | From €9.90",
    description:
      "Get AI legal advice grounded in EU directives, CJEU case law, and national law. Contracts, opinions, GDPR answers in under a minute. Try from €9.90.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LexEU — AI Legal Chatbot for EU Law",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lexeu_ai",
    creator: "@lexeu_ai",
    title: "LexEU — AI Legal Chatbot for EU Law | From €9.90",
    description:
      "Get AI legal advice grounded in EU directives, CJEU case law, and national law. Contracts, opinions, GDPR answers in under a minute. Try from €9.90.",
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
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#2A2520" },
    ],
  },
  manifest: "/site.webmanifest",
};

const schemas = [
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
  faqSchema,
  homeBreadcrumbSchema,
  localBusinessSchema,
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#1A1714" />
        <meta name="msapplication-TileColor" content="#1A1714" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
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
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
