"use client";

import { useState, useEffect } from "react";
import { getBlogPostBySlug, getAllBlogPosts, getRelatedPosts, tourGuides } from "@/data/blogData";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import BlogComments from "@/components/BlogComments";
import EditButton from "@/components/EditButton";
import RelatedPost from "@/components/RelatedPost";
import { useRouter } from "next/router";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [postdetails, setPostdetails] = useState(null);
  const [articles, setArticles] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!slug) return;

    // Load post data
    const currentPost = getBlogPostBySlug(slug);
    if (!currentPost) {
      return;
    }

    const postDate = new Date(currentPost.date);
    const formattedDate = postDate.toLocaleDateString("en-US", { 
      day: "numeric", 
      month: "long", 
      year: "numeric" 
    });

    const details = {
      ...currentPost,
      date: formattedDate,
    };

    const allPosts = getAllBlogPosts();
    const recent = allPosts.slice(0, 3).map(p => {
      const pDate = new Date(p.date);
      return {
        slug: p.slug,
        image: p.image,
        category: p.category,
        date: pDate.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
        title: p.title,
      };
    });

    const allPostsList = getAllBlogPosts();
    const relatedArticles = allPostsList.map(p => ({
      image: p.image,
      title: p.title,
      description: p.excerpt,
      author: p.author_name,
      slug: p.slug,
    }));

    setPost(currentPost);
    setPostdetails(details);
    setRecentPosts(recent);
    setArticles(relatedArticles);
  }, [slug, refreshKey]);

  const handlePostUpdated = () => {
    // Refresh the data by incrementing the key
    setRefreshKey(prev => prev + 1);
  };

  if (!post || !postdetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header title={postdetails.title} image={postdetails.image} />
      <MainSection postdetails={postdetails} recentPosts={recentPosts} tourGuides={tourGuides} />
      <div className="container">
        <div className="edit_section">
          <EditButton postId={post.id} onPostUpdated={handlePostUpdated} />
        </div>
      </div>
      <BlogComments postId={post.id} />
      <RelatedPost title="Related articles" articles={articles} />
    </>
  );
}
