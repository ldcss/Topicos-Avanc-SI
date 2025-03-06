import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA30hUrs-OHn-f1OWHkVcWud8JAQVrmwEc",
    authDomain: "si-project-cin.firebaseapp.com",
    projectId: "si-project-cin",
    storageBucket: "si-project-cin.firebasestorage.app",
    messagingSenderId: "872986752992",
    appId: "1:872986752992:web:d2d2b60912b7ab53d9dd85",
    measurementId: "G-YYZS36RG66"
  }
  
  //initialize firebase
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export {app, auth}