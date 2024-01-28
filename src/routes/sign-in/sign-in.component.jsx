import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up.component";
import {
  auth,
  signInWithGooglePopUp,
  crateUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";
const SignIn = () => {
  useEffect(() => {
    async function getResultAfterRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userSoc = await crateUserDocumentFromAuth(response.user);
      }
    }
    getResultAfterRedirect();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await crateUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
      <SignUp />
    </div>
  );
};

export default SignIn;
