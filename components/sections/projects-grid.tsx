"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { cn } from "@/lib/utils";
import { projects, type ProjectCategory } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", "Infra", "Cloud", "Support"];

const colorFor = (c: ProjectCategory, slug?: string) =>
  slug === "asset-inventory-system" ? "orange" : c === "Infra" ? "cyan" : c === "Cloud" ? "purple" : "pink";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "relative rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all",
                  active
                    ? "border-neon-cyan/70 bg-neon-cyan/10 text-neon-cyan shadow-[0_0_18px_rgba(0,245,255,0.4)]"
                    : "border-border bg-card/40 text-muted hover:border-neon-cyan/40 hover:text-foreground",
                )}
              >
                {f}
              </button>
            );
          })}
          <span className="ml-auto self-center font-mono text-xs text-muted">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                className="group"
              >
                <GlowingCard glowColor={colorFor(p.category, p.slug)} className="h-full">
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10">
                    {p.thumbnail.startsWith("http") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="h-full w-full object-cover brightness-110 contrast-105 transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    ) : (
                      <CategoryArt category={p.category} />
                    )}
                  </div>
                  <div className="space-y-3 p-6">
                    <NeonBadge color={colorFor(p.category, p.slug)}>{p.category}</NeonBadge>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/90">{p.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className={cn(
                            "rounded-md border px-2 py-0.5 font-mono text-xs font-semibold",
                            colorFor(p.category, p.slug) === "cyan" && "border-neon-cyan/60 bg-neon-cyan/15 text-neon-cyan",
                            colorFor(p.category, p.slug) === "purple" && "border-neon-purple/60 bg-neon-purple/15 text-neon-purple",
                            colorFor(p.category, p.slug) === "pink" && "border-neon-pink/60 bg-neon-pink/15 text-neon-pink",
                            colorFor(p.category, p.slug) === "orange" && "border-orange-500/60 bg-orange-500/15 text-orange-400",
                          )}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CategoryArt({ category }: { category: ProjectCategory }) {
  if (category === "Infra") {
    return (
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <defs>
          <linearGradient id="infra-g2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[1, 2, 3, 4].map((i) => (
          <rect key={i} x={20} y={20 + i * 32} width={280} height={20} rx={4} fill="url(#infra-g2)" opacity={0.4 + i * 0.15} />
        ))}
        {[60, 120, 180, 240].map((x, i) => (
          <circle key={i} cx={x} cy={36 + (i % 2) * 32} r={5} fill="#00f5ff" />
        ))}
      </svg>
    );
  }
  if (category === "Cloud") {
    return (
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <defs>
          <linearGradient id="cloud-g2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#bf5af2" />
            <stop offset="100%" stopColor="#00f5ff" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="url(#cloud-g2)"
          strokeWidth="3"
          points="10,140 50,120 90,90 130,110 170,70 210,80 250,40 290,60"
        />
        {[[50, 120], [90, 90], [170, 70], [250, 40]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#00f5ff" />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <g stroke="#ff2d78" strokeWidth="1.5" fill="none" opacity="0.7">
        {[40, 80, 120].map((y, i) => (
          <rect key={i} x={30} y={y} width={260} height={28} rx={4} />
        ))}
      </g>
      <text
        x="160"
        y="100"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        fill="#ff2d78"
      >
        TICKET #1042 — RESOLVED
      </text>
    </svg>
  );
}
