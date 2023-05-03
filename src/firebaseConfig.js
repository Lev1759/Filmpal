import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyBV5h8GaW3Ko2OdePM2btED27PcbEeYm_E",
//   authDomain: "filmpal-a3ca1.firebaseapp.com",
//   projectId: "filmpal-a3ca1",
//   storageBucket: "filmpal-a3ca1.appspot.com",
//   messagingSenderId: "96033816934",
//   appId: "1:96033816934:web:46549f440efd5db81e48a7",
//   measurementId: "G-5LJ4EP471T"
// };


const firebaseConfig = {
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_APP_ID,
measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


