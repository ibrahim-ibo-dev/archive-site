import type { Metadata } from "next";

const title = "Erbil Chess Academy Case Study | Ibrahim Hussein";
const description = "A Kurdish RTL website for Erbil Chess Academy, with member registration, tournament activities, content management, and an admin panel built with web technologies.";
const image = "/images/projects/erbil-chess.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ches" },
  openGraph: {
    title,
    description,
    url: "/ches",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, alt: "Erbil Chess Academy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
