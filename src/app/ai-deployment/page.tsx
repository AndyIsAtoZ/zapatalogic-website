import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro } from "@/components/site";

export const metadata: Metadata = {
  title: "Practical AI Enablement for Small Business | ZapataLogic",
  description:
    "Practical AI enablement for small business with workflow identification, automation opportunities, tool selection, rollout planning, and adoption support.",
};

const capabilities = [
  "Identify AI and automation opportunities tied to real operational friction",
  "Map workflows before introducing tools",
  "Select technology based on fit, usability, and risk",
  "Plan rollout in a way teams can absorb",
  "Support adoption so useful ideas become daily practice",
  "Keep the work grounded in business value instead of hype",
];

export default function AIDeploymentPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI capability"
        title="Practical AI Enablement for Small Business"
        description="ZapataLogic helps growing businesses identify where AI and automation can create real operational value, choose the right tools, and implement them in a way teams can actually use."
        primaryLabel="Talk About AI Enablement"
        primaryHref="/contact"
        secondaryLabel="Explore Technology Advisory"
        secondaryHref="/technology-advisory"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">How it fits</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">AI is a capability, not the identity.</p>
          <p className="mt-5 text-base leading-8 text-slate-600">The focus is operational improvement: better workflows, less wasted time, and stronger execution inside the business you are already building.</p>
        </div>
      </PageHero>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="What it includes"
            title="Practical implementation, not AI theater"
            description="The goal is not to pile on tools. It is to identify the highest-leverage use cases, implement them cleanly, and support adoption across the team."
          />
          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="border-t border-slate-300 pt-5">
                <p className="text-lg leading-8 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Why it matters"
            title="AI should improve execution, not add distraction"
            description="For most small businesses, the win is not novelty. It is faster work, less friction, cleaner handoffs, and more confidence in how the business operates day to day."
          />
        </div>
      </section>

      <CTASection
        title="Want to identify the right AI opportunities for the business?"
        description="Start with a focused conversation about workflow bottlenecks, operational friction, and where practical AI enablement can create measurable leverage."
        primaryLabel="Talk About AI Enablement"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
