"use client";

import { useState } from "react";
import Schema from "./Schema";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What custom fabrication services does Apex Engineering offer in Chennai?",
    answer: "Apex Engineering specializes in custom mild steel (MS), stainless steel (SS 304/316), and modular aluminium structural fabrication. According to our 2026 project log, over 65% of our operations involve custom-built industrial working tables, storage racks, and material handling trolleys manufactured to exact client engineering drawings."
  },
  {
    question: "What is your turnaround time for a custom quote and CAD drawings?",
    answer: "We guarantee a detailed free quotation and basic design review within 24 hours of receiving your project specifications. Once designs are approved, our lean manufacturing processes in our Rampuram, Chennai facility enable us to complete and deliver standard batches within 5 to 7 business days."
  },
  {
    question: "Do you provide on-site installation and consultation in Tamil Nadu?",
    answer: "Yes. Our specialised technical team provides on-site dimensions check, engineering consultation, and final installation across all major Chennai industrial zones (Ambattur, Guindy, Sriperumbudur, Oragadam) and statewide corridors (Coimbatore, Hosur, Madurai, Trichy, Tiruppur)."
  },
  {
    question: "What material and quality standards do your fabrications adhere to?",
    answer: "All structural fabrications are manufactured using certified IS 2062 carbon steel and verified food-grade SS 304 or SS 316. Our manufacturing operations strictly adhere to ISO 9001:2015 quality standards, ensuring maximum load-bearing integrity and oxidation resistance in humid industrial environments."
  },
  {
    question: "What is the minimum order quantity (MOQ) for custom projects?",
    answer: "Our minimum order quantity is designed to support both prototyping and bulk production. While standard items like heavy-duty platform trolleys have a nominal MOQ of 2 to 5 units, specialized R&D workbenches and machine frames can be custom-fabricated starting from a single unit (MOQ: 1)."
  },
  {
    question: "What sheet metal work capabilities do you offer at the Rampuram unit?",
    answer: "Our Rampuram, Chennai facility is equipped for complete sheet metal processing including precision shearing, bending on hydraulic press brakes, manual notch punching, and assembly fitting. We work with sheet gauges from 1.0mm up to 6.0mm in MS, SS, and aluminium to fabricate enclosures, brackets, and console panels."
  },
  {
    question: "What is the difference between MS and SS fabrication for industrial applications?",
    answer: "Mild Steel (MS) is preferred for cost-effective structural applications requiring high strength-to-weight ratios (like heavy-duty machine bases or pallet racks) and is finished with rust-preventive powder coating. Stainless Steel (SS 304/316) is selected for corrosion resistance, cleanroom compatibility, and chemical exposure (such as laboratory workbenches or food-grade storage)."
  },
  {
    question: "When should we select SS 304 vs SS 316 grade stainless steel?",
    answer: "SS 304 is the standard grade for laboratory, pharmaceutical, and generic industrial workbenches, offering excellent resistance to moisture and basic cleaning chemicals. SS 316 contains molybdenum, making it superior for harsh chemical environments, high salinity, and exposure to strong acids or marine environments."
  },
  {
    question: "What surface engineering and finishing options do you provide?",
    answer: "We offer comprehensive surface preparation and finishing services. This includes industrial-grade epoxy powder coating in custom RAL shades for MS fabrications, hot-dip galvanizing for outdoor structural frames, chemical pickling and passivation for SS parts to restore rust-resistance, and satin brush/mirror polishing."
  },
  {
    question: "What are your standard payment terms and delivery arrangements for B2B contracts?",
    answer: "Our standard B2B terms include a 50% advance payment on design sign-off, with the balance due upon inspection at our workshop or prior to dispatch. We arrange secure packaging and transport via dedicated local trucks for Chennai deliveries and verified national logistics carriers for statewide Tamil Nadu shipments."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Format FAQs for Schema component
  const schemaFaqs = FAQS.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <section className="section bg-light" id="faq">
      <Schema type="FAQPage" data={{ faqs: schemaFaqs }} />
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common queries about our custom engineering and fabrication services.</p>
        </div>

        <div className="faq-accordion">
          {FAQS.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                className={`faq-item-box ${isOpen ? "open" : ""}`}
                onClick={() => toggleIndex(i)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </div>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-accordion {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item-box {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          cursor: pointer;
          transition: var(--transition);
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        .faq-item-box:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        .faq-item-box.open {
          border-color: var(--navy);
        }
        .faq-question {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }
        .faq-question h3 {
          font-size: 1.15rem;
          margin-bottom: 0;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.4;
        }
        .faq-icon {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          transition: var(--transition);
          width: 24px;
          text-align: center;
        }
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-item-box.open .faq-answer-wrapper {
          max-height: 250px; /* arbitrary height larger than actual answer */
        }
        .faq-answer {
          padding: 0 2rem 1.5rem;
        }
        .faq-answer p {
          margin-bottom: 0;
          font-size: 1rem;
          color: var(--gray-700);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
