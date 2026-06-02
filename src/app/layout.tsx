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
    "Ibrahim Hussein projects",
    "Ibrahim Hussein case studies",
    "Ibrahim Hussein portfolio",
    "Ibrahim Hussein developer Kurdistan",
    "Ibrahim Hussein AI projects",
    "Ibrahim Hussein Erbil",
    "projects archive",
    "case studies",
    "AI developer Kurdistan",
    "full-stack developer Iraq",
    "Kurdish developer projects",
    "CSAI project",
    "Chat Mart",
    "Ashti Library",
    "True Prence",
    "Signed Language Recognition",
    "HITEX 2025",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ibrahim Hussein Project Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Archive | Ibrahim Hussein",
    description:
      "A complete archive of every project built by Ibrahim Hussein.",
    images: ["/og-image.png"],
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
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* AI Crawlers */}
        <link rel="alternate" type="text/plain" href="https://ibrahim-eng.dev/llms.txt" title="LLMs.txt" />
        {/* Geo tags */}
        <meta name="geo.region" content="IQ-AR" />
        <meta name="geo.placename" content="Erbil, Kurdistan Region" />
        <meta name="subject" content="Software Projects, AI Case Studies, Ibrahim Hussein" />
        <meta name="classification" content="Portfolio, Technology, Case Studies" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Project Archive — Ibrahim Hussein",
              description: "A complete archive of every project built by Ibrahim Hussein — from AI platforms and embedded systems to web applications.",
              url: "https://case-study.ibrahim-eng.dev",
              author: {
                "@type": "Person",
                name: "Ibrahim Hussein",
                url: "https://ibrahim-eng.dev",
                jobTitle: "Computer Engineer & AI Developer"
              },
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 17,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "CSAI — Customer Service AI", url: "https://case-study.ibrahim-eng.dev/csai" },
                  { "@type": "ListItem", position: 2, name: "Chat Mart — Omni-Channel SaaS", url: "https://case-study.ibrahim-eng.dev/chat-mart" },
                  { "@type": "ListItem", position: 3, name: "Ashti Library", url: "https://case-study.ibrahim-eng.dev/ashti-library" },
                  { "@type": "ListItem", position: 4, name: "True Prence — Face Recognition", url: "https://case-study.ibrahim-eng.dev/attendance" },
                  { "@type": "ListItem", position: 5, name: "Signed Language Recognition", url: "https://case-study.ibrahim-eng.dev/gestures" },
                  { "@type": "ListItem", position: 6, name: "Bradaran — Car Dealership", url: "https://case-study.ibrahim-eng.dev/xara" },
                  { "@type": "ListItem", position: 7, name: "Dyari — Advanced Car Dealership", url: "https://case-study.ibrahim-eng.dev/diari" }
                ]
              }
            })
          }}
        />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
