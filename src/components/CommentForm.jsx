"use client";

import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: name || email.split("@")[0],
      content: comment,
      rating: rating || 5,
      date: new Date().toLocaleDateString(),
      image: "/images/user1.png",
    });
    setName("");
    setEmail("");
    setComment("");
    setRating(null);
  };

  const ratings = [
    { value: 1, emoji: "😞", color: "#FF0000" },
    { value: 2, emoji: "😐", color: "#FF8C00" },
    { value: 3, emoji: "😊", color: "#FFD700" },
    { value: 4, emoji: "😃", color: "#00BFFF" },
    { value: 5, emoji: "😍", color: "#00BA5C" },
  ];

  return (
    <div className="add_comment">
      <h3>I Add A Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className="form_top_row">
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <textarea placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} rows="4" required />
        </div>
        <input type="email" placeholder="Email" className="email_input" value={email} onChange={e => setEmail(e.target.value)} required />
        <div className="form_bottom">
          <div className="rating_section">
            <span className="rating_label">Rate The Usefulness Of The Article</span>
            <div className="rating_emojis">
              {ratings.map(r => (
                <button
                  key={r.value}
                  type="button"
                  className={`emoji_btn ${rating === r.value ? 'active' : ''}`}
                  style={{ backgroundColor: rating === r.value ? r.color : 'transparent' }}
                  onClick={() => setRating(r.value)}
                >
                  {r.emoji}
                </button>
              ))}
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
