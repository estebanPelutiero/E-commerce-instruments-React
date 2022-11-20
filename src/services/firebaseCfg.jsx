import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyDNNhyqauGgsd_8dj_ah79dDQkMVOWXXfA",
  authDomain: "e-commerce-instrumentos-react.firebaseapp.com",
  projectId: "e-commerce-instrumentos-react",
  storageBucket: "e-commerce-instrumentos-react.appspot.com",
  messagingSenderId: "814510635992",
  appId: "1:814510635992:web:a6789635a83ba0a5b6d0ad"
};

const app = initializeApp(firebaseConfig);  
export const dataBase = getFirestore(app);
export const prodCollection = collection(dataBase, "products"); 
export const catCollection = collection(dataBase, "categories");
export const orderCollection = collection(dataBase, "orders");