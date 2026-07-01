import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "Industrial Fabrication Company Rampuram",
  description:
    "Apex Engineering is an industrial fabrication company in Rampuram, Chennai. Custom MS, SS, and aluminium structures with local delivery. Contact us today.",
  alternates: { canonical: `${BASE_URL}/about/` },
  keywords: [
    "about Apex Engineering",
    "industrial fabrication company Chennai",
    "MS SS Aluminium manufacturer Tamil Nadu",
    "Rampuram fabrication unit",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${BASE_URL}/about/`,
    siteName: "Apex Engineering",
    title: "Industrial Fabrication Company Rampuram | Apex Engineering",
    description:
      "Apex Engineering is an industrial fabrication company in Rampuram, Chennai. Custom MS, SS, and aluminium structures with local delivery. Contact us today.",
    images: [
      {
        url: "/industrial_facility_about_1775678115255.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering manufacturing facility in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Fabrication Company Rampuram | Apex Engineering",
    description:
      "Apex Engineering is an industrial fabrication company in Rampuram, Chennai. Custom MS, SS, and aluminium structures with local delivery. Contact us today.",
    images: ["/industrial_facility_about_1775678115255.png"],
  },
};

import Schema from "@/components/Schema";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Schema type="WebPage" data={{ url: "/about/", name: "About Apex Engineering" }} />
      <section className="section bg-light">
        <div className="container">
          <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />
          <div className="text-center" style={{ marginTop: "1rem" }}>
            <span className="subtitle">Our Legacy</span>
            <h1>Industrial Fabrication Company in Rampuram, Chennai</h1>
            <p className="lead-text">
              Apex Engineering was established to bridge the gap between complex industrial requirements and high-durability metal fabrication. Operating from the heart of Chennai's manufacturing zone, we provide technical-grade solutions for India's growing industrial infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid col-2">
            <div className="content">
              <h2>Who We Are</h2>
              <p>
                Based in the heart of Chennai, Apex Engineering is a leading manufacturer specializing in industrial fabrication across MS, SS, and Aluminium. Over the last 3 years, we have successfully partnered with over 50 businesses across Tamil Nadu, delivering everything from simple workbenches to complex industrial cabins.
              </p>
              <p>
                We maintain a comprehensive production environment focused on mild steel (MS), stainless steel (SS), and aluminium manufacturing. Our product catalog includes load-bearing workbenches, heavy-duty logistics carts, cleanroom-grade laboratory furniture, and high-performance conveyor systems. By employing certified technicians and using high-grade industrial raw materials, we ensure that every structure leaving our floor is built for long-term operational safety.
              </p>
              <p>
                Our expertise lies in understanding the unique challenges of different industries—be it the hygiene requirements of a pharmaceutical lab or the heavy-duty demands of an automotive assembly line.
              </p>
              
              <div className="mission-vision">
                <div className="card">
                  <h3>Technical Mission</h3>
                  <p>To deliver high-integrity fabricated structures that optimize shop-floor utility and ensure long-term operational safety.</p>
                </div>
                <div className="card">
                  <h3>Industrial Vision</h3>
                  <p>To define the standard for precision engineering in the Chennai industrial corridor through continuous process innovation.</p>
                </div>
              </div>
            </div>
            <div className="image-grid">
              <div className="img-large" role="img" aria-label="Apex Engineering Chennai factory manufacturing floor showing steel fabrication"></div>
              <div className="img-small" role="img" aria-label="Precision welding and metal cutting at Chennai workshop"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid col-2">
            <div className="img-large" style={{ backgroundImage: "url('/industrial_facility_about_1775678115255.png')" }} role="img" aria-label="Apex Engineering Ramapuram Chennai fabrication facility"></div>
            <div className="content">
              <h2>Our Chennai Facility</h2>
              <p>
                Our manufacturing unit in Rampuram, Chennai, is equipped with state-of-the-art welding, cutting, and finishing equipment. We maintain a lean production environment to ensure maximal efficiency and quality control across every project.
              </p>
              <p>
                Our facility in Rampuram, Chennai, is strategically located to serve the industrial corridors of Ambattur, Guindy, Sriperumbudur, and Oragadam. We manage the entire fabrication lifecycle in-house—from design drafting and material selection to welding, powder coating, and final assembly. This end-to-end control allows us to guarantee structural integrity, maintain strict tolerances, and deliver custom solutions tailored to your factory floor layout.
              </p>
              <ul className="points">
                <li>Advanced TIG/MIG Welding Stations</li>
                <li>Precision Sheet Metal Bending & Cutting</li>
                <li>Dedicated Quality Control Zone</li>
                <li>In-house Powder Coating Facility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container">
          <div className="grid col-4 stats">
            <div className="stat-item">
              <strong>3+</strong>
              <span style={{ color: "var(--gray-300)" }}>Years of Expertise</span>
            </div>
            <div className="stat-item">
              <strong>50+</strong>
              <span style={{ color: "var(--gray-300)" }}>Satisfied Clients</span>
            </div>
            <div className="stat-item">
              <strong>500+</strong>
              <span style={{ color: "var(--gray-300)" }}>Projects Delivered</span>
            </div>
            <div className="stat-item">
              <strong>100%</strong>
              <span style={{ color: "var(--gray-300)" }}>Custom Designs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
