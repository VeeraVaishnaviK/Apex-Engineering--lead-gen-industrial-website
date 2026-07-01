import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "MS SS Fabrication Company Tamil Nadu",
  description:
    "Apex Engineering is a premium MS & SS fabrication company serving Tamil Nadu. Custom manufacturing, material handling, & delivery. Request a quote.",
  alternates: { canonical: `${BASE_URL}/location/tamil-nadu/` },
  keywords: [
    "industrial fabrication Tamil Nadu",
    "material handling equipment Coimbatore",
    "custom fabrication Hosur",
    "SS fabrication Tiruppur",
    "heavy fabrication Madurai Trichy",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "MS SS Fabrication Company Tamil Nadu | Apex Engineering",
    description:
      "Apex Engineering is a premium MS & SS fabrication company serving Tamil Nadu. Custom manufacturing, material handling, & delivery. Request a quote.",
    url: `${BASE_URL}/location/tamil-nadu/`,
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
    title: "MS SS Fabrication Company Tamil Nadu | Apex Engineering",
    description:
      "Apex Engineering is a premium MS & SS fabrication company serving Tamil Nadu. Custom manufacturing, material handling, & delivery. Request a quote.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const TamilNaduLocationPage = () => {
  return (
    <div className="location-page">
      <section className="section bg-steel text-white">
        <div className="container">
          <Breadcrumbs items={[{ name: "Tamil Nadu", url: "/location/tamil-nadu" }]} />
          <div style={{ marginTop: "1rem" }}>
            <h1 style={{ color: 'white' }}>MS & SS Fabrication Company in Tamil Nadu</h1>
            <p style={{ color: 'var(--gray-300)', fontSize: '1.25rem' }}>
              Apex Engineering delivers and integrates high-performance industrial equipment across Tamil Nadu, supporting state-wide manufacturing clusters with custom MS, SS, and Aluminium structures.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid col-2">
            <div>
              <h2>Extending Engineering Excellence Across the State</h2>
              <p>
                With over 3 years of fabrication experience, we manufacture and transport customized industrial products directly to your production site. We cater to the specific technical standards of key Tamil Nadu regional clusters:
              </p>
              <ul className="hubs-list">
                <li><strong>Coimbatore Industrial Zone:</strong> Heavy-duty machine bases, specialized textile machinery structural frames, and custom automated <Link href="/products/ms-working-table/" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>workbench tables</Link> designed for vibration containment.</li>
                <li><strong>Hosur Manufacturing Hub:</strong> Precision-engineered <Link href="/products/nylon-hand-trolley/" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>material handling equipment</Link>, assembly-line <Link href="/products/abs-pipe-trolley/" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>trolleys</Link>, and parts racks built using certified high-gauge IS 2062 mild steel.</li>
                <li><strong>Tiruppur Textile Belt:</strong> Chemical-grade, corrosion-resistant SS 316 and SS 304 fabrications, storage bins, and custom SS <Link href="/products/laboratory-workbench/" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>processing tables</Link> built to withstand chemical exposure.</li>
                <li><strong>Madurai and Trichy Engineering Corridors:</strong> Large-scale industrial shelving, structural platform walkways, and heavy-duty <Link href="/products/nylon-hand-trolley/" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>utility carts</Link> designed for heavy load-bearing capacities.</li>
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
