import { initializeApp } from "firebase/app";
import { Category } from "../../store/categories/category.types";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKPMZ7vVNznSiOUci5_XDdDeinEWiBd0k",
  authDomain: "crown-fashion-db-b122e.firebaseapp.com",
  projectId: "crown-fashion-db-b122e",
  storageBucket: "crown-fashion-db-b122e.appspot.com",
  messagingSenderId: "532697393822",
  appId: "1:532697393822:web:84f56e2c24927607abe98f",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//initialize firestore

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

//adding shop data js files to firestore
export const addColletionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Database written");
};

//fetch everything from db
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export async function createUserDocumentFromAuth(
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> {
  if (!userAuth) return;
  //initialize variables, user doc creates document format on firestore db
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  //check if user exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      //setdoc creates user info
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export async function createAuthUserWithEmailAndPassword(
  email: string,
  password: string
) {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
export async function signInAuthUserWithEmailAndPassword(
  email: string,
  password: string
) {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
