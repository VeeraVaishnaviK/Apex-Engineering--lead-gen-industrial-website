import { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.apexengineering.org.in";

export const metadata: Metadata = {
  title: "Industrial Equipment Manufacturer Tamil Nadu | Apex Engineering",
  description:
    "Custom material handling systems and industrial fabrication across Tamil Nadu. Serving Coimbatore, Madurai, Trichy, Hosur, and Tiruppur industrial clusters with MS, SS & Aluminium solutions.",
  alternates: { canonical: `${BASE_URL}/location/tamil-nadu` },
  keywords: [
    "industrial fabrication Tamil Nadu",
    "material handling equipment Coimbatore",
    "custom fabrication Hosur",
    "SS fabrication Tiruppur",
    "heavy fabrication Madurai Trichy",
  ],
  openGraph: {
    title: "Industrial Equipment Manufacturer Tamil Nadu | Apex Engineering",
    description:
      "Statewide delivery of custom MS, SS & Aluminium industrial equipment. Serving Coimbatore, Hosur, Madurai, Trichy, Tiruppur and all Tamil Nadu industrial hubs.",
    url: `${BASE_URL}/location/tamil-nadu`,
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering serving Tamil Nadu industrial hubs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Manufacturer Tamil Nadu | Apex Engineering",
    description:
      "Serving Coimbatore, Hosur, Madurai & more. Custom industrial fabrication across Tamil Nadu.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const TamilNaduLocationPage = () => {
  return (
    <div className="location-page">
      <section className="section bg-steel text-white">
        <div className="container">
          <h1 style={{ color: 'white' }}>Serving Tamil Nadu's Industrial Corridors</h1>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.25rem' }}>
            Apex Engineering delivers and integrates high-performance industrial equipment across Tamil Nadu, supporting state-wide manufacturing clusters with custom MS, SS, and Aluminium structures.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid col-2">
            <div>
              <h2>Extending Engineering Excellence Across the State</h2>
              <p>
                With over a decade of fabrication experience, we manufacture and transport customized industrial products directly to your production site. We cater to the specific technical standards of key Tamil Nadu regional clusters:
              </p>
              <ul className="hubs-list">
                <li><strong>Coimbatore Industrial Zone:</strong> Heavy-duty machine bases, specialized textile machinery structural frames, and custom automated workbench tables designed for vibration containment.</li>
                <li><strong>Hosur Manufacturing Hub:</strong> Precision-engineered material handling equipment, assembly-line trolleys, and parts racks built using certified high-gauge IS 2062 mild steel.</li>
                <li><strong>Tiruppur Textile Belt:</strong> Chemical-grade, corrosion-resistant SS 316 and SS 304 fabrications, storage bins, and custom processing tables built to withstand chemical exposure.</li>
                <li><strong>Madurai and Trichy Engineering Corridors:</strong> Large-scale industrial shelving, structural platform walkways, and utility carts designed for heavy load-bearing capacities.</li>
              </ul>
            </div>
            <div className="cta-card-local">
              <h3>Statewide Delivery & Setup</h3>
              <p>We guarantee safe transport and on-site assembly for our industrial fabrications anywhere in Tamil Nadu within agreed deadlines. All project requests receive CAD blueprint reviews and initial estimates within 24 hours.</p>
              <Link href="/contact" className="btn btn-primary">Request Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TamilNaduLocationPage;
