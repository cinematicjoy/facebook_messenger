import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDzzB5D5V7YqzzZAEgfOZ_9gdCTJbfru88",
        authDomain: "facebook-messenger-byj.firebaseapp.com",
        databaseURL: "https://facebook-messenger-byj.firebaseio.com",
        projectId: "facebook-messenger-byj",
        storageBucket: "facebook-messenger-byj.appspot.com",
        messagingSenderId: "97898204875",
        appId: "1:97898204875:web:68af26f7193d81124f554e",
        measurementId: "G-9FD9N0768D"
});

const db = firebaseApp.firestore();

export default db;