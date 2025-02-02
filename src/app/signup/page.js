"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { auth, googleProvider } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { FaGoogle } from "react-icons/fa"; // Google icon

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // Email/Password Registration
  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent! Please check your inbox.");
      router.push("/verify-email");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  // Google Login
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
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

            <div className=" lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/login"
                className="text-sm font-semibold text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
        </header>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <div className="mt-2">
              <Input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Full Name"
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="mt-2">
              <Input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Email"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="mt-2">
              <Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Password"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
          </div>

          <div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>
        </form>

        {/* Horizontal line with "or continue with" text */}
        <div className="my-6 flex items-center justify-center">
          <hr className="w-1/3 border-t border-gray-300" />
          <span className="mx-1 text-xs font-medium text-gray-500">
            OR CONTINUE WITH
          </span>
          <hr className="w-1/3 border-t border-gray-300" />
        </div>

        <div className="mt-6 text-center">
          <Button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center space-x-2"
          >
            <FaGoogle className="text-white" />
            <span className="text-white">Google</span>
          </Button>
        </div>

        {error && <p className="mt-6 text-center text-red-500">{error}</p>}

        <p className="mt-8 text-center text-sm text-gray-500">
          Already a member?{" "}
          <a
            href="/login"
            className="font-semibold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
