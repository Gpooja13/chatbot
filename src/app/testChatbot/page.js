"use client";
import Chatbot from "../../components/Chatbot";
import Topbar from "../../components/Topbar";

export default function TestChatbot() {
  return (
    <><Topbar/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Test Your Chatbot</h2>
      <p className="text-gray-600 mb-6">Click the button below to open the chatbot.</p>
      <Chatbot />
    </div>
    </>
  );
}