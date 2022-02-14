import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVsALBblNKke39pvrcWeErNErsHKJt1G8",
    authDomain: "my-mula-99eb8.firebaseapp.com",
    projectId: "my-mula-99eb8",
    storageBucket: "my-mula-99eb8.appspot.com",
    messagingSenderId: "1050494391621",
    appId: "1:1050494391621:web:c5aa5652b1da1a9f605a2c"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }