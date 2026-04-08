import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries Served | Custom Engineering Solutions Chennai",
  description: "Apex Engineering serves a wide range of industries including Manufacturing, Pharmaceutical, Automotive, and Logistics with specialized fabrication.",
};

const industries = [
  {
    title: "Primary Manufacturing",
    desc: "From structural machine bases to specialized safety enclosures, we engineer the foundational metalwork for heavy-duty production units.",
    points: ["Load-Bearing Work Tables", "Safety & Perimeter Cages", "Machine Structural Frames"]
  },
  {
    title: "Pharmaceutical & Clinical",
    desc: "Hygiene-first fabrication using certified SS 304 and 316 grades. We deliver non-corrosive, easy-to-sanitize equipment for controlled lab environments.",
    points: ["S.S Chemical Benches", "Hygienic Material Trolleys", "Sterile Storage Cabinets"]
  },
  {
    title: "Logistics & Distribution",
    desc: "Engineered material handling solutions designed for high-throughput warehouse logistics and floor optimization.",
    points: ["Heavy-Duty Platform Trolleys", "Motorized Roller Conveyors", "Stackable Pallet Cages"]
  },
  {
    title: "Automotive Industrial Hubs",
    desc: "Robust equipment specifically built to withstand the high-cycle demands of large-scale automotive assembly corridors.",
    points: ["Heavy-Duty Welding Jigs", "Engine Storage Trolleys", "Sub-assembly Part Racks"]
  },
  {
    title: "Commercial & Corporate",
    desc: "Functional metal structures that blend durability with modern industrial aesthetics for professional workspaces.",
    points: ["Precision Display Units", "Filing & Documentation Grade Cabinets", "Custom Office Partitions"]
  },
  {
    title: "R&D and Innovation Centers",
    desc: "Rapid prototyping frames and modular workstation systems for high-tech research and electronic assembly labs.",
    points: ["Technical Lab Workbenches", "Lean Utility Carts", "Modular Profile Enclosures"]
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
