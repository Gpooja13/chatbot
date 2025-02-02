"use client";
import WebsiteForm from "@/components/WebsiteForm";
import WebsitePagesStatus from "@/components/WebsitePagesStatus";
import { useState } from "react";
import { useOrg } from "../../context/BotContext";
import { useRouter } from "next/navigation"; // Import the useRouter hook

export default function OrganisationSetup() {
  const { organisation, setOrgDetails } = useOrg();
  const [showPageData, setShowPageData] = useState(null);
  const router = useRouter(); // Initialize the useRouter hook

  const handleFormSubmit = (data) => {
    setOrgDetails(data);
  };

  const handlePageClick = (page) => {
    setShowPageData(`Data chunks for ${page}`);
  };

  const handleFinishSetup = () => {
    // Navigate to the 'chatbotIntegration' page after finishing the setup
    router.push("/testChatbot");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Setup Your Organisation</h1>

      {!organisation ? (
        <WebsiteForm onSubmit={handleFormSubmit} />
      ) : (
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Website Status</h2>
          <WebsitePagesStatus onClickPage={handlePageClick} />
        </div>
      )}

      {showPageData && (
        <div className="mt-6 w-full max-w-lg mx-auto p-4 border rounded-md">
          <h3 className="font-semibold">Scraped Data for Page:</h3>
          <p>{showPageData}</p>
        </div>
      )}

      {organisation && (
        <button
          onClick={handleFinishSetup} // Add onClick handler to finish setup
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md"
        >
          Finish Setup
        </button>
      )}
    </div>

    
  );
}
