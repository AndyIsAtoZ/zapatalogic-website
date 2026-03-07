import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection, PageHero, SectionIntro } from "@/components/site";

export const metadata: Metadata = {
  title: "About | ZapataLogic",
  description:
    "Learn about ZapataLogic and its focus on AI deployment, technology advisory, and Apple-first consulting for growing small businesses.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Strategic technology guidance for growing small businesses"
        description="ZapataLogic helps businesses deploy practical AI, improve operations, and make smarter technology decisions. The work is built for leaders who need clarity, executive-friendly guidance, and cleaner execution."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/ai-deployment"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Business context</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Premium, practical, and built around execution.</p>
          <p className="mt-4 text-base leading-7 text-slate-600">ZapataLogic combines AI deployment, technology advisory, and Apple-first expertise to help small businesses run with more focus and less friction.</p>
        </div>
      </PageHero>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="How ZapataLogic is positioned"
            title="A business-first alternative to generic IT support"
            description="ZapataLogic is not positioned as a broad break-fix shop or a general menu of disconnected services. The emphasis is on practical implementation, sharper decisions, and a premium advisory experience for growing teams."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card className="rounded-[1.75rem] border-slate-200 shadow-sm shadow-slate-200/50">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">AI deployment first</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">The primary focus is practical AI deployment that improves workflow, reduces wasted time, and supports better business execution.</p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.75rem] border-slate-200 shadow-sm shadow-slate-200/50">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">Advisory for decision-makers</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">The work is designed for founders and leadership teams that need sharper technology guidance, better prioritization, and cleaner execution.</p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.75rem] border-slate-200 shadow-sm shadow-slate-200/50">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">Apple-first differentiation</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">Apple expertise is a clear differentiator, especially for businesses in Dallas–Fort Worth with Apple-heavy teams and modern operating environments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a sharper technology direction for the business?"
        description="ZapataLogic is built for decision-makers who want better systems, practical AI adoption, and cleaner execution across the company."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
