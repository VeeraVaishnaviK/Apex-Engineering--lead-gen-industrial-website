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
