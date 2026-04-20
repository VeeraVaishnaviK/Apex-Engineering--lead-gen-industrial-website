"use client";

import { useState, useEffect } from 'react';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirements: ''
  });

  useEffect(() => {
    // Check if user has already dismissed or submitted the popup
    const isPopupDismissed = localStorage.getItem('leadPopupDismissed');
    
    if (!isPopupDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // 3 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('leadPopupDismissed', 'true');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hi Apex Engineering, I'm interested in your services.
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Requirements: ${formData.requirements}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917200811328?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Close popup and mark as dismissed
    setIsVisible(false);
    localStorage.setItem('leadPopupDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className={`lead-popup-overlay ${isVisible ? 'active' : ''}`}>
      <div className="lead-popup-container">
        <button className="lead-popup-close" onClick={handleClose}>&times;</button>
        
        <div className="lead-popup-header">
          <h2>Get a Custom Quote</h2>
          <p>Share your requirements and our technical team will get back to you within 24 hours.</p>
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

          <div className="lead-form-group">
            <label htmlFor="requirements">Tell us what you need</label>
            <textarea 
              id="requirements" 
              name="requirements" 
              className="lead-input lead-textarea" 
              placeholder="Example: I need 5 industrial trolleys with 500kg capacity..." 
              required
              value={formData.requirements}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="lead-submit-btn">
            Submit Requirements
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
