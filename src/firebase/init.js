import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const firebaseConfig = {
  apiKey: 'AIzaSyBgewMJ-ykF-zRkrQLppDUaOVj0d-v_5DY',
  authDomain: 'spending-tracker-f72c3.firebaseapp.com',
  databaseURL: 'https://spending-tracker-f72c3.firebaseio.com',
  projectId: 'spending-tracker-f72c3',
  storageBucket: '',
  messagingSenderId: '652172023757',
  appId: '1:652172023757:web:4cacb5223c8e3377'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
