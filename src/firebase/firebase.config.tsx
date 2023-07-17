// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";

const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
} = {
  apiKey: "AIzaSyA6y94qjSJgSNR5e_cNmmsxSlv1wfGkLtA",
  authDomain: "simple-book-catalog-5b248.firebaseapp.com",
  projectId: "simple-book-catalog-5b248",
  storageBucket: "simple-book-catalog-5b248.appspot.com",
  messagingSenderId: "694180462975",
  appId: "1:694180462975:web:5cac167b6fc2731e431a4a",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export default app;
