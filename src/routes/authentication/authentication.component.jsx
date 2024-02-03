import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import {
  auth,
  signInWithGooglePopUp,
  crateUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import "./authentication.styles.scss";
const Authentication = () => {
  useEffect(() => {
    async function getResultAfterRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userSoc = await crateUserDocumentFromAuth(response.user);
      }
    }
    getResultAfterRedirect();
  }, []);

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
  };
  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in with google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
