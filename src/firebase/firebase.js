import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCIii1R_KchpRDuIoNJ647cbP3TbqfESss",
  authDomain: "react-shop-3047a.firebaseapp.com",
  projectId: "react-shop-3047a",
  storageBucket: "react-shop-3047a.appspot.com",
  messagingSenderId: "546340342655",
  appId: "1:546340342655:web:07539ddbef7b91b72c684a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);