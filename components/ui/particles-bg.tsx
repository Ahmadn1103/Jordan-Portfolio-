"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  fill: string;
  shadow: string;
  alpha: number;
  alphaDir: number;
};

const COLORS = [
  { fill: "#00f5ff", shadow: "rgba(0,245,255,1)" },
  { fill: "#bf5af2", shadow: "rgba(191,90,242,1)" },
  { fill: "#ff2d78", shadow: "rgba(255,45,120,1)" },
  { fill: "#00f5ff", shadow: "rgba(0,245,255,1)" },
];

const CONNECT_DIST = 130;

export function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: Node[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn nodes — clean professional density
    const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
    for (let i = 0; i < count; i++) {
      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 2.5 + Math.random() * 3,
        fill: c.fill,
        shadow: c.shadow,
        alpha: 0.6 + Math.random() * 0.4,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const drawOrbs = () => {
      // Three large soft background glows
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, color: "rgba(0,245,255,0.07)", r: 400 },
        { x: canvas.width * 0.8, y: canvas.height * 0.6, color: "rgba(191,90,242,0.07)", r: 350 },
        { x: canvas.width * 0.5, y: canvas.height * 0.9, color: "rgba(255,45,120,0.05)", r: 300 },
      ];
      for (const o of orbs) {
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0, o.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background orbs
      drawOrbs();

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.alpha += n.alphaDir * 0.005;
        if (n.alpha >= 1.0 || n.alpha <= 0.4) n.alphaDir *= -1;
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > canvas.width) { n.x = canvas.width; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > canvas.height) { n.y = canvas.height; n.vy *= -1; }
      }

      // Draw connecting lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const lineAlpha = (1 - dist / CONNECT_DIST) * 0.35;
            ctx.save();
            ctx.globalAlpha = lineAlpha;
            ctx.strokeStyle = a.fill;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw nodes as glowing dots
      for (const n of nodes) {
        ctx.save();
        ctx.globalAlpha = n.alpha;
        ctx.shadowBlur = 14;
        ctx.shadowColor = n.shadow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.fill;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
