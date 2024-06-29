// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeQ0rJ8EWwQZzNYCirFxEY8X0bf_ix5Eo",
  authDomain: "jsatsiskaitymas.firebaseapp.com",
  projectId: "jsatsiskaitymas",
  storageBucket: "jsatsiskaitymas.appspot.com",
  messagingSenderId: "437952928145",
  appId: "1:437952928145:web:5c28eb09251fbef6f36230"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app)

export default firebase;
export { app, db };