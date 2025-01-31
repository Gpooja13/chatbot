"use client"
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-6 sm:p-20">
      <h1 className="text-3xl font-bold">BeyondChats</h1>
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority />

      {user ? (
        <div className="text-center">
          <p>Welcome, {user.displayName || user.email}!</p>
          <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded mt-4">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Register</button>
          </Link>
          <Link href="/login">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}
