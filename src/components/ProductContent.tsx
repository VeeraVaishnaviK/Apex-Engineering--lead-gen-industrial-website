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
                <div className="specs-table-wrapper">
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
                </div>

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

      <div className="mobile-sticky-cta">
        <a 
          href={`https://wa.me/917200811328?text=Hi Apex Engineering, I'm interested in ${product.name}. Please share the price and details.`} 
          className="btn btn-primary w-full"
          target="_blank"
        >
          Enquire on WhatsApp
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .breadcrumb { margin-bottom: 2rem; font-size: 0.85rem; color: var(--gray-700); background: var(--gray-100); padding: 0.75rem 1rem; border-radius: 8px; }
        .main-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; }
        .image-gallery { margin-bottom: 3rem; }
        .main-image { background: var(--gray-100); border-radius: 20px; overflow: hidden; height: 500px; box-shadow: var(--shadow-lg); }
        .main-image img { width: 100%; height: 100%; object-fit: cover; }
        .hook { font-size: 1.4rem; font-weight: 700; color: var(--navy); margin-bottom: 2rem; line-height: 1.3; }
        .rich-content h2, .rich-content h3 { margin-top: 3rem; margin-bottom: 1.25rem; font-weight: 800; }
        .specs-table-wrapper { overflow-x: auto; margin: 2rem 0; border-radius: 12px; border: 1px solid var(--gray-200); }
        .specs-table { width: 100%; border-collapse: collapse; min-width: 400px; }
        .specs-table th, .specs-table td { padding: 1.25rem; border-bottom: 1px solid var(--gray-200); text-align: left; }
        .specs-table tr:last-child th, .specs-table tr:last-child td { border-bottom: none; }
        .specs-table th { background: var(--gray-100); width: 35%; font-weight: 700; color: var(--navy); }
        .faq-section { margin-top: 5rem; padding-top: 4rem; border-top: 1px solid var(--gray-200); }
        .faq-item { margin-bottom: 2rem; }
        .faq-item h4 { margin-bottom: 0.75rem; font-size: 1.1rem; color: var(--navy); }
        .sidebar { position: sticky; top: 100px; height: fit-content; }
        .sidebar-card { background: var(--white); padding: 2.5rem; border-radius: 16px; box-shadow: var(--shadow-xl); margin-bottom: 2rem; border: 1px solid rgba(0, 31, 63, 0.05); }
        .quote-sidebar { background: var(--navy); color: var(--white); border: none; }
        .quote-sidebar h3 { color: var(--white); margin-bottom: 1rem; font-size: 1.5rem; }
        .quote-sidebar p { color: rgba(255, 255, 255, 0.7); font-size: 1rem; }
        .trust-badges-mini { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 2rem; font-size: 0.9rem; font-weight: 600; color: rgba(255, 255, 255, 0.9); }
        .related-item { display: flex; gap: 1.25rem; margin-bottom: 1.25rem; align-items: center; text-decoration: none; padding: 0.75rem; border-radius: 10px; transition: var(--transition); }
        .related-item:hover { background: var(--gray-100); }
        .related-item img { width: 70px; height: 70px; object-fit: cover; border-radius: 8px; }
        .related-item h4 { font-size: 1rem; margin-bottom: 0.25rem; color: var(--navy); }
        .related-item span { font-size: 0.8rem; color: var(--accent); font-weight: 700; text-transform: uppercase; }
        .w-full { width: 100%; }
        
        .mobile-sticky-cta {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: var(--white);
          padding: 1rem 1.25rem;
          box-shadow: 0 -10px 25px rgba(0,0,0,0.1);
          z-index: 999;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 992px) { 
          .main-layout { grid-template-columns: 1fr; gap: 3rem; } 
          .sidebar { order: 2; position: static; } 
          .main-image { height: 350px; }
          .mobile-sticky-cta { display: block; }
          .section { padding-bottom: 8rem; }
        }
        
        @media (max-width: 480px) {
          .main-image { height: 280px; }
          .hook { font-size: 1.2rem; }
          .specs-table th { width: 40%; padding: 1rem; }
          .specs-table td { padding: 1rem; font-size: 0.9rem; }
        }
      `}} />
    </div>
  );
}
