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
              <h4>Fabrication</h4>
              <p>MS &amp; SS structures custom-built.</p>
            </div>
            <div className="service-mini">
              <h4>Welding</h4>
              <p>Expert TIG/MIG/Arc welding.</p>
            </div>
            <div className="service-mini">
              <h4>Sheet Metal</h4>
              <p>Precision panels and frames.</p>
            </div>
            <div className="service-mini">
              <h4>Surface Finish</h4>
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
