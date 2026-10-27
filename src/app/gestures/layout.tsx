import type { Metadata } from "next";

const title = "Sign Language Recognition Case Study | Ibrahim Hussein";
const description = "A real-time gesture recognition project using MediaPipe, OpenCV, and a custom KNN model, with incremental learning, data augmentation, and confidence scores.";
const image = "/images/social/gestures-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gestures" },
  openGraph: {
    title,
    description,
    url: "/gestures",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "Real-time sign language recognition" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
