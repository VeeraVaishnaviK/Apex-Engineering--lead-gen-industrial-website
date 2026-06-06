import { BLOG_POSTS } from "@/data/blogData";
import Link from "next/link";
import { Metadata } from "next";

const BASE_URL = "https://apexengineering.vercel.app";

export const metadata: Metadata = {
  title: "Industrial Engineering Blog — Insights & Guides",
  description:
    "Expert insights on material handling equipment, MS/SS fabrication, and industrial engineering trends in Chennai and Tamil Nadu. Guides to help you make the right purchase decisions.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Industrial Engineering Blog | Apex Engineering Chennai",
    description:
      "Expert guides on trolleys, working tables, fabrication materials, and industrial equipment for Chennai manufacturers.",
    url: `${BASE_URL}/blog`,
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
    title: "Industrial Engineering Blog | Apex Engineering",
    description: "Guides and insights on fabrication, trolleys, workbenches, and material handling in Chennai.",
    images: ["/hero_industrial_workshop_1775677983634.png"],
  },
};

const BlogPage = () => {
  return (
    <div className="container section">
      <div className="section-header text-center">
        <h1>Industrial Engineering Blog</h1>
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
                <span>📅 {post.date}</span>
                <span>👤 {post.author}</span>
              </div>
              <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
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
