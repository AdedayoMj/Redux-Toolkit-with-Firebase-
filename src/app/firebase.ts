import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import config from './config';

const Firebase = firebase.initializeApp(config.firebase);
export default Firebase;

export const db = getFirestore(Firebase);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
