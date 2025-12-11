"use client";

import { useState, useEffect } from "react";
import { getAllBlogPosts } from "@/data/blogData";

export default function MarkdownEditor({ postId, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const post = getAllBlogPosts().find(p => p.id === postId);
    if (post) {
      setTitle(post.title);
      setContent(post.body.replace(/<[^>]*>/g, ""));
    }
  }, [postId]);

  return (
    <div className="editor">
      <h3>Edit Post</h3>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" rows={15} />
      <div>
        <button className="btn btn_primary" onClick={() => { alert("Saved!"); onClose(); }}>Save</button>
        <button className="btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
