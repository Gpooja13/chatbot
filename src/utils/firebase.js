// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3kmFRMSR4jh90_7e8Sf7HZaFtcCst3oY",
  authDomain: "chatbot-train-55e44.firebaseapp.com",
  projectId: "chatbot-train-55e44",
  storageBucket: "chatbot-train-55e44.firebasestorage.app",
  messagingSenderId: "855821068626",
  appId: "1:855821068626:web:a9bb73da6318560b27328b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();