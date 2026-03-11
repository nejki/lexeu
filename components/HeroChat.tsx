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
  const convIdx = useRef(0);
  const [qVisible, setQVisible] = useState("");
  const [aVisible, setAVisible] = useState("");
  const [phase, setPhase] = useState<"typing-q" | "thinking" | "typing-a" | "pause">("typing-q");

  const conv = conversations[convIdx.current % conversations.length];

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    if (phase === "typing-q") {
      if (qVisible.length < conv.q.length) {
        id = setTimeout(() => {
          setQVisible(conv.q.slice(0, qVisible.length + 1));
        }, Q_CHAR_MS);
      } else {
        id = setTimeout(() => setPhase("thinking"), 200);
      }
    }

    if (phase === "thinking") {
      id = setTimeout(() => setPhase("typing-a"), THINKING_MS);
    }

    if (phase === "typing-a") {
      if (aVisible.length < conv.a.length) {
        id = setTimeout(() => {
          setAVisible(conv.a.slice(0, aVisible.length + 1));
        }, A_CHAR_MS);
      } else {
        id = setTimeout(() => setPhase("pause"), 0);
      }
    }

    if (phase === "pause") {
      id = setTimeout(() => {
        convIdx.current = (convIdx.current + 1) % conversations.length;
        setQVisible("");
        setAVisible("");
        setPhase("typing-q");
      }, PAUSE_AFTER_A);
    }

    return () => clearTimeout(id);
  }, [phase, qVisible, aVisible, conv]);

  return (
    <div className="hero-chat-wrap">
      <div className="hero-chat-glow" />

      {/* Pinned chat — single conversation at a time */}
      <div className="hero-chat-feed">
        <div className="hero-chat-entry">
          {/* Question */}
          {qVisible.length > 0 && (
            <div className="hero-chat-q">
              <div className="hero-chat-q-avatar">Vi</div>
              <div className="hero-chat-q-bubble">
                <span>{qVisible}</span>
                {phase === "typing-q" && qVisible.length < conv.q.length && (
                  <span className="hero-chat-cursor" />
                )}
              </div>
            </div>
          )}

          {/* Thinking dots */}
          {phase === "thinking" && (
            <div className="hero-chat-thinking">
              <span /><span /><span />
            </div>
          )}

          {/* Answer */}
          {aVisible.length > 0 && (
            <div className="hero-chat-a">
              <div className="hero-chat-a-avatar"><AiIcon /></div>
              <div className="hero-chat-a-content">
                <span className="hero-chat-a-label">AI KRPAN</span>
                <span className="hero-chat-a-text">
                  {aVisible}
                  {phase === "typing-a" && (
                    <span className="hero-chat-cursor hero-chat-cursor--ai" />
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom tag */}
      <div className="hero-chat-tag">
        <span className="hero-chat-tag-dot" />
        Odgovor v realnem času
      </div>
    </div>
  );
}
