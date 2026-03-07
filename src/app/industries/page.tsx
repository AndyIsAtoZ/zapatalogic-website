import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, SectionIntro } from "@/components/site";

export const metadata: Metadata = {
  title: "Industries We Serve | ZapataLogic",
  description:
    "See how ZapataLogic applies AI deployment, technology advisory, and Apple-first expertise for professional services, creative agencies, real estate businesses, and founder-led small businesses.",
};

const industries = [
  {
    title: "Professional Services",
    text: "Professional services firms benefit from AI deployment that reduces administrative drag, technology advisory that improves decision-making, and Apple-first expertise when partner and staff workflows depend on Apple devices.",
  },
  {
    title: "Creative Agencies",
    text: "Creative teams need systems that support fast collaboration, clean execution, and Apple-heavy environments. ZapataLogic helps agencies deploy practical AI, reduce friction, and keep technology aligned with client delivery work.",
  },
  {
    title: "Real Estate / Property Businesses",
    text: "Real estate and property-related businesses often need better operational visibility, cleaner workflows, and simpler technology decisions. The focus is practical AI use, operational alignment, and systems that scale with the business.",
  },
  {
    title: "Founder-Led Small Businesses",
    text: "Founder-led businesses need clarity more than complexity. ZapataLogic helps owners prioritize the right AI opportunities, improve systems, and make smarter technology decisions without turning the company into an IT hobby."
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who this is for"
        title="Industries We Serve"
        description="ZapataLogic works best with growing businesses that need practical AI deployment, sharper technology decisions, and a premium advisory experience built around real operating needs."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore AI Deployment"
        secondaryHref="/ai-deployment"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Best-fit teams</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Small business decision-makers who want sharper systems and less noise.</p>
        </div>
      </PageHero>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Industry fit"
            title="How the service mix applies across different businesses"
            description="The three main service lines stay consistent. The way they get applied changes based on workflow, growth stage, and how technology supports the business."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.title} className="rounded-[1.75rem] border-slate-200 shadow-sm shadow-slate-200/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{industry.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{industry.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/technology-advisory">Talk About Advisory Support</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link href="/apple-first-consulting">Discuss Your Apple Environment</Link>
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
