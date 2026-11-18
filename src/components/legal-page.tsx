import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-[#f7f7f5] px-6 py-24 md:py-32">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 md:p-12">
        <p className="text-sm font-medium tracking-[0.12em] text-slate-500">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated {updated}</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-600 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_a]:text-slate-900 [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </article>
    </main>
  );
}
