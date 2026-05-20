"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useState, type ReactNode } from "react";

type GlowingCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  glowColor?: "cyan" | "purple" | "pink" | "orange" | "green";
  className?: string;
};

const glowMap = {
  cyan: "0, 245, 255",
  purple: "191, 90, 242",
  pink: "255, 45, 120",
  orange: "255, 140, 0",
  green: "74, 222, 128",
};

export function GlowingCard({
  children,
  glowColor = "cyan",
  className,
  ...rest
}: GlowingCardProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const rgb = glowMap[glowColor];

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card",
        "transition-shadow duration-300",
        className,
      )}
      style={{
        boxShadow: hover
          ? `0 0 24px rgba(${rgb}, 0.35), 0 0 60px rgba(${rgb}, 0.15)`
          : `0 0 0 rgba(${rgb}, 0)`,
      }}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(${rgb}, 0.18), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
