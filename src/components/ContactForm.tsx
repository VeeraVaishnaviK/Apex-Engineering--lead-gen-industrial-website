"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productInterest: "Working Tables & Benches",
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

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact_page" }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // continue regardless
    }

    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="quote-form-card" style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: "1rem" }}
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h2>Enquiry Submitted!</h2>
        <p style={{ color: "var(--steel)", marginTop: "0.5rem" }}>
          Our technical team will get back to you within 24 hours.
        </p>
        <button
          className="btn btn-primary"
          style={{ marginTop: "1.5rem" }}
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              productInterest: "Working Tables & Benches",
              requirements: "",
            });
          }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="quote-form-card">
      <h2>Send an Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="john@company.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Product Interest</label>
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
          >
            <option>Working Tables &amp; Benches</option>
            <option>Trolleys &amp; Carts</option>
            <option>Storage &amp; Racks</option>
            <option>Industrial Equipment</option>
            <option>Display &amp; Signage</option>
            <option>Raw Materials &amp; Fabrication</option>
          </select>
        </div>
        <div className="form-group">
          <label>Requirements</label>
          <textarea
            name="requirements"
            placeholder="Please describe your dimensions, material, and quantity..."
            value={formData.requirements}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
