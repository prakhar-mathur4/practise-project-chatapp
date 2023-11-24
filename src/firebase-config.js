// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu2fll__ZKXHDFqTfcLSUi8AxRdW1qAPk",
  authDomain: "chatapp-31643.firebaseapp.com",
  projectId: "chatapp-31643",
  storageBucket: "chatapp-31643.appspot.com",
  messagingSenderId: "695651836288",
  appId: "1:695651836288:web:f1e5694f22a86e242ae165",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
