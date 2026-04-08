import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Equipment Manufacturer Tamil Nadu | Apex Engineering",
  description: "Custom material handling systems and industrial fabrication across Tamil Nadu. Serving Coimbatore, Madurai, Trichy, and Hosur industrials.",
};

const TamilNaduLocationPage = () => {
  return (
    <div className="location-page">
      <section className="section bg-steel text-white">
        <div className="container">
          <h1 style={{ color: 'white' }}>Serving Tamil Nadu's Industrial Corridors</h1>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.25rem' }}>
            High-performance industrial equipment delivered and installed across the state.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid col-2">
            <div>
              <h2>Extending Engineering Excellence Beyond Chennai</h2>
              <p>
                Apex Engineering provides robust, custom-fabricated solutions to the major industrial hubs across Tamil Nadu. We understand the specific needs of different regional clusters:
              </p>
              <ul className="hubs-list">
                <li><strong>Coimbatore:</strong> Specialized textile machinery frames and custom automation tables.</li>
                <li><strong>Hosur:</strong> Advanced material handling for the aerospace and automotive manufacturing sector.</li>
                <li><strong>Madurai & Trichy:</strong> Heavy-duty fabrication for power and sugar industry infrastructures.</li>
                <li><strong>Tiruppur:</strong> Stainless steel fabrications for the bustling textile processing sector.</li>
              </ul>
            </div>
            <div className="cta-card-local">
              <h3>Statewide Delivery & Setup</h3>
              <p>We deliver and assemble our industrial units at your doorstep anywhere in Tamil Nadu.</p>
              <Link href="/contact" className="btn btn-primary">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TamilNaduLocationPage;
