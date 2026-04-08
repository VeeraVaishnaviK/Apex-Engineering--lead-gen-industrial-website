import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-text-footer">APEX</span>
              <span className="logo-subtext-nav">ENGINEERING</span>
            </Link>
            <p className="footer-desc">
              Your Trusted Partner — Engineering with Excellence. Chennai's leading manufacturer of industrial fabrication and material handling equipment.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/industries">Industries Served</Link></li>
              <li><Link href="/blog">Latest News</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>1/2 Balambigai Nagar 1st Main Road, Rampuram, Chennai 600089</p>
            <p>Phone: +91 89253 01739</p>
            <p>Phone: +91 72008 11328</p>
            <p>Email: apeexengineering@gmail.com</p>
          </div>

          <div className="footer-map">
            <h3>Our Location</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234!2d80.17!3d13.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzEyLjAiTiA4MMKwMTAnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="150" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Apex Engineering. All rights reserved. | Optimized by Expert SEO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
