import firebase from 'firebase/app'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtJA571T5-oc-4RfdG2KF364_m0_hdsDU",
    authDomain: "react-crud-62626.firebaseapp.com",
    databaseURL: "https://react-crud-62626-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-crud-62626",
    storageBucket: "react-crud-62626.appspot.com",
    messagingSenderId: "217177502270",
    appId: "1:217177502270:web:7abf6a91ca49f939f7976f"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();