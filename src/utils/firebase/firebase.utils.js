import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1AiVOPOyp7-bb0yCwPOqFm8vXNzBglGw",
  authDomain: "e-commerce-db-d7288.firebaseapp.com",
  projectId: "e-commerce-db-d7288",
  storageBucket: "e-commerce-db-d7288.appspot.com",
  messagingSenderId: "1039740040108",
  appId: "1:1039740040108:web:15f390e310da5959794009",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
