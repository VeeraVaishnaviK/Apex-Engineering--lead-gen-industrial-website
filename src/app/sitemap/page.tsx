import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "Site Map — Navigation Guide",
  description:
    "Navigate the complete site map of Apex Engineering Chennai. Access all industrial fabrication pages, products, services, locations, and engineering guides.",
  alternates: { canonical: `${BASE_URL}/sitemap/` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Site Map — Navigation Guide | Apex Engineering",
    description:
      "Navigate the complete site map of Apex Engineering Chennai. Access all industrial fabrication pages, products, services, locations, and engineering guides.",
    url: `${BASE_URL}/sitemap/`,
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering Chennai Site Map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map — Navigation Guide | Apex Engineering",
    description:
      "Navigate the complete site map of Apex Engineering Chennai. Access all industrial fabrication pages, products, services, locations, and engineering guides.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

export default function SitemapPage() {
  return (
    <div className="sitemap-page container section">
      <Breadcrumbs items={[{ name: "Sitemap", url: "/sitemap" }]} />
      
      <div className="section-header text-center" style={{ marginTop: "1rem" }}>
        <h1>Site Map — Apex Engineering</h1>
        <p>A comprehensive navigation index of all sections, products, services, and local guides.</p>
      </div>

      <div className="sitemap-grid">
        <div className="sitemap-section">
          <h2>Main Pages</h2>
          <ul className="sitemap-list">
            <li><Link href="/">Home Page</Link></li>
            <li><Link href="/about/">About Us</Link></li>
            <li><Link href="/services/">Engineering Services</Link></li>
            <li><Link href="/industries/">Industries We Serve</Link></li>
            <li><Link href="/blog/">Industrial Blog & Guides</Link></li>
            <li><Link href="/contact/">Get a Free Quote (Contact)</Link></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>Industrial Products</h2>
          <ul className="sitemap-list">
            <li><Link href="/products/">All Products Catalog</Link></li>
            <li><Link href="/products/ms-working-table/">MS Working Tables (Heavy Duty)</Link></li>
            <li><Link href="/products/nylon-hand-trolley/">Nylon Hand Trolleys (Silent Cleanroom)</Link></li>
            <li><Link href="/products/laboratory-workbench/">SS 304 Laboratory Workbenches</Link></li>
            <li><Link href="/products/roller-conveyor/">Industrial Roller Conveyor Systems</Link></li>
            <li><Link href="/products/abs-pipe-trolley/">ABS Coated Modular Pipe Trolleys</Link></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>Regional & Local Guides</h2>
          <ul className="sitemap-list">
            <li><Link href="/location/chennai/">Industrial Fabrication Workshop Chennai</Link></li>
            <li><Link href="/location/tamil-nadu/">MS & SS Fabrication Company Tamil Nadu</Link></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>Engineering Insights (Blog)</h2>
          <ul className="sitemap-list">
            <li><Link href="/blog/top-10-industrial-trolleys-chennai/">Top 10 Industrial Trolleys for Chennai Warehouses</Link></li>
            <li><Link href="/blog/ms-vs-ss-vs-aluminium-working-tables/">MS vs SS vs Aluminium Working Tables Comparison</Link></li>
            <li><Link href="/blog/complete-guide-material-handling-equipment/">Complete Guide to Material Handling Equipment</Link></li>
            <li><Link href="/blog/best-custom-fabrication-services-chennai/">Best Custom Fabrication Services in Chennai Hubs</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
