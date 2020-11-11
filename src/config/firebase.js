import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAfpyD2-IzRS476mL9N4oMfubuWL4a165U",
  authDomain: "in-dept-react.firebaseapp.com",
  databaseURL: "https://in-dept-react.firebaseio.com",
  projectId: "in-dept-react",
  storageBucket: "in-dept-react.appspot.com",
  messagingSenderId: "368305803887",
  appId: "1:368305803887:web:ec3047c32e24bc4271339a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
