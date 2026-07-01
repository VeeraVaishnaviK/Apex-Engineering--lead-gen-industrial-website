"use client";

import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";

export default function HomeContent() {
  return (
    <>
      <Hero />

      {/* Client Industry Strip */}
      <div className="industry-strip">
        <div className="container overflow-hidden">
          <p className="strip-title">Trusted across diverse sectors:</p>
          <div className="strip-items">
            <span>Manufacturing</span>
            <span>Pharmaceuticals</span>
            <span>Automotive</span>
            <span>Logistics &amp; Warehousing</span>
            <span>Laboratory &amp; Research</span>
            <span>Commercial Offices</span>
          </div>
        </div>
      </div>

      <CategoryGrid />

      <WhyChooseUs />

      {/* Services Strip */}
      <section className="section bg-navy text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 style={{ color: "white" }}>Our Expert Services</h2>
            <p style={{ color: "var(--gray-300)" }}>
              Comprehensive industrial solutions from design to installation.
            </p>
          </div>
          <div className="grid services-strip">
            <div className="service-mini">
              <h4><Link href="/services/#industrial-fabrication" style={{ color: "white", textDecoration: "underline" }}>MS & SS Fabrication</Link></h4>
              <p>MS &amp; SS structures custom-built.</p>
            </div>
            <div className="service-mini">
              <h4><Link href="/services/#welding-works" style={{ color: "white", textDecoration: "underline" }}>Precision Welding</Link></h4>
              <p>Expert TIG/MIG/Arc welding.</p>
            </div>
            <div className="service-mini">
              <h4><Link href="/services/#sheet-metal" style={{ color: "white", textDecoration: "underline" }}>Sheet Metal Work</Link></h4>
              <p>Precision panels and frames.</p>
            </div>
            <div className="service-mini">
              <h4><Link href="/services/#surface-finishing" style={{ color: "white", textDecoration: "underline" }}>Surface Engineering</Link></h4>
              <p>Powder coating &amp; anodizing.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link
              href="/services"
              className="btn btn-outline"
              style={{ borderColor: "white", color: "white" }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      {/* Detailed Overview Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid col-2">
            <div>
              <h2>Industrial Fabrication & Engineering Capabilities</h2>
              <p>
                Apex Engineering is a premier custom industrial fabrication company based in Rampuram, Chennai, delivering premium mild steel (MS), stainless steel (SS), and modular aluminium structural engineering solutions. We bridge the gap between complex industrial shop-floor challenges and high-integrity physical equipment. Adhering strictly to IS 2062 structural standards, our technical team builds heavy-duty workstations, laboratory benches, warehouse trolleys, and conveyor systems that form the operational backbone of factory floors across India.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Operating with state-of-the-art welding, bending, and cutting machinery, our Rampuram fabrication workshop maintains close proximity to key industrial corridors, including Ambattur, Guindy, Sriperumbudur, and Oragadam. This local presence guarantees rapid prototyping, prompt design approvals, and minimal shipping overheads for our B2B partners.
              </p>
            </div>
            <div>
              <h3>Optimized Shop-Floor Solutions</h3>
              <p>
                We collaborate directly with production engineers, warehouse managers, and procurement leads to design and assemble customized ergonomic furniture that decreases fatigue and elevates daily throughput:
              </p>
              <ul className="points" style={{ marginTop: "1rem", listStyle: "disc", paddingLeft: "1.5rem" }}>
                <li><strong>Heavy-Duty Workstations:</strong> Custom MS tables equipped with anti-vibration leveling pads and load limits up to 3000kg.</li>
                <li><strong>Hygienic Lab Furniture:</strong> Corrosion-resistant SS 304/316 benches suited for aseptic pharmaceutical cleanrooms.</li>
                <li><strong>Lean Logistics Carts:</strong> Swivel caster trolleys, modular ABS pipe racks, and silent nylon carts to streamline assembly flow.</li>
                <li><strong>Automated Conveyors:</strong> Powered belt and gravity roller conveyors designed for continuous material movement.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      {/* Lead Capture Section */}
      <section className="section bg-light" id="quote">
        <div className="container">
          <div className="quote-box">
            <div className="quote-content">
              <h2>Get a Free Quote in 24 Hours</h2>
              <p>
                Ready to start your project? Fill out the form or reach out to
                us directly on WhatsApp.
              </p>
              <ul className="trust-points">
                <li>Custom Designs Welcome</li>
                <li>Expert On-site Consultation</li>
                <li>Chennai-wide Delivery</li>
              </ul>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
