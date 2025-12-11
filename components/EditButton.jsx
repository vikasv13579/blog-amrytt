"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MarkdownEditor = dynamic(() => import("./MarkdownEditor"), { ssr: false });

export default function EditButton({ postId, onPostUpdated }) {
  const [show, setShow] = useState(false);

  const handleSave = () => {
    setShow(false);
    if (onPostUpdated) onPostUpdated();
  };

  return (
    <>
      <button className="btn btn_outline_primary" onClick={() => setShow(true)}>
        Edit Post
      </button>
      {show && (
        <div className="editor_modal" onClick={() => setShow(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_btn" onClick={() => setShow(false)}>×</button>
            <MarkdownEditor postId={postId} onClose={() => setShow(false)} onSave={handleSave} />
          </div>
        </div>
      )}
    </>
  );
}
