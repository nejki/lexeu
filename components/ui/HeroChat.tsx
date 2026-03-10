"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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

/* ── Typing speed constants ────────────────────────────── */
const Q_CHAR_MS = 38;       // typing speed for question
const A_CHAR_MS = 12;       // faster "AI" typing for answer
const PAUSE_AFTER_A = 3200; // pause to read answer
const FADE_MS = 500;        // crossfade duration

/* ── Component ─────────────────────────────────────────── */
export function HeroChat() {
  const [idx, setIdx] = useState(0);
  const [qText, setQText] = useState("");
  const [aText, setAText] = useState("");
  const [phase, setPhase] = useState<"typing-q" | "typing-a" | "idle" | "fade">("typing-q");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mounted = useRef(true);

  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  /* advance to next conversation */
  const next = useCallback(() => {
    setPhase("fade");
    timer.current = setTimeout(() => {
      if (!mounted.current) return;
      setIdx((i) => (i + 1) % conversations.length);
      setQText("");
      setAText("");
      setPhase("typing-q");
    }, FADE_MS);
  }, []);

  /* main animation loop */
  useEffect(() => {
    mounted.current = true;
    const conv = conversations[idx];

    if (phase === "typing-q") {
      if (qText.length < conv.q.length) {
        timer.current = setTimeout(() => {
          if (!mounted.current) return;
          setQText(conv.q.slice(0, qText.length + 1));
        }, Q_CHAR_MS);
      } else {
        // small pause then start answer
        timer.current = setTimeout(() => {
          if (!mounted.current) return;
          setPhase("typing-a");
        }, 400);
      }
    }

    if (phase === "typing-a") {
      if (aText.length < conv.a.length) {
        timer.current = setTimeout(() => {
          if (!mounted.current) return;
          setAText(conv.a.slice(0, aText.length + 1));
        }, A_CHAR_MS);
      } else {
        setPhase("idle");
        timer.current = setTimeout(() => {
          if (!mounted.current) return;
          next();
        }, PAUSE_AFTER_A);
      }
    }

    return () => {
      clear();
      mounted.current = false;
    };
  }, [phase, qText, aText, idx, next]);

  const fading = phase === "fade";

  return (
    <div className="hero-chat-wrap">
      {/* Ambient glow */}
      <div className="hero-chat-glow" />

      <div
        className="hero-chat-container"
        style={{
          opacity: fading ? 0 : 1,
          transition: `opacity ${FADE_MS}ms cubic-bezier(.4,0,.2,1)`,
        }}
      >
        {/* Question bubble */}
        <div className="hero-chat-q">
          <div className="hero-chat-q-avatar">Vi</div>
          <div className="hero-chat-q-bubble">
            <span>{qText}</span>
            {phase === "typing-q" && <span className="hero-chat-cursor" />}
          </div>
        </div>

        {/* Answer */}
        {(phase === "typing-a" || phase === "idle") && (
          <div className="hero-chat-a">
            <div className="hero-chat-a-avatar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="hero-chat-a-content">
              <span className="hero-chat-a-label">AI KRPAN</span>
              <span className="hero-chat-a-text">
                {aText}
                {phase === "typing-a" && <span className="hero-chat-cursor hero-chat-cursor--ai" />}
              </span>
            </div>
          </div>
        )}

        {/* Thinking dots — show briefly before answer starts */}
        {phase === "typing-q" && qText.length === conversations[idx].q.length && (
          <div className="hero-chat-thinking">
            <span /><span /><span />
          </div>
        )}
      </div>

      {/* Bottom tag */}
      <div className="hero-chat-tag">
        <span className="hero-chat-tag-dot" />
        Odgovor v realnem času
      </div>
    </div>
  );
}
