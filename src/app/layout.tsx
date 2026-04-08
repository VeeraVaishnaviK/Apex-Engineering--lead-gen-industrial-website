import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        
        {/* WhatsApp Float Button */}
        <a 
          href="https://wa.me/917200811328" 
          className="whatsapp-float" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>

        <style dangerouslySetInnerHTML={{ __html: `
          .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background-color: #25d366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 9999;
            transition: transform 0.3s ease;
          }
          .whatsapp-float:hover {
            transform: scale(1.1);
          }
          .whatsapp-float img {
            width: 35px;
            height: 35px;
          }
          @media (max-width: 768px) {
            .whatsapp-float {
              bottom: 20px;
              right: 20px;
              width: 50px;
              height: 50px;
            }
          }
        `}} />
      </body>
    </html>
  );
}
