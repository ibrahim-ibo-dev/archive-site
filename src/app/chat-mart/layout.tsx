import type { Metadata } from "next";

const title = "Chat Mart SaaS Case Study | Ibrahim Hussein";
const description = "How Chat Mart evolved into a multi-company AI marketplace with five messaging channels, Kurdish voice replies, role-based access, reservations, and a PWA.";
const image = "/images/projects/chat-mart.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/chat-mart" },
  openGraph: {
    title,
    description,
    url: "/chat-mart",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, alt: "Chat Mart omni-channel marketplace" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
