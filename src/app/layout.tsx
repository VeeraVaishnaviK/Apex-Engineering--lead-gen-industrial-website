import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export const metadata: Metadata = {
  title: "Industrial Fabrication & Material Handling Equipment Chennai | Apex Engineering",
  description: "Apex Engineering Chennai - Your trusted partner for custom MS, SS & Aluminium fabrication, industrial trolleys, working tables, and storage racks.",
  keywords: "Industrial trolley manufacturer Chennai, MS fabrication Chennai, Aluminium workbench manufacturer Tamil Nadu, Material handling equipment Chennai, Sheet metal fabrication Chennai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadPopup />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
