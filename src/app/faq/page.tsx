import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import FaqListClient from "./FaqListClient";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "Industrial Fabrication FAQ Chennai | Apex Engineering",
  description: "Get answers to frequently asked questions about MS/SS fabrication, cleanroom workbenches, conveyors, and material handling equipment. Request a quote.",
  alternates: { canonical: `${BASE_URL}/faq/` },
  keywords: [
    "fabrication FAQ Chennai",
    "MS steel table custom FAQ",
    "cleanroom SS workbench specs",
    "industrial trolley Chennai help"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${BASE_URL}/faq/`,
    siteName: "Apex Engineering",
    title: "Industrial Fabrication FAQ Chennai | Apex Engineering",
    description: "Get answers to frequently asked questions about MS/SS fabrication, cleanroom workbenches, conveyors, and material handling equipment.",
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering Chennai industrial FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Fabrication FAQ Chennai | Apex Engineering",
    description: "Get answers to frequently asked questions about MS/SS fabrication, cleanroom workbenches, conveyors, and material handling equipment.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

export default function FaqPage() {
  const masterFaqs = [
    // GENERAL SERVICES
    {
      category: "general",
      question: "What custom fabrication services does Apex Engineering offer in Chennai?",
      answer: "Apex Engineering specializes in custom mild steel (MS), stainless steel (SS 304/316), and modular aluminium structural fabrication. Over 65% of our operations involve custom-built industrial working tables, storage racks, and material handling trolleys manufactured to exact client drawings."
    },
    {
      category: "general",
      question: "What is your turnaround time for a custom quote and CAD drawings?",
      answer: "We guarantee a detailed free quotation and basic design review within 24 hours of receiving your project specifications. Once designs are approved, our lean manufacturing processes in our Rampuram, Chennai facility enable us to complete and deliver standard batches within 5 to 7 business days."
    },
    {
      category: "general",
      question: "Do you provide on-site installation and consultation in Tamil Nadu?",
      answer: "Yes. Our specialised technical team provides on-site dimensions check, engineering consultation, and final installation across all major Chennai industrial zones (Ambattur, Guindy, Sriperumbudur, Oragadam) and statewide corridors (Coimbatore, Hosur, Madurai, Trichy, Tiruppur)."
    },
    {
      category: "general",
      question: "What material and quality standards do your fabrications adhere to?",
      answer: "All structural fabrications are manufactured using certified IS 2062 carbon steel and verified food-grade SS 304 or SS 316. Our manufacturing operations strictly adhere to ISO 9001:2015 quality standards, ensuring maximum load-bearing integrity and oxidation resistance in humid industrial environments."
    },
    {
      category: "general",
      question: "What is the minimum order quantity (MOQ) for custom projects?",
      answer: "Our minimum order quantity is designed to support both prototyping and bulk production. While standard items like heavy-duty platform trolleys have a nominal MOQ of 2 to 5 units, specialized R&D workbenches and machine frames can be custom-fabricated starting from a single unit (MOQ: 1)."
    },
    // FABRICATION & WELDING
    {
      category: "services",
      question: "What sheet metal work capabilities do you offer at the Rampuram unit?",
      answer: "Our Rampuram, Chennai facility is equipped for complete sheet metal processing including precision shearing, bending on hydraulic press brakes, manual punching, and assembly fitting. We work with sheet gauges from 1.0mm up to 6.0mm in MS, SS, and aluminium to fabricate enclosures, brackets, and console panels."
    },
    {
      category: "services",
      question: "What is the difference between MS and SS fabrication for industrial applications?",
      answer: "Mild Steel (MS) is preferred for cost-effective structural applications requiring high strength-to-weight ratios (like heavy-duty machine bases or pallet racks) and is finished with rust-preventive powder coating. Stainless Steel (SS 304/316) is selected for corrosion resistance, cleanroom compatibility, and chemical exposure (such as laboratory workbenches or food-grade storage)."
    },
    {
      category: "services",
      question: "When should we select SS 304 vs SS 316 grade stainless steel?",
      answer: "SS 304 is the standard grade for laboratory, pharmaceutical, and generic industrial workbenches, offering excellent resistance to moisture and basic cleaning chemicals. SS 316 contains molybdenum, making it superior for harsh chemical environments, high salinity, and exposure to strong acids or marine environments."
    },
    {
      category: "services",
      question: "What surface engineering and finishing options do you provide?",
      answer: "We offer comprehensive surface preparation and finishing services. This includes industrial-grade epoxy powder coating in custom RAL shades for MS fabrications, hot-dip galvanizing for outdoor structural frames, chemical pickling and passivation for SS parts to restore rust-resistance, and satin brush/mirror polishing."
    },
    {
      category: "services",
      question: "What are your standard payment terms and delivery arrangements for B2B contracts?",
      answer: "Our standard B2B terms include a 50% advance payment on design sign-off, with the balance due upon inspection at our workshop or prior to dispatch. We arrange secure packaging and transport via dedicated local trucks for Chennai deliveries and verified national logistics carriers for statewide Tamil Nadu shipments."
    },
    // PRODUCTS SPECIFIC
    {
      category: "products",
      question: "Can the sizes and configurations of MS Working Tables be customized?",
      answer: "Yes, we specialize in custom-built dimensions according to your floor space. Standard size is 1500 x 750 x 850mm, but we can configure length, height, drawer counts, shelves, and accessory panels based on your requirements."
    },
    {
      category: "products",
      question: "What is the maximum weight capacity of your heavy-duty MS tables?",
      answer: "Our standard mild steel working tables support load capacities of 500kg up to 2000kg. By incorporating thick-walled hollow sections and structural stiffeners, we can reinforce tables to support up to 3000kg for heavy tooling."
    },
    {
      category: "products",
      question: "Are the wheels on the Nylon Hand Trolley replaceable?",
      answer: "Yes. We utilize standard metric swivel casters and plate mounts, ensuring the non-marking wheels can be easily replaced. We maintain a stock of replacement wheels at our Chennai workshop for immediate shipping."
    },
    {
      category: "products",
      question: "Is the Nylon Hand Trolley suitable for wet and humid environments?",
      answer: "Absolutely. The high-density nylon platform is non-corrosive and chemical-resistant, making it excellent for marine warehouses, chemical labs, and humid shop floors where metal trolleys might rust."
    },
    {
      category: "products",
      question: "Do Laboratory Workbenches include utility sockets and reagent shelves?",
      answer: "Yes. Our SS 304/316 lab workbenches can be custom-fitted with overhead reagent shelves, integrated electrical terminal points, gas connection fixtures, and keyboard trays depending on client research workflow blueprints."
    },
    {
      category: "products",
      question: "How do you ensure the stability of Laboratory Workbenches for micro-balances?",
      answer: "We fabricate laboratory tables with internal heavy structural skeletons and incorporate specialized vibration-dampening feet. For high-precision balances, we can supply integrated granite blocks isolated from the main desk frame."
    },
    {
      category: "products",
      question: "What is the difference between motorized belt and gravity roller conveyors?",
      answer: "Motorized belt conveyors use powered gear-motors to continuously move components (ideal for assembly lines and inclines). Gravity roller conveyors utilize a slight slope or manual pushing, offering a highly cost-effective, zero-power solution for warehouse sorting."
    },
    {
      category: "products",
      question: "What is the maximum roll load of your gravity roller conveyor tubes?",
      answer: "Depending on tube wall thickness (ranging from 1.5mm to 3.0mm in MS or SS) and bearing specifications, each individual roller is rated to support loads from 20kg up to 150kg, matching heavy industrial transit loads."
    },
    {
      category: "products",
      question: "Can ABS Pipe Trolleys and storage racks be reconfigured later?",
      answer: "Yes. The modular design of ABS coated pipe systems uses mechanical metal connectors, allowing you to dismantle and rebuild the cart layout, shelf height, and display configurations when your shop floor layout changes."
    },
    {
      category: "products",
      question: "Do ABS Pipe Trolleys provide ESD protection for electronic components?",
      answer: "Yes. We offer specialized ESD-safe black coated pipes, conductive joints, and carbon-infused wheels that ground electrostatic build-up, preventing damage to sensitive electronic sub-assemblies."
    }
  ];

  return (
    <>
      <Schema type="WebPage" data={{ url: "/faq/", name: "Apex Engineering FAQ" }} />
      <Schema type="FAQPage" data={{ faqs: masterFaqs }} />
      <Schema type="BreadcrumbList" data={{ items: [
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" }
      ] }} />

      <div className="faq-page-main container section">
        <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />
        
        <div className="section-header text-center" style={{ marginTop: "1rem" }}>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common queries about our industrial fabrication services, products, and engineering capabilities in Chennai.</p>
        </div>

        <FaqListClient faqs={masterFaqs} />

        <div className="cta-banner section text-center" style={{ marginTop: "5rem", borderTop: "1px solid var(--gray-200)", paddingTop: "4rem" }}>
          <h2>Have a Specific Project Requirement?</h2>
          <p style={{ color: "var(--gray-700)", maxWidth: "600px", margin: "1rem auto 2rem" }}>
            Our engineering team is ready to assist you with custom CAD designs, raw material selections, and on-site consultations.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
            <a href="https://wa.me/918925301739" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
