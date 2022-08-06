import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [googleUserphoto, setGoogleuserphoto] = useState("");

  const UsersigninwithGoogle = () => {
    return signInWithPopup(auth,provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
         setGoogleuserphoto(result.user.photoURL)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Userprofile = (firstname, lastname) => {
    return updateProfile(auth.currentUser, {
      displayName: firstname + " " + lastname,
    });
  };

  const Userlogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Userlogout = () => {
    signOut(auth);
    setGoogleuserphoto(null)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <userContext.Provider
      value={{
        createUser,
        user,
        Userlogout,
        Userlogin,
        Userprofile,
        UsersigninwithGoogle,
        googleUserphoto,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(userContext);
};
