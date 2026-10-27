import type { Metadata } from "next";

const title = "CSAI Customer Service AI Case Study | Ibrahim Hussein";
const description = "Explore CSAI, an AI customer service platform with Kurdish language support, a product catalog, and an admin dashboard, showcased at HITEX 2025.";
const image = "/images/social/csai-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/csai" },
  openGraph: {
    title,
    description,
    url: "/csai",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "CSAI customer service platform" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
