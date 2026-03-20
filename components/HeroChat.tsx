"use client";

import { useEffect, useRef, useState } from "react";

/* ── Q&A pairs ─────────────────────────────────────────── */
const conversations = [
  {
    q: "My employer said my probationary period is 12 months. Is that legal in the EU?",
    a: "Under Article 8(2) of Directive 2019/1152, EU law caps probation at 6 months for most employment contracts. A 12-month probation is not permitted unless national law allows exceptional extensions, which must be proportionate and justified. You may be able to challenge this clause under the transposing law in your country.",
  },
  {
    q: "I run an online shop in Austria selling to customers in Germany and Poland. Do I need to register for VAT in those countries?",
    a: "Under Directive 2006/112/EC as amended by Directive 2017/2455, if your B2C sales to other EU countries exceed €10,000 per year, you must charge VAT at each customer's country rate. You can use the One Stop Shop (OSS) scheme under Art. 369b to file a single return in Austria instead of registering separately in each country.",
  },
  {
    q: "My gym contract says they can increase fees at any time and I cannot cancel - is this enforceable?",
    a: "Under Art. 3(1) of Directive 93/13/EEC, a unilateral price increase without an exit right is listed in the Annex as potentially unfair. Per Art. 6(1), if found unfair, the clause is not binding on you. The rest of your contract continues without the unfair term.",
  },
  {
    q: "A client hasn't paid my invoice for 45 days. What are my rights under EU law?",
    a: "Under Art. 3 of Directive 2011/7/EU, the standard B2B payment deadline is 30 days. After that, you're automatically entitled to statutory interest plus a fixed €40 compensation for recovery costs under Art. 6 — no formal reminder needed.",
  },
  {
    q: "I asked a company to delete my personal data and they haven't responded in 6 weeks. What can I do?",
    a: "Under Art. 17 of Regulation 2016/679 (GDPR), you have the right to erasure. The company must respond within 1 month per Art. 12(3). Since they've exceeded this deadline, you can file a complaint with your national Data Protection Authority under Art. 77.",
  },
  {
    q: "I bought a laptop online that stopped working after 14 months. The seller says the warranty expired. What are my rights?",
    a: "Under Art. 10 of Directive 2019/771, sellers are liable for defects that appear within 2 years of delivery. At 14 months, you're well within that period. The seller must repair, replace, or refund per Art. 13 — a 1-year warranty doesn't override your statutory EU rights.",
  },
];

/* ── Speed constants ───────────────────────────────────── */
const Q_CHAR_MS = 32;
const A_CHAR_MS = 10;
const PAUSE_AFTER_A = 2400;
const THINKING_MS = 600;

/* ── Types ─────────────────────────────────────────────── */
type ChatEntry = {
  id: number;
  q: string;
  a: string;
  qVisible: string;
  aVisible: string;
  done: boolean;
};

/* ── AI avatar icon ────────────────────────────────────── */
function AiIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

/* ── Component ─────────────────────────────────────────── */
export function HeroChat() {
  const [entries, setEntries] = useState<ChatEntry[]>([
    { id: 0, q: conversations[0].q, a: conversations[0].a, qVisible: "", aVisible: "", done: false },
  ]);
  const [phase, setPhase] = useState<"typing-q" | "thinking" | "typing-a" | "pause">("typing-q");
  const nextIdx = useRef(1);
  const feedRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const current = entries[entries.length - 1];

  /* detect overflow for top fade mask */
  useEffect(() => {
    const el = feedRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  });

  /* main animation loop */
  useEffect(() => {
    if (!current) return;
    let id: ReturnType<typeof setTimeout>;

    if (phase === "typing-q") {
      if (current.qVisible.length < current.q.length) {
        id = setTimeout(() => {
          setEntries((prev) => {
            const next = [...prev];
            const last = { ...next[next.length - 1] };
            last.qVisible = last.q.slice(0, last.qVisible.length + 1);
            next[next.length - 1] = last;
            return next;
          });
        }, Q_CHAR_MS);
      } else {
        id = setTimeout(() => setPhase("thinking"), 200);
      }
    }

    if (phase === "thinking") {
      id = setTimeout(() => setPhase("typing-a"), THINKING_MS);
    }

    if (phase === "typing-a") {
      if (current.aVisible.length < current.a.length) {
        id = setTimeout(() => {
          setEntries((prev) => {
            const next = [...prev];
            const last = { ...next[next.length - 1] };
            last.aVisible = last.a.slice(0, last.aVisible.length + 1);
            next[next.length - 1] = last;
            return next;
          });
        }, A_CHAR_MS);
      } else {
        id = setTimeout(() => {
          setEntries((prev) => {
            const next = [...prev];
            next[next.length - 1] = { ...next[next.length - 1], done: true };
            return next;
          });
          setPhase("pause");
        }, 0);
      }
    }

    if (phase === "pause") {
      id = setTimeout(() => {
        const convIdx = nextIdx.current % conversations.length;
        nextIdx.current++;
        setEntries((prev) => {
          const trimmed = prev.length > 12 ? prev.slice(-8) : prev;
          return [
            ...trimmed,
            {
              id: Date.now(),
              q: conversations[convIdx].q,
              a: conversations[convIdx].a,
              qVisible: "",
              aVisible: "",
              done: false,
            },
          ];
        });
        setPhase("typing-q");
      }, PAUSE_AFTER_A);
    }

    return () => clearTimeout(id);
  }, [phase, current]);

  return (
    <div className="hero-chat-wrap">
      <div className="hero-chat-glow" />

      {/* Chat feed — stacks up, auto-scrolls, no user scroll */}
      <div className={`hero-chat-feed${isOverflowing ? " hero-chat-feed--masked" : ""}`} ref={feedRef}>
        {entries.map((entry) => (
          <div key={entry.id} className="hero-chat-entry">
            {/* Question */}
            {entry.qVisible.length > 0 && (
              <div className="hero-chat-q">
                <div className="hero-chat-q-avatar">You</div>
                <div className="hero-chat-q-bubble">
                  <span>{entry.qVisible}</span>
                  {!entry.done && entry === current && phase === "typing-q" && entry.qVisible.length < entry.q.length && (
                    <span className="hero-chat-cursor" />
                  )}
                </div>
              </div>
            )}

            {/* Thinking dots */}
            {!entry.done && entry === current && phase === "thinking" && (
              <div className="hero-chat-thinking">
                <span /><span /><span />
              </div>
            )}

            {/* Answer */}
            {entry.aVisible.length > 0 && (
              <div className="hero-chat-a">
                <div className="hero-chat-a-avatar"><AiIcon /></div>
                <div className="hero-chat-a-content">
                  <span className="hero-chat-a-label">LexEU</span>
                  <span className="hero-chat-a-text">
                    {entry.aVisible}
                    {!entry.done && entry === current && phase === "typing-a" && (
                      <span className="hero-chat-cursor hero-chat-cursor--ai" />
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom tag */}
      <div className="hero-chat-tag">
        <span className="hero-chat-tag-dot" />
        Real-time answer
      </div>
    </div>
  );
}
