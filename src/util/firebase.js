// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAIWjmca2NJ22gshW69QJ0S5cceOt9GlwE",
    authDomain: "api-demo-616e3.firebaseapp.com",
    projectId: "api-demo-616e3",
    storageBucket: "api-demo-616e3.appspot.com",
    messagingSenderId: "112728468991",
    appId: "1:112728468991:web:72f6c19e1c69c2c452cbca",
    measurementId: "G-Q2FBKY5JJ4"
  };

//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app