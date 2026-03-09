import Image from "next/image";
import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn about ZapataLogic and its focus on Apple-first consulting, technology advisory, and practical AI enablement for growing small businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Apple-first business technology guidance with a practical operating focus"
        description="ZapataLogic helps growing businesses build cleaner Apple-centric environments, make smarter technology decisions, and adopt practical AI and automation where it creates real value."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Apple-First Consulting"
        secondaryHref="/apple-first-consulting"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Positioning</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">A business-first alternative to generic IT support.</p>
          <p className="mt-5 text-base leading-8 text-slate-600">The emphasis is on Apple-first consulting, advisory judgment, and implementation that improves execution instead of creating more noise.</p>
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
              description="Andy Zapata founded ZapataLogic to help small businesses make better technology decisions and build cleaner operating environments around the way their teams actually work."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              The focus is Apple-first consulting, strategic technology advisory, and practical AI implementation that improves execution instead of adding noise. The goal is a calmer, better-functioning operating environment for growing businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="How ZapataLogic is positioned"
            title="Practical, premium, and built around execution"
            description="ZapataLogic is not a broad menu of disconnected services. It is a focused offer for businesses that need Apple-first expertise, sharper advisory support, and practical systems improvement."
          />
        </div>
      </section>

      <CTASection
        title="Need a sharper technology direction for the business?"
        description="ZapataLogic is built for decision-makers who want a cleaner Apple environment, better systems judgment, and practical implementation support."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
