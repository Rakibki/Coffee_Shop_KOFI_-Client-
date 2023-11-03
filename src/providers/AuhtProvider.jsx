import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.confic";

export const authContext = createContext(null);

const AuhtProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadding, setLoadding] = useState(true);

  const createUser = (email, password) => {
    setLoadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const loginUserWithGoogle = () => {
    setLoadding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const loginUserWithGithub = () => {
    setLoadding(true);
    return signInWithPopup(auth, githubProvider);
  };

  const facebookProvider = new FacebookAuthProvider();
  const loginUserWithFacebook = () => {
    setLoadding(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    return signOut(auth)    
  }

  useEffect(() => {
    const dishConnent = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("user auth Change");
    })
    return () => {
       dishConnent()
    }
  }, [])

console.log(user);
  const userInfo = {
    user,
    loginUser,
    loginUserWithFacebook,
    loadding,
    createUser,
    loginUserWithGoogle,
    loginUserWithGithub,
    logOut,
  };
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuhtProvider;
