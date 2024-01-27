import {
  signInWithGooglePopUp,
  crateUserDocumenFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    crateUserDocumenFromAuth(user);
  };
  return (
    <div>
      <h1>Sing in page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
