"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllBlogPosts } from "@/data/blogData";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = getAllBlogPosts().map(post => ({
      ...post,
      date: new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
    }));
    setPosts(allPosts);
  }, []);

  return (
    <div>
      <header className="header_section">
        <div className="container">
          <h1>Our Blog</h1>
        </div>
      </header>
      <section className="related_section">
        <div className="container">
          <div className="related_grid">
            {posts.map(post => (
              <div className="related_card" key={post.id}>
                <img src={post.image} alt={post.title} />
                <div className="card_body">
                  <Link href={`/blog/${post.slug}`}><h3>{post.title}</h3></Link>
                  <p>{post.excerpt}</p>
                  <span className="author">By {post.author_name} • {post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
