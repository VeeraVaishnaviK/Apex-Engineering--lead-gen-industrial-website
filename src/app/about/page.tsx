import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Apex Engineering | Industrial Excellence in Chennai",
  description: "Learn about Apex Engineering, our 10+ years of expertise in industrial fabrication, and our commitment to quality and custom engineering solutions.",
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="section bg-light">
        <div className="container text-center">
          <span className="subtitle">Our Story</span>
          <h1>Engineering with Excellence Since 2012</h1>
          <p className="lead-text">
            Apex Engineering was founded with a simple mission: to provide Chennai's booming industrial sector with high-quality, custom-fabricated solutions that stand the test of time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid col-2">
            <div className="content">
              <h2>Who We Are</h2>
              <p>
                Based in the heart of Chennai, Apex Engineering is a leading manufacturer specializing in industrial fabrication across MS, SS, and Aluminium. Over the last decade, we have successfully partnered with over 50 businesses across Tamil Nadu, delivering everything from simple workbenches to complex industrial cabins.
              </p>
              <p>
                Our expertise lies in understanding the unique challenges of different industries—be it the hygiene requirements of a pharmaceutical lab or the heavy-duty demands of an automotive assembly line.
              </p>
              
              <div className="mission-vision">
                <div className="card">
                  <h4>Our Mission</h4>
                  <p>To be the most trusted engineering partner for Indian industries by providing innovative, quality-driven fabrication solutions.</p>
                </div>
                <div className="card">
                  <h4>Our Vision</h4>
                  <p>To set the benchmark for engineering excellence and custom fabrication in India through technical expertise and customer focus.</p>
                </div>
              </div>
            </div>
            <div className="image-grid">
              <div className="img-large"></div>
              <div className="img-small"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid col-2">
            <div className="img-large" style={{ backgroundImage: "url('/industrial_facility_about_1775678115255.png')" }}></div>
            <div className="content">
              <h2>Our Chennai Facility</h2>
              <p>
                Our manufacturing unit in Rampuram, Chennai, is equipped with state-of-the-art welding, cutting, and finishing equipment. We maintain a lean production environment to ensure maximal efficiency and quality control across every project.
              </p>
              <ul className="points">
                <li>✓ Advanced TIG/MIG Welding Stations</li>
                <li>✓ Precision Sheet Metal Bending & Cutting</li>
                <li>✓ Dedicated Quality Control Zone</li>
                <li>✓ In-house Powder Coating Facility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container">
          <div className="grid col-4 stats">
            <div className="stat-item">
              <strong>10+</strong>
              <span>Years of Expertise</span>
            </div>
            <div className="stat-item">
              <strong>50+</strong>
              <span>Satisfied Clients</span>
            </div>
            <div className="stat-item">
              <strong>500+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>Custom Designs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
