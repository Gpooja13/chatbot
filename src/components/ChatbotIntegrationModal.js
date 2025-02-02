"use client";
import React from "react";

export default function ChatbotIntegrationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Integration Instructions</h2>
        <p className="mb-4">Follow the steps below to integrate the chatbot into your website:</p>

        <ol className="list-decimal pl-6 mb-4">
          <li>Copy the code below:</li>
          <pre className="bg-gray-100 p-4 rounded-md">
            {`<script>
  (function() {
    var chatbotScript = document.createElement('script');
    chatbotScript.src = "https://your-chatbot-url.com/chatbot.js"; // Replace with your chatbot script URL
    document.head.appendChild(chatbotScript);
})();
</script>`}
          </pre>
          <li>Paste it inside the <code>&lt;head&gt;</code> section of your website's HTML file.</li>
          <li>Save and refresh your website.</li>
        </ol>

        <button
          onClick={onClose}
          className="w-full px-6 py-2 bg-gray-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
