import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpk7TwwJrSyLtE94uA4kgpcmtEqWgPD6E",
  authDomain: "clone-6d4b7.firebaseapp.com",
  projectId: "clone-6d4b7",
  storageBucket: "clone-6d4b7.appspot.com",
  messagingSenderId: "763110775012",
  appId: "1:763110775012:web:a586ffd3f869a5e79f74f1",
  measurementId: "G-H8EF3C9CDN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
export { app, auth, analytics };
