import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
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
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
