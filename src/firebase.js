
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFDdr0hddOjYUG0hriVu2S6OoePvOx6Us",
  authDomain: "walkie-talkie-c8150.firebaseapp.com",
  projectId: "walkie-talkie-c8150",
  storageBucket: "walkie-talkie-c8150.appspot.com",
  messagingSenderId: "166156706275",
  appId: "1:166156706275:web:3b2dac6327a1698f0800d6",
  measurementId: "G-FKK11V9M25"
// Add your config here
};

const app = initializeApp(firebaseConfig);

export const db = getStorage(app);
export const auth = getAuth(app);
export const storage = getFirestore(app);