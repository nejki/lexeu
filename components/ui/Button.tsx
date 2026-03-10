import { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "custom";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: "bg-sage-dark text-white hover:bg-sage",
  outline: "border border-site-border text-site-mid hover:border-sage hover:text-sage-dark",
  ghost: "text-sage-dark hover:text-sage",
  custom: "",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[12px] tracking-[0.07em]",
  md: "px-8 py-3.5 text-[13px] tracking-[0.06em]",
  lg: "px-10 py-4 text-[14px] tracking-[0.06em]",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={`inline-block rounded-sm font-semibold uppercase transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
