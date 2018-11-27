import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAMnPhRgkZgsvaNOlaWozFUnocVh-stXQk",
    authDomain: "todo-app-d159d.firebaseapp.com",
    databaseURL: "https://todo-app-d159d.firebaseio.com",
    projectId: "todo-app-d159d",
    storageBucket: "todo-app-d159d.appspot.com",
    messagingSenderId: "1014726916186"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebase.database().ref().set({
    appName: 'Todo App'
})