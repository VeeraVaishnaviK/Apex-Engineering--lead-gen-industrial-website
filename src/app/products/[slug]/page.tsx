import { PRODUCTS } from "@/data/productData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductContent from "@/components/ProductContent";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} Manufacturer in Chennai | Apex Engineering`,
    description: `${product.shortHook} High-quality custom industrial fabrication. Contact us for the best price in Tamil Nadu.`,
    alternates: {
      canonical: `https://apexengineering.vercel.app/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: any) {
  const { slug } = await params;
  // Normalize slug to handle potential underscores or mismatches
  const normalizedSlug = slug.replace(/_/g, '-');
  const product = PRODUCTS.find((p) => p.slug === normalizedSlug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return <ProductContent product={product} relatedProducts={relatedProducts} />;
}
