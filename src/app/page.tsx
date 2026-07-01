import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Industrial Fabrication Company Chennai",
  description:
    "Apex Engineering is a leading industrial fabrication company in Chennai. We manufacture custom MS, SS & aluminium structures. Request a free quote today.",
  alternates: { canonical: "https://apexengineering.org.in/" },
  openGraph: {
    title: "Industrial Fabrication Company Chennai | Apex Engineering",
    description:
      "Apex Engineering is a leading industrial fabrication company in Chennai. We manufacture custom MS, SS & aluminium structures. Request a free quote today.",
    url: "https://apexengineering.org.in/",
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
    title: "Industrial Fabrication Company Chennai | Apex Engineering",
    description:
      "Apex Engineering is a leading industrial fabrication company in Chennai. We manufacture custom MS, SS & aluminium structures. Request a free quote today.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

import Schema from "@/components/Schema";

export default function Home() {
  return (
    <>
      <Schema type="WebPage" data={{ url: "/", name: "Apex Engineering Homepage" }} />
      <HomeContent />
    </>
  );
}
