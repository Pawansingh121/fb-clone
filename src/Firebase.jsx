import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB86Tt0qiwVcAhn6RPIqF9R9BtFnDQ3zlk",
  authDomain: "fb-clone-549db.firebaseapp.com",
  projectId: "fb-clone-549db",
  storageBucket: "fb-clone-549db.appspot.com",
  messagingSenderId: "181126952334",
  appId: "1:181126952334:web:3b3c5fbf2122c7bb0fe0df",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
