"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          ReviewForge
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <a href="#studio" className="hover:text-white">
            Studio
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-white md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden>{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open ? (
        <nav className="border-t border-zinc-800 px-6 py-3 md:hidden">
          <a href="#studio" className="block py-2 text-sm text-zinc-200" onClick={() => setOpen(false)}>
            Open studio
          </a>
          <p className="pt-2 text-[11px] text-zinc-500">
            Scores are demo heuristics — human review required before external publication.
          </p>
        </nav>
      ) : null}
    </header>
  );
}
