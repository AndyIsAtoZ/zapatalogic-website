import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries We Serve",
  description:
    "See how ZapataLogic applies Apple-first consulting, technology advisory, and practical AI enablement for professional services, creative firms, real estate businesses, and founder-led small companies.",
  path: "/industries",
});

const industries = [
  {
    title: "Professional Services",
    text: "Professional services firms benefit from cleaner Apple-centric workflows, sharper technology decisions, and practical automation that reduces administrative drag.",
  },
  {
    title: "Creative and Agency Firms",
    text: "Creative teams often rely heavily on Apple and need systems that support collaboration, execution, and operational consistency without slowing down client delivery.",
  },
  {
    title: "Real Estate and Property Teams",
    text: "Real estate and property-related businesses often need better workflow visibility, simpler technology decisions, and systems that scale with the pace of the business.",
  },
  {
    title: "Founder-Led Small and Medium Businesses",
    text: "Founder-led companies usually need clarity more than complexity. The work focuses on cleaner environments, better decision-making, and practical execution support.",
  },
  {
    title: "Apple-Centric Organizations",
    text: "Some businesses are simply a better fit because Apple is already central to how their teams work. ZapataLogic is built for that reality.",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        description="ZapataLogic works best with growing businesses that rely on Apple, need sharper technology decisions, and want practical operational improvement without generic IT support noise."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Apple-First Consulting"
        secondaryHref="/apple-first-consulting"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Best fit</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Businesses that want sharper systems and less noise.</p>
        </div>
      </PageHero>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Industry fit"
            title="The same three service lines, applied to different operating realities"
            description="Apple-first consulting, technology advisory, and practical AI enablement stay consistent. The way they are applied changes based on workflow, growth stage, and team needs."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-[1.75rem] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{industry.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{industry.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
              <Link href="/technology-advisory">Talk About Advisory Support</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full px-3 text-slate-700 hover:bg-transparent hover:text-slate-950">
              <Link href="/ai-deployment">Explore AI Enablement</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see where ZapataLogic fits in your business?"
        description="The right approach depends on your workflow, growth stage, and current technology friction. Start with a conversation and map the priorities from there."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
