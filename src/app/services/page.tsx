import { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "Industrial Fabrication Services Chennai",
  description:
    "Apex Engineering provides expert industrial fabrication services in Chennai. Welding, sheet metal work, and modular profile assembly. Get a quote today.",
  alternates: { canonical: `${BASE_URL}/services/` },
  keywords: [
    "industrial fabrication services Chennai",
    "welding services Chennai",
    "sheet metal fabrication Chennai",
    "aluminium profile systems Tamil Nadu",
    "powder coating Chennai",
    "on-site installation fabrication",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Industrial Fabrication Services Chennai | Apex Engineering",
    description:
      "Apex Engineering provides expert industrial fabrication services in Chennai. Welding, sheet metal work, and modular profile assembly. Get a quote today.",
    url: `${BASE_URL}/services/`,
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering fabrication services in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Fabrication Services Chennai | Apex Engineering",
    description:
      "Apex Engineering provides expert industrial fabrication services in Chennai. Welding, sheet metal work, and modular profile assembly. Get a quote today.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const services = [
  {
    id: "industrial-fabrication",
    title: "Project-Based Industrial Fabrication",
    desc: "We specialize in the fabrication of robust MS (IS 2062 compliant), SS (304/316 food-grade), and Aluminium structures. Our team handles everything from structural support frames with load capacities up to 10 tons to custom utility enclosures."
  },
  {
    id: "welding-works",
    title: "Precision Welding — TIG, MIG & Arc",
    desc: "ISO 9001:2015 standard-certified welding services ensuring high structural integrity and fatigue resistance. We provide specialized welding solutions for heavy-gauge sections (up to 50mm thickness) and high-precision stainless steel assemblies."
  },
  {
    id: "sheet-metal",
    title: "Precision Sheet Metal Work",
    desc: "Advanced folding, bending, and laser-consistent cutting for industrial panels and ducts. We maintain tight tolerances of ±0.1mm to ensure perfect fitment for your assemblies."
  },
  {
    id: "aluminium-extrusion",
    title: "Modular Aluminium Profile Systems",
    desc: "Lightweight, high-strength T-slot and V-slot aluminium profile assembly. Ideal for modular workstations, laboratory frames, and rapid-deployment production units, reducing assembly time by 40%."
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
    <>
      <Schema type="WebPage" data={{ url: "/services/", name: "Apex Engineering Services" }} />
      {services.map((service) => (
        <Schema
          key={service.id}
          type="Service"
          data={{
            serviceType: service.title,
            name: service.title,
            description: service.desc,
            url: `/services/#${service.id}`,
            image: "/hero_industrial_workshop_1775677983634.png"
          }}
        />
      ))}
      <div className="services-page container section">
        <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />
        <div className="section-header text-center" style={{ marginTop: "1rem" }}>
          <h1>Expert Industrial Fabrication Services in Chennai</h1>
          <p>Expert fabrication and installation solutions for modern industrial needs.</p>
        </div>

        <div style={{ maxWidth: "800px", margin: "2rem auto 4rem", color: "var(--gray-700)", lineHeight: "1.8", textAlign: "center" }}>
          <p>
            Apex Engineering is a trusted B2B contractor offering precision <strong>industrial fabrication services</strong> in Chennai, Tamil Nadu. We specialize in transforming engineering blueprints into high-durability structures constructed from mild steel (MS), stainless steel (SS), and modular aluminium profiles. Adhering to strict IS 2062 carbon steel standard codes and ISO welding procedures, our skilled fabricators design and construct load-bearing supports, heavy-duty machine frames, customized cleanroom furniture, and conveyor lines.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Whether you require heavy MIG welding for industrial structural supports, TIG welding for hygienic food-grade SS tanks, or modular aluminium assemblies for laboratory workspaces, our Rampuram workshop provides complete end-to-end solutions. We manage the entire lifecycle in-house—including laser cutting, folding, certified welding, surface powder coating, and on-site integration.
          </p>
        </div>

        <div className="grid services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card-full">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <Link href="/contact" className="service-cta">Enquire Now →</Link>
            </div>
          ))}
        </div>

        <div className="grid col-2" style={{ marginTop: "5rem", paddingTop: "4rem", borderTop: "1px solid var(--gray-200)" }}>
          <div>
            <h3>Why Choose Our Fabrication Services?</h3>
            <p style={{ marginBottom: "1rem", color: "var(--gray-700)" }}>
              At Apex Engineering, we combine certified fabrication expertise with lean manufacturing principles to deliver reliable, technical-grade industrial equipment:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Certified Quality:</strong> Materials compliant with IS 2062 carbon steel standards and food-grade SS 304/316.</li>
              <li><strong>On-Site Fitting:</strong> Comprehensive shop floor deployment, dimensions check, and layout assembly by our technical crew.</li>
              <li><strong>Rapid Design Cycles:</strong> Fast CAD model approvals and detailed estimates generated within 24 hours.</li>
              <li><strong>Corrosion Protection:</strong> Industrial-grade powder coating, hot-dip galvanizing, and chemical passivation.</li>
            </ul>
          </div>
          <div>
            <h3>Industries We Support in Tamil Nadu</h3>
            <p style={{ marginBottom: "1rem", color: "var(--gray-700)" }}>
              We design and install customized structural fabrications matching the exact regulatory and mechanical criteria of diverse industrial sectors:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Automotive & Assembly Corridors:</strong> Heavy-duty jigs, storage trolleys, and tool frames for factory lines.</li>
              <li><strong>Pharmaceuticals & Cleanrooms:</strong> Aseptic stainless steel benches, chemical storage units, and silent carts.</li>
              <li><strong>Logistics & Warehouses:</strong> High-capacity loading platforms, roller conveyors, and custom storage racks.</li>
              <li><strong>Textile & Chemical Processing:</strong> Chemical-resistant SS 316 containers, steel walkways, and piping structures.</li>
            </ul>
          </div>
        </div>

        <FaqSection />

        <div className="cta-banner section">
          <div className="container bg-navy text-white text-center">
            <h2 style={{ color: 'white' }}>Start Your Fabrication Project Today</h2>
            <p style={{ color: 'var(--gray-300)' }}>Get expert consultation and a precise quote for your custom requirements.</p>
            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
