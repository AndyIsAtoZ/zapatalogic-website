import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact ZapataLogic",
  description:
    "Contact ZapataLogic to discuss fractional CTO leadership, infrastructure, providers, endpoints, security, or practical AI implementation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Book a Strategy Call"
        description="Tell ZapataLogic what the business is trying to improve and where infrastructure, providers, endpoints, security, business systems, or AI need clearer direction."
        primaryLabel="Contact ZapataLogic"
        primaryHref="#contact-form"
      >
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-10">
          <p className="text-sm font-medium tracking-[0.12em] text-slate-500">What to send</p>
          <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
            <li>• The business problem or growth challenge</li>
            <li>• Where technology ownership or provider accountability feels unclear</li>
            <li>• Which infrastructure, endpoint, security, or AI decisions need direction</li>
          </ul>
        </div>
      </PageHero>

      <section id="contact-form" className="bg-[#f7f7f5] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-3xl">
          <ContactForm
            title="Start a conversation"
            intro="Share what the business is trying to improve, who currently owns technology decisions, and where stronger direction or hands-on implementation would help."
          />
        </div>
      </section>
    </main>
  );
}
