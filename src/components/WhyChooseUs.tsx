"use client";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Precision Fabrication", desc: "Technical blueprints translated into sub-millimeter accurate MS, SS, and Aluminium structures." },
    { title: "Rapid Turnaround", desc: "Optimized production workflows ensuring project completion and Chennai-wide delivery within tight deadlines." },
    { title: "Industrial-Grade Quality", desc: "Use of certified raw materials and heavy-gauge sections for maximum structural longevity." },
    { title: "On-site Deployment", desc: "Seamless installation and on-site fitting by our specialized technical team." },
    { title: "Value Engineering", desc: "High-spec engineering solutions at competitive rates through lean manufacturing processes." },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="flex-layout">
          <div className="content-side">
            <span className="subtitle">The Apex Advantage</span>
            <h2>Why Industrial Leaders Choose Apex Engineering?</h2>
            <p>
              With over a decade of experience in industrial fabrication, we've built a reputation for excellence. We don't just supply products; we provide solutions that enhance your workflow efficiency.
            </p>
            <div className="reasons-list">
              {reasons.map((r, i) => (
                <div key={i} className="reason-item">
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image-side">
            <div className="experience-badge">
              <strong>10+</strong>
              <span>Years of Expertise</span>
            </div>
            <img src="/images/hero.png" alt="Industrial Excellence" className="side-img" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .flex-layout {
          display: flex;
          gap: 4rem;
          align-items: center;
        }
        .content-side { flex: 1.2; }
        .image-side { flex: 1; position: relative; }
        .subtitle {
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.5rem;
        }
        h2 { font-size: 2.5rem; margin-bottom: 2rem; }
        .reason-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .reason-icon {
          font-size: 1.5rem;
          background: var(--gray-100);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
        }
        h4 { margin-bottom: 0.25rem; font-size: 1.1rem; }
        .reason-item p { font-size: 0.9rem; margin-bottom: 0; }
        .side-img {
          width: 100%;
          border-radius: 12px;
          box-shadow: var(--shadow-lg);
        }
        .experience-badge {
          position: absolute;
          top: -20px;
          left: -20px;
          background: var(--navy);
          color: var(--white);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          z-index: 2;
          box-shadow: var(--shadow-lg);
        }
        .experience-badge strong { font-size: 2rem; display: block; }
        .experience-badge span { font-size: 0.8rem; text-transform: uppercase; }

        @media (max-width: 992px) {
          .flex-layout { flex-direction: column; }
          .image-side { order: -1; margin-bottom: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
