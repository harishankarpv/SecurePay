import firebase from 'firebase'



  var firebaseConfig = {
    apiKey: "AIzaSyBCUYiJFKD1_rHZ7kC-ur0_WNVYmMXSxps",
    authDomain: "login-authentication-be076.firebaseapp.com",
    projectId: "login-authentication-be076",
    storageBucket: "login-authentication-be076.appspot.com",
    messagingSenderId: "856734511017",
    appId: "1:856734511017:web:8ca59b58a65faea1149eb8"
  };
  
  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;