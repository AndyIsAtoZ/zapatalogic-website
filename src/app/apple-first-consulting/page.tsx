import type { Metadata } from "next";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Apple Consultant for Small and Medium Business",
  description:
    "Apple-focused consulting backed by twelve years of MSP experience and hands-on device management across macOS, Windows, and Android.",
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
        eyebrow="Apple expertise"
        title="Apple Consultant for Small and Medium Business Environments"
        description="ZapataLogic brings twelve years of Apple-focused MSP experience and hands-on work across Jamf, Iru, Addigy, and Cisco Meraki Systems Manager. The result is an Apple-centered environment that remains secure, manageable, and compatible with the rest of the business."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Fractional CTO Services"
        secondaryHref="/technology-advisory"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Why this leads</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Apple-first does not mean Apple-only.</p>
          <p className="mt-5 text-base leading-8 text-slate-600">ZapataLogic has managed more than 2,000 endpoints across macOS, Windows, and Android, including enrollment, policy enforcement, patching, identity controls, and remote lock and wipe.</p>
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
