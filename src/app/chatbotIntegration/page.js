"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import EmailInstructions from "../../components/EmailInstructions";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";

export default function ChatbotIntegrationStep() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

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
              Welcome, {user.displayName || user.email} !
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
      <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-2">Integrate Your Chatbot</h1>

        {/* Integration Options */}
        <div className="flex flex-col gap-4 w-full sm:w-96 lg:w-[600px] xl:w-[700px] items-center">
          {/* Easy-to-Follow Instructions */}
          <div className="bg-white p-6 rounded-md shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-4">
              Integration Instructions
            </h2>
            <p className="mb-4">
              Follow the steps below to integrate the chatbot into your website:
            </p>

            <ol className="list-decimal pl-6 mb-4 text-sm text-gray-700">
              <li className="my-1">Copy the code below:</li>
              <pre className="bg-gray-100 p-4 my-2 rounded-md overflow-x-auto">
                {`<script>
(function() {
  var chatbotScript = document.createElement('script');
  chatbotScript.src = "https://your-chatbot-url.com/chatbot.js"; 
  // Replace with your chatbot script URL
  document.head.appendChild(chatbotScript);
})();
</script>`}
              </pre>
              <li className="my-1">
                Paste it inside the <code>&lt;head&gt;</code> section of your
                website's HTML file.
              </li>
              <li className="my-1">Save and refresh your website.</li>
            </ol>
          </div>

          <div className="flex items-center justify-center w-full sm:gap-10 gap-5 flex-col sm:flex-row">
            <EmailInstructions />
            <Button
              className="px-20 "
              onClick={() => {
                
                router.push("/chatbotIntegrationPage"); 
              }}
            >
              Integrate Chatbot
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
