import firebase from "firebase";

var app = {
  apiKey: "AIzaSyBCeRlh65REM8Nq11LdSbjfyaSb7A_md2w",
  authDomain: "naijapedia-10ae1.firebaseapp.com",
  projectId: "naijapedia-10ae1",
  storageBucket: "naijapedia-10ae1.appspot.com",
  messagingSenderId: "5459345094",
  appId: "1:5459345094:web:0143c1c12c9029d2db61c7",
  measurementId: "G-YB30SL823E",
};
firebase.initializeApp(app);

// Initialize Firebase
export const Db = firebase.firestore();
export const Storage = firebase.storage();
export default firebase;
