"use client";

import { useState } from "react";

interface FAQAccordionProps {
  items: { q: string; a: string }[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((faq, i) => (
        <div key={i} className="border-b border-site-border first:border-t">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            aria-expanded={open === i}
          >
            <span className="text-[15px] font-semibold text-site-text group-hover:text-sage-dark transition-colors duration-200">
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full border border-site-border flex items-center justify-center text-site-muted transition-all duration-300 ${
                open === i
                  ? "bg-sage-dark border-sage-dark text-white rotate-45"
                  : "group-hover:border-sage"
              }`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 1v8M1 5h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-64 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-[14px] text-site-mid leading-[1.8]">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
