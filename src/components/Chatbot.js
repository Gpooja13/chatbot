"use client";
import { useState } from "react";
import { useOrg } from "../context/BotContext"; 
import { Input } from "../components/ui/input";
import { IoSend } from "react-icons/io5";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { organisation } = useOrg(); // Get the organisation details
  const clientWebsiteURL = organisation?.websiteURL || "https://ui.shadcn.com/docs/components/card"; // Default URL if not set

  const [messages, setMessages] = useState([
    { text: "Hi!", sender: "bot" },
    { text: "How can I help you?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return; // Prevent sending empty messages

    // Add user message
    setMessages((prevMessages) => [...prevMessages, { text: inputMessage, sender: "user" }]);
    setInputMessage(""); // Clear input field

    // Simulate bot response (you can replace this with real chatbot logic)
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: "Chatbot is under development...", sender: "bot" }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot button */}
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {/* Chatbot overlay */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 h-96 bg-white shadow-lg rounded-md border p-3 z-50 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Chatbot</h3>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto bg-gray-100 p-4 rounded-md text-sm">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`text-gray-600 p-2 rounded-xl ${
                  msg.sender === "user" ? "text-right"  : "text-left"
                } my-1`}
              >
                <span className={`p-2 rounded-xl  ${
                  msg.sender === "user" ? " bg-blue-200" : " bg-gray-300"
                }`}>{msg.text}</span>
              </p>
            ))}
          </div>

          {/* Message input bar */}
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-2 py-1 border rounded-md"
            />
            <button
              onClick={handleSendMessage}
              className=" text-gray-900 px-1 py-1 rounded-md flex items-center justify-center"
            >
              <IoSend size={25} /> 
            </button>
          </div>
        </div>
      )}

      {/* Iframe to display client's website */}
      <div className="relative w-full h-screen">
        <iframe
          src={clientWebsiteURL}
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none", zIndex: 0 }}
          title="Client's Website"
        />
      </div>
    </>
  );
}
