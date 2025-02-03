"use client";
import { useState,useEffect } from "react";
import Chatbot from "../../components/Chatbot";
import Topbar from "../../components/Topbar";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function TestChatbot() {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(()=>{
      if (!user) {
        router.push('/login'); 
        
      }
    },[])
  return (
    <>
      <Topbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Test Your Chatbot</h2>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 my-3 sm:px-5 space-y-3 sm:space-y-0">
          {/* Go Back Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full px-5">
  {/* Go Back Button */}
  <button onClick={()=>router.push("/")} className="font-semibold text-black flex items-center text-sm sm:text-base">
    <span aria-hidden="true" className="mr-1 hidden sm:inline">
      &larr;
    </span>
    Go Back
  </button>

  {/* Centered Text */}
  <p className="text-gray-600 text-center text-sm sm:text-base  sm:ml-0 sm:text-left">
    Click the button below to open the chatbot.
  </p>

  {/* Integrate Chatbot Button */}
  <button onClick={()=>router.push("/chatbotIntegration")} className="font-semibold text-black flex items-center text-sm sm:text-base">
    Integrate Chatbot{" "}
    <span aria-hidden="true" className="mr-1 hidden sm:inline">
      &rarr;
    </span>
  </button>
</div>

        </div>

        <Chatbot />
      </div>
    </>
  );
}
