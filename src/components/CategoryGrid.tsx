import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/data/productData';

const CategoryGrid = () => {
  // Category icons mapping
  const categoryIcons: Record<string, string> = {
    'working-tables': '🔧',
    'trolleys-carts': '🛒',
    'storage-racks': '📦',
    'industrial-equipment': '⚙️',
    'display-signage': '📋',
    'raw-materials': '🔩',
  };

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
                  <span>{categoryIcons[cat.id]}</span>
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
