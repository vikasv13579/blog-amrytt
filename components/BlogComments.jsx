"use client";

import { useState, useEffect } from "react";
import { getCommentsForPost } from "@/data/blogData";
import CommentForm from "./CommentForm";

function CommentSkeleton() {
  return (
    <div className="comment_item skeleton">
      <div className="skeleton_avatar"></div>
      <div className="comment_content">
        <div className="skeleton_line skeleton_line_short"></div>
        <div className="skeleton_line skeleton_line_full"></div>
        <div className="skeleton_line skeleton_line_medium"></div>
      </div>
    </div>
  );
}

export default function BlogComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCommentsForPost(postId)
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load comments:', err);
        setError('Failed to load comments. Please try again later.');
        setLoading(false);
      });
  }, [postId]);

  const addComment = (commentData) => {
    const newComment = {
      id: Date.now(),
      name: commentData.name,
      content: commentData.content,
      rating: commentData.rating,
      date: commentData.date,
      image: commentData.image
    };
    setComments([...comments, newComment]);
  };

  return (
    <section className="comments_section">
      <div className="container">
        <h2 className="comments_heading">
          {loading ? 'Loading Comments...' : `${comments.length} Comments`}
        </h2>
        
        {loading && (
          <>
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        )}

        {error && <div className="error_message"><p>{error}</p></div>}
        
        {!loading && !error && comments.map(comment => (
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

        {!loading && !error && <CommentForm onSubmit={addComment} />}
      </div>
    </section>
  );
}
