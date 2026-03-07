import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact ZapataLogic",
  description:
    "Contact ZapataLogic to discuss AI deployment, technology advisory, or Apple-first consulting for your business.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Book a Strategy Call"
        description="Tell ZapataLogic what the business is trying to improve, where technology friction is showing up, and what a smarter next phase should look like."
        primaryLabel="Contact ZapataLogic"
        primaryHref="#contact-form"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">What to send</p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
            <li>• The business problem or growth challenge</li>
            <li>• Where AI, operations, or technology decisions are stuck</li>
            <li>• Whether Apple-first workflows are part of the environment</li>
          </ul>
        </div>
      </PageHero>

      <section id="contact-form" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
