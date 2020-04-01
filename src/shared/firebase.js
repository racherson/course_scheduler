import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAospemJ9C-nghq6Z0D81-mkRLHxswbvSU",
    authDomain: "course-scheduler-19577.firebaseapp.com",
    databaseURL: "https://course-scheduler-19577.firebaseio.com",
    projectId: "course-scheduler-19577",
    storageBucket: "course-scheduler-19577.appspot.com",
    messagingSenderId: "835590548859",
    appId: "1:835590548859:web:75a00e16ee6d7839dca1de"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
