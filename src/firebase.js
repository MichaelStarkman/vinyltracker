import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAaUKJhdhkM-rsf_15vDiIciPwWZgwrm3c",
  authDomain: "vinyl-tracker-90dc2.firebaseapp.com",
  projectId: "vinyl-tracker-90dc2",
  storageBucket: "vinyl-tracker-90dc2.appspot.com",
  messagingSenderId: "912741511290",
  appId: "1:912741511290:web:28a7cdf17e6e688fb60bc3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);