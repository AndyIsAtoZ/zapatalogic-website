import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Apple Consultant for Small Business",
  description:
    "Apple-first consulting for small business environments, with Apple-certified expertise, workflow alignment, and practical guidance for growing teams.",
  path: "/apple-first-consulting",
});

const focusAreas = [
  "Apple-centric environment design for real business workflows",
  "Planning and refining device strategy as the business grows",
  "Reducing friction for Apple-heavy teams across daily operations",
  "Aligning Apple environments with the rest of the business stack",
  "Supporting decisions with Apple-certified expertise and business context",
];

export default function AppleFirstConsultingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Primary service"
        title="Apple Consultant for Small Business Environments"
        description="ZapataLogic helps Apple-centric businesses design cleaner technology environments, reduce operational friction, and make decisions that fit how their teams actually work."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Technology Advisory"
        secondaryHref="/technology-advisory"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Why this leads</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Apple expertise is the differentiator. Business clarity is the point.</p>
          <p className="mt-5 text-base leading-8 text-slate-600">The work is not generic support. It is Apple-first consulting shaped around operational fit, cleaner execution, and long-term decisions that make sense for the business.</p>
        </div>
      </PageHero>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="What it covers"
            title="Built for businesses that run on Apple"
            description="Apple-first consulting works best when it improves the whole operating environment, including device experience, workflow alignment, scalability, and fit with the broader business stack."
          />
          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {focusAreas.map((item) => (
              <div key={item} className="border-t border-slate-300 pt-5">
                <p className="text-lg leading-8 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Positioning"
            title="Apple-first, without becoming generic IT support"
            description="ZapataLogic is designed for companies that want a more considered Apple environment and stronger technology decisions, not a commodity break-fix relationship."
          />
        </div>
      </section>

      <CTASection
        title="Need a cleaner Apple-first business environment?"
        description="Start with a focused conversation about how your Apple environment, workflow design, and technology decisions can support the business more effectively."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Contact ZapataLogic"
        secondaryHref="/contact"
      />
    </main>
  );
}
