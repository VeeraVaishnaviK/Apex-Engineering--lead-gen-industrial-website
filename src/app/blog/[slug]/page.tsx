import { BLOG_POSTS } from "@/data/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Apex Engineering Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: any) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="blog-detail-page container section">
      <div className="section-header text-center">
        <div className="blog-meta-top">
          <Link href="/blog">← Back to Blog</Link>
          <span className="divider">|</span>
          <span>{post.date}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <div className="author-info">
          By <strong>{post.author}</strong>
        </div>
      </div>

      <div className="blog-main-img">
        {/* Placeholder */}
        <div style={{ background: 'var(--gray-100)', height: '400px', width: '100%', borderRadius: '12px' }}></div>
      </div>

      <div className="blog-rich-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

      <div className="blog-footer">
        <h3>Related Tags</h3>
        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="newsletter-box">
          <h3>Need Custom Industrial Solutions?</h3>
          <p>Get a free consultation from our expert engineering team in Chennai.</p>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </div>

    </article>
  );
}
