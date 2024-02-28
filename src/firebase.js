// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyk9yeP9ejom63uv3q9SM-CkaY1JR3Lu0",
  authDomain: "netflix-react-12d57.firebaseapp.com",
  projectId: "netflix-react-12d57",
  storageBucket: "netflix-react-12d57.appspot.com",
  messagingSenderId: "562885175503",
  appId: "1:562885175503:web:09aa7824daa2345290afba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)