import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyC-kK3LGoAQeUXmh45H6yCHqL4KZrn7rEI",
  authDomain: "react-app-970a4.firebaseapp.com",
  projectId: "react-app-970a4",
  storageBucket: "react-app-970a4.appspot.com",
  messagingSenderId: "1049535185714",
  appId: "1:1049535185714:web:21936de4ec3afd9f554d2b"
};
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.auth=firebase.auth();
 firebase.db=firebase.firestore();

 export default firebase;
