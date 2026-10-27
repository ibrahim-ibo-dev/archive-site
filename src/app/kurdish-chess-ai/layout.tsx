import type { Metadata } from "next";

const title = "Kurdish Chess AI Case Study | Ibrahim Hussein";
const description = "A technical case study of Kurdish Chess AI: a minimax chess engine, Gemini coaching, opponent-intent prediction, game analysis, and a Kurdish RTL interface.";
const image = "/images/social/kurdish-chess-ai-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kurdish-chess-ai" },
  openGraph: {
    title,
    description,
    url: "/kurdish-chess-ai",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "Kurdish Chess AI interface" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
