import type { Metadata } from "next";

const title = "Rashkaw Media Case Study | Ibrahim Hussein";
const description = "Building rashkaw.news end-to-end: a trilingual Kurdish/Arabic/English news platform with ten editorial sections, live market and weather data, public polls, and a private client-owned codebase.";
const image = "/images/projects/rashkaw-media.png";

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
    images: [{ url: image, alt: "Rashkaw Media Kurdish news platform" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
