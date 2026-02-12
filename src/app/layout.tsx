import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ZapataLogic — AI & Apple Technology Consulting",
    template: "%s | ZapataLogic",
  },
  description:
    "ZapataLogic provides AI integration, Apple consulting, workflow optimization, networking, and security strategy for modern businesses.",
  keywords: [
    "AI consulting",
    "Apple consultant",
    "technology consulting",
    "workflow automation",
    "network consulting",
    "security compliance",
    "business IT strategy"
  ],
  authors: [{ name: "ZapataLogic" }],
  openGraph: {
    title: "ZapataLogic — AI & Apple Consulting",
    description:
      "Modern AI, Apple, and technology consulting for businesses.",
    url: "https://zapatalogic.com",
    siteName: "ZapataLogic",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
