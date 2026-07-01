import type { Metadata } from "next";
import ProductListClient from "./ProductListClient";

export const metadata: Metadata = {
  title: "Industrial Fabrication Products Chennai",
  description:
    "Explore custom-built industrial fabrication products in Chennai. Heavy-duty working tables, trolleys, racks, and conveyors. Inquiry via WhatsApp today.",
  alternates: { canonical: "https://apexengineering.org.in/products/" },
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
    title: "Industrial Fabrication Products Chennai | Apex Engineering",
    description:
      "Explore custom-built industrial fabrication products in Chennai. Heavy-duty working tables, trolleys, racks, and conveyors. Inquiry via WhatsApp today.",
    url: "https://apexengineering.org.in/products/",
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
    title: "Industrial Fabrication Products Chennai | Apex Engineering",
    description:
      "Explore custom-built industrial fabrication products in Chennai. Heavy-duty working tables, trolleys, racks, and conveyors. Inquiry via WhatsApp today.",
    images: ["/ms_working_table_industrial_1775678005220.png"],
  },
};

import Schema from "@/components/Schema";

export default function ProductsPage() {
  return (
    <>
      <Schema type="WebPage" data={{ url: "/products/", name: "Apex Engineering Products" }} />
      <ProductListClient />
    </>
  );
}
