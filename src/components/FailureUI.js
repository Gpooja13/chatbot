import React from "react";
import { Button } from "../components/ui/button";

const FailureUI = ({handleTestIntegration}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-red-600">Integration Failed</h2>
      <p className="text-lg mb-6">It seems that the chatbot is not integrated yet. Please follow the integration steps or try again later.</p>

      {/* Retry Button */}
      <Button onClick={()=>{
        handleTestIntegration();
      }} > Retry Integration</Button>
      
    </div>
  );
};

export default FailureUI;

