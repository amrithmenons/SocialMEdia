import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCmhdlnU8KN0jbPTyVD6ZJPulL6jwg8sG4",
  authDomain: "rj-hackathon-64ac1.firebaseapp.com",
  projectId: "rj-hackathon-64ac1",
  storageBucket: "rj-hackathon-64ac1.appspot.com",
  messagingSenderId: "999589067374",
  appId: "1:999589067374:web:ea12c83a096bc48adec47f",
  measurementId: "G-WWQPPGQ1EZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db, onAuthStateChanged };
