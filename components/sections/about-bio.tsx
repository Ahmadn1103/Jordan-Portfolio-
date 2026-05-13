"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/lib/data";
import { motion } from "framer-motion";

export function AboutBio() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 md:grid-cols-[360px_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto h-72 w-72 md:mx-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan via-neon-purple to-neon-pink opacity-70 blur-2xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-neon-cyan/40 bg-card text-7xl font-bold text-neon-cyan">
            D
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
            About
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Hey, I&apos;m Derek.
          </h2>
          <GlowingCard glowColor="purple" className="p-7">
            <div className="space-y-4 text-base leading-relaxed text-foreground/90">
              <p>
                I&apos;m an IT technician with hands-on experience in data center
                operations, structured cabling, switch provisioning, and end-user
                support — focused on keeping systems running reliably.
              </p>
              <p>
                I hold a B.A. in Computer Technology from Bowie State University
                and have worked across infrastructure, cloud, and helpdesk
                environments. I care about uptime, clean documentation, and
                solving the problem before it pages someone.
              </p>
              <p className="text-muted">
                Currently in security operations at Allied Universal. Open to
                IT technician, network, and infrastructure roles.
              </p>
            </div>
          </GlowingCard>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s, i) => {
              const colors = [
                { border: "border-neon-cyan/60 shadow-[0_0_14px_rgba(0,245,255,0.25)]", badge: "border-neon-cyan/50 bg-neon-cyan/15 text-white", ticker: "text-neon-cyan" },
                { border: "border-neon-purple/60 shadow-[0_0_14px_rgba(191,90,242,0.25)]", badge: "border-neon-purple/50 bg-neon-purple/15 text-white", ticker: "text-neon-purple" },
                { border: "border-neon-pink/60 shadow-[0_0_14px_rgba(255,45,120,0.25)]", badge: "border-neon-pink/50 bg-neon-pink/15 text-white", ticker: "text-neon-pink" },
              ][i % 3];
              return (
                <div
                  key={s.label}
                  className={`rounded-xl border bg-card/60 p-4 text-center ${colors.border}`}
                >
                  <NumberTicker
                    value={s.value}
                    suffix={s.suffix}
                    className={`text-3xl ${colors.ticker}`}
                  />
                  <span className={`mt-2 inline-block rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest font-semibold ${colors.badge}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
