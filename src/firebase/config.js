import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6iOoijiyklv_-OMRUu1k-m1YmIA-4DvE",
  authDomain: "hikers-blog.firebaseapp.com",
  projectId: "hikers-blog",
  storageBucket: "hikers-blog.appspot.com",
  messagingSenderId: "1031687723379",
  appId: "1:1031687723379:web:bbd0a9e21efa310295cd06",
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
