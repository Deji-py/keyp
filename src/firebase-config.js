import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "keyp-auth-d5db5",
    storageBucket: "keyp-auth-d5db5.appspot.com",
    messagingSenderId: "630961185421",
    appId: "1:630961185421:web:000e9a55480992063778c4",
    measurementId: "G-XHQFWL3CED"
  };

  const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
