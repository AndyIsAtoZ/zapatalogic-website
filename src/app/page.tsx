import Image from "next/image";
import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro, ServiceCard } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Fractional CTO and Technology Leadership for Growing Businesses",
  description:
    "ZapataLogic provides fractional CTO leadership across infrastructure, providers, endpoints, security, cloud platforms, and practical AI for growing businesses.",
  path: "/",
});

const credibilityItems = [
  "Built and sold an Apple MSP",
  "12 years on the provider side",
  "2,000+ endpoints managed",
  "macOS, Windows, and Android",
  "Cloud and self-hosted AI systems",
];

const outcomes = [
  "Less technology friction",
  "Better endpoint and workflow alignment",
  "Smarter business systems decisions",
  "Reduced wasted time",
  "Practical automation where it counts",
];

export default function HomePage() {
  return (
    <main>
      <PageHero
        title="Fractional CTO for Growing Businesses"
        description="ZapataLogic helps businesses replace accumulated technology patchwork with infrastructure, providers, endpoints, security, and AI systems that can be managed. Andy Zapata brings twelve years building, operating, and selling an Apple-focused MSP and works from assessment through implementation and provider handoff."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="#service-pathways"
      >
        <div className="mx-auto w-full max-w-[27rem] lg:mr-0">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/75">
            <div className="relative aspect-[4/5] w-full bg-[#f2f2ee]">
              <Image
                src="/andy.jpg"
                alt="Andy Zapata, founder of ZapataLogic"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 92vw, 440px"
              />
            </div>
            <div className="space-y-3 px-7 py-6 md:px-8 md:py-7">
              <p className="text-sm font-medium tracking-[0.1em] text-slate-500">Founded by Andy Zapata</p>
              <p className="text-[1.35rem] font-semibold tracking-tight text-slate-950">Hands-on technology leadership from assessment through implementation.</p>
              <p className="text-sm leading-7 text-slate-600">Deep Apple expertise across modern, cross-platform business environments.</p>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-8 md:grid-cols-5">
          {credibilityItems.map((item) => (
            <p key={item} className="text-sm leading-7 text-slate-500">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            eyebrow="Why clients call"
            title="Technology problems rarely start as a plan. They accumulate."
            description="A network gets extended instead of redesigned. A provider gets renewed instead of evaluated. Devices and access outgrow written policy. AI tools arrive before anyone decides what they are for. ZapataLogic helps leadership assess the whole environment, set priorities, and carry the work through."
          />
          <div className="space-y-8">
            {[
              "Bring infrastructure, providers, endpoints, and business systems under a clear roadmap.",
              "Evaluate MSPs and vendors from the client’s side of the contract.",
              "Strengthen identity, security, continuity, and employee lifecycle controls.",
              "Put AI into production where it can do measurable work.",
            ].map((item) => (
              <div key={item} className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
                <p className="text-xl leading-8 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-pathways" className="bg-[#f7f7f5] px-6 py-32 md:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Services"
            title="Three ways ZapataLogic helps businesses run technology more cleanly"
            description="Fractional leadership sets direction, Apple expertise supports complex endpoint environments, and practical AI turns useful workflows into production systems."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="Apple-First Consulting"
              description="Deep Apple experience across device management, identity, security, and operations—with the cross-platform knowledge required by real business environments."
              href="/apple-first-consulting"
              cta="Explore Apple-First Consulting"
            />
            <ServiceCard
              title="Fractional CTO & Technology Advisory"
              description="Embedded technology leadership for businesses that need a roadmap, stronger provider accountability, and hands-on execution without hiring a full-time executive."
              href="/technology-advisory"
              cta="Explore Fractional CTO Services"
            />
            <ServiceCard
              title="AI Enablement"
              description="Platform evaluation, deployment, adoption, guardrails, and production agents across cloud and self-hosted environments."
              href="/ai-deployment"
              cta="Explore AI Enablement"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:py-36">
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

      <section className="px-6 py-32 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-18 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.1em] text-slate-500">Apple-first differentiator</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl md:leading-tight">Apple depth without Apple-only assumptions</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Apple is a deep area of expertise, not a requirement for working with ZapataLogic. The work accounts for how macOS, Windows, Android, identity, cloud services, and business systems operate together.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Recommendations follow the business requirement while preserving the user experience, manageability, and security that Apple-centered teams expect.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-[0_14px_42px_rgba(15,23,42,0.10)] md:px-10">
            <p className="text-sm font-medium tracking-[0.1em] text-slate-300">What that means in practice</p>
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

      <section className="bg-[#f7f7f5] px-6 py-32 md:py-36">
        <div className="mx-auto max-w-6xl border-t border-slate-200 pt-16 md:pt-20">
          <p className="mb-4 text-sm font-medium tracking-[0.1em] text-slate-500">Founder</p>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl md:leading-tight">Founded by Andy Zapata</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Andy Zapata is a fractional CTO and consultant Director of IT who spent twelve years co-founding and operating an Apple-focused managed services firm, which he later sold.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Today, he helps leadership teams set roadmaps, manage providers, and carry infrastructure, endpoint, security, business-system, and AI initiatives through implementation and handoff.
          </p>
        </div>
      </section>

      <CTASection
        title="Need stronger technology direction and follow-through?"
        description="If your business needs clearer ownership across infrastructure, providers, endpoints, security, or AI, start with a focused strategy call."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
