import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Schema from "@/components/Schema";

const BASE_URL = "https://www.apexengineering.org.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Industrial Fabrication & Material Handling Equipment Chennai | Apex Engineering",
    template: "%s | Apex Engineering Chennai",
  },
  description:
    "Apex Engineering Chennai - trusted partner for custom MS, SS and Aluminium fabrication, industrial trolleys, working tables, and storage racks. 10+ years, 500+ projects, Chennai-wide delivery.",
  keywords: [
    "Industrial trolley manufacturer Chennai",
    "MS fabrication Chennai",
    "SS fabrication Tamil Nadu",
    "Aluminium workbench manufacturer Tamil Nadu",
    "Material handling equipment Chennai",
    "Sheet metal fabrication Chennai",
    "custom industrial fabrication Rampuram",
    "roller conveyor Chennai",
    "laboratory workbench manufacturer Chennai",
  ],
  authors: [{ name: "Apex Engineering", url: BASE_URL }],
  creator: "Apex Engineering",
  publisher: "Apex Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Apex Engineering",
    title: "Industrial Fabrication & Material Handling Equipment | Apex Engineering Chennai",
    description:
      "Custom MS, SS and Aluminium fabrication, industrial trolleys, working tables, and storage racks - manufactured in Chennai. Get a free quote in 24 hours.",
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering industrial fabrication workshop in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Fabrication & Material Handling Equipment | Apex Engineering Chennai",
    description:
      "Custom MS, SS and Aluminium fabrication in Chennai. Industrial trolleys, working tables, conveyors and more. 10+ years, 500+ projects.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.02;80.17" />
        <meta name="ICBM" content="13.02, 80.17" />
      </head>
      <body>
        <Schema type="LocalBusiness" data={{}} />
        <Schema type="WebSite" data={{}} />
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadPopup />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
