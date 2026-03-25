"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-site-border bg-sage-dark/95 backdrop-blur-sm"
    >
      <Container className="py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[13px] text-stone-mid flex-1 leading-[1.7]">
          We use cookies to improve your experience on this site.{" "}
          <a
            href="/cookies"
            className="underline underline-offset-2 hover-accent"
          >
            Learn more
          </a>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-[13px] font-medium text-stone-mid border border-stone-mid/30 rounded hover:border-stone-mid/60 transition-colors duration-200"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-[13px] font-medium bg-accent text-white rounded hover:bg-accent-light transition-colors duration-200"
          >
            Accept
          </button>
        </div>
      </Container>
    </div>
  );
}
