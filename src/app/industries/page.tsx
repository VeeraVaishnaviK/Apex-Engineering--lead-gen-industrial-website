import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "Fabrication for Manufacturing Chennai",
  description:
    "We provide custom fabrication for manufacturing industries in Chennai. Durable MS, SS, & aluminium structures for factory floors. Request a quote today.",
  alternates: { canonical: `${BASE_URL}/industries/` },
  keywords: [
    "industrial fabrication for pharmaceuticals Chennai",
    "automotive parts manufacturer Tamil Nadu",
    "manufacturing plant equipment Chennai",
    "logistics warehouse solutions Chennai",
    "laboratory workbench pharmaceutical",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Fabrication for Manufacturing Chennai | Apex Engineering",
    description:
      "We provide custom fabrication for manufacturing industries in Chennai. Durable MS, SS, & aluminium structures for factory floors. Request a quote today.",
    url: `${BASE_URL}/industries/`,
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Industries served by Apex Engineering Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabrication for Manufacturing Chennai | Apex Engineering",
    description:
      "We provide custom fabrication for manufacturing industries in Chennai. Durable MS, SS, & aluminium structures for factory floors. Request a quote today.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const industries = [
  {
    title: "Primary Manufacturing",
    desc: "From structural machine bases to specialized safety enclosures, we engineer the foundational metalwork for heavy-duty production units. View our custom [MS working tables](/products/ms-working-table) built for rigorous factory workloads.",
    points: ["Load-Bearing Work Tables", "Safety & Perimeter Cages", "Machine Structural Frames"]
  },
  {
    title: "Pharmaceutical & Clinical",
    desc: "Hygiene-first fabrication using certified SS 304 and 316 grades. We deliver non-corrosive, easy-to-sanitize equipment that meets cleanroom standards. Explore our [laboratory workbenches](/products/laboratory-workbench) for controlled environments.",
    points: ["S.S Chemical Benches", "Hygienic Material Trolleys", "Sterile Storage Cabinets"]
  },
  {
    title: "Logistics & Distribution",
    desc: "Custom material handling equipment helps optimize warehouse throughput and shop floor flow. We engineer tailored solutions designed for logistics and floor space utilization. See our [nylon hand trolleys](/products/nylon-hand-trolley) and [roller conveyors](/products/roller-conveyor).",
    points: ["Heavy-Duty Platform Trolleys", "Motorized Roller Conveyors", "Stackable Pallet Cages"]
  },
  {
    title: "Automotive Industrial Hubs",
    desc: "Robust equipment specifically built to withstand the high-cycle demands of automotive assembly corridors. We manufacture durable sub-assembly part racks and heavy-duty kitting carts to minimize assembly downtime.",
    points: ["Heavy-Duty Welding Jigs", "Engine Storage Trolleys", "Sub-assembly Part Racks"]
  },
  {
    title: "Commercial & Corporate",
    desc: "Functional metal structures that blend durability with modern industrial aesthetics for professional workspaces and administrative zones.",
    points: ["Precision Display Units", "Filing & Documentation Grade Cabinets", "Custom Office Partitions"]
  },
  {
    title: "R&D and Innovation Centers",
    desc: "Rapid prototyping frames and modular workstation systems for high-tech research. We offer specialized workbenches and custom ABS pipe structures for lean assembly lanes.",
    points: ["Technical Lab Workbenches", "Lean Utility Carts", "Modular Profile Enclosures"]
  }
];

const IndustriesPage = () => {
  return (
    <div className="industries-page container section">
      <Breadcrumbs items={[{ name: "Industries", url: "/industries" }]} />
      <div className="section-header text-center" style={{ marginTop: "1rem" }}>
        <h1>Custom Fabrication for Manufacturing Industries in Chennai</h1>
        <p>Specialized fabrication solutions tailored for sector-specific challenges.</p>
      </div>

      <div className="grid industries-grid">
        {industries.map((ind, i) => (
          <div key={i} className="industry-box">
            <div className="industry-content">
              <h2>{ind.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: ind.desc.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="read-more">$1</a>') }}></p>
              <ul className="points">
                {ind.points.map((p, j) => <li key={j}>{p}</li>)}
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
