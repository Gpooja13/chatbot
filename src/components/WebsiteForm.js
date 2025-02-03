"use client";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea"

const WebsiteForm = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const fetchMetaDescription = async () => {
    if (!websiteURL) {
      alert("Please enter a valid website URL.");
      return;
    }

    try {
      const response = await fetch(
        `/api/fetchMetaDescription?url=${encodeURIComponent(websiteURL)}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setCompanyDescription(data.metaDescription || "");
    } catch (error) {
      console.error("Error fetching meta description:", error);
      setCompanyDescription("Failed to retrieve description.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ companyName, websiteURL, companyDescription });
  };

  return (
    <div className="isolate bg-white px-6 py-10 sm:py-10 lg:px-8 ">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          background: "linear-gradient(to top right, #ff80b5, #9089fc)",
          opacity: 0.3,
        }}
      ></div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Train Bot 
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
        Integrate your data sources to enhance your chatbot’s training.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="mx-auto mt-6 max-w-xl sm:mt-10"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="company" className="text-sm/6 font-semibold text-gray-900">
              Company
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                id="company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                placeholder="Name of Organisation"
                className="placeholder:text-gray-400"
                autoComplete="organization"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="website" className="text-sm/6 font-semibold text-gray-900">
              Website
            </Label>
            <div className="mt-2.5">
              <Input
                type="url"
                id="website"
                value={websiteURL}
                onChange={(e) => {
                  setWebsiteURL(e.target.value);
                  fetchMetaDescription();
                }}
                required
                placeholder="www.example.com"
                className="placeholder:text-gray-400"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="description" className="text-sm/6 font-semibold text-gray-900">
              Description
            </Label>
            <div className="mt-2.5">
              <Textarea
                name="description"
                id="description"
                rows="4"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                placeholder="Meta description will be auto-filled, but you can edit it"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" className="block w-full rounded-md text-center text-sm shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ">
            Fetch Links
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WebsiteForm;
