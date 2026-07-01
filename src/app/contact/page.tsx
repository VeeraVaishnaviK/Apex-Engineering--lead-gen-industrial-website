import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "Industrial Fabrication Quote Chennai",
  description:
    "Request a custom industrial fabrication quote in Chennai from Apex Engineering. Prompt engineering design approvals and competitive pricing. Contact us.",
  alternates: { canonical: `${BASE_URL}/contact/` },
  keywords: [
    "contact Apex Engineering Chennai",
    "industrial fabrication quote Chennai",
    "custom fabrication enquiry Tamil Nadu",
    "Rampuram industrial manufacturer",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Industrial Fabrication Quote Chennai | Apex Engineering",
    description:
      "Request a custom industrial fabrication quote in Chennai from Apex Engineering. Prompt engineering design approvals and competitive pricing. Contact us.",
    url: `${BASE_URL}/contact/`,
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
    title: "Industrial Fabrication Quote Chennai | Apex Engineering",
    description:
      "Request a custom industrial fabrication quote in Chennai from Apex Engineering. Prompt engineering design approvals and competitive pricing. Contact us.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const ContactPage = () => {
  return (
    <>
      <Schema type="ContactPage" data={{}} />
      <Schema type="WebPage" data={{ url: "/contact/", name: "Contact Apex Engineering" }} />
      <div className="contact-page container section">
        <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />
      <div className="section-header text-center" style={{ marginTop: "1rem" }}>
        <h1>Get a Custom Industrial Fabrication Quote in Chennai</h1>
        <p>Let's discuss your next industrial project. Our experts are ready to help you with custom designs and quotes.</p>
      </div>

      <div className="main-layout">
        <div className="contact-details">
          <div className="info-card">
            <h3>Registered Office</h3>
            <p>1/2 Balambigai Nagar 1st Main Road,<br />Rampuram, Chennai, Tamil Nadu 600089</p>
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
        <h2>Our Location in Rampuram, Chennai</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3630751913584!2d80.17459!3d13.030553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260db58e1e92b%3A0x5e33dda7bae2c92!2sRamapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%" 
          height="450" 
          style={{ border: 0, borderRadius: '12px' }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Apex Engineering Location - Ramapuram, Chennai"
        ></iframe>
      </div>

      <div className="faq-section section" style={{ marginTop: '4rem', borderTop: '1px solid var(--gray-200)', paddingTop: '4rem' }}>
        <h2>Frequently Asked Contact Questions</h2>
        <div className="grid col-2" style={{ gap: '3rem', marginTop: '2rem' }}>
          <div>
            <h3>How do I request a custom fabrication quote?</h3>
            <p>You can submit your technical drawings, hand sketches, or project specifications using our online contact form, or send them directly to us on WhatsApp. Our engineers will review your files and provide a detailed price estimate within 24 hours.</p>
          </div>
          <div>
            <h3>Can I visit your fabrication workshop in Chennai?</h3>
            <p>Yes. Our manufacturing facility is located in Rampuram, Chennai. We welcome industrial clients and procurement managers for on-site design discussions and quality checks by appointment.</p>
          </div>
          <div>
            <h3>What is your service delivery area?</h3>
            <p>While our primary manufacturing and on-site integration services are focused on the Chennai industrial corridors (Ambattur, Guindy, Sriperumbudur, Oragadam), we safely pack and ship custom structures to factories across all districts of Tamil Nadu.</p>
          </div>
          <div>
            <h3>Do you offer on-site measurements?</h3>
            <p>Yes. For complex material handling equipment and custom assembly lines, our technical team provides on-site dimension checks and design verification to ensure perfect fitment.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;

