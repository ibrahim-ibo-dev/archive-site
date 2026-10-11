import type { Metadata } from "next";

const title = "Bradaran Car Dealership Case Study | Ibrahim Hussein";
const description = "A PHP and MySQL dealership management system covering inventory, installment sales, rentals, debt tracking, financial reports, permissions, and a PWA.";
const image = "/images/projects/bradar.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/xara" },
  openGraph: {
    title,
    description,
    url: "/xara",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, alt: "Bradaran car dealership management" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
