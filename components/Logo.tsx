interface LogoProps {
  variant?: "full" | "icon";
  size?: number;
  className?: string;
  light?: boolean; // white wordmark, for dark backgrounds
}

export default function Logo({
  variant = "full",
  size = 36,
  className = "",
  light = false,
}: LogoProps) {
  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Badge */}
      <rect width="44" height="44" rx="10" fill="#4A7060" />

      {/*
        § symbol — drawn as an S-curve with top and bottom bars.
        The section mark is the universal symbol of legal paragraphs
        in Slovenian and European law.
      */}

      {/* S-curve: upper bowl → middle → lower bowl */}
      <path
        d="M 29 14.5
           C 29 10.5 25.5 8 22 8
           C 18.5 8 15 10.5 15 14
           C 15 17.5 18 19 22 20.5
           C 26 22 29 23.5 29 27
           C 29 30.5 25.5 33 22 33
           C 18.5 33 15 30.5 15 27"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Top horizontal bar */}
      <line
        x1="15.5" y1="10" x2="28.5" y2="10"
        stroke="white" strokeWidth="2" strokeLinecap="round"
      />

      {/* Bottom horizontal bar */}
      <line
        x1="15.5" y1="35" x2="28.5" y2="35"
        stroke="white" strokeWidth="2" strokeLinecap="round"
      />

      {/*
        AI signal dots — a diminishing trail in sage-light,
        suggesting data/intelligence flowing through the law.
      */}
      <circle cx="34" cy="9"  r="2"   fill="#B8D4C8" fillOpacity="0.90" />
      <circle cx="38" cy="15" r="1.4" fill="#B8D4C8" fillOpacity="0.65" />
      <circle cx="39" cy="22" r="0.9" fill="#B8D4C8" fillOpacity="0.40" />
    </svg>
  );

  if (variant === "icon") {
    return <span className={className}>{icon}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {icon}
      <span
        className={`font-serif text-[19px] font-semibold tracking-[0.12em] uppercase leading-none ${
          light ? "text-white" : "text-site-text"
        }`}
      >
        AI{" "}
        <span className={light ? "text-sage-light" : "text-sage-dark"}>
          KRPAN
        </span>
      </span>
    </span>
  );
}
