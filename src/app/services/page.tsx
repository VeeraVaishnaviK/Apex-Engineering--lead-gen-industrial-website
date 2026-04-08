import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial & Commercial Fabrication Services Chennai | Apex Engineering",
  description: "Explore our range of fabrication services including welding, sheet metal work, aluminium extrusion profile work, and decorative finishing in Chennai.",
};

const services = [
  {
    id: "industrial-fabrication",
    title: "Industrial & Commercial Fabrication",
    desc: "Custom structures for factories, warehouses, and modern offices. We handle everything from heavy machinery frames to aesthetic office partitions.",
    icon: "🏭"
  },
  {
    id: "welding-works",
    title: "Welding Works — TIG, MIG & Arc",
    desc: "Precision welding with high-grade equipment. We specialize in high-strength joints for MS and SS structures that meet industrial safety standards.",
    icon: "🔥"
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal Fabrication",
    desc: "Manufacturing of panels, ducts, frames, and custom parts with high precision and tight tolerances for diversos industrial applications.",
    icon: "📐"
  },
  {
    id: "aluminium-extrusion",
    title: "Aluminium Extrusion Profile Works",
    desc: "Highly versatile modular structures using aluminium profiles. Ideal for trolleys, working tables, and laboratory frames.",
    icon: "🏗️"
  },
  {
    id: "surface-finishing",
    title: "Surface Finishing",
    desc: "High-quality powder coating, polishing, and anodizing services to enhance durability and aesthetic appeal of your products.",
    icon: "✨"
  },
  {
    id: "assembly-installation",
    title: "Assembly & Installation",
    desc: "On-site fitting and project execution. Our team ensures your equipment is installed and tested for peak performance at your facility.",
    icon: "⚙️"
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
            <span className="service-icon">{service.icon}</span>
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
