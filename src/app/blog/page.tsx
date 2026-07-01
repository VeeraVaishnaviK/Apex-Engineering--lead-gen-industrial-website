import { BLOG_POSTS } from "@/data/blogData";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = "https://apexengineering.org.in";

export const metadata: Metadata = {
  title: "Industrial Fabrication Guide India",
  description:
    "Read our expert industrial fabrication guide for India. Learn about MS vs SS workbenches, trolley selections, and factory floor layouts. Read more today.",
  alternates: { canonical: `${BASE_URL}/blog/` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Industrial Fabrication Guide India | Apex Engineering",
    description:
      "Read our expert industrial fabrication guide for India. Learn about MS vs SS workbenches, trolley selections, and factory floor layouts. Read more today.",
    url: `${BASE_URL}/blog/`,
    images: [
      {
        url: "/hero_industrial_workshop_1775677983634.png",
        width: 1200,
        height: 630,
        alt: "Apex Engineering industrial engineering blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Fabrication Guide India | Apex Engineering",
    description: "Read our expert industrial fabrication guide for India. Learn about MS vs SS workbenches, trolley selections, and factory floor layouts. Read more today.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const BlogPage = () => {
  return (
    <div className="container section">
      <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />
      <div className="section-header text-center" style={{ marginTop: "1rem" }}>
        <h1>Industrial Fabrication Guide & Insights</h1>
        <p>Expert insights, guides, and news from the frontlines of fabrication in Chennai.</p>
      </div>

      <div className="grid blog-grid">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-img">
              <div style={{ background: 'var(--gray-200)', height: '100%', width: '100%' }}></div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {post.date}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  {post.author}
                </span>
              </div>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="read-more">Read Full Article →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
