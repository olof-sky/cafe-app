import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIjfy8sQijeOOpd3iZ9z0SNSdeN_LQDuo",
  authDomain: "cafe-app-e40a2.firebaseapp.com",
  projectId: "cafe-app-e40a2",
  storageBucket: "cafe-app-e40a2.appspot.com",
  messagingSenderId: "281147002737",
  appId: "1:281147002737:web:20fee13315be1abd15f0d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);
