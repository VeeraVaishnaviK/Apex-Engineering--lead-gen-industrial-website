import { PRODUCTS } from "@/data/productData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductContent from "@/components/ProductContent";
import Schema from "@/components/Schema";

const BASE_URL = "https://www.apexengineering.org.in";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const ogImage = product.images[0] || "/hero_industrial_workshop_1775677983634.png";
  const titleText = `${product.name} Manufacturer Chennai`;
  const descText = `Apex Engineering is a premier ${product.name} manufacturer in Chennai. Custom sizes & load capacity available. Request a quote on WhatsApp.`;

  return {
    title: titleText,
    description: descText,
    keywords: [
      `${product.name} manufacturer Chennai`,
      `${product.name} price Tamil Nadu`,
      `industrial ${product.name} supplier`,
      "custom fabrication Chennai",
      "Apex Engineering",
    ],
    alternates: {
      canonical: `${BASE_URL}/products/${product.slug}/`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      title: `${titleText} | Apex Engineering`,
      description: descText,
      url: `${BASE_URL}/products/${product.slug}/`,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${product.name} manufactured by Apex Engineering Chennai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleText} | Apex Engineering`,
      description: descText,
      images: [ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`],
    },
  };
}

export default async function ProductPage({ params }: any) {
  const { slug } = await params;
  const normalizedSlug = slug.replace(/_/g, "-");
  const product = PRODUCTS.find((p) => p.slug === normalizedSlug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  const standardProductFaqs = [
    {
      question: `How do I request a custom size or specific load capacity for ${product.name}?`,
      answer: `You can send your layout drawings or load parameters directly to our technical sales team via WhatsApp or our contact form. Our engineers will draft a detailed CAD drawing for your approval within 24 hours, ensuring the design matches your exact requirements before manufacturing begins.`
    },
    {
      question: `What materials and finishes are available for ${product.name}?`,
      answer: `We fabricate using certified Mild Steel (MS) with anti-rust powder coating, premium Stainless Steel (SS 304 or SS 316 grades) with satin polish for hygienic cleanrooms, and high-strength modular Aluminium profiles. Finishes are selected to withstand chemical exposure, humidity, and mechanical wear.`
    },
    {
      question: `What is the estimated delivery time and shipping method for Tamil Nadu?`,
      answer: `Standard orders are processed and manufactured within 5 to 7 business days from design sign-off. We arrange dedicated local transport for Chennai-based drop-offs and verified third-party freight carriers for secure packaging and shipping across Tamil Nadu industrial zones.`
    }
  ];
  const allFaqs = [...(product.faqs || []), ...standardProductFaqs];

  return (
    <>
      <Schema
        type="Product"
        data={{
          name: product.name,
          description: product.description,
          slug: product.slug,
          image: product.images[0]
            ? `${BASE_URL}${product.images[0]}`
            : `${BASE_URL}/hero_industrial_workshop_1775677983634.png`,
        }}
      />
      <Schema type="FAQPage" data={{ faqs: allFaqs }} />
      <Schema type="BreadcrumbList" data={{ items: breadcrumbItems }} />
      <ProductContent product={product} relatedProducts={relatedProducts} allFaqs={allFaqs} />
    </>
  );
}
