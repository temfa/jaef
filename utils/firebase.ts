import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTh_EJZ6nIWIF5mXk1yOp-QKd7Cg4iaDQ",
  authDomain: "jaef-1f683.firebaseapp.com",
  projectId: "jaef-1f683",
  storageBucket: "jaef-1f683.firebasestorage.app",
  messagingSenderId: "217470761471",
  appId: "1:217470761471:web:cfc2dc075dd1fbcf158fca",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
