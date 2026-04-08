"use client";

import { PRODUCTS, CATEGORIES } from '@/data/productData';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ProductList = () => {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = categoryFilter 
    ? PRODUCTS.filter(p => p.category === categoryFilter)
    : PRODUCTS;

  return (
    <div className="container section">
      <div className="section-header text-center">
        <h1>All Industrial Products</h1>
        <p>Expertly crafted MS, SS & Aluminium solutions for industrial excellence.</p>
      </div>

      <div className="filter-bar">
        <Link href="/products" className={`filter-btn ${!categoryFilter ? 'active' : ''}`}>All</Link>
        {CATEGORIES.map(cat => (
          <Link 
            key={cat.id} 
            href={`/products?category=${cat.id}`} 
            className={`filter-btn ${categoryFilter === cat.id ? 'active' : ''}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="grid product-grid">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="product-card">
            <div className="product-img">
              {/* Using a placeholder or the first image */}
              <img src={product.images[0]} alt={product.name} />
              <span className="product-cat-tag">{CATEGORIES.find(c => c.id === product.category)?.name}</span>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.shortHook}</p>
              <div className="product-footer">
                <span className="price-label">Request Price</span>
                <span className="view-link">View Details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          background: var(--gray-100);
          color: var(--navy);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition);
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--navy);
          color: var(--white);
        }
        .product-grid {
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
        .product-card {
          background: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .product-img {
          position: relative;
          height: 200px;
          background: var(--gray-200);
        }
        .product-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-cat-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background: var(--navy);
          color: var(--white);
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 700;
        }
        .product-info {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .product-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .product-info p {
          font-size: 0.9rem;
          color: var(--gray-700);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--gray-200);
        }
        .price-label {
          color: var(--accent);
          font-weight: 800;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        .view-link {
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--navy);
        }
      `}</style>
    </div>
  );
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading Products...</div>}>
      <ProductList />
    </Suspense>
  );
}
