"use client";

import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // use name if provided, otherwise extract from email
    const userName = name.trim() ? name : email.split("@")[0];
    onSubmit({
      name: userName,
      content: comment,
      rating: rating ? rating : 5,
      date: new Date().toLocaleDateString(),
      image: "/images/user1.png",
    });
    // reset form
    setName("");
    setEmail("");
    setComment("");
    setRating(null);
  };

  const getEmojiColor = (val) => {
    if (val === 1) return "#FF0000";
    if (val === 2) return "#FF8C00";
    if (val === 3) return "#FFD700";
    if (val === 4) return "#00BFFF";
    return "#00BA5C";
  };

  return (
    <div className="add_comment">
      <h3>I Add A Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className="form_top_row">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} rows="4" required />
        </div>
        <input type="email" placeholder="Email" className="email_input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <div className="form_bottom">
          <div className="rating_section">
            <span className="rating_label">Rate The Usefulness Of The Article</span>
            <div className="rating_emojis">
              <button type="button" className={rating === 1 ? 'emoji_btn active' : 'emoji_btn'} 
                style={{ backgroundColor: rating === 1 ? getEmojiColor(1) : 'transparent' }}
                onClick={() => setRating(1)}>😞</button>
              <button type="button" className={rating === 2 ? 'emoji_btn active' : 'emoji_btn'} 
                style={{ backgroundColor: rating === 2 ? getEmojiColor(2) : 'transparent' }}
                onClick={() => setRating(2)}>😐</button>
              <button type="button" className={rating === 3 ? 'emoji_btn active' : 'emoji_btn'} 
                style={{ backgroundColor: rating === 3 ? getEmojiColor(3) : 'transparent' }}
                onClick={() => setRating(3)}>😊</button>
              <button type="button" className={rating === 4 ? 'emoji_btn active' : 'emoji_btn'} 
                style={{ backgroundColor: rating === 4 ? getEmojiColor(4) : 'transparent' }}
                onClick={() => setRating(4)}>😃</button>
              <button type="button" className={rating === 5 ? 'emoji_btn active' : 'emoji_btn'} 
                style={{ backgroundColor: rating === 5 ? getEmojiColor(5) : 'transparent' }}
                onClick={() => setRating(5)}>😍</button>
            </div>
          </div>
          <div className="submit_buttons">
            <button type="button" className="btn_good">😊 Good!</button>
            <button type="submit" className="btn_send">💬 Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
