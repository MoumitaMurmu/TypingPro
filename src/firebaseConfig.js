// Import the necessary Firebase modules
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase configuration object with project-specific details
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
};

// Initialize the Firebase app with the provided configuration
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Access the authentication and firestore services from the initialized app
const auth = firebase.auth();
const db = firebaseApp.firestore();

// Export the authentication and firestore instances for use in other parts of the application
export { auth, db };
