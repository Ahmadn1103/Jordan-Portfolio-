"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { NeonButton } from "@/components/ui/neon-button";
import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      setError("All fields are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setState("submitting");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error || "Something went wrong. Please try again.");
      setState("idle");
      return;
    }
    setState("sent");
  }

  return (
    <section className="py-16">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 md:grid-cols-[1fr_360px]">
        <GlowingCard glowColor="cyan">
          <div className="p-8 md:p-10">
            {state === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-neon-cyan bg-neon-cyan/10 shadow-[0_0_24px_rgba(0,245,255,0.4)]">
                  <Check size={32} className="text-neon-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message sent!</h3>
                <NeonButton type="button" onClick={() => setState("idle")} className="mt-2">
                  <Send size={16} /> Send another message
                </NeonButton>
              </motion.div>
            ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <Field label="Name" name="name" placeholder="Ada Lovelace" />
              <Field label="Email" name="email" type="email" placeholder="ada@example.com" />
              <Field label="Subject" name="subject" placeholder="Job opportunity, question, collaboration…" />
              <Field
                label="Message"
                name="message"
                placeholder="Tell me about your project, role, or question…"
                textarea
              />
              {error && (
                <p className="font-mono text-xs text-neon-pink">{error}</p>
              )}
              <NeonButton
                type="submit"
                disabled={state === "submitting"}
                className="w-full md:w-auto"
              >
                {state === "submitting" ? "Sending…" : (
                  <>
                    <Send size={16} /> Send message
                  </>
                )}
              </NeonButton>
            </form>
            )}
          </div>
        </GlowingCard>

        <aside className="space-y-4">
          <ContactLink
            href="mailto:derek.campbell6940@gmail.com"
            icon={<Mail size={18} />}
            label="derek.campbell6940@gmail.com"
            sub="Email"
            color="cyan"
          />
          <ContactLink
            href="https://www.linkedin.com/in/derek-campbell-25750131a/"
            icon={<LinkedinIcon size={18} />}
            label="Derek Campbell"
            sub="LinkedIn"
            color="purple"
          />
          <ContactLink
            href="https://github.com/Jordan-2269"
            icon={<GithubIcon size={18} />}
            label="@Jordan-2269"
            sub="GitHub"
            color="pink"
          />
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const baseCls =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted/60 focus:border-neon-cyan/60 focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-colors";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neon-cyan">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={baseCls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={baseCls} />
      )}
    </label>
  );
}

function ContactLink({
  href,
  icon,
  label,
  sub,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  color: "cyan" | "purple" | "pink";
}) {
  const ring = {
    cyan: "hover:border-neon-cyan/60 hover:text-neon-cyan hover:shadow-[0_0_18px_rgba(0,245,255,0.4)]",
    purple: "hover:border-neon-purple/60 hover:text-neon-purple hover:shadow-[0_0_18px_rgba(191,90,242,0.4)]",
    pink: "hover:border-neon-pink/60 hover:text-neon-pink hover:shadow-[0_0_18px_rgba(255,45,120,0.4)]",
  }[color];
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 text-foreground transition-all ${ring}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/40">
        {icon}
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{sub}</p>
        <p className="text-sm font-medium">{label}</p>
      </div>
    </a>
  );
}
