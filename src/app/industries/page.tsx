import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries Served | Custom Engineering Solutions Chennai",
  description: "Apex Engineering serves a wide range of industries including Manufacturing, Pharmaceutical, Automotive, and Logistics with specialized fabrication.",
};

const industries = [
  {
    title: "General Manufacturing",
    icon: "🏭",
    desc: "From machine frames to heavy-duty workstation setups, we support all types of production units.",
    points: ["Heavy Duty Tables", "Safety Cages", "Machine Guarding"]
  },
  {
    title: "Pharmaceutical & Healthcare",
    icon: "🔬",
    desc: "Hygiene-first fabrication using premium SS 304/316 for cleanrooms and laboratories.",
    points: ["S.S Workbenches", "Hygienic Trolleys", "Storage Cabinets"]
  },
  {
    title: "Logistics & Warehousing",
    icon: "📦",
    desc: "Material handling solutions designed to optimize floor efficiency and movement.",
    points: ["Platform Trolleys", "Roller Conveyors", "Pallet Cages"]
  },
  {
    title: "Automotive Industrial",
    icon: "🚗",
    desc: "Robust equipment built to withstand the rigorous demands of automotive assembly corridors.",
    points: ["Welding Stations", "Engine Trolleys", "Parts Racks"]
  },
  {
    title: "Office & Commercial",
    icon: "🏢",
    desc: "Functional and aesthetic metal structures for modern office spaces and retail.",
    points: ["Display Boards", "Filing Cabinets", "Custom Partitions"]
  },
  {
    title: "Research & Development",
    icon: "🧬",
    desc: "Highly customizable lab equipment and prototype frames for innovation centers.",
    points: ["Lab Workbenches", "Utility Carts", "Modular Profiles"]
  }
];

const IndustriesPage = () => {
  return (
    <div className="industries-page container section">
      <div className="section-header text-center">
        <h1>Industries We Serve</h1>
        <p>Specialized fabrication solutions tailored for sector-specific challenges.</p>
      </div>

      <div className="grid industries-grid">
        {industries.map((ind, i) => (
          <div key={i} className="industry-box">
            <div className="industry-content">
              <span className="industry-icon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', display: 'block' }}>{ind.icon}</span>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
              <ul className="points">
                {ind.points.map((p, j) => <li key={j}>✓ {p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section text-center">
        <h2>Have an Industry-Specific Requirement?</h2>
        <p>Our engineers are experts at translating complex industry needs into durable metal structures.</p>
        <Link href="/contact" className="btn btn-primary">Start a Project</Link>
      </div>
    </div>
  );
};

export default IndustriesPage;
