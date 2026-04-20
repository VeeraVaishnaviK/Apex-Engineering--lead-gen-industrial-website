"use client";

import { PRODUCTS, CATEGORIES } from '@/data/productData';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useMemo } from 'react';

const ProductList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryFilter = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let results = categoryFilter
      ? PRODUCTS.filter(p => p.category === categoryFilter)
      : PRODUCTS;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.shortHook.toLowerCase().includes(query)
      );
    }

    return results;
  }, [categoryFilter, searchQuery]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === 'all') {
      router.push('/products');
    } else {
      router.push(`/products?category=${val}`);
    }
  };

  return (
    <div className="container section">
      <div className="section-header text-center">
        <h1>All Industrial Products</h1>
        <p>Expertly crafted MS, SS & Aluminium solutions for industrial excellence.</p>
      </div>

      <div className="filter-toolbar">
        <div className="search-box">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        <div className="category-select-wrapper">
          <select
            className="category-select"
            value={categoryFilter || 'all'}
            onChange={handleCategoryChange}
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name} ({PRODUCTS.filter(p => p.category === cat.id).length})
              </option>
            ))}
          </select>
          <svg className="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <div className="results-info">
        <span>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</span>
        {(categoryFilter || searchQuery) && (
          <button className="clear-all" onClick={() => { setSearchQuery(''); router.push('/products'); }}>
            Clear filters
          </button>
        )}
      </div>

      <div className="grid product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="product-card">
              <div className="product-img">
                <img src={product.images[0] || '/images/hero.png'} alt={product.name} />
                <span className="product-cat-tag">{CATEGORIES.find(c => c.id === product.category)?.name}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.shortHook}</p>
                <div className="product-footer">
                  <span className="price-label">Request Price</span>
                  <span className="view-link">View Details</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter to find what you are looking for.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .filter-toolbar {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: stretch;
        }

        .search-box {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          color: var(--steel);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 1rem 3rem 1rem 3.25rem;
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          font-size: 1rem;
          font-family: inherit;
          background: var(--white);
          color: var(--black);
          transition: var(--transition);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--navy);
          box-shadow: 0 0 0 3px rgba(0, 31, 63, 0.08);
        }

        .search-input::placeholder {
          color: var(--steel);
        }

        .search-clear {
          position: absolute;
          right: 1rem;
          background: var(--gray-200);
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--gray-700);
          transition: var(--transition);
        }

        .search-clear:hover {
          background: var(--navy);
          color: var(--white);
        }

        .category-select-wrapper {
          position: relative;
          min-width: 240px;
        }

        .category-select {
          width: 100%;
          height: 100%;
          padding: 1rem 2.75rem 1rem 1.25rem;
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: inherit;
          background: var(--white);
          color: var(--navy);
          appearance: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .category-select:focus {
          outline: none;
          border-color: var(--navy);
          box-shadow: 0 0 0 3px rgba(0, 31, 63, 0.08);
        }

        .select-chevron {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--navy);
          pointer-events: none;
        }

        .results-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          color: var(--steel);
          font-weight: 600;
        }

        .clear-all {
          background: none;
          border: none;
          color: var(--accent);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          text-decoration: underline;
          font-family: inherit;
        }

        .clear-all:hover {
          color: var(--navy);
        }

        .product-grid {
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
        .product-card {
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          border: 1px solid var(--gray-200);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
          border-color: var(--accent);
        }
        .product-img {
          position: relative;
          height: 220px;
          background: var(--gray-100);
        }
        .product-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-cat-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: var(--navy);
          color: var(--white);
          font-size: 0.65rem;
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .product-info {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .product-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .product-info p {
          font-size: 0.9rem;
          color: var(--gray-700);
          margin-bottom: 1.5rem;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.25rem;
          border-top: 1px solid var(--gray-100);
        }
        .price-label {
          color: var(--accent);
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        .view-link {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--navy);
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          background: var(--gray-100);
          border-radius: 16px;
        }

        .no-results h3 {
          margin-bottom: 0.5rem;
        }

        .no-results p {
          color: var(--steel);
        }

        @media (max-width: 768px) {
          .filter-toolbar {
            flex-direction: column;
          }

          .category-select-wrapper {
            min-width: unset;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }
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
