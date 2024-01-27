import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQD2vPr5BDmfysR7CY7q8A4wrGIALwRoQ",
  authDomain: "crwn-clothing-db-253.firebaseapp.com",
  projectId: "crwn-clothing-db-253",
  storageBucket: "crwn-clothing-db-253.appspot.com",
  messagingSenderId: "53411090498",
  appId: "1:53411090498:web:fa7c3bd11cec9422c99ddb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const crateUserDocumenFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
