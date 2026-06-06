import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Industrial Fabrication & Material Handling Equipment Chennai",
  description:
    "Apex Engineering Chennai - custom MS, SS and Aluminium fabrication, industrial trolleys, working tables, and storage racks. 10+ years of expertise, 500+ projects delivered, and free quote in 24 hours.",
  alternates: { canonical: "https://www.apexengineering.org.in" },
  openGraph: {
    title: "Industrial Fabrication & Material Handling Equipment | Apex Engineering Chennai",
    description:
      "Custom MS, SS and Aluminium fabrication in Chennai. Industrial trolleys, working tables, storage racks, roller conveyors. Get a free quote in 24 hours.",
    url: "https://www.apexengineering.org.in",
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering industrial workshop Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Fabrication & Material Handling | Apex Engineering Chennai",
    description:
      "Custom fabrication in Chennai - trolleys, working tables, conveyors and more. 10+ years, 500+ projects.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

export default function Home() {
  return <HomeContent />;
}
