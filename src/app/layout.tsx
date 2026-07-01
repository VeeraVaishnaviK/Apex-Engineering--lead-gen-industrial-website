import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutBody from "@/components/LayoutBody";
import Schema from "@/components/Schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Industrial Fabrication Company Chennai | Apex Engineering",
    template: "%s | Apex Engineering",
  },
  description:
    "Apex Engineering is a leading industrial fabrication company in Chennai. We manufacture custom MS, SS & aluminium structures. Request a free quote today.",
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
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${BASE_URL}/`,
    siteName: "Apex Engineering",
    title: "Industrial Fabrication Company Chennai | Apex Engineering",
    description:
      "Apex Engineering is a leading industrial fabrication company in Chennai. We manufacture custom MS, SS & aluminium structures. Request a free quote today.",
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
    title: "Industrial Fabrication Company Chennai | Apex Engineering",
    description:
      "Apex Engineering is a leading industrial fabrication company in Chennai. We manufacture custom MS, SS & aluminium structures. Request a free quote today.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isAdmin = headersList.get("x-is-admin") === "true";

  return (
    <html lang="en-IN">
      <head>
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.02;80.17" />
        <meta name="ICBM" content="13.02, 80.17" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero_industrial_workshop_1775677983634.png" fetchPriority="high" />
      </head>
      <body className={inter.className}>
        <Schema type="Organization" data={{}} />
        <Schema type="LocalBusiness" data={{}} />
        <Schema type="WebSite" data={{}} />
        <LayoutBody isAdminServer={isAdmin}>{children}</LayoutBody>
      </body>
    </html>
  );
}
