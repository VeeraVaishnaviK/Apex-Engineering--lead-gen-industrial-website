import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        poster="/hero_industrial_workshop_1775677983634.png"
      >
        <source src="/55.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content fade-in">
          <span className="hero-badge">Serving 500+ Industrial Clients</span>
          <h1>Precision Engineering. Durable Steel. Custom Fabrication in Chennai.</h1>
          <p>
            From heavy-duty MS structures to high-precision laboratory workstations—we engineer the backbone of your industrial floor.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="btn btn-primary">Get Free Quote</Link>
            <a href="https://wa.me/917200811328" className="btn btn-outline" style={{ border: '2px solid white', color: 'white' }}>WhatsApp Us Now</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <strong>500+</strong>
              <span>Projects</span>
            </div>
            <div className="trust-item">
              <strong>3+</strong>
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
