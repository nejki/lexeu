import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
  title: "AI KRPAN — Najnaprednejši pravni AI v Sloveniji",
  description:
    "AI KRPAN analizira celotno slovensko zakonodajo in sodno prakso. Dobite natančne, utemeljene pravne odgovore v sekundah.",
  keywords: [
    "pravni AI",
    "slovensko pravo",
    "zakonodaja",
    "pravni nasvet",
    "umetna inteligenca",
    "sodna praksa",
  ],
  openGraph: {
    title: "AI KRPAN — Najnaprednejši pravni AI v Sloveniji",
    description:
      "Natančni pravni odgovori, utemeljeni z zakonom in sodno prakso. V sekundah.",
    url: "https://www.aikrpan.com",
    siteName: "AI KRPAN",
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI KRPAN — Najnaprednejši pravni AI v Sloveniji",
    description:
      "Natančni pravni odgovori, utemeljeni z zakonom in sodno prakso. V sekundah.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
