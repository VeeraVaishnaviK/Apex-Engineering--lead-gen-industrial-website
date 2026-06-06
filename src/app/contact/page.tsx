import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

const BASE_URL = "https://www.apexengineering.org.in";

export const metadata: Metadata = {
  title: "Contact Apex Engineering | Get a Free Industrial Fabrication Quote",
  description:
    "Contact Apex Engineering in Rampuram, Chennai for custom MS, SS & Aluminium fabrication, industrial trolleys, and material handling equipment. Call +91 89253 01739 or request a quote online.",
  alternates: { canonical: `${BASE_URL}/contact` },
  keywords: [
    "contact Apex Engineering Chennai",
    "industrial fabrication quote Chennai",
    "custom fabrication enquiry Tamil Nadu",
    "Rampuram industrial manufacturer",
  ],
  openGraph: {
    title: "Contact Apex Engineering | Industrial Fabrication Quote — Chennai",
    description:
      "Get in touch for custom MS/SS/Aluminium fabrication. Rampuram, Chennai. Call +91 89253 01739 or send an enquiry. Free quote in 24 hours.",
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Contact Apex Engineering industrial fabrication Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Apex Engineering Chennai | Free Quote",
    description:
      "Custom industrial fabrication in Chennai. Get a free quote from Apex Engineering. +91 89253 01739.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const ContactPage = () => {
  return (
    <div className="contact-page container section">
      <div className="section-header text-center">
        <h1>Connect with Apex Engineering</h1>
        <p>Let's discuss your next industrial project. Our experts are ready to help you with custom designs and quotes.</p>
      </div>

      <div className="main-layout">
        <div className="contact-details">
          <div className="info-card">
            <h3>Registered Office</h3>
            <p>1/2 Balambigai Nagar 1st Main Road,<br />Rampuram, Chennai 600089</p>
          </div>
          
          <div className="info-card">
            <h3>Call Us</h3>
            <p>+91 89253 01739</p>
            <p>+91 72008 11328</p>
          </div>

          <div className="info-card">
            <h3>Email Us</h3>
            <p>apeexengineering@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="form-side">
          <ContactForm />
        </div>
      </div>

      <div className="map-section section">
        <h2>Find Us on Google Maps</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d80.17!3d13.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzEyLjAiTiA4MMKwMTAnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0, borderRadius: '12px' }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

