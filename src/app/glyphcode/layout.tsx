import type { Metadata } from "next";

const title = "GlyphCode Prototype Case Study | Ibrahim Hussein";
const description = "An experimental custom visual-code format with six geometric styles, UTF-8 encoding, CRC32 integrity checks, Reed–Solomon error correction and its own decoder.";
const image = "/images/social/glyphcode-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/glyphcode" },
  openGraph: {
    title,
    description,
    url: "/glyphcode",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "GlyphCode custom geometric code prototype" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
