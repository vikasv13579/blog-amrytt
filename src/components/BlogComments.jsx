"use client";

import { useState, useEffect } from "react";
import { getCommentsForPost } from "@/data/blogData";
import CommentForm from "./CommentForm";

export default function BlogComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsForPost(postId).then(data => {
      setComments(data);
      setLoading(false);
    });
  }, [postId]);

  const addComment = (data) => {
    setComments([...comments, { ...data, id: Date.now() }]);
  };

  if (loading) return <div className="container"><p>Loading...</p></div>;

  return (
    <section className="comments_section">
      <div className="container">
        <h2 className="comments_heading">{comments.length} Comments</h2>
        
        {comments.map(comment => (
          <div key={comment.id} className="comment_item">
            <img src={comment.image} alt={comment.name} />
            <div className="comment_content">
              <div className="comment_header">
                <strong>{comment.name}</strong>
                <div className="comment_stars">
                  {"⭐".repeat(Math.floor(comment.rating))} {comment.rating}
                </div>
                <span className="comment_date">{comment.date}</span>
              </div>
              <p className="comment_text">{comment.content}</p>
            </div>
          </div>
        ))}

        <CommentForm onSubmit={addComment} />
      </div>
    </section>
  );
}
