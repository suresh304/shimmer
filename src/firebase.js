import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBo7z2-eebvgsEk09Ipr4Vf6Fi26KoWfhc",
    authDomain: "message-app-a645c.firebaseapp.com",
    projectId: "message-app-a645c",
    storageBucket: "message-app-a645c.appspot.com",
    messagingSenderId: "106924619999",
    appId: "1:106924619999:web:8cc17d899114a60162d16a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth= getAuth(app)
  export const db = getFirestore(app)