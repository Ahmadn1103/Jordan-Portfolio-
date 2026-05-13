"use client";

import { education, experience } from "@/lib/data";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function ResumeTimeline() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="mb-10 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
            Career Path
          </p>
          <a
            href="/Derek-Campbell-Resume.docx"
            download="Derek Campbell Resume.docx"
            className="pulse-glow inline-flex items-center gap-2 rounded-xl border border-neon-cyan/60 bg-neon-cyan/15 px-5 py-2.5 text-sm font-medium text-neon-cyan transition-colors hover:bg-neon-cyan/25"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <Column title="Experience">
            {experience.map((e, i) => (
              <TimelineNode key={`${e.role}-${e.company}`} index={i} last={i === experience.length - 1}>
                <p className="font-mono text-xs uppercase tracking-widest text-neon-purple">
                  {e.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-muted">{e.company}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  {e.bullets.map((b) => (
                    <li key={b} className="relative pl-4">
                      <span className="absolute left-0 top-2 inline-block h-1 w-1 rounded-full bg-neon-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </TimelineNode>
            ))}
          </Column>

          <Column title="Education & Certifications">
            {education.map((e, i) => (
              <TimelineNode
                key={`${e.degree}-${e.year}`}
                index={i}
                last={i === education.length - 1}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-neon-purple">
                  {e.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted">{e.institution}</p>
              </TimelineNode>
            ))}
          </Column>
        </div>
      </div>
    </section>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold tracking-tight">{title}</h2>
      <div className="relative">{children}</div>
    </div>
  );
}

function TimelineNode({
  children,
  index,
  last,
}: {
  children: React.ReactNode;
  index: number;
  last: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="relative pb-10 pl-8"
    >
      <span className="absolute left-0 top-2 inline-block h-3 w-3 -translate-x-1/2 rounded-full bg-neon-cyan shadow-[0_0_14px_rgba(0,245,255,0.9)]" />
      {!last && (
        <span className="absolute left-0 top-5 h-full w-px -translate-x-1/2 bg-gradient-to-b from-neon-cyan/60 to-transparent" />
      )}
      {children}
    </motion.div>
  );
}
