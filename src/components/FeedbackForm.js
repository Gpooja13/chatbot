"use client";
import { useState } from "react";

export default function FeedbackForm({ isOpen, onClose }) {
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-2">Chatbot Feedback</h3>
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          rows="4"
          placeholder="Describe the issue..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            alert("Feedback submitted!");
            setFeedback("");
            onClose();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
