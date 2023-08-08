import firebase from "firebase/app"

export const firebaseConfig = {
    apiKey: "AIzaSyARa_pYeh-1i8Y_vDfWM-F165bEpQAFgMo",
    authDomain: "historia89-b0e97.firebaseapp.com",
    projectId: "historia89-b0e97",
    storageBucket: "historia89-b0e97.appspot.com",
    messagingSenderId: "973677655772",
    appId: "1:973677655772:web:9d40d29971710ab36de619"
  };


  
  firebase.initializeApp(firebaseConfig);
  export default firebase;