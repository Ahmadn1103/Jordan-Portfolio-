"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium tracking-tight transition-all duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/60 hover:bg-neon-cyan/25 hover:shadow-[0_0_24px_rgba(0,245,255,0.6)]",
  outline:
    "bg-transparent text-foreground border border-border hover:border-neon-purple/70 hover:text-neon-purple hover:shadow-[0_0_18px_rgba(191,90,242,0.45)]",
  ghost:
    "bg-transparent text-muted hover:text-neon-cyan hover:bg-neon-cyan/5",
};

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
  children: ReactNode;
};

export function NeonButton({
  className,
  variant = "primary",
  children,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

type LinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function NeonLink({
  href,
  variant = "primary",
  children,
  className,
  external,
}: LinkProps) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
