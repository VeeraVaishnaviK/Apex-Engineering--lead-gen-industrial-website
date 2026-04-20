"use client";

import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from 'next/link';

export default function Home() {
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
            <span>Logistics & Warehousing</span>
            <span>Laboratory & Research</span>
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
            <h2 style={{ color: 'white' }}>Our Expert Services</h2>
            <p style={{ color: 'var(--gray-300)' }}>Comprehensive industrial solutions from design to installation.</p>
          </div>
          <div className="grid services-strip">
            <div className="service-mini">
              <h4>Fabrication</h4>
              <p>MS & SS structures custom-built.</p>
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
              <p>Powder coating & anodizing.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/services" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="section bg-light" id="quote">
        <div className="container">
          <div className="quote-box">
            <div className="quote-content">
              <h2>Get a Free Quote in 24 Hours</h2>
              <p>Ready to start your project? Fill out the form or reach out to us directly on WhatsApp.</p>
              <ul className="trust-points">
                <li>Custom Designs Welcome</li>
                <li>Expert On-site Consultation</li>
                <li>Chennai-wide Delivery</li>
              </ul>
            </div>
            <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number (Required)" required />
              </div>
              <div className="form-group">
                <select>
                  <option>Select Product Interest</option>
                  <option>Working Tables & Benches</option>
                  <option>Trolleys & Carts</option>
                  <option>Storage & Racks</option>
                  <option>Conveyors & Material Handling</option>
                  <option>Custom Fabrication</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Request Price via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
