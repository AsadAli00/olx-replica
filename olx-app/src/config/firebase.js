import firebase from 'firebase/app'

import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCNQhb4S2UeWCT0_fmk0aaQynEETmTnDBw",
    authDomain: "olxreplica-app.firebaseapp.com",
    databaseURL: "https://olxreplica-app.firebaseio.com",
    projectId: "olxreplica-app",
    storageBucket: "olxreplica-app.appspot.com",
    messagingSenderId: "706120630292",
    appId: "1:706120630292:web:432d09cd3cc16000ffa701",
    measurementId: "G-H7VT4SSNR8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;