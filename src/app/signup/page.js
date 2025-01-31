"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { auth, googleProvider } from "../../utils/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

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
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
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
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="input-field" />
        <p className="text-red-500">{errors.name?.message}</p>

        <input {...register("email")} type="email" placeholder="Email" className="input-field" />
        <p className="text-red-500">{errors.email?.message}</p>

        <input {...register("password")} type="password" placeholder="Password" className="input-field" />
        <p className="text-red-500">{errors.password?.message}</p>

        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <button onClick={signInWithGoogle} className="btn-google">
        Continue with Google
      </button>
    </div>
  );
}
