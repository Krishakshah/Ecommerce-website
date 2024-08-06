// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCdOlDV-LN3LxArZozr3dSEB4H3AZ-8q48",
  authDomain: "myecom-17900.firebaseapp.com",
  projectId: "myecom-17900",
  storageBucket: "myecom-17900.appspot.com",
  messagingSenderId: "423384251285",
  appId: "1:423384251285:web:3644d96eb7aa6bf1d6149c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth}