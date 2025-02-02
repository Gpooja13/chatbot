"use client";
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";

export default function Topbar() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      <div className="w-full bg-gray-900 text-white p-3 text-center fixed top-0">
        <span>Chatbot not working as intended?</span>
        <button className="ml-2 underline" onClick={() => setShowFeedback(true)}>
          Share feedback
        </button>
      </div>
      <FeedbackForm isOpen={showFeedback} onClose={() => setShowFeedback(false)} />
    </>
  );
}
