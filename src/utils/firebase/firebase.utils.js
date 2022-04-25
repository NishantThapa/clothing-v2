import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDz9gJetoERG_XQX6ZD9rje7PVmpLdKcZc",
    authDomain: "crwn-db-4476a.firebaseapp.com",
    projectId: "crwn-db-4476a",
    storageBucket: "crwn-db-4476a.appspot.com",
    messagingSenderId: "883982606340",
    appId: "1:883982606340:web:a5c4fb2d56573c61a15551"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);