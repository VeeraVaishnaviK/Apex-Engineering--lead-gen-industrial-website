import Link from 'next/link';
import { CATEGORIES } from '@/data/productData';

const CategoryGrid = () => {
  // Mapping categories to generated images for a more visual look
  const categoryImages: Record<string, string> = {
    'working-tables': '/hero_industrial_workshop_1775677983634.png',
    'trolleys-carts': '/nylon_trolley_industrial_1775678026628.png',
    'storage-racks': '/abs_pipe_trolley_industrial_1775678071387.png',
    'industrial-equipment': '/roller_conveyor_industrial_1775678092626.png',
    'display-signage': '/hero_industrial_workshop_1775677983634.png',
    'raw-materials': '/hero_industrial_workshop_1775677983634.png',
  };

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Our Expertise</span>
          <h2>Product Categories</h2>
          <p>Explore our wide range of industrial solutions tailored for your business needs.</p>
        </div>

        <div className="grid category-grid">
          {CATEGORIES.map((cat) => (
            <Link 
              href={`/products?category=${cat.id}`} 
              key={cat.id} 
              className="category-card"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,31,63,0.8), rgba(0,31,63,0.8)), url(${categoryImages[cat.id] || '/hero_industrial_workshop_1775677983634.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                border: 'none'
              }}
            >
              <div className="category-icon">
                <span className="icon-box" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>⚙️</span>
              </div>
              <h3 style={{ color: 'white' }}>{cat.name}</h3>
              <p style={{ color: 'var(--gray-300)' }}>Custom-built solutions for various industrial applications.</p>
              <span className="category-link" style={{ color: 'var(--white)', opacity: 0.8 }}>View Products →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
