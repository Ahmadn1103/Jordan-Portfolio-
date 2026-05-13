"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/data";
import { motion } from "framer-motion";

const groupColors = [
  { dot: "bg-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)]", label: "text-neon-cyan", chip: "border-neon-cyan/60 bg-neon-cyan/15 text-neon-cyan" },
  { dot: "bg-neon-purple shadow-[0_0_10px_rgba(191,90,242,0.8)]", label: "text-neon-purple", chip: "border-neon-purple/60 bg-neon-purple/15 text-neon-purple" },
  { dot: "bg-neon-pink shadow-[0_0_10px_rgba(255,45,120,0.8)]", label: "text-neon-pink", chip: "border-neon-pink/60 bg-neon-pink/15 text-neon-pink" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6">
        <div className="mb-12 text-center">
          <SectionHeading
            eyebrow="Toolbox"
            title="Skills & Stack"
            subtitle="Rack & Stack, AWS, EC2, S3, CloudWatch, Linux, Windows Server."
            className="items-center"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const colors = groupColors[i % groupColors.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className={`inline-block h-2 w-2 rounded-full ${colors.dot}`} />
                  <h3 className={`font-mono text-sm uppercase tracking-[0.2em] ${colors.label}`}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`rounded-full border px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-default select-none ${colors.chip} hover:scale-105 hover:brightness-125 hover:shadow-[0_0_16px_currentColor]`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
