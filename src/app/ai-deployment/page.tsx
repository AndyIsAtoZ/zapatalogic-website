import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Deployment for Small Business | ZapataLogic",
  description:
    "AI deployment for small business with opportunity assessment, workflow identification, tool selection, rollout planning, and team enablement.",
};

const capabilities = [
  "AI opportunity assessments tied to business priorities",
  "Workflow identification and process mapping",
  "Tool selection guidance based on fit, risk, and usability",
  "Implementation planning and rollout sequencing",
  "Team enablement and practical adoption support",
  "Business-focused AI deployment without hype or unnecessary complexity",
];

export default function AIDeploymentPage() {
  return (
    <main>
      <PageHero
        eyebrow="Primary service"
        title="AI Deployment for Small Business"
        description="ZapataLogic helps growing businesses identify where AI can create real operational value, choose the right tools, and roll them out in a way teams can actually use."
        primaryLabel="Schedule an AI Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Technology Advisory"
        secondaryHref="/technology-advisory"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">What this looks like</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Practical deployment work, not AI theater.</p>
          <p className="mt-4 text-base leading-7 text-slate-600">The focus is operational improvement: better workflows, less wasted time, and stronger decision-making support across the business.</p>
        </div>
      </PageHero>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Scope"
            title="How ZapataLogic approaches AI deployment"
            description="The goal is not to pile on tools. It is to identify the highest-leverage use cases, implement them cleanly, and support adoption across the team."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <Card key={item} className="rounded-[1.5rem] border-slate-200 shadow-sm shadow-slate-200/50">
                <CardContent className="flex gap-4 p-6">
                  <div className="mt-1 rounded-full bg-blue-50 p-2 text-blue-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Why it matters"
            title="AI should improve execution, not add distraction"
            description="For most small businesses, the real win is not novelty. It is faster work, less friction, cleaner handoffs, and more confidence in how the business operates day to day. That is the standard for every recommendation here."
          />
        </div>
      </section>

      <CTASection
        title="Ready to identify the right AI opportunities for the business?"
        description="Start with a focused conversation about workflow bottlenecks, operational friction, and where practical AI deployment can create measurable leverage."
        primaryLabel="Schedule an AI Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
