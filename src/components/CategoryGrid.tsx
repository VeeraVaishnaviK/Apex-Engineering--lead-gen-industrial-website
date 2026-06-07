import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/data/productData';

import React from 'react';

// Professional SVG icons for each category
const CategoryIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactNode> = {
    'working-tables': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="2" rx="1"/><line x1="6" y1="9" x2="6" y2="20"/><line x1="18" y1="9" x2="18" y2="20"/><line x1="4" y1="17" x2="8" y2="17"/><line x1="16" y1="17" x2="20" y2="17"/>
      </svg>
    ),
    'trolleys-carts': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h2l3 12h10l3-8H8"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>
      </svg>
    ),
    'storage-racks': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="21"/>
      </svg>
    ),
    'industrial-equipment': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    'display-signage': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    'raw-materials': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
      </svg>
    ),
  };
  return icons[id] || null;
};

const CategoryGrid = () => {

  // Category accent colors for visual differentiation
  const categoryAccents: Record<string, string> = {
    'working-tables': 'linear-gradient(135deg, #0056b3, #003d82)',
    'trolleys-carts': 'linear-gradient(135deg, #00796b, #004d40)',
    'storage-racks': 'linear-gradient(135deg, #e65100, #bf360c)',
    'industrial-equipment': 'linear-gradient(135deg, #283593, #1a237e)',
    'display-signage': 'linear-gradient(135deg, #6a1b9a, #4a148c)',
    'raw-materials': 'linear-gradient(135deg, #37474f, #263238)',
  };

  // Category images
  const categoryImages: Record<string, string> = {
    'working-tables': '/hero_industrial_workshop_1775677983634.png',
    'trolleys-carts': '/nylon_trolley_industrial_1775678026628.png',
    'storage-racks': '/abs_pipe_trolley_industrial_1775678071387.png',
    'industrial-equipment': '/roller_conveyor_industrial_1775678092626.png',
    'display-signage': '/industrial_facility_about_1775678115255.png',
    'raw-materials': '/ms_working_table_industrial_1775678005220.png',
  };

  // Count products per category
  const getProductCount = (categoryId: string) => {
    return PRODUCTS.filter(p => p.category === categoryId).length;
  };

  return (
    <section className="section bg-light" id="categories">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Expertise</span>
          <h2>Product Categories</h2>
          <p>Explore our wide range of industrial solutions tailored for your business needs.</p>
        </div>

        <div className="category-grid-container">
          {CATEGORIES.map((cat, index) => (
            <Link
              href={`/products?category=${cat.id}`}
              key={cat.id}
              className="category-box"
              id={`category-${cat.id}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background image overlay */}
              <div
                className="category-box-bg"
                style={{
                  backgroundImage: `url(${categoryImages[cat.id] || '/hero_industrial_workshop_1775677983634.png'})`,
                }}
              />

              {/* Gradient overlay */}
              <div className="category-box-overlay" />

              {/* Content */}
              <div className="category-box-content">
                <div
                  className="category-box-icon"
                  style={{ background: categoryAccents[cat.id] }}
                >
                  <CategoryIcon id={cat.id} />
                </div>

                <h3 className="category-box-title">{cat.name}</h3>

                <p className="category-box-count">
                  {getProductCount(cat.id)} Products
                </p>

                <div className="category-box-cta">
                  <span>Explore Products</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Accent bar */}
              <div
                className="category-box-accent"
                style={{ background: categoryAccents[cat.id] }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
