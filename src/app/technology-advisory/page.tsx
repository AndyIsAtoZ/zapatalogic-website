import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Fractional CTO and Consultant Director of IT",
  description:
    "Embedded technology leadership across infrastructure, endpoints, providers, business systems, security, and AI—from assessment through implementation and handoff.",
  path: "/technology-advisory",
});

const advisoryAreas = [
  "Embedded IT leadership and roadmap ownership",
  "Network, infrastructure, and communications planning",
  "MSP selection, service standards, and provider accountability",
  "Endpoint, identity, security, and continuity oversight",
  "Microsoft 365, Google Workspace, and business-platform direction",
  "AI strategy, policy, adoption, and production deployment",
];

export default function TechnologyAdvisoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fractional CTO"
        title="Fractional CTO & Consultant Director of IT"
        description="ZapataLogic provides embedded technology leadership across infrastructure, endpoints, providers, business systems, security, and AI. Engagements run from assessment and planning through implementation, operational ownership, and provider handoff—not slide decks."
        primaryLabel="Talk About Fractional CTO Support"
        primaryHref="/contact"
        secondaryLabel="Explore Apple-First Consulting"
        secondaryHref="/apple-first-consulting"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">What it is</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Your advocate on the client side of the table.</p>
          <p className="mt-5 text-base leading-8 text-slate-600">After twelve years building and operating an MSP, Andy Zapata knows how providers scope, staff, price, and escalate—and where the scope quietly stops. ZapataLogic uses that experience to represent the client, set clear expectations, and hold the work accountable.</p>
        </div>
      </PageHero>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="What the work covers"
            title="Leadership that stays involved in execution"
            description="ZapataLogic works alongside founders, operators, internal IT staff, and technical leaders. Product and scientific technology remains with the people who own it; ZapataLogic focuses on the operating environment around them."
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
        primaryLabel="Talk About Fractional CTO Support"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
