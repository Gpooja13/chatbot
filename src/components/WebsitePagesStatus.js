"use client";
import { useState, useEffect } from "react";
import { useOrg } from "../context/BotContext";

export default function WebsitePagesStatus({ onClickPage }) {
  const { organisation } = useOrg();
  const [webpages, setWebpages] = useState([]);
  const [expandedPage, setExpandedPage] = useState(null);

  useEffect(() => {
    if (organisation?.webpages) {
      setWebpages(organisation.webpages);

      organisation.webpages.forEach((page) => {
        const scrapeTime = Math.random() * 5000 + 3000;
        const processTime = Math.random() * 5000 + 3000;

        setTimeout(() => {
          updateStatus(page.id, "Scraping");

          setTimeout(() => {
            updateStatus(page.id, "Completed", [`Chunk 1 from ${page.url}`, `Chunk 2 from ${page.url}`]);
          }, processTime);
        }, scrapeTime);
      });
    }
  }, [organisation]);

  const updateStatus = (id, status, dataChunks = []) => {
    setWebpages((prev) =>
      prev.map((page) =>
        page.id === id ? { ...page, status, dataChunks } : page
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Web Scraper Status</h2>
      <div className="space-y-2">
        {webpages.map((page) => (
          <div key={page.id} className="border rounded-md shadow-sm">
            <div
              className="p-4 flex justify-between items-center cursor-pointer bg-gray-50 hover:bg-gray-100"
              onClick={() => setExpandedPage(expandedPage === page.id ? null : page.id)}
            >
              <div>
                <p className="font-semibold">{page.url}</p>
                <p className={`text-sm ${page.status === "Completed" ? "text-green-600" : "text-blue-600"}`}>
                  {page.status}
                </p>
              </div>
              <span className="text-xl">{expandedPage === page.id ? "▲" : "▼"}</span>
            </div>
            {expandedPage === page.id && (
              <div className="p-4 bg-gray-100">
                <h3 className="text-lg font-semibold mb-2">Scraped Data</h3>
                {page.dataChunks.length > 0 ? (
                  page.dataChunks.map((chunk, index) => (
                    <p key={index} className="text-sm bg-white p-2 rounded-md mb-2 shadow">
                      {chunk}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500">No data available yet.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
