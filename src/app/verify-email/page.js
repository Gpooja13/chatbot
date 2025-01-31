"use client"
import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { sendEmailVerification } from "firebase/auth";

export default function VerifyEmail() {
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      await auth.currentUser?.reload();
      setUser(auth.currentUser);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const resendVerification = async () => {
    setLoading(true);
    try {
      await sendEmailVerification(auth.currentUser);
      alert("Verification email sent!");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="text-center">
      {user?.emailVerified ? (
        <p>Email verified! You can now <a href="/dashboard" className="text-blue-500">proceed</a>.</p>
      ) : (
        <>
          <p>Please check your email to verify your account.</p>
          <button onClick={resendVerification} disabled={loading} className="btn-primary">
            {loading ? "Sending..." : "Resend Email"}
          </button>
        </>
      )}
    </div>
  );
}
