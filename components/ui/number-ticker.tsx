"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function NumberTicker({
  value,
  suffix = "",
  className,
  duration = 1.5,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (latest) => Math.round(latest));
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    return display.on("change", (v) => setShown(v));
  }, [display]);

  return (
    <motion.span ref={ref} className={cn("font-sans font-bold", className)}>
      {shown}
      {suffix}
    </motion.span>
  );
}
