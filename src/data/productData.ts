export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortHook: string;
  description: string;
  specifications: Record<string, string>;
  features: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
  images: string[];
}

export const CATEGORIES = [
  { id: "working-tables", name: "Working Tables & Benches", slug: "working-tables-benches" },
  { id: "trolleys-carts", name: "Trolleys & Carts", slug: "trolleys-carts" },
  { id: "storage-racks", name: "Storage & Racks", slug: "storage-racks" },
  { id: "industrial-equipment", name: "Industrial Equipment", slug: "industrial-equipment" },
  { id: "display-signage", name: "Display & Signage", slug: "display-signage" },
  { id: "raw-materials", name: "Raw Materials & Fabrication", slug: "raw-materials-fabrication" },
];

export const PRODUCTS: Product[] = [
  // WORKING TABLES & BENCHES
  {
    id: "ms-working-table",
    name: "MS Working Table",
    slug: "ms-working-table",
    category: "working-tables",
    shortHook: "Heavy-duty structural MS workstations designed for rigorous workshop environments.",
    description: "Our mild steel working tables are engineered for stability and high load-bearing capacity. These benches feature reinforced frames, adjustable anti-vibration leveling feet, and an industrial-grade powder-coated finish for superior resistance to oxidation and mechanical wear.",
    specifications: {
      "Material": "Mild Steel (MS)",
      "Load Capacity": "500kg - 2000kg (Customizable)",
      "Dimensions": "Standard 1500 x 750 x 850mm (Custom sizes available)",
      "Finish": "Powder Coated / Industrial Paint",
      "MOQ": "2 Units"
    },
    features: [
      "Reinforced heavy-duty frame",
      "Adjustable floor levelers",
      "Ant-rust powder coating",
      "Customizable dimensions & drawers",
      "Ergonomic design for worker comfort"
    ],
    useCases: ["Manufacturing Plants", "Automotive Workshops", "Assembly Lines", "Heavy Engineering Units"],
    faqs: [
      { question: "Can the size be customized?", answer: "Yes, we specialize in custom-built dimensions according to your floor space." },
      { question: "What is the weight capacity?", answer: "Standard tables support up to 1000kg, but we can reinforce them for up to 3000kg." }
    ],
    images: ["/hero_industrial_workshop_1775677983634.png"]
  },
  {
    id: "nylon-hand-trolley",
    name: "Nylon Hand Trolley",
    slug: "nylon-hand-trolley",
    category: "trolleys-carts",
    shortHook: "Silent-operating, non-corrosive hand trolleys optimized for pharmaceutical and laboratory floors.",
    description: "Engineered for high-density transport in sensitive environments, our Nylon Hand Trolleys offer a non-marking and silent material handling solution. The high-density nylon body ensures zero corrosion and chemical resistance, making it essential for floor operations in humid industrial zones.",
    specifications: {
      "Material": "High-Density Nylon / Steel Handle",
      "Load Capacity": "150kg - 350kg",
      "Wheels": "Heavy-duty Swivel Casters",
      "Finish": "Polished / Industrial Grade",
      "MOQ": "5 Units"
    },
    features: [
      "Non-marking wheels",
      "Corrosion-resistant body",
      "Silent operation",
      "Lightweight and easy to maneuver",
      "Foldable handle options"
    ],
    useCases: ["Warehouses", "Pharmaceutical Labs", "Retail Stores", "Hospitals"],
    faqs: [
      { question: "Are the wheels replaceable?", answer: "Yes, we provide standard replacement casters." },
      { question: "Is it suitable for wet environments?", answer: "Absolutely, the nylon body is highly resistant to moisture." }
    ],
    images: ["/nylon_trolley_industrial_1775678026628.png"]
  },
  {
    id: "laboratory-workbench",
    name: "Laboratory Workbench",
    slug: "laboratory-workbench",
    category: "working-tables",
    shortHook: "Standard-certified laboratory workbenches with chemical-resistant SS or laminate work surfaces.",
    description: "Designed specifically for aseptic environments, our laboratory workbenches feature SS 304 or chemical-resistant grade tops. These units are built with vibration-dampening structures to support high-precision laboratory tasks, incorporating integrated reagent racks and utility connection points.",
    specifications: {
      "Material": "Stainless Steel (SS 304/316) / Chem-Resist Top",
      "Load Capacity": "200kg - 500kg",
      "Features": "Built-in Sockets, Reagent Racks",
      "Finish": "Polished / Satin Finish",
      "MOQ": "1 Unit"
    },
    features: [
      "Chemical-resistant work surface",
      "Integrated power and gas utility points",
      "Ergonomic height-adjustable options",
      "Easy-to-clean hygienic design",
      "Modular shelving units"
    ],
    useCases: ["Pharmaceutical Labs", "R&D Centers", "Chemical Plants", "Educational Institutions"],
    faqs: [
      { question: "Is it grade 304 stainless steel?", answer: "Yes, we use SS 304 as standard, but SS 316 is available for high-corrosion environments." }
    ],
    images: ["/lab_workbench_industrial_1775678047959.png"]
  },
  {
    id: "abs-pipe-trolley",
    name: "ABS Pipe Trolley",
    slug: "abs-pipe-trolley",
    category: "trolleys-carts",
    shortHook: "Modular lean manufacturing trolleys built using standard ABS coated steel pipes and chrome joints.",
    description: "The foundation of a lean production floor, our ABS Pipe Trolleys are fully modular and reconfigurable. Built using high-strength coated pipes and metallic joints, these trolleys allow for rapid workflow adjustment without the need for welding or heavy tooling.",
    specifications: {
      "Material": "ABS Coated Steel Pipe & Metal Joints",
      "Load Capacity": "100kg - 300kg",
      "Color": "Ivory / Black / Blue / Gray",
      "Wheels": "Anti-static / Standard Casters",
      "MOQ": "3 Units"
    },
    features: [
      "Fully modular and reconfigurable",
      "Lightweight and quiet movement",
      "ESD-safe options available",
      "Color-coded for different departments",
      "No welding required for assembly"
    ],
    useCases: ["Electronic Assembly", "Lean Manufacturing Units", "Inventory Management", "Small Parts Storage"],
    faqs: [
      { question: "Can we modify it later?", answer: "Yes, the pipe and joint system allows for easy modification without special tools." }
    ],
    images: ["/abs_pipe_trolley_industrial_1775678071387.png"]
  },
  {
    id: "roller-conveyor",
    name: "Roller Conveyor",
    slug: "roller-conveyor",
    category: "industrial-equipment",
    shortHook: "Gravity-fed and motorized roller conveyors for high-throughput material transport lines.",
    description: "Precision-engineered roller systems designed for zero-lag material flow. Available in gravity-assist or motorized AC/DC variants, our conveyors feature heavy-duty rollers and precision bearings for transport of crates, pallets, and heavy assemblies.",
    specifications: {
      "Material": "Galvanized Steel / Stainless Steel",
      "Roller Diameter": "38mm / 50mm / 75mm",
      "Load Capacity": "Up to 500kg per meter",
      "Type": "Gravity / Powerized",
      "MOQ": "5 Meters"
    },
    features: [
      "Precision-grade rollers with ball bearings",
      "Reinforced frame for heavy loads",
      "Adjustable floor-mounting stands",
      "Modular sections for easy expansion",
      "Low maintenance design"
    ],
    useCases: ["Packaging Units", "Logistics Hubs", "Assembly Lines", "Distribution Centers"],
    faqs: [
      { question: "Do you offer motorized versions?", answer: "Yes, we providing both AC and DC motorized roller solutions with speed control." }
    ],
    images: ["/roller_conveyor_industrial_1775678092626.png"]
  },
  // TROLLEYS & CARTS
  { id: "bin-picking-trolley", name: "Bin Picking Trolley", slug: "bin-picking-trolley", category: "trolleys-carts", shortHook: "Multi-tier bin picking solutions for efficient order fulfillment.", description: "Customizable bin picking trolleys for high-speed logistics.", specifications: { "Material": "MS Powder Coated", "Load": "200kg" }, features: ["Adjustable shelves", "Heavy duty casters"], useCases: ["E-commerce", "Warehouses"], faqs: [], images: ["/nylon_trolley_industrial_1775678026628.png"] },
  { id: "tray-slider-trolley", name: "Tray Slider Trolley", slug: "tray-slider-trolley", category: "trolleys-carts", shortHook: "Sliding tray systems for organized component movement.", description: "Ergonomic tray slider trolleys for assembly lines.", specifications: { "Material": "SS / MS", "Capacity": "10 Trays" }, features: ["Low friction sliders"], useCases: ["Pharma", "Electronics"], faqs: [], images: [] },
  { id: "pallet-trolley", name: "Pallet Trolley", slug: "pallet-trolley", category: "trolleys-carts", shortHook: "Heavy-duty pallet movement for factory floors.", description: "Industrial grade pallet trolleys for heavy load movement.", specifications: { "Material": "Reinforced Steel", "Load": "2000kg" }, features: ["Hydraulic lift"], useCases: ["Logistics", "Manufacturing"], faqs: [], images: [] },
  { id: "tier-rolling-tool-cart", name: "Tier Rolling Tool Cart", slug: "tier-rolling-tool-cart", category: "trolleys-carts", shortHook: "Mobile storage for industrial tools and equipment.", description: "Multi-tier rolling carts for workshop efficiency.", specifications: { "Tiers": "3/4/5", "Material": "Steel" }, features: ["Lockable casters"], useCases: ["Workshops", "Garage"], faqs: [], images: [] },
  { id: "tool-service-cart", name: "Tool Service Cart", slug: "tool-service-cart", category: "trolleys-carts", shortHook: "Specialized carts for machine maintenance and servicing.", description: "Service carts designed for industrial maintenance teams.", specifications: { "Material": "Reinforced MS" }, features: ["Oil resistant mats"], useCases: ["Service Stations", "Factories"], faqs: [], images: [] },
  { id: "utility-cart", name: "Utility Cart", slug: "utility-cart", category: "trolleys-carts", shortHook: "Versatile carts for general industrial and office use.", description: "All-purpose utility carts for various environments.", specifications: { "Material": "Plastic / Steel" }, features: ["Multi-purpose design"], useCases: ["Offices", "Hospitals"], faqs: [], images: ["/abs_pipe_trolley_industrial_1775678071387.png"] },

  // STORAGE & RACKS
  { id: "rolling-bin-rack", name: "Rolling Bin Rack", slug: "rolling-bin-rack", category: "storage-racks", shortHook: "Mobile storage systems for small parts and inventory.", description: "High-density rolling bin racks for inventory management.", specifications: { "Material": "MS Rack with Plastic Bins" }, features: ["Mobile base"], useCases: ["Warehouses", "Small Parts Storage"], faqs: [], images: [] },
  { id: "award-display-rack", name: "Award Display Rack", slug: "award-display-rack", category: "storage-racks", shortHook: "Professional display solutions for offices and lobbies.", description: "Custom MS/SS racks for awards and certificates.", specifications: { "Material": "SS / Acrylic" }, features: ["Premium finish"], useCases: ["Offices", "Institutions"], faqs: [], images: [] },
  { id: "cantilever-lumber-rack", name: "Cantilever Lumber Rack", slug: "cantilever-lumber-rack", category: "storage-racks", shortHook: "Heavy-duty storage for long and bulky materials.", description: "Robust cantilever systems for pipes and lumber.", specifications: { "Material": "Heavy Gauge Steel" }, features: ["Long arm capacity"], useCases: ["Lumber yards", "Steel storage"], faqs: [], images: [] },
  { id: "wire-dispenser-rack", name: "Wire Dispenser Rack", slug: "wire-dispenser-rack", category: "storage-racks", shortHook: "Organized dispensing for electrical and industrial wires.", description: "Specialized racks for wire coils and dispensers.", specifications: { "Material": "Steel Pipe" }, features: ["Tangle-free dispensing"], useCases: ["Electric panels", "Workshops"], faqs: [], images: [] },
  { id: "metal-shelf", name: "Metal Shelf", slug: "metal-shelf", category: "storage-racks", shortHook: "Durable shelving units for industrial storage.", description: "Standard and custom metal shelving systems.", specifications: { "Material": "Galvanized Steel" }, features: ["Adjustable levels"], useCases: ["Stores", "Warehouses"], faqs: [], images: [] },
  { id: "high-bookcase", name: "High Bookcase", slug: "high-bookcase", category: "storage-racks", shortHook: "Tall storage solutions for industrial and office records.", description: "Heavy-duty bookcases for vertical storage.", specifications: { "Material": "MS Filing Grade" }, features: ["Anti-topple design"], useCases: ["Offices", "Libraries"], faqs: [], images: [] },
  { id: "storage-cabinet", name: "Storage Cabinet", slug: "storage-cabinet", category: "storage-racks", shortHook: "Secure and organized cabinets for industrial tools.", description: "Lockable industrial storage cabinets.", specifications: { "Material": "MS Steel" }, features: ["Secure locking"], useCases: ["Factories", "Labs"], faqs: [], images: [] },
  { id: "ms-filing-cabinet", name: "MS Filing Cabinet", slug: "ms-filing-cabinet", category: "storage-racks", shortHook: "Professional filing solutions for organized offices.", description: "Standard MS filing units for documents.", specifications: { "Drawers": "2/3/4" }, features: ["Smooth glides"], useCases: ["Offices", "Clinics"], faqs: [], images: [] },
  { id: "display-cabinet", name: "Display Cabinet", slug: "display-cabinet", category: "storage-racks", shortHook: "Glass and metal cabinets for product showcases.", description: "Premium display units for galleries and lobbies.", specifications: { "Material": "Steel + Glass" }, features: ["LED lighting options"], useCases: ["Showrooms", "Exhibitions"], faqs: [], images: [] },
  { id: "grid-panel", name: "Grid Panel", slug: "grid-panel", category: "storage-racks", shortHook: "Versatile wall-mounted display and storage panels.", description: "Industrial grid systems for tools and product display.", specifications: { "Material": "MS Wire" }, features: ["Modular hooks"], useCases: ["Workshops", "Retail"], faqs: [], images: [] },

  // INDUSTRIAL EQUIPMENT
  { id: "belt-conveyor", name: "Belt Conveyor", slug: "belt-conveyor", category: "industrial-equipment", shortHook: "Motorized belt systems for continuous material flow.", description: "High-performance belt conveyors for manufacturing lines.", specifications: { "Belt Type": "PVC / Rubber" }, features: ["Variable speed control"], useCases: ["Packaging", "Logistics"], faqs: [], images: [] },
  { id: "machine-guarding", name: "Machine Guarding", slug: "machine-guarding", category: "industrial-equipment", shortHook: "Safety systems to protect operators from hazards.", description: "Custom safety guards for rotating and moving parts.", specifications: { "Material": "MS Wire Mesh / PC" }, features: ["OSHA compliant"], useCases: ["Industrial Safety", "Machinery"], faqs: [], images: [] },
  { id: "machine-frames", name: "Machine Frames", slug: "machine-frames", category: "industrial-equipment", shortHook: "Robust structural bases for industrial machinery.", description: "Custom fabricated frames for diverse machines.", specifications: { "Material": "Heavy MS Channel" }, features: ["High stability"], useCases: ["Original Equipment Manufacturers"], faqs: [], images: [] },
  { id: "machinery-cabins", name: "Machinery Cabins", slug: "machinery-cabins", category: "industrial-equipment", shortHook: "Enclosed environments for machinery protection.", description: "Sound-dampening cabins for noisy or sensitive machines.", specifications: { "Material": "Insulated Panels" }, features: ["Acoustic treatment"], useCases: ["Power Plants", "Factories"], faqs: [], images: [] },
  { id: "pallet-cage", name: "Pallet Cage", slug: "pallet-cage", category: "industrial-equipment", shortHook: "Stackable cages for secure material storage and transport.", description: "Heavy duty steel cages for pallets.", specifications: { "Material": "MS Wire Mesh" }, features: ["Collapsible design"], useCases: ["Warehouse logistics"], faqs: [], images: [] },
  { id: "propan-tank-cage", name: "Propan Tank Cage", slug: "propan-tank-cage", category: "industrial-equipment", shortHook: "Safe storage for gas cylinders and propane tanks.", description: "Compliance-ready gas tank cages.", specifications: { "Material": "Fire resistant coated MS" }, features: ["Ventilation design"], useCases: ["Factories", "Gas Depots"], faqs: [], images: [] },
  { id: "work-platform", name: "Work Platform", slug: "work-platform", category: "industrial-equipment", shortHook: "Elevated platforms for industrial maintenance and access.", description: "Sturdy work platforms for height access.", specifications: { "Material": "Aluminium / MS" }, features: ["Anti-skid surfaces"], useCases: ["Maintenance", "Aviation"], faqs: [], images: [] },

  // DISPLAY & SIGNAGE
  { id: "industrial-display-board", name: "Industrial Display Board", slug: "industrial-display-board", category: "display-signage", shortHook: "Custom boards for production targets and safety notices.", description: "Durable display boards for factory floors.", specifications: { "Material": "Aluminium Frame" }, features: ["Magnetic surface"], useCases: ["Production Control", "HR"], faqs: [], images: [] },
  { id: "podium", name: "Podium", slug: "podium", category: "display-signage", shortHook: "Professional lecterns for industrial presentations.", description: "Sleek podiums for office and training rooms.", specifications: { "Material": "Metal / Wood" }, features: ["Ergonomic design"], useCases: ["Offices", "Training centers"], faqs: [], images: [] },
  { id: "mobile-tv-stand", name: "Mobile TV Stand", slug: "mobile-tv-stand", category: "display-signage", shortHook: "Heavy-duty stands for digital production boards.", description: "Rolling TV stands for large industrial displays.", specifications: { "Material": "Steel" }, features: ["Height adjustable"], useCases: ["Meeting rooms", "Production monitoring"], faqs: [], images: [] },
  { id: "locked-ballot-box", name: "Locked Ballot Box", slug: "locked-ballot-box", category: "display-signage", shortHook: "Secure suggestion and feedback boxes for factories.", description: "Metal ballot boxes for secure internal feedback.", specifications: { "Material": "MS Powder Coated" }, features: ["Key lock system"], useCases: ["Employee Feedback", "Admin"], faqs: [], images: [] },

  // RAW MATERIALS & FABRICATION
  { id: "aluminium-profile", name: "Aluminium Profile", slug: "aluminium-profile", category: "raw-materials", shortHook: "High-grade aluminium extrusions for custom builds.", description: "Assorted T-slot and industrial aluminium profiles.", specifications: { "Material": "Aluminium 6063-T5" }, features: ["V-Slot / T-Slot"], useCases: ["Automation", "Modular builds"], faqs: [], images: [] },
  { id: "abs-pipe-joints", name: "ABS Pipe & Joints", slug: "abs-pipe-joints", category: "raw-materials", shortHook: "Modular lean manufacturing system components.", description: "Full range of ABS pipes and metal joints.", specifications: { "Material": "Steel + ABS / Chrome Joints" }, features: ["No weld system"], useCases: ["Lean Manufacturing"], faqs: [], images: [] },
  { id: "ms-square-tube", name: "MS Square Tube", slug: "ms-square-tube", category: "raw-materials", shortHook: "High-strength mild steel tubing for structural builds.", description: "Industrial grade MS hollow sections.", specifications: { "Material": "Mild Steel" }, features: ["Cold rolled finish"], useCases: ["Structural Fabrication"], faqs: [], images: [] },
  { id: "laser-cutting-plates", name: "Laser Cutting Plates", slug: "laser-cutting-plates", category: "raw-materials", shortHook: "Precision laser cut metal parts for assemblies.", description: "High tolerance laser cutting in MS and SS.", specifications: { "Tolerance": "+/- 0.1mm" }, features: ["Clean edge finish"], useCases: ["Machine parts", "Engraving"], faqs: [], images: [] },
  { id: "folding-plate", name: "Folding Plate", slug: "folding-plate", category: "raw-materials", shortHook: "Bent and folded metal components for custom frames.", description: "CNC bending and folding services.", specifications: { "Material": "Up to 10mm thickness" }, features: ["Precision angles"], useCases: ["Enclosures", "Brackets"], faqs: [], images: [] },
  { id: "acrylic-pc-laser-cutting", name: "Acrylic & PC Laser Cutting", slug: "acrylic-pc-laser-cutting", category: "raw-materials", shortHook: "Custom plastic and polycarbonate laser cutting.", description: "Non-metal laser cutting for guards and boards.", specifications: { "Material": "Acrylic / Polycarbonate" }, features: ["Flame polished edges"], useCases: ["Machine guards", "Signage"], faqs: [], images: [] },
  { id: "acrylic-folding", name: "Acrylic Folding", slug: "acrylic-folding", category: "raw-materials", shortHook: "Bent acrylic solutions for displays and guards.", description: "Heat bending and folding for acrylic parts.", specifications: { "Material": "Acrylic" }, features: ["Seamless bends"], useCases: ["Displays", "Covers"], faqs: [], images: [] },
  { id: "fire-extinguisher-box", name: "Fire Extinguisher Box", slug: "fire-extinguisher-box", category: "raw-materials", shortHook: "Safety enclosures for industrial fire protection.", description: "Wall mounted metal fire extinguisher boxes.", specifications: { "Material": "MS Powder Coated Red" }, features: ["Viewing glass window"], useCases: ["Safety Compliance", "Factories"], faqs: [], images: [] },
];
