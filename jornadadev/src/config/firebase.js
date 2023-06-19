import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
	apiKey: "AIzaSyDbHGKZhvf_7iiRk9sqD6wshN4cqP8wiX0",
	authDomain: "tekotekoebac.firebaseapp.com",
	projectId: "tekotekoebac",
	storageBucket: "tekotekoebac.appspot.com",
	messagingSenderId: "89932744898",
	appId: "1:89932744898:web:7116a2eadd1effe35f135b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db;