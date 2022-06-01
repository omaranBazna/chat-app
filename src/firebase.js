// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPVHfyT7JFhGDmACxCvsATbIgP41UEegA",
  authDomain: "chat-app-ffa6a.firebaseapp.com",
  projectId: "chat-app-ffa6a",
  storageBucket: "chat-app-ffa6a.appspot.com",
  messagingSenderId: "572493875586",
  appId: "1:572493875586:web:fec4d56f4f6814513fe79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};