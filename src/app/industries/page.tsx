import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, SectionIntro } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries We Serve",
  description:
    "Fractional technology leadership for professional-services, real-estate, legal, healthcare, founder-led, and venture-backed organizations.",
  path: "/industries",
});

const industries = [
  {
    title: "Professional Services",
    text: "Technology leadership across providers, endpoints, identity, security, business systems, and practical automation without adding a full-time executive role.",
  },
  {
    title: "Real Estate and Property Teams",
    text: "Infrastructure, network, provider, and systems decisions grounded in the needs of offices, multitenant properties, and distributed teams.",
  },
  {
    title: "Legal and Healthcare Organizations",
    text: "Practical direction for access, device controls, data handling, business continuity, provider accountability, and policy-sensitive AI adoption.",
  },
  {
    title: "Founder-Led and Venture-Backed Businesses",
    text: "Roadmaps, controls, and operating systems that support growth, diligence, and stronger technology ownership as the organization scales.",
  },
  {
    title: "Apple-Centric Organizations",
    text: "Deep Apple and device-management experience paired with the cross-platform knowledge required by modern business environments.",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        description="ZapataLogic works with organizations that need stronger technology ownership, independent provider guidance, and hands-on execution across the operating environment."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Explore Apple-First Consulting"
        secondaryHref="/apple-first-consulting"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Best fit</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Businesses that need direction and follow-through.</p>
        </div>
      </PageHero>

      <section className="px-6 py-28 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Industry fit"
            title="The same three service lines, applied to different operating realities"
            description="Fractional leadership, Apple-focused consulting, and practical AI implementation adapt to each organization’s workflow, risk, growth stage, and internal capabilities."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-[1.75rem] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{industry.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{industry.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
              <Link href="/technology-advisory">Explore Fractional CTO Services</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full px-3 text-slate-700 hover:bg-transparent hover:text-slate-950">
              <Link href="/ai-deployment">Explore AI Enablement</Link>
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
