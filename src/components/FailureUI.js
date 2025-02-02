import React from "react";

const FailureUI = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-red-600">Integration Failed</h2>
      <p className="text-lg mb-6">It seems that the chatbot is not integrated yet. Please follow the integration steps or try again later.</p>

      {/* Retry Button */}
      <button className="px-6 py-3 bg-gray-500 text-white rounded-md">
        Retry Integration
      </button>
    </div>
  );
};

export default FailureUI;

