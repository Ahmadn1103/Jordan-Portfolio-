"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

type Color = "cyan" | "purple" | "pink" | "orange" | "green";

const colorFor = (c: ProjectCategory, slug?: string): Color => {
  if (c === "Live") return "green";
  if (slug === "asset-inventory-system") return "orange";
  if (c === "Infra") return "cyan";
  if (c === "Cloud") return "purple";
  return "pink";
};

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const openModal = (p: Project) => { setSelected(p); setImgIndex(0); };
  const closeModal = () => setSelected(null);

  useEffect(() => {
    if (!selected?.images || selected.images.length <= 1) return;
    const timer = setInterval(() => {
      setImgIndex((i) => (i + 1) % selected.images!.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [selected]);

  return (
    <>
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
                className="group cursor-pointer"
                onClick={() => openModal(p)}
              >
                <GlowingCard glowColor={colorFor(p.category, p.slug)} className="h-full">
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="h-full w-full object-cover brightness-110 contrast-105 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <NeonBadge color={colorFor(p.category, p.slug)}>
                      {p.category === "Live" ? "Live Project" : p.category}
                    </NeonBadge>
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
              className="relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lightbox} alt="Full size" className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl" />
              <button onClick={() => setLightbox(null)} className="absolute -top-3 -right-3 rounded-full border border-white/20 bg-black p-2 text-white/60 hover:text-white transition-colors">
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
                <button onClick={closeModal} className="ml-4 rounded-lg border border-white/10 p-2 text-white/40 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              {/* Image gallery */}
              {selected.images && selected.images.length > 0 && (
                <div className="relative border-b border-white/10">
                  <div
                    className="aspect-video w-full overflow-hidden bg-black cursor-zoom-in"
                    onClick={() => setLightbox(selected.images![imgIndex])}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selected.images[imgIndex]} alt={`${selected.title} screenshot ${imgIndex + 1}`} className="h-full w-full object-contain" />
                  </div>
                  {selected.images.length > 1 && (
                    <>
                      <button onClick={() => setImgIndex((i) => (i - 1 + selected.images!.length) % selected.images!.length)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white hover:bg-black/90 transition-colors">
                        <ChevronLeft size={18} />
                      </button>
                      <button onClick={() => setImgIndex((i) => (i + 1) % selected.images!.length)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white hover:bg-black/90 transition-colors">
                        <ChevronRight size={18} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {selected.images.map((_, i) => (
                          <button key={i} onClick={() => setImgIndex(i)} className={cn("h-1.5 w-1.5 rounded-full transition-all", i === imgIndex ? "bg-neon-cyan w-4" : "bg-white/30")} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Detail */}
              <div className="p-6 space-y-4">
                <div className="text-base leading-7 text-white/85">
                  <FormattedDetail text={selected.detail} />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selected.tags.map((t) => (
                    <span key={t} className={cn(
                      "rounded-md border px-2 py-0.5 font-mono text-xs font-semibold",
                      colorFor(selected.category, selected.slug) === "cyan" && "border-neon-cyan/60 bg-neon-cyan/15 text-neon-cyan",
                      colorFor(selected.category, selected.slug) === "purple" && "border-neon-purple/60 bg-neon-purple/15 text-neon-purple",
                      colorFor(selected.category, selected.slug) === "pink" && "border-neon-pink/60 bg-neon-pink/15 text-neon-pink",
                      colorFor(selected.category, selected.slug) === "orange" && "border-orange-500/60 bg-orange-500/15 text-orange-400",
                      colorFor(selected.category, selected.slug) === "green" && "border-green-400/60 bg-green-400/15 text-green-400",
                    )}>{t}</span>
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
  const paragraphs: string[][] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3));
  }
  return (
    <div className="space-y-3">
      {paragraphs.map((group, gi) => (
        <p key={gi}>{group.map((s, si) => renderLine(si > 0 ? " " + s : s, si))}</p>
      ))}
    </div>
  );
}
