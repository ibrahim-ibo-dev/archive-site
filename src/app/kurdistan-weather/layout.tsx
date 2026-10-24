import type { Metadata } from "next";

const title = "Kurdistan Weather Case Study | Ibrahim Hussein";
const description = "Building a Kurdish Sorani weather app with Next.js, Open-Meteo, hourly and seven-day forecasts, location search, caching, and weather-driven sky backgrounds.";
const image = "/images/projects/kurdistan-weather.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kurdistan-weather" },
  openGraph: {
    title,
    description,
    url: "/kurdistan-weather",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, alt: "Kurdistan Weather Kurdish interface" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
