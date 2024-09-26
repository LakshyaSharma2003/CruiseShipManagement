// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2SjW3TO7yDN05BBh3nx9ypc5m7YMHWV8",
    authDomain: "cruise-ship-management-f8b5e.firebaseapp.com",
    projectId: "cruise-ship-management-f8b5e",
    storageBucket: "cruise-ship-management-f8b5e.appspot.com",
    messagingSenderId: "513256703666",
    appId: "1:513256703666:web:b7c7b2865894fd38476bab",
    measurementId: "G-34328V44E5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();
