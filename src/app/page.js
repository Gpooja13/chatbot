"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Dashboard from "@/components/dashboard";

export default function Home() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-6 sm:p-20">
      {user ? (
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
          <Dashboard />
        </div>
      ) : (
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
                <Link
                  href="/login"
                  className="text-sm font-semibold text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
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
                        {user?.displayName || user?.email}
                      </Link>
                    </div>
                    <div className="py-6">
                      <Link
                        href="/login"
                        className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Hero Section */}
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-30"
              aria-hidden="true"
              style={{
                left: "calc(50% - 11rem)",
                width: "36.125rem",
                transform: "translateX(-50%) rotate(30deg)",
                background: "linear-gradient(to top right, #ff80b5, #9089fc)",
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Create Your Smart Chatbot in Minutes
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                Build a chatbot that speaks your business’s language. Simply
                input your website details, and our AI trainer will instantly
                create a custom chatbot, ready to assist your customers and
                enhance user experience.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/signup"
                  className="rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 focus-visible:outline-indigo-600"
                >
                  Get started →
                </Link>
              </div>
            </div>

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] opacity-30"
              aria-hidden="true"
              style={{
                left: "calc(50% + 3rem)",
                width: "36.125rem",
                transform: "translateX(-50%)",
                background: "linear-gradient(to top right, #ff80b5, #9089fc)",
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
