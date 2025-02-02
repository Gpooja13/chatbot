import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SuccessUI = () => {
  const [showConfetti, setShowConfetti] = useState(true);


  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow-lg w-full max-w-md">
      {showConfetti && (
        <Confetti 
          width={window.innerWidth} 
          height={window.innerHeight} 
          recycle={false} 
          numberOfPieces={200} 
          onConfettiComplete={() => setShowConfetti(false)} 
        />
      )}

      <h2 className="text-2xl font-semibold mb-4 text-green-600">Integration Successful!</h2>
      <p className="text-lg mb-6">Your chatbot has been successfully integrated into your website!</p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full">
        <button className="px-6 py-3 bg-green-500 text-white rounded-md w-full">
          Explore Admin Panel
        </button>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md w-full">
          Start talking to your chatbot
        </button>
      </div>

      {/* Social Media Sharing */}
      <div className="flex space-x-4 mt-6">
        <a href="#" className="text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-blue-700">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default SuccessUI;
