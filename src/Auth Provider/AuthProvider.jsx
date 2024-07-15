/* eslint-disable react/prop-types */
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// create user with email and password
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// sign in a user with email and password
const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// logout a user
const logOut = () => {
  return signOut(auth);
};

const authInfo = { createUser, signInUser, logOut };

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
