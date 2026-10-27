import type { Metadata } from "next";

const title = "Algorithm Playground Case Study | Ibrahim Hussein";
const description = "A Kurdish algorithm playground with 16 algorithms, reversible step playback, synchronized pseudocode, editable grids and a separate Game of Life simulation.";
const image = "/images/social/algorithm-playground-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/algorithm-playground" },
  openGraph: {
    title,
    description,
    url: "/algorithm-playground",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "Algorithm Playground visualization and playback controls" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
