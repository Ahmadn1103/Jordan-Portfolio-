"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedProgress({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium tracking-wide text-foreground">{label}</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-border/40">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
            boxShadow: "0 0 12px rgba(0, 245, 255, 0.6)",
          }}
        />
      </div>
    </div>
  );
}
