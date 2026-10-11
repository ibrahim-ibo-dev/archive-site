import type { Metadata } from "next";

const title = "Dyari Car Dealership Case Study | Ibrahim Hussein";
const description = "Inside Dyari's dealership software: dual-database architecture, batch car imports, individual and gallery deposits, advance payments, and automated receipts.";
const image = "/images/projects/dyari-car.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/diari" },
  openGraph: {
    title,
    description,
    url: "/diari",
    type: "article",
    siteName: "Ibrahim Hussein — Project Archive",
    images: [{ url: image, alt: "Dyari advanced car dealership system" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
