"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About", color: "cyan" },
  { href: "/projects", label: "Projects", color: "purple" },
  { href: "/case-studies", label: "Case Studies", color: "pink" },
  { href: "/resume", label: "Resume", color: "cyan" },
  { href: "/contact", label: "Contact", color: "purple" },
] as const;

const colorStyles = {
  cyan: {
    base: "border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.2)]",
    active: "border-neon-cyan bg-neon-cyan/20 shadow-[0_0_14px_rgba(0,245,255,0.5)]",
    hover: "hover:border-neon-cyan/70 hover:bg-neon-cyan/15 hover:shadow-[0_0_14px_rgba(0,245,255,0.35)]",
  },
  purple: {
    base: "border-neon-purple/50 bg-neon-purple/10 text-neon-purple shadow-[0_0_10px_rgba(191,90,242,0.2)]",
    active: "border-neon-purple bg-neon-purple/20 shadow-[0_0_14px_rgba(191,90,242,0.5)]",
    hover: "hover:border-neon-purple/70 hover:bg-neon-purple/15 hover:shadow-[0_0_14px_rgba(191,90,242,0.35)]",
  },
  pink: {
    base: "border-neon-pink/50 bg-neon-pink/10 text-neon-pink shadow-[0_0_10px_rgba(255,45,120,0.2)]",
    active: "border-neon-pink bg-neon-pink/20 shadow-[0_0_14px_rgba(255,45,120,0.5)]",
    hover: "hover:border-neon-pink/70 hover:bg-neon-pink/15 hover:shadow-[0_0_14px_rgba(255,45,120,0.35)]",
  },
};

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 px-6">
        <nav
          className={cn(
            "flex h-14 w-full max-w-[1280px] items-center justify-between rounded-2xl border px-6 transition-all duration-500",
            scrolled
              ? [
                  "border-white/10",
                  "bg-white/5 backdrop-blur-2xl",
                  "shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]",
                ].join(" ")
              : "border-white/5 bg-white/[0.02] backdrop-blur-sm",
          )}
        >
          <Link href="/" className="group flex items-center gap-2">
            <span className="relative inline-block h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,245,255,0.9)]" />
            <span className="text-xl font-bold tracking-tight">
              Derek
              <span className="text-neon-cyan group-hover:text-neon-purple transition-colors">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              const s = colorStyles[l.color];
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "inline-flex items-center rounded-full border px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200",
                      s.base,
                      s.hover,
                      active && s.active,
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-foreground md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-72 border-l border-border bg-card/95 px-6 pt-24 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                const s = colorStyles[l.color];
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        "inline-flex items-center rounded-full border px-4 py-2 font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-200",
                        s.base,
                        s.hover,
                        active && s.active,
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
