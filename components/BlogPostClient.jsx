"use client";

import { useState, useEffect } from "react";
import { getBlogPostBySlug, getAllBlogPosts, tourGuides } from "@/data/blogData";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import BlogComments from "@/components/BlogComments";
import EditButton from "@/components/EditButton";
import RelatedPost from "@/components/RelatedPost";

export default function BlogPostClient({ initialPost, initialPostDetails, initialArticles, initialRecentPosts }) {
  const [post, setPost] = useState(initialPost);
  const [postDetails, setPostDetails] = useState(initialPostDetails);
  const [articles, setArticles] = useState(initialArticles);
  const [recentPosts, setRecentPosts] = useState(initialRecentPosts);

  useEffect(() => {
    setPost(initialPost);
    setPostDetails(initialPostDetails);
    setArticles(initialArticles);
    setRecentPosts(initialRecentPosts);
  }, [initialPost, initialPostDetails, initialArticles, initialRecentPosts]);

  const refreshPostData = () => {
    const updatedPost = getBlogPostBySlug(initialPost.slug);
    
    if (updatedPost) {
      const formattedDate = new Date(updatedPost.date).toLocaleDateString("en-US", { 
        day: "numeric", 
        month: "long", 
        year: "numeric" 
      });

      setPost(updatedPost);
      setPostDetails({ ...updatedPost, date: formattedDate });

      const allPosts = getAllBlogPosts();
      setRecentPosts(allPosts.slice(0, 3).map(p => ({
        slug: p.slug,
        image: p.image,
        category: p.category,
        date: new Date(p.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
        title: p.title,
      })));

      setArticles(allPosts.map(p => ({
        image: p.image,
        title: p.title,
        description: p.excerpt,
        author: p.author_name,
        slug: p.slug,
      })));
    }
  };

  return (
    <>
      <Header title={postDetails.title} image={postDetails.image} />
      <MainSection postdetails={postDetails} recentPosts={recentPosts} tourGuides={tourGuides} />
      <div className="container">
        <div className="edit_section">
          <EditButton postId={post.id} onPostUpdated={refreshPostData} />
        </div>
      </div>
      <BlogComments postId={post.id} />
      <RelatedPost title="Related articles" articles={articles} />
    </>
  );
}

