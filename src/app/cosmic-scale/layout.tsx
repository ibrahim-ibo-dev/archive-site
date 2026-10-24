import type { Metadata } from "next";

const title = "Cosmic Scale Case Study | Ibrahim Hussein";
const description = "A Kurdish interactive scale explorer, from a proton to the observable universe, built with logarithmic zoom, accessible controls and responsive visuals.";
const image = "/images/projects/cosmic-scale.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cosmic-scale" },
  openGraph: {
    title,
    description,
    url: "/cosmic-scale",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, alt: "Cosmic Scale Kurdish science explorer" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
