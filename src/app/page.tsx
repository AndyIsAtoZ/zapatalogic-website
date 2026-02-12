"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Workflow,
  ShieldCheck,
  Apple,
  Network,
  Lock,
  Mail
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendEmail } from "./actions/sendEmail";

const services = [
  { icon: Cpu, title: "AI Integration", desc: "Strategic AI consulting and implementation to streamline operations, automate workflows, and improve decision-making." },
  { icon: Workflow, title: "Process Optimization", desc: "Analyze and refine workflows to eliminate bottlenecks and align technology with business outcomes." },
  { icon: ShieldCheck, title: "MSP Advocacy", desc: "Independent guidance to evaluate and optimize managed service provider relationships." },
  { icon: Apple, title: "Apple Integration", desc: "Apple Certified consulting, MDM deployment, and Apple-first infrastructure strategy." },
  { icon: Network, title: "Networking", desc: "Design and deploy secure, scalable networks including Wi‑Fi, firewall configuration, and cloud integration." },
  { icon: Lock, title: "Security & Compliance", desc: "Implement security frameworks, identity protection, and compliance readiness strategies." }
];

export default function ZapataLogicWebsite() {

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-9" />
            <span className="font-semibold">ZapataLogic</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>

          <Button asChild size="sm">
            <a href="#contact">Consult</a>
          </Button>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold leading-tight">
            Smarter Technology.
            <span className="block text-blue-700">
              Strategic AI Integration.
            </span>
          </h1>

          <p className="mt-6 text-slate-600">
            ZapataLogic modernizes business systems with AI,
            Apple-first infrastructure, and security-driven design.
          </p>

          <div className="mt-8 flex gap-4">
            <Button asChild>
              <a href="#contact">Start Project</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </motion.div>

        <motion.img
          src="/andy.jpg"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <Card key={i} className="hover:shadow-md transition">
                  <CardContent className="p-6">

                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-slate-700 stroke-[1.5]" />
                    </div>

                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

                  </CardContent>
                </Card>
              );
            })}

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            About ZapataLogic
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Founded by Andy Zapata, ZapataLogic bridges strategy and
            implementation — helping organizations deploy modern,
            secure, Apple-centric technology ecosystems.
          </p>

        </div>
      </section>

	  {/* CONTACT */}
<section id="contact" className="bg-blue-700 text-white py-24 text-center">

  <h2 className="text-3xl font-bold">
    Let’s Build Smarter Systems
  </h2>

  <Dialog open={open} onOpenChange={setOpen}>

    <DialogTrigger asChild>
      <Button variant="secondary" className="mt-6">
        Contact ZapataLogic
      </Button>
    </DialogTrigger>

    <DialogContent>

      <DialogHeader>
        <DialogTitle>Start a Conversation</DialogTitle>
      </DialogHeader>

<form
  action={async (formData) => {
    setStatus("sending");
    await sendEmail(formData);
    setStatus("sent");

    setTimeout(() => {
      setOpen(false);
      setStatus("idle");
    }, 1500);
  }}
  className="space-y-4"
>

  {/* honeypot spam trap */}
  <input name="company" className="hidden" />

  <div>
    <Label>Name</Label>
    <Input name="name" required />
  </div>

  <div>
    <Label>Email</Label>
    <Input name="email" type="email" required />
  </div>

  <div>
    <Label>Message</Label>
    <Textarea name="message" required />
  </div>

  <Button className="w-full" disabled={status === "sending"}>
    {status === "sending"
      ? "Sending..."
      : status === "sent"
      ? "Sent ✓"
      : "Send Message"}
  </Button>

</form>

    </DialogContent>

	</Dialog>

  	</section>
    </main>
  );
}