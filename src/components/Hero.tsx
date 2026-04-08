import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content fade-in">
          <span className="hero-badge">Trusted by 50+ Industries</span>
          <h1>Industrial Fabrication & Material Handling Equipment in Chennai</h1>
          <p>
            Custom-built MS, SS & Aluminium structures for factories, warehouses & labs. Engineering excellence with 10+ years of expertise.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="btn btn-primary">Get Free Quote</Link>
            <a href="https://wa.me/917200811328" className="btn btn-outline" style={{ border: '2px solid white', color: 'white' }}>WhatsApp Us Now</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <strong>50+</strong>
              <span>Clients</span>
            </div>
            <div className="trust-item">
              <strong>10+</strong>
              <span>Years</span>
            </div>
            <div className="trust-item">
              <strong>100%</strong>
              <span>Custom</span>
            </div>
            <div className="trust-item">
              <strong>Chennai</strong>
              <span>Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
