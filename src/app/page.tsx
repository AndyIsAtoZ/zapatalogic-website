import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, SectionIntro, ServiceCard } from "@/components/site";

export const metadata: Metadata = {
  title: "ZapataLogic | Apple-First Technology Advisory for Small Business",
  description:
    "Apple-first consulting, technology advisory, and practical AI enablement for growing small businesses that want cleaner operations and smarter systems.",
};

const credibilityItems = [
  "Apple-certified business expertise",
  "Apple-first environment design",
  "Technology advisory for growing companies",
  "Practical AI and automation",
  "Security-minded, vendor-neutral guidance",
];

const outcomes = [
  "Less technology friction",
  "Better Apple workflow alignment",
  "Smarter business systems decisions",
  "Reduced wasted time",
  "Practical automation where it counts",
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
        title="Apple-First Technology Advisory for Growing Small Businesses"
        description="ZapataLogic helps Apple-centric businesses improve operations, make smarter technology decisions, and implement practical AI and automation where it creates real business value."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="#service-pathways"
      >
        <div className="mx-auto w-full max-w-[28rem]">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/80">
            <div className="relative aspect-[4/5] w-full bg-[#f3f3ef]">
              <Image
                src="/andy.jpg"
                alt="Andy Zapata, founder of ZapataLogic"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 92vw, 440px"
              />
            </div>
            <div className="space-y-3 px-7 py-6">
              <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Founded by Andy Zapata</p>
              <p className="text-xl font-semibold tracking-tight text-slate-950">Apple-first strategy, implementation, and practical operational guidance.</p>
              <p className="text-sm leading-7 text-slate-600">Apple-certified expertise for business environments built around Apple devices and workflows.</p>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-7 md:grid-cols-5">
          {credibilityItems.map((item) => (
            <p key={item} className="text-sm leading-6 text-slate-600">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            eyebrow="Core value"
            title="Technology strategy built for Apple-centric businesses"
            description="ZapataLogic helps growing businesses build cleaner Apple-first environments, reduce workflow friction, make better technology decisions, and implement practical automation that supports day-to-day operations."
          />
          <div className="space-y-8">
            {[
              "Improve how Apple devices fit into real business workflows.",
              "Reduce operational friction across teams and tools.",
              "Make smarter decisions on systems, vendors, and projects.",
              "Add practical AI and automation where it actually saves time.",
            ].map((item) => (
              <div key={item} className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
                <p className="text-xl leading-8 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-pathways" className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Services"
            title="Three ways ZapataLogic helps businesses run technology more cleanly"
            description="Apple-first consulting is the foundation, technology advisory brings structure to decisions, and practical AI enablement improves workflow where it is actually useful."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="Apple-First Consulting"
              description="Design, optimize, and support business technology environments built around Apple devices, teams, and workflows."
              href="/apple-first-consulting"
              cta="Explore Apple-First Consulting"
            />
            <ServiceCard
              title="Technology Advisory"
              description="Get strategic guidance on systems, vendors, projects, and operational technology decisions as your business grows."
              href="/technology-advisory"
              cta="Explore Technology Advisory"
            />
            <ServiceCard
              title="AI Enablement"
              description="Identify and implement practical AI and automation opportunities that improve workflow and reduce wasted time."
              href="/ai-deployment"
              cta="Explore AI Enablement"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Outcomes"
            title="Focused on cleaner operations and smarter execution"
            description="The goal is not more tools. The goal is a business environment that feels more coherent, less wasteful, and easier to run."
            align="center"
          />
          <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-5">
            {outcomes.map((item) => (
              <div key={item} className="border-t border-slate-300 pt-5">
                <p className="text-lg font-medium leading-8 text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Industries"
            title="Built for growing businesses that rely on Apple and need practical technology leadership"
            description="Best suited for teams that want better operational clarity, stronger systems decisions, and a more considered technology environment."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {industryItems.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] ring-1 ring-slate-200/80">
                <p className="text-base font-medium leading-7 text-slate-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="ghost" size="lg" className="rounded-full px-3 text-slate-700 hover:bg-transparent hover:text-slate-950">
              <Link href="/industries">Explore Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.12em] text-slate-500">Apple-first differentiator</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl md:leading-tight">Apple expertise that fits business reality</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              ZapataLogic is built for companies that run on Apple. That means understanding not just devices, but how Apple-first teams operate, collaborate, and scale inside real business environments.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Apple-certified expertise helps ensure recommendations are grounded in the Apple ecosystem, while broader advisory work keeps the business as the priority.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] md:px-10">
            <p className="text-sm font-medium tracking-[0.12em] text-slate-300">What that means in practice</p>
            <div className="mt-8 space-y-6">
              {[
                "Recommendations shaped around Apple-centric workflows, not generic Windows-first assumptions.",
                "Business technology guidance that keeps device choices, systems decisions, and operational priorities aligned.",
                "Practical automation and AI layered in where they improve execution instead of distracting from it.",
              ].map((item) => (
                <p key={item} className="text-lg leading-8 text-slate-200">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl border-t border-slate-200 pt-14 md:pt-16">
          <p className="mb-4 text-sm font-medium tracking-[0.12em] text-slate-500">Founder</p>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl md:leading-tight">Founded by Andy Zapata</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Andy Zapata founded ZapataLogic to help small businesses make better technology decisions and build cleaner operating environments around the way their teams actually work.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            The focus is Apple-first consulting, strategic technology advisory, and practical AI implementation that improves execution instead of adding noise.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to run an Apple-first business environment more effectively?"
        description="If your team relies on Apple and needs sharper technology direction, cleaner systems, or practical automation, start with a focused strategy call."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
