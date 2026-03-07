import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection, PageHero, SectionIntro } from "@/components/site";

export const metadata: Metadata = {
  title: "Technology Advisory for Growing Businesses | ZapataLogic",
  description:
    "Strategic technology advisory for growing businesses, including fractional technology leadership, vendor oversight, project planning, and operational systems guidance.",
};

const advisoryAreas = [
  "Small business technology strategy",
  "Fractional technology leadership",
  "Vendor oversight and decision support",
  "Project planning and prioritization",
  "Operational systems guidance",
  "Smarter business technology decisions as the company grows",
];

export default function TechnologyAdvisoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Strategic guidance"
        title="Technology Advisory for Growing Businesses"
        description="ZapataLogic provides strategic technology guidance for companies that need clearer decisions, stronger execution, and leadership that goes beyond reactive support."
        primaryLabel="Talk About Advisory Support"
        primaryHref="/contact"
        secondaryLabel="Explore AI Deployment"
        secondaryHref="/ai-deployment"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Positioning</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">A strategic partner for business technology decisions.</p>
          <p className="mt-4 text-base leading-7 text-slate-600">This is built for decision-makers who need sound judgment on systems, vendors, priorities, and execution, without hiring full-time leadership too early.</p>
        </div>
      </PageHero>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="What advisory covers"
            title="Technology guidance that supports growth, not noise"
            description="The work is designed to help leadership teams make better calls on where technology is helping, where it is creating friction, and what should happen next."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {advisoryAreas.map((item) => (
              <Card key={item} className="rounded-[1.5rem] border-slate-200 shadow-sm shadow-slate-200/50">
                <CardContent className="p-6">
                  <p className="text-base font-medium leading-7 text-slate-800">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need clearer technology leadership as the business grows?"
        description="ZapataLogic can help evaluate priorities, guide vendor decisions, shape initiatives, and keep technology aligned with business goals."
        primaryLabel="Talk About Advisory Support"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
