import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection, PageHero, SectionIntro, ServiceCard } from "@/components/site";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

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
  "Less wasted time",
  "Smarter workflows",
  "Clearer decision-making",
  "Reduced technology friction",
  "Stronger operational alignment",
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
        <div className="mx-auto w-full max-w-[26rem]">
          <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/70">
            <CardContent className="p-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/andy.jpg"
                  alt="Andy Zapata, founder of ZapataLogic"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Founded by Andy Zapata</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight">Practical strategy plus implementation support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageHero>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-5">
          {credibilityItems.map((item) => (
            <div key={item} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <SectionIntro
            eyebrow="Core value"
            title="Technology guidance that lands in real workflows"
            description="ZapataLogic helps growing businesses deploy AI where it actually improves work, tighten operations, make better technology decisions, and support Apple-centric teams without unnecessary complexity."
          />
          <div className="grid gap-4">
            {[
              "Deploy AI into real workflows instead of chasing abstract tools.",
              "Improve operational efficiency with practical systems thinking.",
              "Make better decisions on vendors, platforms, and projects.",
              "Support Apple-heavy teams with strategy that fits how they operate.",
            ].map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                <div className="mt-1 rounded-full bg-blue-50 p-2 text-blue-700">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-pathways" className="bg-slate-50 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Primary service pathways"
            title="Three ways ZapataLogic helps businesses run technology smarter"
            description="AI deployment leads, advisory keeps decisions clean, and Apple-first consulting provides focused specialization."
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

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Business outcomes"
            title="Focused on outcomes leadership teams can feel"
            description="The work is meant to reduce friction, create operational clarity, and improve execution across the business."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {outcomes.map((item) => (
              <Card key={item} className="rounded-[1.5rem] border-slate-200 shadow-sm shadow-slate-200/40">
                <CardContent className="p-6">
                  <p className="text-base font-medium leading-7 text-slate-800">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Ideal fit"
            title="Built for growing businesses that need practical leadership"
            description="Best for teams that want measurable improvement without generic IT support noise."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {industryItems.map((item) => (
              <Card key={item} className="rounded-[1.5rem] border-slate-200 bg-white shadow-sm shadow-slate-200/40">
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

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40 md:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Apple-first differentiator</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Apple-first specialization without losing business context</h2>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              Apple-first is a differentiator, not the headline. ZapataLogic helps Apple-centric teams build cleaner environments while keeping operational strategy, AI deployment, and business priorities aligned.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white">
            <ShieldCheck className="h-6 w-6 text-blue-300" />
            <p className="mt-4 text-xl font-semibold tracking-tight">A premium fit for companies that rely on Apple and need broader technology leadership.</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">Device strategy, systems integration, and workflow alignment are handled as one operating model.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] shadow-lg shadow-slate-200/70">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/andy.jpg"
                alt="Andy Zapata, founder"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 360px"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Founder</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Founded by Andy Zapata</h2>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              ZapataLogic combines strategy and implementation so recommendations actually turn into operational improvements. The focus stays on practical AI deployment, clear advisory support, and Apple-first expertise where it creates a real advantage.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy AI and Run Technology Smarter?"
        description="If you need practical AI deployment, sharper technology leadership, or Apple-first expertise that supports business outcomes, start with a focused strategy call."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
