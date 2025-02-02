"use client";
import { useState } from "react";
import EmailInstructions from "../../components/EmailInstructions";

export default function ChatbotIntegrationStep() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Integrate Your Chatbot</h1>

      {/* Integration Options */}
      <div className="flex flex-col gap-4">
        {/* Easy-to-Follow Instructions */}
        <div className="bg-white p-6 rounded-md shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Integration Instructions</h2>
          <p className="mb-4">Follow the steps below to integrate the chatbot into your website:</p>

          <ol className="list-decimal pl-6 mb-4">
            <li>Copy the code below:</li>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
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
        </div>

        {/* Mail instructions to developer */}
        <EmailInstructions />
      </div>
    </div>
  );
}
