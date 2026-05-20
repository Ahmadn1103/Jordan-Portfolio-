"use client";

import { useEffect, useRef, useState } from "react";

const PDF_WIDTH = 816;
const PDF_HEIGHT = 1045;

export function PdfEmbed() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const w = wrapperRef.current.getBoundingClientRect().width;
      setScale(w / PDF_WIDTH);
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: "100%", background: "white" }}>
      {scale !== null && (
        <div style={{ height: PDF_HEIGHT * scale, overflow: "hidden", position: "relative" }}>
          <iframe
            src="/Derek-Campbell-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            title="Derek Campbell Resume"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: PDF_WIDTH,
              height: PDF_HEIGHT,
              border: "none",
              transformOrigin: "top left",
              transform: `scale(${scale})`,
              background: "white",
            }}
          />
        </div>
      )}
    </div>
  );
}
