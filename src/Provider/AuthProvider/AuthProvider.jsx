import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const LogInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const LogInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const LogInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setLoggedUser(currentUser);
      setLoader(false);
    });

    return () => {
      unSub();
    };
  }, []);

  const userInfo = {
    loggedUser,
    LogInWithGoogle,
    LogInWithGithub,
    LogInWithEmail,
    SignUpWithEmail,
    loader,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
