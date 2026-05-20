"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { cn } from "@/lib/utils";
import { projects, type Project, type ProjectCategory } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", "Live", "Infra", "Cloud", "Support"];

type Color = "cyan" | "purple" | "pink" | "orange" | "green";

const colorFor = (c: ProjectCategory, slug?: string): Color => {
  if (c === "Live") return "green";
  if (slug === "asset-inventory-system") return "orange";
  if (c === "Infra") return "cyan";
  if (c === "Cloud") return "purple";
  return "pink";
};

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const openModal = (p: Project) => {
    setSelected(p);
    setImgIndex(0);
  };

  const closeModal = () => setSelected(null);

  // Auto-advance images every 3 seconds
  useEffect(() => {
    if (!selected?.images || selected.images.length <= 1) return;
    const timer = setInterval(() => {
      setImgIndex((i) => (i + 1) % selected.images!.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [selected]);

  return (
    <>
      <section className="py-16">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="mb-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              const isLive = f === "Live";
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={cn(
                    "relative rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all",
                    active && !isLive && "border-neon-cyan/70 bg-neon-cyan/10 text-neon-cyan shadow-[0_0_18px_rgba(0,245,255,0.4)]",
                    active && isLive && "border-green-400/70 bg-green-400/10 text-green-400 shadow-[0_0_18px_rgba(74,222,128,0.4)]",
                    !active && "border-border bg-card/40 text-muted hover:border-neon-cyan/40 hover:text-foreground",
                  )}
                >
                  {isLive && (
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.9)]" />
                  )}
                  {f === "Live" ? "Live Projects" : f}
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
                  className="group cursor-pointer"
                  onClick={() => openModal(p)}
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
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      )}
                    </div>
                    <div className="space-y-3 p-6">
                      <div className="flex items-center gap-2">
                        <NeonBadge color={colorFor(p.category, p.slug)}>
                          {p.category === "Live" ? "Live Project" : p.category}
                        </NeonBadge>
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
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
                              colorFor(p.category, p.slug) === "green" && "border-green-400/60 bg-green-400/15 text-green-400",
                            )}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="pt-1 font-mono text-sm text-white/70 group-hover:text-neon-cyan transition-colors">
                        Click to view details →
                      </p>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-black/95" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt="Full size preview"
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 rounded-full border border-white/20 bg-black p-2 text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0d18] shadow-[0_0_60px_rgba(0,245,255,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/10 p-6">
                <div className="space-y-1.5">
                  <NeonBadge color={colorFor(selected.category, selected.slug)}>
                    {selected.category === "Live" ? "Live Project" : selected.category}
                  </NeonBadge>
                  <h2 className="text-xl font-bold tracking-tight">{selected.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-4 rounded-lg border border-white/10 p-2 text-white/40 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image gallery */}
              {selected.images && selected.images.length > 0 && (
                <div className="relative border-b border-white/10">
                  <div
                    className="aspect-video w-full overflow-hidden bg-black cursor-zoom-in relative group/img"
                    onClick={() => setLightbox(selected.images![imgIndex])}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selected.images[imgIndex]}
                      alt={`${selected.title} screenshot ${imgIndex + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  {selected.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setImgIndex((i) => (i - 1 + selected.images!.length) % selected.images!.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white hover:bg-black/90 transition-colors"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => setImgIndex((i) => (i + 1) % selected.images!.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white hover:bg-black/90 transition-colors"
                      >
                        <ChevronRight size={18} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {selected.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImgIndex(i)}
                            className={cn(
                              "h-1.5 w-1.5 rounded-full transition-all",
                              i === imgIndex ? "bg-neon-cyan w-4" : "bg-white/30",
                            )}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Detail text */}
              <div className="p-6 space-y-4">
                <div className="text-base leading-7 text-white/85">
                  <FormattedDetail text={selected.detail} />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selected.tags.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "rounded-md border px-2 py-0.5 font-mono text-xs font-semibold",
                        colorFor(selected.category, selected.slug) === "cyan" && "border-neon-cyan/60 bg-neon-cyan/15 text-neon-cyan",
                        colorFor(selected.category, selected.slug) === "purple" && "border-neon-purple/60 bg-neon-purple/15 text-neon-purple",
                        colorFor(selected.category, selected.slug) === "pink" && "border-neon-pink/60 bg-neon-pink/15 text-neon-pink",
                        colorFor(selected.category, selected.slug) === "orange" && "border-orange-500/60 bg-orange-500/15 text-orange-400",
                        colorFor(selected.category, selected.slug) === "green" && "border-green-400/60 bg-green-400/15 text-green-400",
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FormattedDetail({ text }: { text: string }) {
  // Split on sentence-ending punctuation to create paragraphs, then bold **phrases**
  const sentences = text.split(/(?<=\.)\s+/);
  const renderLine = (line: string, key: number) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={key}>
        {parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i} className="font-bold text-white">{part}</strong> : part
        )}
      </span>
    );
  };

  // Group into paragraphs of ~3 sentences
  const paragraphs: string[][] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3));
  }

  return (
    <div className="space-y-3">
      {paragraphs.map((group, gi) => (
        <p key={gi}>
          {group.map((s, si) => renderLine(si > 0 ? " " + s : s, si))}
        </p>
      ))}
    </div>
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
      <text x="160" y="100" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#ff2d78">
        TICKET #1042 — RESOLVED
      </text>
    </svg>
  );
}
