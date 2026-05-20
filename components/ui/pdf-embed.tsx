"use client";

import { useEffect, useRef, useState } from "react";

export function PdfEmbed() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // PDF renders at 816px wide (letter). Scale it down to fit the container on mobile.
  useEffect(() => {
    const pdfNativeWidth = 816;
    const update = () => {
      if (!wrapperRef.current) return;
      const available = wrapperRef.current.clientWidth;
      setScale(available < pdfNativeWidth ? available / pdfNativeWidth : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pdfNativeWidth = 816;
  const pdfNativeHeight = 1045;

  return (
    <div
      ref={wrapperRef}
      style={{ width: "100%", height: pdfNativeHeight * scale, overflow: "hidden", background: "white" }}
    >
      <iframe
        src="/Derek-Campbell-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
        title="Derek Campbell Resume"
        style={{
          width: pdfNativeWidth,
          height: pdfNativeHeight,
          border: "none",
          display: "block",
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          background: "white",
        }}
      />
    </div>
  );
}
