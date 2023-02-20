/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCzVfQexdALVOK_HcXXX_tn6l6c_DDJ648",
  authDomain: "friendlychat-3d6f5.firebaseapp.com",
  projectId: "friendlychat-3d6f5",
  storageBucket: "friendlychat-3d6f5.appspot.com",
  messagingSenderId: "466040355651",
  appId: "1:466040355651:web:1575fc086ecbfb98b60df6"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}