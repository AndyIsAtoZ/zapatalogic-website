"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/sendEmail";

export function ContactForm({ title = "Start a conversation", intro = "Tell us what you are trying to solve, where AI or technology friction is slowing the business down, and what a better operating environment should look like." }: { title?: string; intro?: string; }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{intro}</p>

      <form
        action={async (formData) => {
          try {
            setStatus("sending");
            await sendEmail(formData);
            setStatus("sent");
          } catch {
            setStatus("error");
          }
        }}
        className="mt-8 space-y-5"
      >
        <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required className="min-h-36" />
        </div>

        <Button type="submit" size="lg" className="rounded-full px-6" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Contact ZapataLogic"}
        </Button>

        {status === "sent" ? <p className="text-sm text-emerald-600">Your message was sent.</p> : null}
        {status === "error" ? <p className="text-sm text-red-600">Something went wrong. Please try again.</p> : null}
      </form>
    </div>
  );
}
