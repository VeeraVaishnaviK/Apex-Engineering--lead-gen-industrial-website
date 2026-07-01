"use client";

import { useState } from "react";

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

interface FaqListClientProps {
  faqs: FaqItem[];
}

export default function FaqListClient({ faqs }: FaqListClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list-client-container" style={{ marginTop: "3rem" }}>
      {/* Category Filter Tabs */}
      <div className="faq-tabs" style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {[
          { id: "all", label: "All Questions" },
          { id: "general", label: "General & Lead Info" },
          { id: "services", label: "Welding & Fabrication" },
          { id: "products", label: "Material Handling & Products" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveCategory(tab.id);
              setOpenIndex(null);
            }}
            className={`faq-tab-btn ${activeCategory === tab.id ? "active" : ""}`}
            style={{
              padding: "0.6rem 1.5rem",
              borderRadius: "50px",
              border: "1px solid var(--gray-300)",
              background: activeCategory === tab.id ? "var(--navy)" : "var(--white)",
              color: activeCategory === tab.id ? "var(--white)" : "var(--navy)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="faq-search-box" style={{ maxWidth: "600px", margin: "0 auto 3rem", position: "relative" }}>
        <input
          type="text"
          placeholder="Search questions (e.g. MS, custom, load capacity...)"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setOpenIndex(null);
          }}
          style={{
            width: "100%",
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            border: "1px solid var(--gray-300)",
            fontSize: "1rem",
            boxShadow: "var(--shadow)"
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              color: "var(--gray-500)"
            }}
          >
            ×
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="faq-accordion" style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleAccordion(idx)}
                className={`faq-item-box ${isOpen ? "open" : ""}`}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: "12px",
                  cursor: "pointer",
                  overflow: "hidden",
                  boxShadow: "var(--shadow)",
                  transition: "all 0.3s ease"
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    padding: "1.5rem 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1.5rem"
                  }}
                >
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", margin: 0, lineHeight: 1.4 }}>
                    {faq.question}
                  </h3>
                  <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--accent)" }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <div className="faq-answer" style={{ padding: "0 2rem 1.5rem" }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--gray-700)", lineHeight: 1.6 }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center" style={{ padding: "3rem 1rem", color: "var(--gray-500)" }}>
            No questions matched your search criteria. Try using different keywords.
          </div>
        )}
      </div>
    </div>
  );
}
