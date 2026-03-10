"use client";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ target, suffix = "", prefix = "", duration = 1400, className = "" }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.3);
  const value = useCountUp(target, duration, inView);
  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
}
