"use client";
import WebsiteForm from "@/components/WebsiteForm";
import WebsitePagesStatus from "@/components/WebsitePagesStatus";
import { useState, useRef } from "react";
import { useOrg } from "../context/BotContext";

export default function Dashboard() {
  const { organisation, setOrgDetails } = useOrg();
  const [showPageData, setShowPageData] = useState(null);
  const statusRef = useRef(null); // Reference to WebsitePagesStatus component

  const handleFormSubmit = (data) => {
    setOrgDetails(data);
    
    // Scroll to the WebsitePagesStatus component after submission
    setTimeout(() => {
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const handlePageClick = (page) => {
    setShowPageData(`Data chunks for ${page}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <WebsiteForm onSubmit={handleFormSubmit} />
      
      {organisation && (
        <div ref={statusRef} className="w-full max-w-lg mx-auto">
          <WebsitePagesStatus onClickPage={handlePageClick} />
        </div>
      )}

      {showPageData && (
        <div className="mt-6 w-full max-w-lg mx-auto p-4 border rounded-md">
          <h3 className="font-semibold">Scraped Data for Page:</h3>
          <p>{showPageData}</p>
        </div>
      )}
    </div>
  );
}
