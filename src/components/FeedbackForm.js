"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea"
import { X } from "lucide-react"; // Import close icon

export default function FeedbackForm({ isOpen, onClose }) {
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-4 py-6 rounded-md shadow-lg w-96 relative flex flex-col items-center justify-center">
        {/* Close Button */}
        <div className="flex items-center justify-center"><button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X className="m-5" size={22} />
        </button>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-5">Chatbot Feedback</h3></div>
        

        {/* Feedback Input */}
        <Textarea
          className="w-full p-2 mb-4"
          rows="4"
          placeholder="Describe the issue..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></Textarea>

        {/* Submit Button */}
        <Button
          className="px-4 py-2 rounded-md m-"
          onClick={() => {
            alert("Feedback submitted!");
            setFeedback("");
            onClose();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
