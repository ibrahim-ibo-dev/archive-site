import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BrandFrame from "@/components/brand/BrandFrame";
import "./unified-design.css";
import "./archive-design.css";
import "./case-design.css";

const spaceGrotesk=localFont({src:"./fonts/SpaceGrotesk-Latin.woff2",weight:"300 700",variable:"--font-space-grotesk",display:"swap",fallback:["system-ui","sans-serif"]});

const siteUrl = "https://case-study.ibrahim-eng.dev";

import "./project-opening.css";

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
        url: "/images/social/archive-2026-10.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Ibrahim Hussein Project Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Archive | Ibrahim Hussein",
    description:
      "A complete archive of every project built by Ibrahim Hussein.",
    images: ["/images/social/archive-2026-10.jpg"],
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
  icons: { icon: [{url:"/brand/ih-app.svg",type:"image/svg+xml"},{url:"/brand/favicon-32.png",sizes:"32x32"}], apple:"/brand/apple-touch-icon.png" },
  verification: {
    google: "wKWJrIYHPaMID1jOpJwUKL-R8gI21Ut-laoXN7f_nXk",
  },
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
                numberOfItems: 14,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Rashkaw Media", url: "https://case-study.ibrahim-eng.dev/rashkaw-media" },
                  { "@type": "ListItem", position: 2, name: "Kurdistan Weather — کەش و هەوای کوردستان", url: "https://case-study.ibrahim-eng.dev/kurdistan-weather" },
                  { "@type": "ListItem", position: 3, name: "Kurdish Chess AI — شەترەنجی کوردی", url: "https://case-study.ibrahim-eng.dev/kurdish-chess-ai" },
                  { "@type": "ListItem", position: 4, name: "CSAI — Customer Service AI", url: "https://case-study.ibrahim-eng.dev/csai" },
                  { "@type": "ListItem", position: 5, name: "Chat Mart — Omni-Channel SaaS", url: "https://case-study.ibrahim-eng.dev/chat-mart" },
                  { "@type": "ListItem", position: 6, name: "Ashti Library", url: "https://case-study.ibrahim-eng.dev/ashti-library" },
                  { "@type": "ListItem", position: 7, name: "Bradaran — Car Dealership", url: "https://case-study.ibrahim-eng.dev/xara" },
                  { "@type": "ListItem", position: 8, name: "Dyari — Advanced Car Dealership", url: "https://case-study.ibrahim-eng.dev/diari" },
                  { "@type": "ListItem", position: 9, name: "True Prence — Face Recognition", url: "https://case-study.ibrahim-eng.dev/attendance" },
                  { "@type": "ListItem", position: 10, name: "Signed Language Recognition", url: "https://case-study.ibrahim-eng.dev/gestures" },
                  { "@type": "ListItem", position: 11, name: "Erbil Chess Academy", url: "https://case-study.ibrahim-eng.dev/ches" },
                  { "@type": "ListItem", position: 12, name: "Cosmic Scale", url: "https://case-study.ibrahim-eng.dev/cosmic-scale" },
                  { "@type": "ListItem", position: 13, name: "Algorithm Playground", url: "https://case-study.ibrahim-eng.dev/algorithm-playground" },
                  { "@type": "ListItem", position: 14, name: "GlyphCode", url: "https://case-study.ibrahim-eng.dev/glyphcode" }
                ]
              }
            })
          }}
        />
        <CustomCursor />
        <SmoothScroll><BrandFrame>{children}</BrandFrame></SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
