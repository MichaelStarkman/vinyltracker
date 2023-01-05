import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const { 
//   REACT_APP_API_KEY,
//   REACT_APP_AUTH_DOMAN,
//   REACT_APP_PROJECT_ID,
//   REACT_APP_STORAGE_BUCKET,
//   REACT_APP_MESSAGEING_SENDER_ID,
//   REACT_APP_APP_ID
// } = process.env;

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGEING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);

// test