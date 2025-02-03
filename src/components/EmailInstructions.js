"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/button";

export default function EmailInstructions() {
  const [isSending, setIsSending] = useState(false);
  const { user } = useAuth(); // Get the authenticated user
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = async () => {
    // Use the authenticated user's email instead of the organisation's developerEmail

    const recipientEmail = user?.email;

    if (recipientEmail) {
      setIsSending(true);

      const emailBody = `
        Hi there,

        To integrate the chatbot into your website, please follow these steps:

        1. Copy and paste the following code inside the <head> section of your website:

        <pre>
          &lt;script&gt;
          (function() {
            var chatbotScript = document.createElement('script');
            chatbotScript.src = "https://your-chatbot-url.com/chatbot.js"; // Replace with your chatbot script URL
            document.head.appendChild(chatbotScript);
          })();
          &lt;/script&gt;
        </pre>

        2. Save and refresh your website.

        Best regards,
        Your Team
      `;

      const emailSubject = "Chatbot Integration Instructions";

      try {
        // Send email to the authenticated user's email
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: recipientEmail, // Use the authenticated user's email
            subject: emailSubject,
            body: emailBody,
          }),
        });

        setEmailSent(true);
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div>
      {!emailSent ? (
        <Button
          onClick={handleSendEmail}
          className="px-10 py-3 w-full"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Instructions to Developer"}
        </Button>
      ) : (
        <p className="text-green-600">Instructions have been sent to your email!</p>
      )}
    </div>
  );
}
