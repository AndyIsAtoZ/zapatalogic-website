import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zapatalogic.com"),
  title: {
    default: "ZapataLogic | AI Deployment and Technology Advisory for Small Business",
    template: "%s",
  },
  description:
    "ZapataLogic helps growing small businesses deploy practical AI, improve operations, and make smarter technology decisions with Apple-first expertise in the Dallas–Fort Worth market.",
  keywords: [
    "AI deployment for small business",
    "technology advisory",
    "fractional technology leadership",
    "Apple-first consulting",
    "Dallas Fort Worth technology consulting",
    "small business AI consulting",
  ],
  authors: [{ name: "ZapataLogic" }],
  openGraph: {
    title: "ZapataLogic | AI Deployment and Technology Advisory for Small Business",
    description:
      "Practical AI deployment, small business technology advisory, and Apple-first consulting for growing teams.",
    url: "https://zapatalogic.com",
    siteName: "ZapataLogic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapataLogic | AI Deployment and Technology Advisory for Small Business",
    description:
      "Practical AI deployment, technology advisory, and Apple-first consulting for growing businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}>
        <div className="min-h-screen bg-white text-slate-900">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
