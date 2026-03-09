"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Mail, MapPin, Menu } from "lucide-react";

export const primaryNav = [
  { href: "/apple-first-consulting", label: "Apple-First Consulting" },
  { href: "/technology-advisory", label: "Technology Advisory" },
  { href: "/ai-deployment", label: "AI Enablement" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="ZapataLogic logo" width={138} height={36} className="h-9 w-auto" priority />
          <div>
            <div className="text-base font-semibold tracking-tight text-slate-950">ZapataLogic</div>
            <div className="hidden text-xs text-slate-500 sm:block">Apple-first consulting for growing businesses</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-700 lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800 sm:inline-flex">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full border-slate-300 lg:hidden" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[1.5rem] border-slate-200 p-0 shadow-2xl sm:max-w-md">
              <DialogHeader className="border-b border-slate-200 px-6 py-5">
                <DialogTitle className="text-left text-xl tracking-tight">Navigate ZapataLogic</DialogTitle>
              </DialogHeader>
              <div className="px-6 py-5">
                <nav className="space-y-3">
                  {primaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild size="lg" className="mt-5 w-full rounded-full bg-slate-950 hover:bg-slate-800">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Book a Strategy Call
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f7f5]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold tracking-tight text-slate-950">ZapataLogic</p>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Apple-first consulting, technology advisory, and practical AI enablement for growing small businesses that want cleaner operations and smarter systems.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Dallas–Fort Worth</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> info@zapatalogic.com</span>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium tracking-[0.12em] text-slate-500">Services</p>
          <div className="space-y-3 text-sm text-slate-600">
            <Link href="/apple-first-consulting" className="block hover:text-slate-950">Apple-First Consulting</Link>
            <Link href="/technology-advisory" className="block hover:text-slate-950">Technology Advisory</Link>
            <Link href="/ai-deployment" className="block hover:text-slate-950">AI Enablement</Link>
            <Link href="/industries" className="block hover:text-slate-950">Industries</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium tracking-[0.12em] text-slate-500">Company</p>
          <div className="space-y-3 text-sm text-slate-600">
            <Link href="/about" className="block hover:text-slate-950">About</Link>
            <Link href="/contact" className="block hover:text-slate-950">Contact ZapataLogic</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-4 text-sm font-medium tracking-[0.12em] text-slate-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl md:leading-tight">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-[linear-gradient(180deg,#fcfcfb_0%,#f7f7f5_100%)]">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          {eyebrow ? <p className="mb-5 text-sm font-medium tracking-[0.12em] text-slate-500">{eyebrow}</p> : null}
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.02]">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button asChild variant="ghost" size="lg" className="rounded-full px-3 text-slate-700 hover:bg-transparent hover:text-slate-950">
                <Link href={secondaryHref}>
                  {secondaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-[#f7f7f5] px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950 px-8 py-14 text-white shadow-xl shadow-slate-300/30 md:px-12 md:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.12em] text-slate-300">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-6 text-slate-950">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-slate-950">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ title, description, href, cta }: { title: string; description: string; href: string; cta: string }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
        <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      </div>
      <Button asChild variant="ghost" className="mt-8 h-auto justify-start px-0 text-base font-semibold text-slate-950 hover:bg-transparent hover:text-slate-700">
        <Link href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </article>
  );
}
