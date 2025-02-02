"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa"; 

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect to home page after login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // Redirect after Google login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
      <div className="bg-white w-full">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
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
            <div className=" lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/signup"
                className="text-sm font-semibold text-gray-900"
              >
                Sign Up <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
        </header>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
          Login to Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-full">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="mt-2">
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="mt-2">
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>

        {error && <p className="mt-6 text-center text-red-500 text-sm">{error}</p>}

        {/* Horizontal line with "or continue with" text */}
        <div className="my-6 flex items-center justify-center">
          <hr className="w-1/3 border-t border-gray-300" />
          <span className="mx-1 text-xs font-medium text-gray-500">OR CONTINUE WITH</span>
          <hr className="w-1/3 border-t border-gray-300" />
        </div>

        {/* Google Login Button */}
        <div className="mt-6 text-center">
          <Button onClick={handleGoogleLogin} className="w-full flex items-center justify-center space-x-2">
            <FaGoogle className="text-white" />
            <span className="text-white">Google</span>
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
