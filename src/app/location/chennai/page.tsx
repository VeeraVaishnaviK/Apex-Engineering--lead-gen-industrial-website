import { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.apexengineering.org.in";

export const metadata: Metadata = {
  title: "Industrial Fabrication Services in Chennai | Apex Engineering",
  description:
    "Premier MS fabrication and material handling equipment manufacturer in Chennai. Serving Ambattur, Guindy, Sriperumbudur, Oragadam, Manali, and surrounding industrial hubs with custom-built solutions.",
  alternates: { canonical: `${BASE_URL}/location/chennai` },
  keywords: [
    "industrial fabrication Chennai",
    "material handling equipment Ambattur",
    "MS fabrication Guindy Chennai",
    "working tables Sriperumbudur",
    "ABS trolley Mahindra World City",
    "SS structures Manali Ennore",
  ],
  openGraph: {
    title: "Industrial Fabrication in Chennai | Apex Engineering",
    description:
      "Custom MS, SS & Aluminium fabrication for Chennai’s industrial hubs: Ambattur, Guindy, Sriperumbudur, Oragadam, Manali. On-site installation available.",
    url: `${BASE_URL}/location/chennai`,
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering serving Chennai industrial zones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Fabrication in Chennai | Apex Engineering",
    description:
      "Serving Ambattur, Guindy, Sriperumbudur & more. Custom MS/SS/Aluminium fabrication in Chennai.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const ChennaiLocationPage = () => {
  return (
    <div className="location-page">
      <section className="section bg-navy text-white">
        <div className="container">
          <h1 style={{ color: 'white' }}>Industrial Fabrication Solutions in Chennai</h1>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.25rem' }}>
            Apex Engineering is Chennai's trusted partner for custom mild steel (MS), stainless steel (SS), and aluminium fabrication, serving key industrial corridors with 10+ years of expertise and over 500 successfully completed projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid col-2">
            <div>
              <h2>Serving Chennai's Major Industrial Hubs</h2>
              <p>
                Operating from our manufacturing facility in Rampuram, Chennai, Apex Engineering provides technical-grade fabrication and material handling equipment. We deliver and install our products across all major industrial clusters:
              </p>
              <ul className="hubs-list">
                <li><strong>Ambattur and Guindy Industrial Estates:</strong> High-precision fabrication of MS working tables, heavy-duty assembly benches, and certified SS 304 laboratory workbenches.</li>
                <li><strong>Sriperumbudur and Oragadam Auto Corridors:</strong> Heavy-duty material handling trolleys, component storage racks, and custom sub-assembly jig frames designed to support loads from 500kg up to 2000kg.</li>
                <li><strong>Manali and Ennore Marine Hubs:</strong> Highly corrosion-resistant Stainless Steel (SS 316 grade) structural fabrications, chemical storage racks, and specialized outdoor enclosures.</li>
                <li><strong>Mahindra World City (MWC):</strong> Lean manufacturing flow solutions including modular ABS coated pipe trolleys, gravity roller conveyors, and custom display boards.</li>
              </ul>
            </div>
            <div className="cta-card-local">
              <h3>Need On-Site Consultation?</h3>
              <p>Our engineering team provides direct site visits, custom CAD drawing approvals, and detailed structural inspections in Chennai within 24 hours.</p>
              <Link href="/contact" className="btn btn-primary">Book Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2>Why Industrial Leaders Choose Apex Engineering in Chennai</h2>
          <p>
            According to our 2026 client survey, 98% of our customers cite our local manufacturing proximity and strict compliance to IS 2062 structural fabrication standards as key factors for long-term partnership.
          </p>
          <div className="grid col-3">
            <div className="benefit-box">
              <h4>Local Chennai Facility</h4>
              <p>Our Rampuram workshop ensures minimal transport cost, rapid prototyping, and direct feedback loops during CAD drafting and production.</p>
            </div>
            <div className="benefit-box">
              <h4>On-Site Installation</h4>
              <p>Expert technicians handle final assembly and load test validation on your shop floor to ensure compliance with quality regulations.</p>
            </div>
            <div className="benefit-box">
              <h4>24-Hour Quote Guarantee</h4>
              <p>Submit your custom drawings or blueprints and receive a comprehensive, itemized cost estimate within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChennaiLocationPage;
