import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial & Commercial Fabrication Services Chennai | Apex Engineering",
  description: "Explore our range of fabrication services including welding, sheet metal work, aluminium extrusion profile work, and decorative finishing in Chennai.",
};

const services = [
  {
    id: "industrial-fabrication",
    title: "Project-Based Industrial Fabrication",
    desc: "We specialize in the fabrication of robust MS, SS, and Aluminium structures tailored for manufacturing units and large-scale industrial plants. Our team handles everything from structural support frames to custom utility enclosures."
  },
  {
    id: "welding-works",
    title: "Precision Welding — TIG, MIG & Arc",
    desc: "Standard-certified welding services ensuring high structural integrity and fatigue resistance. We provide specialized welding solutions for heavy-gauge sections and high-precision stainless steel assemblies."
  },
  {
    id: "sheet-metal",
    title: "Precision Sheet Metal Work",
    desc: "Advanced folding, bending, and laser-consistent cutting for industrial panels, ducts, and machine components. We maintain tight tolerances to ensure perfect fitment for your assemblies."
  },
  {
    id: "aluminium-extrusion",
    title: "Modular Aluminium Profile Systems",
    desc: "Lightweight, high-strength T-slot and V-slot aluminium profile assembly. Ideal for modular workstations, laboratory frames, and rapid-deployment production units."
  },
  {
    id: "surface-finishing",
    title: "Protective Surface Engineering",
    desc: "Enhancing structural lifespan with industrial-grade powder coating, chemical passivating, and polishing. Our finishes are optimized for Chennai's high-humidity environments."
  },
  {
    id: "assembly-installation",
    title: "On-site Integration & Fitting",
    desc: "Deployment of fabricated components directly onto your shop floor. Our technical team performs the final assembly and on-site testing to ensure project specifications are fully met."
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page container section">
      <div className="section-header text-center">
        <h1>Engineering Services in Chennai</h1>
        <p>Expert fabrication and installation solutions for modern industrial needs.</p>
      </div>

      <div className="grid services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card-full">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <Link href="/contact" className="service-cta">Enquire Now →</Link>
          </div>
        ))}
      </div>

      <div className="cta-banner section">
        <div className="container bg-navy text-white text-center">
          <h2 style={{ color: 'white' }}>Start Your Fabrication Project Today</h2>
          <p style={{ color: 'var(--gray-300)' }}>Get expert consultation and a precise quote for your custom requirements.</p>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
