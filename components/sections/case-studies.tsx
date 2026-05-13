"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { caseStudies } from "@/lib/data";
import { motion } from "framer-motion";

export function CaseStudies() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1280px] space-y-10 px-6">
        {caseStudies.map((cs, i) => (
          <motion.article
            key={cs.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <GlowingCard glowColor={i % 2 === 0 ? "cyan" : "purple"}>
              <div className="border-l-2 border-neon-cyan p-8 md:p-10">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
                  Case Study {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
                  {cs.title}
                </h3>

                <div className="grid gap-8 md:grid-cols-3">
                  <CaseBlock label="Problem" body={cs.problem} />
                  <CaseBlock label="Approach" body={cs.approach} />
                  <CaseBlock label="Result" body={cs.result} />
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {cs.metrics.map((m, mi) => {
                    const colors = [
                      { value: "text-neon-cyan", badge: "border-neon-cyan/60 bg-neon-cyan/15 text-neon-cyan" },
                      { value: "text-neon-purple", badge: "border-neon-purple/60 bg-neon-purple/15 text-neon-purple" },
                      { value: "text-neon-pink", badge: "border-neon-pink/60 bg-neon-pink/15 text-neon-pink" },
                    ][mi % 3];
                    return (
                      <div key={m.label} className={`rounded-xl border p-4 ${colors.badge}`}>
                        <p className={`font-sans text-2xl font-bold md:text-3xl ${colors.value}`}>
                          {m.value}
                        </p>
                        <span className={`mt-3 inline-block rounded-full border px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-white ${colors.badge}`}>
                          {m.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlowingCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-neon-purple">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
