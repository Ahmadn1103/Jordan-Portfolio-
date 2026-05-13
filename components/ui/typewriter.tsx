"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Typewriter({
  words,
  className,
  speed = 80,
  pause = 1600,
}: {
  words: string[];
  className?: string;
  speed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((cur) =>
        deleting ? cur.slice(0, -1) : word.slice(0, cur.length + 1),
      );
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return (
    <span className={cn("font-mono", className)}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-neon-cyan align-middle h-[1em]" />
    </span>
  );
}
