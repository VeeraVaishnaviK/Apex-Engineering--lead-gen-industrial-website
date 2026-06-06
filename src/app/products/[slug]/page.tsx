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

  return {
    title: `${product.name} Manufacturer in Chennai`,
    description: `${product.shortHook} High-quality custom industrial fabrication by Apex Engineering. Best price in Tamil Nadu — Contact for a free quote.`,
    keywords: [
      `${product.name} manufacturer Chennai`,
      `${product.name} price Tamil Nadu`,
      `industrial ${product.name} supplier`,
      "custom fabrication Chennai",
      "Apex Engineering",
    ],
    alternates: {
      canonical: `${BASE_URL}/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — Industrial Manufacturer in Chennai | Apex Engineering`,
      description: `${product.shortHook} Custom-built in Chennai. Best quality MS/SS/Aluminium fabrication. Get a free quote today.`,
      url: `${BASE_URL}/products/${product.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${product.name} manufactured by Apex Engineering Chennai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Apex Engineering Chennai`,
      description: `${product.shortHook} Custom industrial fabrication in Chennai.`,
      images: [ogImage],
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

  return (
    <>
      <Schema
        type="Product"
        data={{
          name: product.name,
          description: product.description,
          image: product.images[0]
            ? `${BASE_URL}${product.images[0]}`
            : `${BASE_URL}/hero_industrial_workshop_1775677983634.png`,
        }}
      />
      {product.faqs.length > 0 && (
        <Schema type="FAQPage" data={{ faqs: product.faqs }} />
      )}
      <Schema type="BreadcrumbList" data={{ items: breadcrumbItems }} />
      <ProductContent product={product} relatedProducts={relatedProducts} />
    </>
  );
}
