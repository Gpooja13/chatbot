"use client";
import { useState } from "react";
import SuccessUI from "../../components/SuccessUI";
import FailureUI from "../../components/FailureUI";
import { useAuth } from "../../context/AuthContext"; // Assuming auth context is used for user authentication

export default function ChatbotIntegrationPage() {
  const [isSuccess, setIsSuccess] = useState(null); // To track if integration was successful or not
  const { user } = useAuth(); // Get the user context if needed for displaying user-specific info

  const handleTestIntegration = async () => {
    // Simulate the test integration
    try {
      // Simulate a success response from API (replace with actual test integration logic)
      const response = await fetch("/api/test-integration", { method: "POST" });
      if (response.ok) {
        setIsSuccess(true); // Success
      } else {
        setIsSuccess(false); // Failure
      }
    } catch (error) {
      console.error("Integration failed:", error);
      setIsSuccess(false); // In case of error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Test Your Chatbot Integration</h1>

      <button
        onClick={handleTestIntegration}
        className="px-6 py-3 bg-blue-500 text-white rounded-md mb-4"
      >
        Test Integration
      </button>

      {/* Conditional UI rendering based on the success of the integration */}
      {isSuccess === true && <SuccessUI />}
      {isSuccess === false && <FailureUI />}
    </div>
  );
}
