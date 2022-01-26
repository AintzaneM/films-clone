import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyASYEnjBJqBVjXz_b1oG08OW6ClFxxWoFM",
    authDomain: "films-clone.firebaseapp.com",
    projectId: "films-clone",
    storageBucket: "films-clone.appspot.com",
    messagingSenderId: "268447597646",
    appId: "1:268447597646:web:5bf53cc683c90024446f1f"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;