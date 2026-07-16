"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const DISMISSED_KEY = "yjb-merch-popup-dismissed";

export default () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISSED_KEY) === "true";
    } catch (error) {
      dismissed = false;
    }

    if (dismissed) return;

    setMounted(true);
    const timeout = setTimeout(() => setVisible(true), 800);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);

    try {
      localStorage.setItem(DISMISSED_KEY, "true");
    } catch (error) {
      // ignore write errors (e.g. private browsing)
    }

    setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed z-40 bottom-24 inset-x-4 sm:inset-x-auto sm:right-6 sm:w-80 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="relative bg-black/95 backdrop-blur text-white border-2 border-[var(--yjb-yellow)] rounded-xl shadow-lg shadow-black/50 p-4 pr-9">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close merch popup"
          className="absolute top-2 right-2 text-white/70 hover:text-[var(--yjb-yellow)] transition-colors text-lg leading-none cursor-pointer"
        >
          ✕
        </button>

        <p className="text-[var(--yjb-yellow)] font-bold uppercase tracking-wide text-sm mb-1">
          🛍️ New Merch Available!
        </p>
        <p className="text-sm text-white/90 mb-3">
          Grab official YayJayBae merch from the store before it's gone.
        </p>
        <Link
          href="/fourthwall"
          className="block w-full text-center bg-[var(--yjb-yellow)] text-[var(--yjb-black)] font-bold uppercase text-sm py-2 rounded-lg transition-transform duration-200 hover:scale-105"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};
