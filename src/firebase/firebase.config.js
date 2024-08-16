// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQFbGmE9546lBl6XjZ80NswPbpqOJGtuQ",
  authDomain: "auth-moha-milon-68d71.firebaseapp.com",
  projectId: "auth-moha-milon-68d71",
  storageBucket: "auth-moha-milon-68d71.appspot.com",
  messagingSenderId: "787124522134",
  appId: "1:787124522134:web:66e89ad9a6cdd3f73f86b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;