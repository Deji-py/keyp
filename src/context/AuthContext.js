import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase-config";


export const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Userprofile = (firstname, lastname)=>{
    return updateProfile(auth.currentUser, {
      displayName:firstname+" "+lastname
    })
  }
  
  const Userlogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Userlogout = () => {
    return signOut(auth);
  };

 


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <userContext.Provider
      value={{
        createUser,
        user,
        Userlogout,
        Userlogin,
        Userprofile
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(userContext);
};
