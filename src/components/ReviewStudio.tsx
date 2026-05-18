"use client";

import { useMemo, useState } from "react";
import { scoreReviewDraft } from "@/lib/scoreReview";

const SAMPLE =
  "We will 10x conversion with AI personalization. Assumption: buyers want fully automated reviews without human oversight. Timeline: 6 weeks to enterprise rollout.";

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-zinc-400">
        <span>{label}</span>
        <span className="font-mono text-amber-300">{value}/100</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function ReviewStudio() {
  const [draft, setDraft] = useState(SAMPLE);
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => scoreReviewDraft(draft), [draft]);

  async function copyScores() {
    if (!result.copyBlock) return;
    await navigator.clipboard.writeText(result.copyBlock);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="studio" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400/90">Input</p>
          <h2 className="mt-2 text-lg font-semibold text-white">Paste a draft to review</h2>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={14}
            className="mt-4 w-full rounded-xl border border-zinc-800 bg-black/60 p-4 font-mono text-sm text-zinc-100 outline-none ring-amber-500/30 focus:ring"
            placeholder="Paste product copy, memo section, or PR description…"
          />
          <p className="mt-3 text-xs text-zinc-500">
            Demo scoring uses local heuristics only — not a live model call.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-br from-zinc-950 to-zinc-900 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-400/90">Output</p>
            <p className="mt-2 text-3xl font-semibold text-white">{result.scores.overall}/100</p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">{result.summary}</p>
            <div className="mt-6 grid gap-4">
              <Meter label="Clarity" value={result.scores.clarity} />
              <Meter label="Evidence" value={result.scores.evidence} />
              <Meter label="Safety / honesty" value={result.scores.safety} />
              <Meter label="Completeness" value={result.scores.completeness} />
            </div>
            <button
              type="button"
              onClick={copyScores}
              disabled={!result.copyBlock}
              className="mt-6 w-full rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-black disabled:opacity-40"
            >
              {copied ? "Copied" : "Copy scorecard"}
            </button>
          </div>

          {result.strengths.length > 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-sm font-semibold text-white">Strengths</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {result.strengths.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {result.gaps.length > 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-sm font-semibold text-white">Gaps</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {result.gaps.map((g) => (
                  <li key={g}>• {g}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
