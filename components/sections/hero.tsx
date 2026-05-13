"use client";

import { Sparkles } from "@/components/ui/sparkles";
import { Typewriter } from "@/components/ui/typewriter";
import { NeonLink } from "@/components/ui/neon-button";
import { motion } from "framer-motion";
import { ArrowDown, Server, Sparkle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <Sparkles count={36} />

      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,245,255,0.5), rgba(191,90,242,0.3) 50%, transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 pt-24 text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan"
        >
          <Sparkle size={12} className="animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl"
        >
          <span className="bg-gradient-to-r from-neon-cyan via-foreground to-neon-purple bg-clip-text text-transparent">
            Derek
          </span>
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          className="mt-4 flex items-center gap-3 text-lg text-muted md:text-xl"
        >
          <Server size={18} className="text-neon-cyan" />
          <Typewriter
            words={["IT Technician", "Network Engineer", "Data Center Ops"]}
            className="text-foreground"
          />
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          className="mt-6 max-w-2xl text-base text-muted md:text-lg"
        >
          Building reliable infrastructure — from structured cabling and switch provisioning
          to cloud operations and end-user support.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <NeonLink href="/projects" variant="primary">
            View Projects
          </NeonLink>
          <NeonLink href="/resume" variant="outline">
            Download Resume
          </NeonLink>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll down"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-border p-2 text-muted"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
