import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";

const Firebase = firebase.initializeApp(config.firebase);
export default Firebase;
// export const Providers = {
//   google: new firebase.auth.GoogleAuthProvider(),
// };

// export const auth = firebase.app().auth();
// export default Firebase;
// firebase.initializeApp ({
//     apiKey: "AIzaSyBiGZJXzv5h1rWaDf4m8OERca9EquXnQrU",
//     authDomain: "reduxtoolkitauth.firebaseapp.com",
//     projectId: "reduxtoolkitauth",
//     storageBucket: "reduxtoolkitauth.appspot.com",
//     messagingSenderId: "68897694997",
//     appId: "1:68897694997:web:3ec3a09ecc8ab89a6fb51c"
//   });
export const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
