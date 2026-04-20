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
                  <div className="reason-tick">✓</div>
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
          gap: 5rem;
          align-items: center;
        }
        .content-side { flex: 1.2; }
        .image-side { flex: 1; position: relative; }
        .subtitle {
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.75rem;
          font-size: 0.85rem;
        }
        h2 { font-size: 2.8rem; margin-bottom: 2rem; line-height: 1.2; }
        .reasons-list { margin-top: 2.5rem; }
        .reason-item {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .reason-tick {
          width: 24px;
          height: 24px;
          background: var(--navy);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        h4 { margin-bottom: 0.5rem; font-size: 1.2rem; font-weight: 800; color: var(--navy); }
        .reason-item p { font-size: 0.95rem; line-height: 1.6; margin-bottom: 0; color: var(--gray-700); }
        .side-img {
          width: 100%;
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
          object-fit: cover;
          height: 500px;
        }
        .experience-badge {
          position: absolute;
          top: 30px;
          left: -30px;
          background: var(--navy);
          color: var(--white);
          padding: 2rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          z-index: 2;
          box-shadow: var(--shadow-xl);
          border: 4px solid var(--white);
        }
        .experience-badge strong { font-size: 2.5rem; display: block; line-height: 1; margin-bottom: 0.25rem; }
        .experience-badge span { font-size: 0.75rem; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }

        @media (max-width: 992px) {
          .flex-layout { flex-direction: column; gap: 4rem; }
          .image-side { order: -1; width: 100%; }
          .side-img { height: 400px; }
          .experience-badge { left: 20px; top: -30px; padding: 1.5rem; }
          .experience-badge strong { font-size: 2rem; }
          h2 { font-size: 2.2rem; }
        }

        @media (max-width: 480px) {
          .side-img { height: 300px; }
          .experience-badge { left: 10px; top: -20px; padding: 1rem; }
          .experience-badge strong { font-size: 1.8rem; }
          h2 { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
