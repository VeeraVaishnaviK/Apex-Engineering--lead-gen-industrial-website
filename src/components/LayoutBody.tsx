"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import WhatsAppFloating from "@/components/WhatsAppFloating";

interface LayoutBodyProps {
  children: React.ReactNode;
  isAdminServer?: boolean;
}

export default function LayoutBody({ children, isAdminServer }: LayoutBodyProps) {
  const pathname = usePathname();
  
  // Check if we are on the admin path or subdomain
  const isAdmin = isAdminServer || pathname.startsWith("/admin") || pathname === "/admin";

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <LeadPopup />
      <WhatsAppFloating />
    </>
  );
}
