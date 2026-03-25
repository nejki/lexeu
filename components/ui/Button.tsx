import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "outline" | "ghost" | "nav-link" | "text-link";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: "bg-sage-dark text-white hover:bg-sage",
  outline: "border border-site-border text-site-mid hover:border-accent hover:text-accent",
  ghost: "text-accent hover:text-accent-light",
  "nav-link": "text-site-mid hover:text-accent",
  "text-link": "text-white/70 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[12px] tracking-[0.07em]",
  md: "px-8 py-3.5 text-[13px] tracking-[0.06em]",
  lg: "px-10 py-4 text-[14px] tracking-[0.06em]",
};

/* Unstyled variants skip the shared button base and size classes */
const unstyled = new Set<Variant>(["nav-link", "text-link"]);

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const isUnstyled = unstyled.has(variant);

  return (
    <a
      {...props}
      className={twMerge(
        isUnstyled
          ? "inline-flex items-center font-medium text-[13px] tracking-[0.04em] uppercase transition-colors duration-200"
          : "inline-block rounded-sm font-semibold uppercase transition-all duration-200",
        variants[variant],
        !isUnstyled && sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
