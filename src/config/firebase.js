const firebase = require('firebase/app');
// Required for side-effects
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyCfat7OiSE8LCicthvEGXb3yIsfSHmxr4M",
  authDomain: "tictactoex.firebaseapp.com",
  projectId: "tictactoex",
});

module.exports = firebase;
