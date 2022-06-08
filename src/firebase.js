
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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

firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();