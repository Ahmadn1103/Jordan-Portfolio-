import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/60 bg-neon-cyan/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.25)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_6px_rgba(0,245,255,0.9)]" />
            © {new Date().getFullYear()} Derek Campbell
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Jordan-2269"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 rounded-full border border-neon-cyan/60 bg-neon-cyan/10 px-3 py-1.5 text-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.25)] transition-all hover:bg-neon-cyan/20 hover:shadow-[0_0_18px_rgba(0,245,255,0.5)]"
          >
            <GithubIcon size={15} />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/derek-campbell-25750131a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 rounded-full border border-neon-purple/60 bg-neon-purple/10 px-3 py-1.5 text-neon-purple shadow-[0_0_10px_rgba(191,90,242,0.25)] transition-all hover:bg-neon-purple/20 hover:shadow-[0_0_18px_rgba(191,90,242,0.5)]"
          >
            <LinkedinIcon size={15} />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">LinkedIn</span>
          </Link>
          <Link
            href="mailto:derek.campbell6940@gmail.com"
            aria-label="Contact"
            className="flex items-center gap-2 rounded-full border border-neon-pink/60 bg-neon-pink/10 px-3 py-1.5 text-neon-pink shadow-[0_0_10px_rgba(255,45,120,0.25)] transition-all hover:bg-neon-pink/20 hover:shadow-[0_0_18px_rgba(255,45,120,0.5)]"
          >
            <Mail size={15} />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
