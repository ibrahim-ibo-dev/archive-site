import type { Metadata } from "next";

const title = "True Prence Attendance Case Study | Ibrahim Hussein";
const description = "Inside True Prence, a Python face-recognition attendance system with CNN/HOG detection, multi-face recognition, SQLite storage, reports, and analytics.";
const image = "/images/social/attendance-2026-10.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/attendance" },
  openGraph: {
    title,
    description,
    url: "/attendance",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, width: 1200, height: 630, type: "image/jpeg", alt: "True Prence face-recognition attendance system" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
