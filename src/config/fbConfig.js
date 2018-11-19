import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCXscfVMUQOg-W82IMESbbkhDay0qtOG4Y',
    authDomain: 'maiden-plan.firebaseapp.com',
    databaseURL: 'https://maiden-plan.firebaseio.com',
    projectId: 'maiden-plan',
    storageBucket: 'maiden-plan.appspot.com',
    messagingSenderId: '664420562015',
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
