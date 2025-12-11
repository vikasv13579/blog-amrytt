"use client";

import { useState, useEffect } from "react";
import { getAllBlogPosts, savePostEdit } from "@/data/blogData";

export default function MarkdownEditor({ postId, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const posts = getAllBlogPosts();
    const post = posts.find(p => p.id === postId);
    
    if (post) {
      setTitle(post.title);
      const cleanContent = post.body.replace(/<[^>]*>/g, "").replace(/\n\s+/g, '\n\n').trim();
      setContent(cleanContent);
    }
  }, [postId]);

  const handleSave = () => {
    setIsSaving(true);
    
    setTimeout(() => {
      const htmlBody = content.split('\n\n').filter(p => p.trim()).map(p => `<p>${p.trim()}</p>`).join('\n      ');
      
      savePostEdit(postId, { title, body: htmlBody });
      
      setIsSaving(false);
      if (onSave) onSave();
      onClose();
    }, 800);
  };

  return (
    <div className="editor">
      <h3>Edit Post</h3>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Post title" 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Write your post content here..." 
        rows={15}
      />
      <div>
        <button 
          className="btn btn_primary" 
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
        <button className="btn" onClick={onClose} disabled={isSaving}>
          Cancel
        </button>
      </div>
    </div>
  );
}
