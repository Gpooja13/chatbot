"use client";
import { useState,useEffect } from "react";
import SuccessUI from "../../components/SuccessUI";
import FailureUI from "../../components/FailureUI";
import { useAuth } from "../../context/AuthContext"; 
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";// Assuming auth context is used for user authentication

export default function ChatbotIntegrationPage() {
  const [isSuccess, setIsSuccess] = useState(null); // To track if integration was successful or not
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); 

  const handleTestIntegration = async () => {
    // Simulate the test integration
    try {
      // Simulate a success response from API (replace with actual test integration logic)
      const response = await fetch("/api/test-integration", { method: "POST" });
      if (response.ok) {
        setIsSuccess(true); // Success
      } else {
        setIsSuccess(false); // Failure
      }
    } catch (error) {
      console.error("Integration failed:", error);
      setIsSuccess(false); // In case of error
    }
  };

  useEffect(()=>{
      if (!user) {
        router.push('/login'); 
       
      }
    },[])

  return (
    <div className="bg-white w-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-12 w-auto"
                src="/logo.png"
                alt="Company Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <p className="mr-4 pr-4 border-r border-gray-300 text-sm ">
              Welcome, {user?.displayName || user?.email} !
            </p>
            <button
              onClick={logout}
              className="text-sm font-semibold text-gray-900"
            >
              Log Out <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-12 w-auto"
                  src="/logo.png"
                  alt="Company Logo"
                  width={100}
                  height={100}
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="#"
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {user.displayName || user.email}
                  </Link>
                </div>

                <div className="py-6">
                  <button
                    onClick={logout}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Test Your Chatbot Integration</h1>

      <Button
        onClick={handleTestIntegration}
        className="px-6 py-3 mb-6 w-1/3"
      >
        Test Integration
      </Button>

      {/* Conditional UI rendering based on the success of the integration */}
      {isSuccess === true && <SuccessUI />}
      {isSuccess === false && <FailureUI handleTestIntegration={handleTestIntegration} />}
    </div>

    </div>

   
  );
}
