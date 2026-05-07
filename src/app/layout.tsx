import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://case-study.ibrahim-eng.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Project Archive | Ibrahim Hussein",
  description:
    "A complete archive of every project built by Ibrahim Hussein — from AI platforms and embedded systems to web applications and experimental tools.",
  keywords: [
    "Ibrahim Hussein",
    "projects",
    "archive",
    "case studies",
    "AI developer",
    "full-stack developer",
    "Kurdistan",
  ],
  authors: [{ name: "Ibrahim Hussein" }],
  creator: "Ibrahim Hussein",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Project Archive | Ibrahim Hussein",
    description:
      "A complete archive of every project built by Ibrahim Hussein — AI platforms, embedded systems, web apps, and more.",
    siteName: "Ibrahim Hussein — Project Archive",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Archive | Ibrahim Hussein",
    description:
      "A complete archive of every project built by Ibrahim Hussein.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
  other: { "theme-color": "#0A0A0F" },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
