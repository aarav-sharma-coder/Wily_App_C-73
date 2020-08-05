import *as firebase from 'firebase';
require('add firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyAknsAAHG1Mu2Pfq2_kku5g066AycgTCPs",
    authDomain: "wily-app-ea893.firebaseapp.com",
    databaseURL: "https://wily-app-ea893.firebaseio.com",
    projectId: "wily-app-ea893",
    storageBucket: "wily-app-ea893.appspot.com",
    messagingSenderId: "386493690344",
    appId: "1:386493690344:web:c208711dd6127372af745d"
  };
  firebase.initialiseApp(firebaseConfig);
  export default firebase.firestore();