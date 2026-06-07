"use client";

import { useState, useEffect } from 'react';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Save lead to database
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'popup' }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Failed to submit. Please try again.');
        setIsSubmitting(false);
        return;
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
      return;
    }
    
    // Construct WhatsApp message
    const message = `Hi Apex Engineering, I'm interested in your services.
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917200811328?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Close popup
    setIsSubmitting(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`lead-popup-overlay ${isVisible ? 'active' : ''}`}>
      <div className="lead-popup-container">
        <button className="lead-popup-close" onClick={handleClose}>&times;</button>
        
        <div className="lead-popup-header">
          <h2>Get a Custom Quote</h2>
          <p>Share your details and our technical team will get back to you within 24 hours.</p>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="lead-form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="lead-input" 
              placeholder="Enter your name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="lead-form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="lead-input" 
              placeholder="Enter your phone number" 
              required 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="lead-form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="lead-input" 
              placeholder="Enter your email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#991b1b',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              marginBottom: '0.5rem',
              fontSize: '0.85rem',
              lineHeight: '1.4',
            }}>
              {error}
            </div>
          )}

          <button type="submit" className="lead-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Get Quote via WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
