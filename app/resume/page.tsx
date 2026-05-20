import { ResumeTimeline } from "@/components/sections/resume-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { PdfEmbed } from "@/components/ui/pdf-embed";

export const metadata = {
  title: "Resume — Derek Campbell",
  description: "Derek Campbell's experience, education, and technical skills in IT and infrastructure.",
};

export default function ResumePage() {
  return (
    <>
      <section className="pt-16 pb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <SectionHeading
            eyebrow="Curriculum"
            title="Resume"
            subtitle="IT technician with hands-on experience across infrastructure, cloud, and support."
          />
        </div>
      </section>

      {/* PDF embed */}
      <section className="pb-12">
        <div className="mx-auto w-full max-w-[860px] px-6">
          {/* Decorative glow ring */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-neon-cyan/30 via-neon-purple/20 to-transparent blur-sm" />
            <div className="relative overflow-hidden rounded-2xl border border-neon-cyan/25 shadow-[0_0_60px_rgba(0,245,255,0.08)]">
              {/* Custom header bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,245,255,0.9)]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                    Derek-Campbell-Resume.pdf
                  </span>
                </div>
                <a
                  href="/Derek-Campbell-Resume.pdf"
                  download="Derek Campbell Resume.pdf"
                  className="font-mono text-xs uppercase tracking-widest text-neon-cyan hover:text-white transition-colors"
                >
                  Download
                </a>
              </div>
              {/* PDF — scales to fit on mobile, full size on desktop */}
              <PdfEmbed />
            </div>
          </div>
        </div>
      </section>

      <ResumeTimeline />
    </>
  );
}
