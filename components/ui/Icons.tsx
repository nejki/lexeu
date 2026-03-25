interface IconProps {
  className?: string;
}

/* ─── Custom flowing-curve icons inspired by the § motif ─── */

/** Speed / instant response — stylised hourglass with flowing S-curves */
export function IconBolt({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2C10.5 2 8 5.5 8 8c0 3.5 4 6 8 8-4 2-8 4.5-8 8 0 2.5 2.5 6 8 6s8-3.5 8-6c0-3.5-4-6-8-8 4-2 8-4.5 8-8 0-2.5-2.5-6-8-6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 8c0-1.5 1.5-3 3.5-3s3.5 1.5 3.5 3c0 2-2 3.5-3.5 4.5C15 11.5 12.5 10 12.5 8ZM12.5 24c0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3c0-2-2-3.5-3.5-4.5-1.5 1-3.5 2.5-3.5 4.5Z"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}

/** Justice / law — elegant balance with serif-like curves */
export function IconScales({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3v24"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 5c-3 0-5.5 1-8 2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 5c3 0 5.5 1 8 2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Left pan — flowing bowl shape */}
      <path
        d="M4 10c0 0 .5 7 4 7s4-7 4-7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 10c0 0 .5 7 4 7s4-7 4-7Z" fill="currentColor" opacity="0.08" />
      {/* Right pan */}
      <path
        d="M20 10c0 0 .5 7 4 7s4-7 4-7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 10c0 0 .5 7 4 7s4-7 4-7Z" fill="currentColor" opacity="0.08" />
      {/* Base — serif-style foot */}
      <path
        d="M11 27c0 0 2-1 5-1s5 1 5 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="4" r="1.2" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

/** Document analysis — page with flowing paragraph curves */
export function IconDocument({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      {/* Page outline with soft corner fold */}
      <path
        d="M8 4c0-1 .5-1.5 1.5-1.5H19l6.5 7V28c0 1-.5 1.5-1.5 1.5H9.5C8.5 29.5 8 29 8 28V4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M19 2.5v5c0 .8.5 1.5 1.3 1.5H25.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Flowing text lines — S-curve inspired */}
      <path
        d="M12 14c1.5-.3 3 .3 4.5 0s2.5-.5 3.5 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M12 18c1-.2 2.5.4 4 0s2-.4 3 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M12 22c1.5-.2 2 .3 3.5 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Subtle § watermark on page */}
      <path
        d="M18 17c-1 0-1.5.8-1.5 1.5S17.5 20 18.5 20.5 20 21.5 20 22.5 19 24 18 24"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.12"
      />
    </svg>
  );
}

/** EU / International — globe with flowing meridians */
export function IconGlobe({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <circle
        cx="16"
        cy="16"
        r="12.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Flowing meridian — S-curve like § */}
      <path
        d="M16 3.5c-3 3-5 7.5-5 12.5s2 9.5 5 12.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 3.5c3 3 5 7.5 5 12.5s-2 9.5-5 12.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Latitude lines — gentle arcs */}
      <path
        d="M4.5 12c3 1.2 7 2 11.5 2s8.5-.8 11.5-2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M4.5 20c3-1.2 7-2 11.5-2s8.5.8 11.5 2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* EU stars hint — tiny dots */}
      <circle cx="16" cy="7" r="0.6" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="8.5" r="0.6" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="8.5" r="0.6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

/** Privacy / lock — elegant lock with serif-style keyhole */
export function IconLock({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      {/* Shackle — flowing arch */}
      <path
        d="M10 14V10c0-4 2.5-7 6-7s6 3 6 7v4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Lock body — soft rectangle */}
      <rect
        x="7"
        y="14"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect x="7" y="14" width="18" height="14" rx="3" fill="currentColor" opacity="0.06" />
      {/* Keyhole — § inspired flowing shape */}
      <path
        d="M16 19c-1.2 0-2 .8-2 2s.8 2 2 2 2-.8 2-2-.8-2-2-2Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M15.2 23c.3.8.5 2 .8 2.5.3-.5.5-1.7.8-2.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

/* ─── UI icons (menu / close) — kept minimal ─── */

export function IconMenu({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function IconX({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─── Decorative hero background SVG ─── */

/** Large decorative § -inspired flowing curves for hero background */
export function HeroDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 900"
      fill="none"
      aria-hidden="true"
    >
      {/* Primary § curve — large flowing S */}
      <path
        d="M300 50
           C180 50 100 130 100 220
           C100 330 220 370 300 410
           C380 450 500 490 500 600
           C500 700 420 800 300 800
           C180 800 100 720 100 630"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.04"
      />
      {/* Secondary curve — offset echo */}
      <path
        d="M320 80
           C210 80 140 150 140 230
           C140 330 250 370 320 400
           C390 430 480 470 480 570
           C480 660 400 750 320 750"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.03"
      />
      {/* Inner flowing fill — subtle depth */}
      <path
        d="M300 100
           C200 100 150 160 150 230
           C150 320 240 360 300 390
           C360 420 450 460 450 560
           C450 640 380 720 300 720
           C220 720 150 660 150 580"
        fill="currentColor"
        opacity="0.02"
      />
      {/* Top loop — small ornamental S */}
      <path
        d="M280 120
           C250 120 230 140 230 160
           C230 185 260 195 280 205
           C300 215 320 225 320 250
           C320 270 300 285 280 285"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.035"
      />
      {/* Horizontal cross-line — like the § crossbar */}
      <path
        d="M130 410 C200 395 400 395 470 410"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.03"
      />
      <path
        d="M160 440 C220 425 380 425 440 440"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.025"
      />
    </svg>
  );
}
