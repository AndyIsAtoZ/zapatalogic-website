import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection, PageHero, SectionIntro, ServiceCard } from "@/components/site";
import { ArrowRight, Check, CircleGauge, Cpu, Layers3, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "ZapataLogic | AI Deployment and Technology Advisory for Small Business",
  description:
    "AI deployment and technology advisory for growing small businesses, with Apple-first expertise for teams that want smarter operations and cleaner execution.",
};

const credibilityItems = [
  "Practical AI implementation",
  "Small business technology leadership",
  "Apple-first expertise",
  "Security-minded systems planning",
  "Vendor-neutral advice",
];

const outcomes = [
  "Less wasted time across the business",
  "Smarter workflows that support how the team actually works",
  "Clearer technology decisions with less vendor noise",
  "Reduced technology friction for Apple-centric teams",
  "Stronger operational alignment as the business grows",
];

const industryItems = [
  "Professional services",
  "Creative and agency firms",
  "Real estate and property teams",
  "Founder-led small businesses",
  "Apple-centric organizations",
];

export default function HomePage() {
  return (
    <main>
      <PageHero
        title="AI Deployment and Technology Advisory for Growing Small Businesses"
        description="We help small businesses implement practical AI, improve operations, and make smarter technology decisions — with deep expertise in Apple-first environments."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="#service-pathways"
      >
        <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/70">
          <CardContent className="p-8 md:p-10">
            <div className="grid gap-6">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-3 text-sm font-medium text-blue-200">
                  <Cpu className="h-4 w-4" />
                  Practical deployment over hype
                </div>
                <p className="mt-4 text-2xl font-semibold tracking-tight">Technology strategy that improves workflow, decision-making, and execution.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <CircleGauge className="h-5 w-5 text-blue-700" />
                  <p className="mt-3 text-sm font-semibold text-slate-950">Growth-focused advisory</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Fractional technology guidance for companies that need smarter systems, not generic support.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <Layers3 className="h-5 w-5 text-blue-700" />
                  <p className="mt-3 text-sm font-semibold text-slate-950">Apple-first specialization</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">A premium fit for businesses built around Apple devices, teams, and workflows.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </PageHero>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 md:grid-cols-5">
          {credibilityItems.map((item) => (
            <div key={item} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/50">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <SectionIntro
            eyebrow="Core value"
            title="Technology guidance that lands in real workflows"
            description="ZapataLogic helps growing businesses deploy AI where it actually improves work, tighten operations, make better technology decisions, and support Apple-centric teams without adding unnecessary complexity."
          />
          <div className="grid gap-4">
            {[
              "Deploy AI into real workflows instead of chasing abstract tools.",
              "Improve operational efficiency with practical systems thinking.",
              "Make better decisions on vendors, platforms, and projects.",
              "Support Apple-heavy teams with strategy that fits how they operate.",
            ].map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
                <div className="mt-1 rounded-full bg-blue-50 p-2 text-blue-700">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-pathways" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Primary service pathways"
            title="Three ways ZapataLogic helps businesses run technology smarter"
            description="The site now leads with AI deployment, strategic advisory, and Apple-first consulting instead of a broad list of disconnected services."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="AI Deployment"
              description="Identify, prioritize, and implement practical AI use cases that improve workflow and reduce wasted time."
              href="/ai-deployment"
              cta="Schedule an AI Strategy Call"
            />
            <ServiceCard
              title="Technology Advisory"
              description="Get strategic guidance on systems, vendors, projects, and operational technology decisions as your business grows."
              href="/technology-advisory"
              cta="Talk About Advisory Support"
            />
            <ServiceCard
              title="Apple-First Consulting"
              description="Build, optimize, and support business technology environments designed around Apple devices and teams."
              href="/apple-first-consulting"
              cta="Discuss Your Apple Environment"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Business outcomes"
            title="Designed around better business performance, not more technical noise"
            description="The work is meant to create operational clarity, reduce friction, and help decision-makers move with more confidence."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {outcomes.map((item) => (
              <Card key={item} className="rounded-[1.5rem] border-slate-200 shadow-sm shadow-slate-200/50">
                <CardContent className="p-6">
                  <p className="text-base font-medium leading-7 text-slate-800">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Ideal fit"
            title="Built for growing businesses that need practical leadership"
            description="ZapataLogic is especially well-suited to founder-led companies and teams that need sharper systems, clearer guidance, and executive-friendly technology decisions."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {industryItems.map((item) => (
              <Card key={item} className="rounded-[1.5rem] border-slate-200 bg-white shadow-sm shadow-slate-200/50">
                <CardContent className="p-6">
                  <p className="text-base font-semibold text-slate-900">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link href="/industries">
                Explore Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60 md:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Apple-first differentiator</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Especially strong for Apple-centric businesses</h2>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              Apple-first is not the entire story. It is a specialization that makes ZapataLogic especially effective for businesses built around Apple devices, creative workflows, and teams that want a cleaner, more cohesive environment across the business.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white">
            <ShieldCheck className="h-6 w-6 text-blue-300" />
            <p className="mt-4 text-xl font-semibold tracking-tight">A premium fit for companies that want Apple expertise without losing sight of the broader operating model.</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">That includes device strategy, scaling Apple-heavy teams, and integrating Apple environments into the wider business stack.</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy AI and Run Technology Smarter?"
        description="If you need practical AI deployment, sharper technology leadership, or an Apple-first strategy that actually supports the business, the next step is a focused conversation."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
