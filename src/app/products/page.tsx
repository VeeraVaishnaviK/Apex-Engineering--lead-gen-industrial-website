import type { Metadata } from "next";
import ProductListClient from "./ProductListClient";

export const metadata: Metadata = {
  title: "Industrial Products — MS, SS & Aluminium Fabrication",
  description:
    "Browse Apex Engineering's full range of industrial products: working tables, trolleys, storage racks, roller conveyors, machine frames, and custom fabrication. Manufactured in Chennai, Tamil Nadu.",
  alternates: { canonical: "https://www.apexengineering.org.in/products" },
  keywords: [
    "industrial trolley Chennai",
    "MS working table manufacturer",
    "SS laboratory workbench Chennai",
    "roller conveyor manufacturer Tamil Nadu",
    "ABS pipe trolley",
    "storage racks Chennai",
    "industrial fabrication products Chennai",
  ],
  openGraph: {
    title: "Industrial Products — MS, SS & Aluminium | Apex Engineering Chennai",
    description:
      "Working tables, trolleys, storage racks, roller conveyors, and custom fabrication. All products made-to-order in Chennai.",
    url: "https://www.apexengineering.org.in/products",
    images: [
      {
        url: "/ms_working_table_industrial_1775678005220.png",
        width: 1200,
        height: 630,
        alt: "Industrial products by Apex Engineering Chennai — MS working tables and trolleys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Products | Apex Engineering Chennai",
    description:
      "MS, SS & Aluminium industrial products — trolleys, working tables, racks, conveyors. Made in Chennai.",
    images: ["/ms_working_table_industrial_1775678005220.png"],
  },
};

export default function ProductsPage() {
  return <ProductListClient />;
}
