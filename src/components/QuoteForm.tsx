"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    productInterest: "Select Product Interest",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save lead to database
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          productInterest: formData.productInterest,
          requirements: formData.requirements,
          source: "home_page",
        }),
      });
    } catch {
      // Silently continue to WhatsApp
    }

    // Build WhatsApp message
    const message = `Hi Apex Engineering, I'd like a quote.
Name: ${formData.name}
Phone: ${formData.phone}
Product Interest: ${formData.productInterest}
Requirements: ${formData.requirements}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/917200811328?text=${encodedMessage}`,
      "_blank"
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quote-form" style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3>Quote Request Sent!</h3>
        <p style={{ color: "var(--steel)", marginTop: "0.5rem" }}>
          Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (Required)"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <select
          name="productInterest"
          value={formData.productInterest}
          onChange={handleChange}
        >
          <option>Select Product Interest</option>
          <option>Working Tables &amp; Benches</option>
          <option>Trolleys &amp; Carts</option>
          <option>Storage &amp; Racks</option>
          <option>Conveyors &amp; Material Handling</option>
          <option>Custom Fabrication</option>
        </select>
      </div>
      <div className="form-group">
        <textarea
          name="requirements"
          placeholder="Tell us about your requirements..."
          value={formData.requirements}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request Price via WhatsApp"}
      </button>
    </form>
  );
}
