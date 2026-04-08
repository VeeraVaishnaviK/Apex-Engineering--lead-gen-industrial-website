import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Apex Engineering | Industrial Hub Chennai",
  description: "Get in touch with Apex Engineering for your industrial fabrication needs. Request a quote or visit our facility in Rampuram, Chennai.",
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
          <div className="quote-form-card">
            <h2>Send an Enquiry</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. John Doe" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label>Product Interest</label>
                <select>
                  <option>Working Tables & Benches</option>
                  <option>Trolleys & Carts</option>
                  <option>Storage & Racks</option>
                  <option>Industrial Equipment</option>
                  <option>Display & Signage</option>
                  <option>Raw Materials & Fabrication</option>
                </select>
              </div>
              <div className="form-group">
                <label>Requirements</label>
                <textarea placeholder="Please describe your dimensions, material, and and quantity..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Submit Request</button>
            </form>
          </div>
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
