import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Color = "cyan" | "purple" | "pink" | "orange" | "green";

const colorMap: Record<Color, string> = {
  cyan: "border-transparent text-black bg-neon-cyan shadow-[0_0_14px_rgba(0,245,255,0.6)] font-semibold",
  purple: "border-transparent text-white bg-neon-purple shadow-[0_0_14px_rgba(191,90,242,0.6)] font-semibold",
  pink: "border-transparent text-white bg-neon-pink shadow-[0_0_14px_rgba(255,45,120,0.6)] font-semibold",
  orange: "border-transparent text-white bg-orange-500 shadow-[0_0_14px_rgba(255,140,0,0.6)] font-semibold",
  green: "border-transparent text-black bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.6)] font-semibold",
};

export function NeonBadge({
  children,
  color = "cyan",
  className,
}: {
  children: ReactNode;
  color?: Color;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-wider",
        colorMap[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
