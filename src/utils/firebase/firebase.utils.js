import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKPMZ7vVNznSiOUci5_XDdDeinEWiBd0k",
  authDomain: "crown-fashion-db-b122e.firebaseapp.com",
  projectId: "crown-fashion-db-b122e",
  storageBucket: "crown-fashion-db-b122e.appspot.com",
  messagingSenderId: "532697393822",
  appId: "1:532697393822:web:84f56e2c24927607abe98f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
