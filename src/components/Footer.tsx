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
              <li><Link href="/about/">About Us</Link></li>
              <li><Link href="/contact/">Contact Us</Link></li>
              <li><Link href="/blog/">Latest News</Link></li>
              <li><Link href="/sitemap/">HTML Sitemap</Link></li>
              <li><Link href="/location/chennai/">Chennai Guide</Link></li>
              <li><Link href="/location/tamil-nadu/">Tamil Nadu Guide</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Our Offerings</h3>
            <ul>
              <li><Link href="/services/#industrial-fabrication">MS Fabrication</Link></li>
              <li><Link href="/services/#welding-works">SS Fabrication</Link></li>
              <li><Link href="/products/roller-conveyor/">Conveyor Systems</Link></li>
              <li><Link href="/products/nylon-hand-trolley/">Material Handling Equipment</Link></li>
              <li><Link href="/products/nylon-hand-trolley/">Industrial Trolleys</Link></li>
              <li><Link href="/products/ms-working-table/">Work Tables</Link></li>
              <li><Link href="/products/abs-pipe-trolley/">Industrial Storage Solutions</Link></li>
              <li><Link href="/about/">About Us</Link></li>
              <li><Link href="/contact/">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>1/2 Balambigai Nagar 1st Main Road, Rampuram, Chennai, Tamil Nadu 600089</p>
            <p>Phone: +91 89253 01739</p>
            <p>Phone: +91 72008 11328</p>
            <p>Email: apeexengineering@gmail.com</p>
          </div>

          <div className="footer-map">
            <h3>Our Location</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3630751913584!2d80.17459!3d13.030553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260db58e1e92b%3A0x5e33dda7bae2c92!2sRamapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" 
              height="150" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apex Engineering Location - Ramapuram, Chennai"
            ></iframe>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Apex Engineering. All rights reserved. | Developed by Lin&apos;s Infotech Company Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
