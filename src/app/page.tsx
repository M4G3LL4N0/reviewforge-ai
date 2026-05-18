import { ReviewStudio } from "@/components/ReviewStudio";
import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>
        <MarketingGraphicsStack />
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-24">
        <p className="text-xs uppercase tracking-[0.28em] text-amber-400/90">Draft review workspace</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Score copy before you ship it.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          ReviewForge turns a rough draft into a rubric scorecard — clarity, evidence, safety, and completeness —
          so reviewers can approve faster with fewer surprises.
        </p>
        <a
          href="#studio"
          className="mt-8 inline-flex rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-black"
        >
          Try the studio
        </a>
      </section>
      <ReviewStudio />
    </div>
  );
}
