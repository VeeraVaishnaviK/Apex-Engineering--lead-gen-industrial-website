"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header ${isOpen ? 'active' : ''}`}>
      <nav className="main-nav">
        <div className="container flex-between">
          <Link href="/" className="logo">
            <span className="logo-text-nav">APEX</span>
            <span className="logo-subtext-nav">ENGINEERING</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/industries" onClick={() => setIsOpen(false)}>Industries</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            
            {/* Mobile Only CTA */}
            <a href="https://wa.me/917200811328" className="btn btn-primary nav-mobile-cta" onClick={() => setIsOpen(false)}>
              Get a Quote
            </a>
          </div>

          <div className="nav-cta">
            <a href="https://wa.me/917200811328" target="_blank" className="btn btn-primary">
              Get Quote
            </a>
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
