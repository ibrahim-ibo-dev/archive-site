import type { Metadata } from "next";

const title = "Ashti Library Case Study | Ibrahim Hussein";
const description = "Building a Kurdish bookstore for Ashti Books in Erbil: an RTL storefront, Gemini-powered chatbot, book search, admin dashboard, and WhatsApp ordering.";
const image = "/images/social/ashti-library-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ashti-library" },
  openGraph: {
    title,
    description,
    url: "/ashti-library",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "Ashti Library Kurdish bookstore" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
