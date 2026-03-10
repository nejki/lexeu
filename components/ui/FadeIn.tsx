"use client";
import { useInView } from "@/hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`fade-up${inView ? " in-view" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
