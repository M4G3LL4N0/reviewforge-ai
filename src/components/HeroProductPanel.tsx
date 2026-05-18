"use client";

export function HeroProductPanel() {
  return (
    <div className="relative w-full" aria-label="Product workflow preview (demo sample data)">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-transparent blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl ring-1 ring-violet-500/20 backdrop-blur sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">Product workspace</p>
          <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] text-violet-300">Workflow intelligence</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div key="Tasks" className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Tasks</p>
            <p className="mt-0.5 text-sm font-semibold text-white">24</p>
          </div>
          <div key="Done" className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Done</p>
            <p className="mt-0.5 text-sm font-semibold text-white">18</p>
          </div>
          <div key="Risk" className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Risk</p>
            <p className="mt-0.5 text-sm font-semibold text-white">Low</p>
          </div>
        </div>
        <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-black/30 p-3">
          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Workflow</p>
          <div className="space-y-2">
            <div key="Input" className="flex items-center gap-2 text-xs text-slate-300">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-[10px] font-medium text-slate-400">1</span>
              Input
            </div>
            <div key="Process" className="flex items-center gap-2 text-xs text-slate-300">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-[10px] font-medium text-slate-400">2</span>
              Process
            </div>
            <div key="Output" className="flex items-center gap-2 text-xs text-slate-300">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-[10px] font-medium text-slate-400">3</span>
              Output
            </div>
            <div key="Next" className="flex items-center gap-2 text-xs text-slate-300">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-[10px] font-medium text-slate-400">4</span>
              Next
            </div>
          </div>
        </div>
        <svg className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 opacity-30" viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-white/15" />
        </svg>
        <p className="mt-4 text-[10px] leading-relaxed text-slate-500">Sample interface — illustrative metrics for local review.</p>
      </div>
    </div>
  );
}
