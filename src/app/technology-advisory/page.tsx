import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Technology Advisory for Small Business",
  description:
    "Strategic technology advisory for small businesses, including systems guidance, vendor decisions, project prioritization, and operational alignment.",
  path: "/technology-advisory",
});

const advisoryAreas = [
  "Technology strategy for growing small businesses",
  "Vendor evaluation and decision support",
  "Project prioritization and sequencing",
  "Operational systems guidance",
  "Business-aligned recommendations instead of reactive noise",
  "Sharper execution for founders and leadership teams",
];

export default function TechnologyAdvisoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Advisory"
        title="Technology Advisory for Small Business Growth"
        description="ZapataLogic provides strategic technology guidance for businesses that need clearer decisions, stronger execution, and operational systems that support growth without unnecessary complexity."
        primaryLabel="Talk About Advisory Support"
        primaryHref="/contact"
        secondaryLabel="Explore Apple-First Consulting"
        secondaryHref="/apple-first-consulting"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">What it is</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">A strategic layer for business technology decisions.</p>
          <p className="mt-5 text-base leading-8 text-slate-600">This is built for leaders who need sound judgment on systems, vendors, priorities, and execution without defaulting to a generic managed-services model.</p>
        </div>
      </PageHero>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="What advisory covers"
            title="Technology guidance that supports growth, not noise"
            description="The work is meant to help decision-makers make better calls on where technology is helping, where it is creating friction, and what should happen next."
          />
          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {advisoryAreas.map((item) => (
              <div key={item} className="border-t border-slate-300 pt-5">
                <p className="text-lg leading-8 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need clearer technology direction as the business grows?"
        description="ZapataLogic can help evaluate priorities, guide vendor decisions, shape initiatives, and keep business technology aligned with how the company actually operates."
        primaryLabel="Talk About Advisory Support"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
