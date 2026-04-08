export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Industrial Trolleys for Warehouses in Chennai",
    slug: "top-10-industrial-trolleys-chennai",
    date: "2024-04-15",
    excerpt: "Efficiency in a warehouse starts with the right material handling equipment. Discover the best industrial trolleys suited for Chennai's fast-paced logistical hubs.",
    author: "Technical Team",
    image: "/blog/trolleys-chennai.jpg",
    tags: ["Warehouse", "Material Handling", "Logistics"],
    content: `
      <h2>The Importance of the Right Trolley in Chennai's Warehouses</h2>
      <p>Chennai has emerged as a major logistical hub in South India. With industrial parks in Oragadam, Sriperumbudur, and Ambattur, the demand for efficient material handling is at an all-time high. Choosing the right industrial trolley can reduce worker fatigue and increase throughput by up to 30%.</p>
      
      <h3>1. Nylon Hand Trolley</h3>
      <p>Perfect for light to medium loads, these trolleys are silent and non-marking, making them ideal for pharmaceutical warehouses in Chennai.</p>
      
      <h3>2. Heavy-Duty MS Platform Trolley</h3>
      <p>If you're moving heavy engine parts or machinery, the MS platform trolley is the bedrock of warehouse operations. Built with reinforced steel, it handles up to 1 ton with ease.</p>
      
      <h3>3. Bin Picking Trolley</h3>
      <p>For E-commerce fulfillment centers, bin picking trolleys allow for multi-item picking, saving precious minutes on every order.</p>
      
      <p>In conclusion, the right trolley depends on your floor type, material weight, and environmental conditions. Contact Apex Engineering for a custom consultation today.</p>
    `
  },
  {
    id: "2",
    title: "MS vs SS vs Aluminium Working Tables — Which is Best?",
    slug: "ms-vs-ss-vs-aluminium-working-tables",
    date: "2024-04-20",
    excerpt: "Choosing the right material for your industrial workbench is crucial for longevity and hygiene. We compare MS, SS, and Aluminium to help you decide.",
    author: "Engineering Lead",
    image: "/blog/working-tables-compare.jpg",
    tags: ["Fabrication", "Working Tables", "Industrial"],
    content: `
      <h2>Material Comparison: Finding the Right Balance</h2>
      <p>When setting up a factory in Tamil Nadu, the choice of material for your working tables affects both the initial cost and the long-term durability of your facility.</p>
      
      <h3>MS (Mild Steel): The Heavyweight Champion</h3>
      <p>MS tables are incredibly cost-effective and strong. They are the go-to for heavy fabrication and automotive assembly lines. However, they require powder coating to prevent rust.</p>
      
      <h3>SS (Stainless Steel): The Hygiene Standards</h3>
      <p>For food processing or pharmaceutical labs, SS (Grade 304 or 316) is mandatory. It's non-reactive, easy to clean, and extremely resistant to corrosion.</p>
      
      <h3>Aluminium: The Lightweight Modular King</h3>
      <p>Aluminium profiles are perfect for cleanrooms and laboratories where weight and aesthetics matter. They are also incredibly easy to modify later.</p>
    `
  },
  {
    id: "3",
    title: "Complete Guide to Material Handling Equipment",
    slug: "complete-guide-material-handling-equipment",
    date: "2024-04-25",
    excerpt: "From conveyors to trolleys, understand the full spectrum of material handling solutions that can transform your manufacturing unit's efficiency.",
    author: "System Architect",
    image: "/blog/material-handling-guide.jpg",
    tags: ["Equipment", "Manufacturing", "Efficiency"],
    content: `
      <h2>Transforming Workflow with Modern Equipment</h2>
      <p>Modern manufacturing in India is evolving towards "Lean Manufacturing." This requires a holistic approach to how materials move from receiving to shipping.</p>
      
      <h3>Phase 1: Receiving & Sorting</h3>
      <p>Use pallet trolleys and roller conveyors to move bulk goods quickly.</p>
      
      <h3>Phase 2: Production</h3>
      <p>Custom workstations and ABS pipe trolleys keep parts within reach of the operator, reducing "motion waste."</p>
      
      <p>Expertly designed material handling systems can reduce operational costs by streamlining the assembly process.</p>
    `
  },
  {
    id: "4",
    title: "Best Custom Fabrication Services in Chennai",
    slug: "best-custom-fabrication-services-chennai",
    date: "2024-05-01",
    excerpt: "Looking for a fabrication partner in Chennai? Here is what you should look for in terms of quality, on-time delivery, and technical expertise.",
    author: "Operations Manager",
    image: "/blog/fabrication-chennai.jpg",
    tags: ["Chennai", "Fabrication", "B2B"],
    content: `
      <h2>Why Chennai is the Fabrication Hub of India</h2>
      <p>With its proximity to major sea ports and a massive automotive corridor, Chennai offers world-class fabrication expertise. But not all fabricators are created equal.</p>
      
      <h3>Key Metrics for Quality</h3>
      <ul>
        <li>Certifications & Material Testing</li>
        <li>Design support (CAD/CAM capabilities)</li>
        <li>On-site installation and support</li>
      </ul>
      <p>Apex Engineering pride itself on being a one-stop-shop for all custom industrial requirements in the Ramapuram region.</p>
    `
  },
  {
    id: "5",
    title: "How to Choose the Right Industrial Workbench",
    slug: "how-to-choose-industrial-workbench",
    date: "2024-05-05",
    excerpt: "A workbench is more than just a table. It's the primary interface for your workers. Learn how ergonomics affects productivity.",
    author: "Product Designer",
    image: "/blog/choice-workbench.jpg",
    tags: ["Ergonomics", "Industrial", "Workbench"],
    content: `
      <h2>The Ergonomics of Production</h2>
      <p>Worker fatigue is a major cause of quality drops in high-precision manufacturing. An ergonomically designed workbench can mitigate this risk.</p>
      
      <h3>Height & Reach</h3>
      <p>Standard tables are often too high or low. Customizable benches from Apex allow for the perfect height based on the task type (sitting vs standing).</p>
      
      <h3>Utility Integration</h3>
      <p>Integrated power sockets, lighting, and air-pressure joints keep the workspace clean and efficient.</p>
    `
  }
];
