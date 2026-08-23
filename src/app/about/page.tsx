import Image from "next/image";
import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About ZapataLogic",
  description:
    "Learn about Andy Zapata, a fractional CTO and consultant Director of IT who built, operated, and sold an Apple-focused MSP.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Technology leadership grounded in operating experience"
        description="ZapataLogic represents the client across infrastructure, providers, endpoints, security, business systems, and AI—from assessment through implementation and handoff."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Apple-First Consulting"
        secondaryHref="/apple-first-consulting"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Positioning</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">From assessment through implementation and handoff.</p>
          <p className="mt-5 text-base leading-8 text-slate-600">ZapataLogic combines independent judgment with hands-on delivery instead of stopping at recommendations.</p>
        </div>
      </PageHero>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/80">
            <div className="relative aspect-[4/5] w-full bg-[#f3f3ef]">
              <Image
                src="/andy.jpg"
                alt="Andy Zapata, founder of ZapataLogic"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 380px"
              />
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Founder"
              title="Founded by Andy Zapata"
              description="Andy Zapata is a fractional CTO and consultant Director of IT. He spent twelve years co-founding and operating an Apple-focused managed services firm, which he later sold. Today, he works on the client side of the table, helping leadership teams assess technology environments, set roadmaps, manage providers, and carry projects through implementation and handoff."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              His experience includes networks, device management, identity, security, business continuity, Microsoft 365, Google Workspace, provider selection, and production AI systems. He has managed more than 2,000 endpoints across macOS, Windows, and Android and has supported professional-services, healthcare, legal, real-estate, and venture-backed organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="How ZapataLogic is positioned"
            title="Independent judgment backed by operating experience"
            description="ZapataLogic has no stack to defend and no provider quota to meet. Recommendations follow the business requirement, and the work can continue through implementation instead of ending with a presentation."
          />
        </div>
      </section>

      <CTASection
        title="Need a sharper technology direction for the business?"
        description="ZapataLogic is built for decision-makers who need stronger technology ownership, independent provider guidance, and practical implementation support."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
