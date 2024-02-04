import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  crateUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// this will be actual value what the user will going to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // in the call back we will get the authenticated user details
    // if user is authenticated then we will get user object else null
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        crateUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
