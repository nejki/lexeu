"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;

    // Load immediately if already accepted
    if (localStorage.getItem("cookie_consent") === "accepted") {
      setLoad(true);
    }

    // Load when user clicks Accept in the banner
    function onAccept() {
      setLoad(true);
    }
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  if (!load || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
