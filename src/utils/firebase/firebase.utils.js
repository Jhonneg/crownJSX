import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKPMZ7vVNznSiOUci5_XDdDeinEWiBd0k",
  authDomain: "crown-fashion-db-b122e.firebaseapp.com",
  projectId: "crown-fashion-db-b122e",
  storageBucket: "crown-fashion-db-b122e.appspot.com",
  messagingSenderId: "532697393822",
  appId: "1:532697393822:web:84f56e2c24927607abe98f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//initialize firestore

export const db = getFirestore();

export async function createUserDocumentFromAuth(userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  //Create user snapshot
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
}
