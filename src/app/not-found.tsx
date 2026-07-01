import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Apex Engineering",
  description: "The page you are looking for does not exist. Navigate back to Apex Engineering Chennai to explore industrial fabrication products and services.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="not-found-page container section text-center">
      <div className="error-code">404</div>
      <h1>Page Not Found</h1>
      <p className="lead-text" style={{ maxWidth: "600px", margin: "1rem auto 3rem", color: "var(--gray-700)" }}>
        We apologize, but the page you are looking for does not exist or has been moved to a new location. Use the navigation links below to explore our industrial fabrication solutions.
      </p>

      <div className="not-found-links">
        <Link href="/" className="btn btn-primary">Return to Homepage</Link>
        <Link href="/products/" className="btn btn-outline" style={{ borderColor: "var(--navy)", color: "var(--navy)", marginLeft: "1rem" }}>View Products Catalog</Link>
      </div>

      <div className="sitemap-suggested" style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid var(--gray-200)" }}>
        <h3>Suggested Sections</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
          <Link href="/services/" style={{ fontWeight: 600, color: "var(--accent)", textDecoration: "underline" }}>Fabrication Services</Link>
          <Link href="/about/" style={{ fontWeight: 600, color: "var(--accent)", textDecoration: "underline" }}>About Our Facility</Link>
          <Link href="/industries/" style={{ fontWeight: 600, color: "var(--accent)", textDecoration: "underline" }}>Industries Served</Link>
          <Link href="/contact/" style={{ fontWeight: 600, color: "var(--accent)", textDecoration: "underline" }}>Get a Quote</Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .not-found-page {
          padding: 8rem 2rem;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .error-code {
          font-size: 8rem;
          font-weight: 900;
          color: var(--navy);
          line-height: 1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--navy), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .not-found-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        @media (max-width: 480px) {
          .error-code { font-size: 5rem; }
          .not-found-links .btn { width: 100%; margin-left: 0 !important; }
        }
      `}} />
    </div>
  );
}
