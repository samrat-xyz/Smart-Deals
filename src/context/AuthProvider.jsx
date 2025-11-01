import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
function AuthProvider({ children }) {

  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  // Creating user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login with google
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  // Login User
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut user
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  // User observer

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

 
  return () => unsubscribe();
}, []);

  const userAuth = {
    createUser,
    googleLogin,
    loginUser,
    signOutUser,
    user,
    loading
  };
  return <AuthContext value={userAuth}>{children}</AuthContext>;
}

export default AuthProvider;
