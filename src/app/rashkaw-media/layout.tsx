import type { Metadata } from "next";

const title = "Rashkaw Media Case Study | Ibrahim Hussein";
const description = "Building rashkaw.news end-to-end: a trilingual Kurdish/Arabic/English news platform with ten editorial sections, live market and weather data, public polls, and a private client-owned codebase.";
const image = "/images/social/rashkaw-media-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rashkaw-media" },
  openGraph: {
    title,
    description,
    url: "/rashkaw-media",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "Rashkaw Media Kurdish news platform" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
