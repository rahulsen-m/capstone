import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  crateUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // get the context for setting the current user state
  const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFromFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await crateUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(
            "error while creating user using email and password",
            error
          );
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">Sign In</Button>
        <Button
          type="button"
          buttonType="google"
          onClick={signInWithGoogle}
          style={{ marginTop: "-50px", marginLeft: "180px" }}
        >
          Google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
