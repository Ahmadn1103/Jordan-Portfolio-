"use client";

import { useMemo } from "react";

type Spark = { id: number; left: number; top: number; size: number; delay: number; color: string };

const COLORS = ["#00f5ff", "#bf5af2", "#ff2d78"];

export function Sparkles({ count = 24 }: { count?: number }) {
  const sparks = useMemo<Spark[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="sparkle absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
