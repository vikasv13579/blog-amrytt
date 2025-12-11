"use client";

import { useState, useEffect } from "react";
import { getAllBlogPosts } from "@/data/blogData";

export default function MarkdownEditor({ postId, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const posts = getAllBlogPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
      setTitle(post.title);
      const cleanContent = post.body.replace(/<[^>]*>/g, "");
      setContent(cleanContent);
    }
  }, [postId]);

  const handleSave = () => {
    alert("Saved!");
    onClose();
  };

  return (
    <div className="editor">
      <h3>Edit Post</h3>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content" 
        rows={15} 
      />
      <div>
        <button className="btn btn_primary" onClick={handleSave}>Save</button>
        <button className="btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
