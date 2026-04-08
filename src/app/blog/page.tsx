import { BLOG_POSTS } from "@/data/blogData";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Fabrication Blog | News & Insights from Apex Engineering",
  description: "Get the latest insights on material handling equipment, MS/SS fabrication, and industrial engineering trends in Chennai and Tamil Nadu.",
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
