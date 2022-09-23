import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdJQTL_3jA9bvUuwRcQQTnmaRuLl7Iiu8",
  authDomain: "ecommerce-project-2eaa2.firebaseapp.com",
  projectId: "ecommerce-project-2eaa2",
  storageBucket: "ecommerce-project-2eaa2.appspot.com",
  messagingSenderId: "456087726195",
  appId: "1:456087726195:web:133ecf8fcea332df2b6206",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
