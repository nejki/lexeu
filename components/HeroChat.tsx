"use client";

import { useEffect, useRef, useState } from "react";

/* ── Q&A pairs ─────────────────────────────────────────── */
const conversations = [
  {
    q: "Stranka ne plača računa že 60 dni — kaj lahko naredim?",
    a: "Po OZ (196. člen) lahko zaračunate zamudne obresti. Pošljite pisni opomin z 8-dnevnim rokom. Če ne plača, vložite predlog za izvršbo na podlagi verodostojne listine — brez sodnega postopka.",
  },
  {
    q: "Kakšen je postopek za odpoved pogodbe o zaposlitvi?",
    a: "Po ZDR-1 (83.–93. člen) morate podati pisno odpoved z navedbo razloga. Delavcu pripada odpovedni rok (min. 30 dni) in odpravnina (1/5 plače na leto zaposlitve). Pred redno odpovedjo je obvezen zagovor.",
  },
  {
    q: "Kdaj se moram registrirati kot zavezanec za DDV?",
    a: "Po ZDDV-1 (94. člen) se morate registrirati, ko vaš obdavčljivi promet v 12 mesecih preseže 50.000 €. Prostovoljno se lahko registrirate kadarkoli — to je smiselno, če so vaše stranke podjetja.",
  },
  {
    q: "Ali je ustna pogodba pravno veljavna?",
    a: "Da — po OZ (51. člen) je ustna pogodba načeloma veljavna. Izjema so pogodbe, za katere zakon zahteva pisno obliko (npr. prenos nepremičnin, pogodba o zaposlitvi). Problem je le dokazovanje.",
  },
  {
    q: "Kupil sem pokvarjen izdelek — kakšne pravice imam?",
    a: "Po ZVPot-1 (37.–42. člen) imate pravico do brezplačnega popravila ali zamenjave. Če to ni mogoče, lahko zahtevate znižanje cene ali vračilo kupnine. Rok za reklamacijo je 2 meseca od odkritja napake.",
  },
  {
    q: "Kakšen je zastaralni rok za izterjavo dolgov?",
    a: "Splošni zastaralni rok je 5 let (OZ, 346. člen). Za občasne terjatve (najemnina, obresti) velja 3 leta. Za terjatve iz gospodarskih pogodb med podjetji prav tako 5 let. Po zastaranju dolg ne preneha, le prisilna izterjava ni več mogoča.",
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
  /* get the current (last) entry */
  const current = entries[entries.length - 1];

  /* scroll feed to bottom when a new entry appears */
  useEffect(() => {
    const el = feedRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries.length]);

  /* main animation loop — each phase schedules one timeout */
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
      id = setTimeout(() => {
        setPhase("typing-a");
      }, THINKING_MS);
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
        // mark current as done — use timeout to avoid synchronous setState in effect
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

      {/* Scrollable chat feed */}
      <div className="hero-chat-feed" ref={feedRef}>
        {entries.map((entry) => (
          <div key={entry.id} className="hero-chat-entry">
            {/* Question */}
            {entry.qVisible.length > 0 && (
              <div className="hero-chat-q">
                <div className="hero-chat-q-avatar">Vi</div>
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
                  <span className="hero-chat-a-label">AI KRPAN</span>
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
        Odgovor v realnem času
      </div>
    </div>
  );
}
