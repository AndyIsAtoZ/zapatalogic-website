import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection, PageHero, SectionIntro } from "@/components/site";

export const metadata: Metadata = {
  title: "Apple-First Consulting for Business | ZapataLogic",
  description:
    "Apple-first consulting for business environments, including device strategy, Apple-heavy team support, and integration with broader business systems.",
};

const appleFocus = [
  "Apple-centric business environments",
  "Device strategy and environment design",
  "Scaling Apple-heavy teams with less friction",
  "Integration with broader business systems and workflows",
  "Apple expertise positioned as a premium specialization",
];

export default function AppleFirstConsultingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Specialization"
        title="Apple-First Consulting for Business Environments"
        description="ZapataLogic helps businesses built around Apple devices create cleaner systems, scale with less friction, and connect Apple-first environments to the broader operating model."
        primaryLabel="Discuss Your Apple Environment"
        primaryHref="/contact"
        secondaryLabel="Explore Industries"
        secondaryHref="/industries"
      >
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-300/40">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Why it stands out</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight">Apple-first expertise that still stays grounded in business outcomes.</p>
          <p className="mt-4 text-base leading-7 text-slate-300">This is a differentiator, not a distraction. The point is better execution for teams that already rely on Apple across the business.</p>
        </div>
      </PageHero>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Where it applies"
            title="Built for businesses that want Apple expertise without a narrow lens"
            description="Apple-first consulting works best when it improves the whole operating environment, including user experience, scalability, device management, and fit with the rest of the business stack."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {appleFocus.map((item) => (
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
        title="Need an Apple-first environment that scales more cleanly?"
        description="Start with a practical conversation about where Apple expertise can reduce friction, improve team experience, and support the broader business environment."
        primaryLabel="Discuss Your Apple Environment"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
