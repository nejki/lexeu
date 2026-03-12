import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon";
  size?: number;
  className?: string;
  light?: boolean;
}

export default function Logo({
  variant = "full",
  size = 36,
  className = "",
  light = false,
}: LogoProps) {
  // Use logo-96 for sizes ≤48 (covers up to 3x retina at 32px CSS)
  // Use logo-256 for anything larger
  const src = size <= 48 ? "/logo-96.png" : "/logo-256.png";

  const icon = (
    <Image
      src={src}
      alt="AI KRPAN"
      width={size}
      height={size}
      className="object-contain"
      priority
      unoptimized
    />
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
        <span className={light ? "text-accent-light" : "text-accent"}>
          KRPAN
        </span>
      </span>
    </span>
  );
}
