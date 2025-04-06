import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sgms-63c67.firebaseapp.com",
  projectId: "sgms-63c67",
  storageBucket: "sgms-63c67.firebasestorage.app",
  messagingSenderId: "826535256101",
  appId: "1:826535256101:web:56d85fe62fab0f8a17dfcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);