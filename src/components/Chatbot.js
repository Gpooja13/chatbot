"use client";
import { useState, useEffect } from "react";
import { useOrg } from "../context/BotContext"; 

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { organisation } = useOrg(); // Get the organisation details

  const clientWebsiteURL = organisation?.websiteURL || "https://ui.shadcn.com/docs/components/card"; // Default URL if not set

  useEffect(() => {
    if (organisation) {
      // You can perform any additional actions or checks when organisation data is available
    }
  }, [organisation]);

  return (
    <>
      {/* Chatbot button with higher z-index */}
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {/* Chatbot overlay */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 h-96 bg-white shadow-lg rounded-md border p-4 z-50">
          <h3 className="text-lg font-semibold">Chatbot</h3>
          <div className="h-72 overflow-y-auto bg-gray-100 p-2 rounded-md">
            <p className="text-gray-600">Chatbot is under development...</p>
          </div>
        </div>
      )}

      {/* Iframe to display client's website */}
      <div className="relative w-full h-screen">
        <iframe
          src={clientWebsiteURL}  // Dynamically set the URL based on client's website
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 'none', zIndex: 0 }} // Ensure iframe is below the chatbot button
          title="Client's Website"
        />
      </div>
    </>
  );
}
