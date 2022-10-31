/*import firebase from 'firebase';
import 'firebase/storage';*/

import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

/*const firebaseConfig = {
    apiKey: "AIzaSyD7d1tv6HsMiecEoSTphyuW-HSPpxo5OYQ",
    authDomain: "authentication-3e326.firebaseapp.com",
    projectId: "authentication-3e326",
    storageBucket: "authentication-3e326.appspot.com",
    messagingSenderId: "64589128926",
    appId: "1:64589128926:web:dc6203e6cc5e47b7254e4f"
  };*/

  const firebaseConfig = {
    apiKey: "AIzaSyBrjg3JEE7amSrtOKv2s0l-zl6pkqI30K4",
    authDomain: "techphone-12898.firebaseapp.com",
    projectId: "techphone-12898",
    storageBucket: "techphone-12898.appspot.com",
    messagingSenderId: "1048160975242",
    appId: "1:1048160975242:web:c39d8b3e46453983db7073"
  };
  
  
  // Initialize Firebase
  /*const app = initializeApp(firebaseConfig);

  export default firebase;*/

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);