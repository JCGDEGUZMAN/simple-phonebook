import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

// Get a Firestore instance
export const db = firebase.initializeApp({ 
  apiKey: process.env.VUE_APP_FIRE_API_KEY,
  authDomain: process.env.VUE_APP_FIRE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRE_STORE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRE_MSG_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_FIRE_MEASUREMENT_ID
}).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })