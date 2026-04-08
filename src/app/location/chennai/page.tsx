import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Fabrication Services in Chennai | Apex Engineering",
  description: "Premier MS fabrication and material handling equipment manufacturer in Chennai. Serving Ambattur, Guindy, Sriperumbudur, and surrounding industrial hubs.",
};

const ChennaiLocationPage = () => {
  return (
    <div className="location-page">
      <section className="section bg-navy text-white">
        <div className="container">
          <h1 style={{ color: 'white' }}>Industrial Fabrication Solutions in Chennai</h1>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.25rem' }}>
            Supporting Chennai's industrial growth with custom-built MS, SS & Aluminium engineering solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid col-2">
            <div>
              <h2>Serving Chennai's Industrial Hubs</h2>
              <p>
                As a Chennai-based engineering firm located in Rampuram, Apex Engineering is strategically positioned to serve the major industrial corridors of the city:
              </p>
              <ul className="hubs-list">
                <li><strong>Ambattur & Guindy:</strong> Precision fabrication for MS working tables and lab benches.</li>
                <li><strong>Sriperumbudur & Oragadam:</strong> Heavy-duty trolleys and material handling for automotive giants.</li>
                <li><strong>Manali & Ennore:</strong> Corrosion-resistant Stainless Steel structures for chemical and port industries.</li>
                <li><strong>Mahindra World City:</strong> Custom lean manufacturing solutions and ABS pipe trolleys.</li>
              </ul>
            </div>
            <div className="cta-card-local">
              <h3>Need local support in Chennai?</h3>
              <p>Our team provides on-site consultation and installation across all Chennai zones.</p>
              <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2>Why Choose Apex Engineering in Chennai?</h2>
          <div className="grid col-3">
            <div className="benefit-box">
              <h4>Local Manufacturing</h4>
              <p>Reduced transport costs and faster turnaround for Chennai-based businesses.</p>
            </div>
            <div className="benefit-box">
              <h4>On-Site Installation</h4>
              <p>Our expert team visits your facility in Chennai for precise fitting and assembly.</p>
            </div>
            <div className="benefit-box">
              <h4>Quick Support</h4>
              <p>Immediate after-sales support and maintenance for a seamless production experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChennaiLocationPage;
