export function ParticlesBg() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 15% 20%, rgba(0,245,255,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 60% 50% at 85% 65%, rgba(191,90,242,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 50% 95%, rgba(255,45,120,0.05) 0%, transparent 70%)
        `,
      }}
    />
  );
}
