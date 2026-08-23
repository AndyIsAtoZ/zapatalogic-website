import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, SectionIntro, ServiceCard } from "@/components/site";
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

const leadershipAreas = [
  "Bring infrastructure, providers, endpoints, and business systems under a clear roadmap.",
  "Evaluate MSPs and vendors from the client’s side of the contract.",
  "Strengthen identity, security, continuity, and employee lifecycle controls.",
  "Put AI into production where it can do measurable work.",
];

export default function HomePage() {
  return (
    <main>
      <PageHero
        title="Fractional CTO for Growing Businesses"
        description="ZapataLogic helps businesses replace accumulated technology patchwork with infrastructure, providers, endpoints, security, and AI systems that can be managed. Andy Zapata brings twelve years building, operating, and selling an Apple-focused MSP and works from assessment through implementation and provider handoff."
        primaryLabel="Email ZapataLogic"
        primaryHref="mailto:info@zapatalogic.com"
        secondaryLabel="See Services"
        secondaryHref="#services"
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

      <section id="services" className="scroll-mt-24 bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Services"
            title="Senior direction with hands-on follow-through"
            description="Fractional leadership sets direction, Apple expertise supports complex endpoint environments, and practical AI turns useful workflows into production systems."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="Fractional CTO"
              description="Embedded technology leadership for businesses that need a roadmap, stronger provider accountability, and hands-on execution without hiring a full-time executive."
            />
            <ServiceCard
              title="Apple & Endpoint Consulting"
              description="Deep Apple experience across device management, identity, security, and operations—with the cross-platform knowledge required by real business environments."
            />
            <ServiceCard
              title="Practical AI"
              description="Platform evaluation, deployment, adoption, guardrails, and production agents across cloud and self-hosted environments."
            />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-6 py-28 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            eyebrow="Experience"
            title="Built on both sides of the table"
            description="Andy Zapata spent twelve years co-founding and operating an Apple-focused managed services firm, which he later sold. Today, he represents the client—setting direction, evaluating providers, and carrying work through implementation and handoff."
          />
          <div className="space-y-8">
            {leadershipAreas.map((item) => (
              <div key={item} className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
                <p className="text-xl leading-8 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Contact"
            title="Email ZapataLogic"
            description="For fractional technology leadership, Apple and endpoint consulting, or practical AI implementation, get in touch directly."
          />
          <a
            href="mailto:info@zapatalogic.com"
            className="mt-8 inline-block text-2xl font-semibold tracking-tight text-slate-950 underline decoration-slate-300 underline-offset-8 transition hover:decoration-slate-950 md:text-3xl"
          >
            info@zapatalogic.com
          </a>
        </div>
      </section>
    </main>
  );
}
