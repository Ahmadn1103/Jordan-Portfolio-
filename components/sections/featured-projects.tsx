"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const colorFor = (c: ProjectCategory, slug?: string) =>
  slug === "asset-inventory-system" ? "orange" : c === "Infra" ? "cyan" : c === "Cloud" ? "purple" : "pink";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="relative py-24" id="featured">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Work"
            title="Latest Projects"
            subtitle="Selected work across infrastructure, cloud, and IT support."
          />
          <Link
            href="/projects"
            className="hidden items-center gap-2 font-mono text-sm text-neon-cyan hover:text-neon-purple md:inline-flex"
          >
            See all <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <GlowingCard
                glowColor={colorFor(p.category, p.slug)}
                className="h-full"
              >
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10">
                  {p.thumbnail.startsWith("http") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="h-full w-full object-cover brightness-110 contrast-105 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  ) : (
                    <ProjectThumb category={p.category} />
                  )}
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center gap-2">
                    <NeonBadge color={colorFor(p.category, p.slug)}>
                      {p.category}
                    </NeonBadge>
                  </div>
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
        </div>
      </div>
    </section>
  );
}

function ProjectThumb({ category }: { category: ProjectCategory }) {
  if (category === "Infra") {
    return (
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <defs>
          <linearGradient id="infra-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[1, 2, 3, 4].map((i) => (
          <rect key={i} x={20} y={20 + i * 32} width={280} height={20} rx={4} fill="url(#infra-g)" opacity={0.4 + i * 0.15} />
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
          <linearGradient id="cloud-g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#bf5af2" />
            <stop offset="100%" stopColor="#00f5ff" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="url(#cloud-g)"
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
      <g stroke="#ff2d78" strokeWidth="1.5" fill="none" opacity="0.8">
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
