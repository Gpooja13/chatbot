"use client";
import { useState, useEffect } from "react";
import { useOrg } from "../context/BotContext";
import { Accordion } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default function WebsitePagesStatus() {
  const { organisation } = useOrg();
  const [webpages, setWebpages] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0);
  const router = useRouter(); // Initialize the useRouter hook

  useEffect(() => {
    if (organisation?.webpages) {
      const initialPages = organisation.webpages.map((page) => ({
        ...page,
        status: "Pending",
        progress: 0,
        dataChunks: [],
      }));
      setWebpages(initialPages);
      updateOverallProgress(initialPages);

      organisation.webpages.forEach((page) => {
        const scrapeTime = Math.random() * 5000 + 3000;
        const processTime = Math.random() * 5000 + 3000;

        setTimeout(() => {
          updateStatus(page.id, "Scraping", 50);
          setTimeout(() => {
            updateStatus(page.id, "Completed", 100, [
              `Chunk 1 from ${page.url}`,
            ]);
          }, processTime);
        }, scrapeTime);
      });
    }
  }, [organisation]);

  const updateStatus = (id, status, progress, dataChunks = []) => {
    setWebpages((prev) => {
      const updatedPages = prev.map((page) =>
        page.id === id ? { ...page, status, progress, dataChunks } : page
      );
      updateOverallProgress(updatedPages);
      return updatedPages;
    });
  };

  const updateOverallProgress = (pages) => {
    const totalProgress = pages.reduce((sum, page) => sum + page.progress, 0);
    setOverallProgress(pages.length > 0 ? totalProgress / pages.length : 0);
  };

  const handleFinishSetup = () => {
    router.push("/testChatbot");
  };

  return (
    <div className="max-w-4xl mx-auto py-6 rounded-lg">
      <h2 className="text-3xl font-semibold my-7 tracking-tight text-center text-gray-900 sm:text-3xl">
        Web Scraper Status
      </h2>

      {/* Overall Progress Bar */}
      {overallProgress < 100 && (
        <Progress value={overallProgress} className="h-1 mb-4" />
      )}

      <Accordion type="single" collapsible>
        {webpages.map((page) => (
          <AccordionItem key={page.id} value={page.id}>
            <AccordionTrigger className="no-underline hover:no-underline">
              <p className="font-semibold">{page.url}</p>
            </AccordionTrigger>
            <p
              className={`text-sm mb-2 ${
                page.status === "Completed"
                  ? "text-green-600"
                  : page.status === "Scraping"
                  ? "text-blue-600"
                  : "text-yellow-600"
              }`}
            >
              {page.status}
            </p>

            <AccordionContent>
              {page.dataChunks.length > 0 ? (
                page.dataChunks.map((chunk, index) => (
                  <p
                    key={index}
                    className="text-sm bg-white rounded-md mb-2 p-2 shadow"
                  >
                    {chunk}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No data available yet.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {organisation && (
        <div className="mt-10">
          <Button
            onClick={handleFinishSetup}
            disabled={overallProgress !== 100} // Disable when overallStatus is not 100
            className={`block w-full rounded-md text-center text-sm shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 
    ${
      overallProgress !== 100
        ? "bg-gray-400 cursor-not-allowed"
        : ""
    }
  `}
          >
            Create ChatBot
          </Button>
        </div>
      )}
    </div>
  );
}
