import Firebase from 'firebase'
import  'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAt3ml3I7mPBOK1eZilD8ulTIPgM2a2HYI',
  authDomain: 'appmusica-607aa.firebaseapp.com',
  projectId: 'appmusica-607aa',
  storageBucket: 'appmusica-607aa.appspot.com',
  messagingSenderId: '478719666395',
  appId: '1:478719666395:web:0ae72b1360ba28eff744fe',
};
if (!Firebase.apps.length){

 Firebase.initializeApp(firebaseConfig);

  }
// Initialize Firebase

const bdstore = Firebase.firestore();
export default bdstore;
