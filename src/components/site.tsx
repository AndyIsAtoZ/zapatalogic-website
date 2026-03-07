"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, MapPin, Sparkles, ArrowRight, Menu } from "lucide-react";

export const primaryNav = [
  { href: "/ai-deployment", label: "AI Deployment" },
  { href: "/technology-advisory", label: "Technology Advisory" },
  { href: "/apple-first-consulting", label: "Apple-First Consulting" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="ZapataLogic logo" className="h-9" />
          <div>
            <div className="text-base font-semibold tracking-tight text-slate-950">ZapataLogic</div>
            <div className="hidden text-xs text-slate-500 sm:block">AI deployment. Technology advisory. Apple-first expertise.</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden rounded-full px-5 sm:inline-flex">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[1.5rem] p-0 sm:max-w-md">
              <DialogHeader className="border-b border-slate-200 px-6 py-5">
                <DialogTitle className="text-left text-xl tracking-tight">Navigate ZapataLogic</DialogTitle>
              </DialogHeader>
              <div className="px-6 py-5">
                <nav className="space-y-3">
                  {primaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-2xl border border-slate-200 px-4 py-3 text-base font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild size="lg" className="mt-5 w-full rounded-full">
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
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold tracking-tight text-slate-950">ZapataLogic</p>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            AI deployment and technology advisory for growing small businesses, with Apple-first expertise for teams that need practical guidance and cleaner execution.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Dallas–Fort Worth</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> info@zapatalogic.com</span>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
          <div className="space-y-3 text-sm text-slate-600">
            <Link href="/ai-deployment" className="block hover:text-slate-950">AI Deployment</Link>
            <Link href="/technology-advisory" className="block hover:text-slate-950">Technology Advisory</Link>
            <Link href="/apple-first-consulting" className="block hover:text-slate-950">Apple-First Consulting</Link>
            <Link href="/industries" className="block hover:text-slate-950">Industries</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Company</p>
          <div className="space-y-3 text-sm text-slate-600">
            <Link href="/about" className="block hover:text-slate-950">About</Link>
            <Link href="/contact" className="block hover:text-slate-950">Contact ZapataLogic</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center"; }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, description, primaryLabel, primaryHref = "/contact", secondaryLabel, secondaryHref, children }: { eyebrow?: string; title: string; description: string; primaryLabel: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string; children?: ReactNode; }) {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{eyebrow}</p> : null}
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function CTASection({ title, description, primaryLabel, primaryHref = "/contact", secondaryLabel, secondaryHref }: { title: string; description: string; primaryLabel: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string; }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950 px-8 py-14 text-white md:px-12 md:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
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

export function ServiceCard({ title, description, href, cta }: { title: string; description: string; href: string; cta: string; }) {
  return (
    <Card className="h-full rounded-[1.75rem] border-slate-200 shadow-sm shadow-slate-200/60">
      <CardContent className="flex h-full flex-col p-8">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
        <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{description}</p>
        <Button asChild variant="ghost" className="mt-6 h-auto justify-start px-0 text-base font-semibold text-slate-950 hover:bg-transparent hover:text-blue-700">
          <Link href={href}>
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
