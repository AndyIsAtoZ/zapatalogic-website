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
    default: "ZapataLogic | Apple-First Technology Advisory for Small Business",
    template: "%s",
  },
  description:
    "ZapataLogic helps Apple-centric small businesses improve operations, make smarter technology decisions, and implement practical AI and automation where it creates real business value.",
  keywords: [
    "Apple-first consulting",
    "Apple business consultant",
    "technology advisory for small business",
    "AI enablement for small business",
    "Apple-certified consultant",
    "Dallas Fort Worth technology consulting",
  ],
  authors: [{ name: "ZapataLogic" }],
  openGraph: {
    title: "ZapataLogic | Apple-First Technology Advisory for Small Business",
    description:
      "Apple-first consulting, technology advisory, and practical AI enablement for growing businesses.",
    url: "https://zapatalogic.com",
    siteName: "ZapataLogic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapataLogic | Apple-First Technology Advisory for Small Business",
    description:
      "Apple-first consulting, technology advisory, and practical AI enablement for growing businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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
