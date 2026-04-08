"use client";

import Link from "next/link";

export default function ProductContent({ product, relatedProducts }: any) {
  return (
    <div className="product-detail-page">
      <div className="container section">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span>{product.name}</span>
        </nav>

        <div className="main-layout">
          <div className="content-side">
            <div className="image-gallery">
              <div className="main-image">
                <img src={product.images[0] || '/images/hero.png'} alt={product.name} />
              </div>
            </div>

            <div className="description-section">
              <h1>{product.name}</h1>
              <p className="hook">{product.shortHook}</p>
              <div className="rich-content">
                <h2>Product Overview</h2>
                <p>{product.description}</p>
                
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((f: string, i: number) => <li key={i}>{f}</li>)}
                </ul>

                <h3>Specifications</h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val]: any) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {product.useCases && product.useCases.length > 0 && (
                  <>
                    <h3>Typical Applications</h3>
                    <ul>
                      {product.useCases.map((u: string, i: number) => <li key={i}>{u}</li>)}
                    </ul>
                  </>
                )}
              </div>

              {product.faqs && product.faqs.length > 0 && (
                <div className="faq-section">
                  <h3>Frequently Asked Questions</h3>
                  {product.faqs.map((faq: any, i: number) => (
                    <div key={i} className="faq-item">
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="sidebar">
            <div className="sidebar-card quote-sidebar">
              <h3>Request Price Quote</h3>
              <p>Get the best industrial-grade pricing for your specific requirements.</p>
              <a 
                href={`https://wa.me/917200811328?text=Hi Apex Engineering, I'm interested in ${product.name}. Please share the price and details.`} 
                className="btn btn-primary w-full"
                target="_blank"
              >
                Inquiry via WhatsApp
              </a>
              <div className="trust-badges-mini">
                <span>✓ Custom Sizes</span>
                <span>✓ Fast Turnaround</span>
                <span>✓ Expert Support</span>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Related Products</h3>
              {relatedProducts.length > 0 ? (
                <div className="related-list">
                  {relatedProducts.map((rp: any) => (
                    <Link href={`/products/${rp.slug}`} key={rp.id} className="related-item">
                      <img src={rp.images[0] || '/images/hero.png'} alt={rp.name} />
                      <div>
                        <h4>{rp.name}</h4>
                        <span>View Details</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No related products found.</p>
              )}
            </div>
          </aside>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .breadcrumb { margin-bottom: 2rem; font-size: 0.9rem; color: var(--gray-700); }
        .main-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; }
        .image-gallery { margin-bottom: 3rem; }
        .main-image { background: var(--gray-100); border-radius: 12px; overflow: hidden; height: 450px; }
        .main-image img { width: 100%; height: 100%; object-fit: cover; }
        .hook { font-size: 1.25rem; font-weight: 600; color: var(--navy); margin-bottom: 2rem; }
        .rich-content h2, .rich-content h3 { margin-top: 2.5rem; margin-bottom: 1rem; }
        .specs-table { width: 100%; border-collapse: collapse; margin: 2rem 0; }
        .specs-table th, .specs-table td { padding: 1rem; border: 1px solid var(--gray-200); text-align: left; }
        .specs-table th { background: var(--gray-100); width: 30%; }
        .faq-section { margin-top: 4rem; padding-top: 3rem; border-top: 1px solid var(--gray-200); }
        .faq-item { margin-bottom: 1.5rem; }
        .faq-item h4 { margin-bottom: 0.5rem; }
        .sidebar-card { background: var(--white); padding: 2rem; border-radius: 8px; box-shadow: var(--shadow); margin-bottom: 2rem; border: 1px solid var(--gray-200); }
        .quote-sidebar h3 { margin-bottom: 1rem; }
        .trust-badges-mini { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1.5rem; font-size: 0.85rem; font-weight: 700; color: var(--navy); }
        .related-item { display: flex; gap: 1rem; margin-bottom: 1rem; align-items: center; }
        .related-item img { width: 60px; height: 60px; object-fit: cover; border-radius: 4px; }
        .related-item h4 { font-size: 0.95rem; margin-bottom: 0.2rem; }
        .related-item span { font-size: 0.8rem; color: var(--accent); font-weight: 600; }
        .w-full { width: 100%; }
        @media (max-width: 992px) { .main-layout { grid-template-columns: 1fr; } .sidebar { order: -1; } }
      `}} />
    </div>
  );
}
