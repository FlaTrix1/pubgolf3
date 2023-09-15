// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAZY02zLOGz07n9nKOJUrtS_579_jfuGjs",
	authDomain: "pubgolf3.firebaseapp.com",
	projectId: "pubgolf3",
	storageBucket: "pubgolf3.appspot.com",
	messagingSenderId: "357117057229",
	appId: "1:357117057229:web:c9c062a549ad3549caf184",
	databaseURL:
		"https://pubgolf3-default-rtdb.europe-west1.firebasedatabase.app",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
