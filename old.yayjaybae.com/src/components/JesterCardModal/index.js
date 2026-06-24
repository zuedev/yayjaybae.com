"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function JesterCardModal() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (searchParams.has("jester-debut-card")) {
      setOpen(true);
    }
  }, [searchParams]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.8)",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          position: "relative",
          background: "var(--yjb-black)",
          border: "3px solid var(--yjb-yellow)",
          borderRadius: "12px",
          padding: "16px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            alignSelf: "flex-end",
            background: "transparent",
            border: "none",
            color: "var(--yjb-yellow)",
            fontSize: "1.5rem",
            cursor: "pointer",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>
        <video
          src="https://yayjaybae.r2.zue.dev/JesterCardVideo.mp4"
          controls
          autoPlay
          style={{
            maxWidth: "80vw",
            maxHeight: "70vh",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}
