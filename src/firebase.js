// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCSrH0HYytT_3BsPT0mM_OIo1N6c9V3hiA",
    authDomain: "java-course-c4afd.firebaseapp.com",
    projectId: "java-course-c4afd",
    storageBucket: "java-course-c4afd.firebasestorage.app",
    messagingSenderId: "926632078509",
    appId: "1:926632078509:web:3579eb14eb7e6719c0aa24"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Отримання екземпляра Auth
const db = getFirestore(app);
const database = getDatabase(app); // Отримання бази даних
const storage = getStorage(app);
export { auth, database, db, storage }; // Експорт auth для використання в інших компонентах
