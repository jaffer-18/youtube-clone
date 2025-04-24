// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCZbRiPVkbXtdnujH1eery0AO0dTW5Yt7Y",
// //   authDomain: "react-firebase-auth-emai-38c12.firebaseapp.com",
// //   projectId: "react-firebase-auth-emai-38c12",
// //   storageBucket: "react-firebase-auth-emai-38c12.firebasestorage.app",
// //   messagingSenderId: "870591730414",
// //   appId: "1:870591730414:web:2a2b54313252113a6919ff"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // export const auth = getAuth();

// // export default app;

// // src/firebase.js
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZbRiPVkbXtdnujH1eery0AO0dTW5Yt7Y",
//   authDomain: "react-firebase-auth-emai-38c12.firebaseapp.com",
//   projectId: "react-firebase-auth-emai-38c12",
//   storageBucket: "react-firebase-auth-emai-38c12.firebasestorage.app",
//   messagingSenderId: "870591730414",
//   appId: "1:870591730414:web:2a2b54313252113a6919ff"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize auth with the app instance
// export const auth = getAuth(app);

// export default app;


// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZbRiPVkbXtdnujH1eery0AO0dTW5Yt7Y",
//   authDomain: "react-firebase-auth-emai-38c12.firebaseapp.com",
//   projectId: "react-firebase-auth-emai-38c12",
//   storageBucket: "react-firebase-auth-emai-38c12.appspot.com",
//   messagingSenderId: "870591730414",
//   appId: "1:870591730414:web:2a2b54313252113a6919ff"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize and export Firebase services
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;

// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZbRiPVkbXtdnujH1eery0AO0dTW5Yt7Y",
//   authDomain: "react-firebase-auth-emai-38c12.firebaseapp.com",
//   projectId: "react-firebase-auth-emai-38c12",
//   storageBucket: "react-firebase-auth-emai-38c12.appspot.com",
//   messagingSenderId: "870591730414",
//   appId: "1:870591730414:web:2a2b54313252113a6919ff"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize and export Firebase services
// export const db = getFirestore(app);

// // Initialize storage with correct location
// const storage = getStorage(app);
// export { storage };

// export default app;

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZbRiPVkbXtdnujH1eery0AO0dTW5Yt7Y",
//   authDomain: "react-firebase-auth-emai-38c12.firebaseapp.com",
//   projectId: "react-firebase-auth-emai-38c12",
//   storageBucket: "react-firebase-auth-emai-38c12.appspot.com",
//   messagingSenderId: "870591730414",
//   appId: "1:870591730414:web:2a2b54313252113a6919ff"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize and export Firebase services
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZbRiPVkbXtdnujH1eery0AO0dTW5Yt7Y",
  authDomain: "react-firebase-auth-emai-38c12.firebaseapp.com",
  projectId: "react-firebase-auth-emai-38c12",
  storageBucket: "react-firebase-auth-emai-38c12.appspot.com",
  messagingSenderId: "870591730414",
  appId: "1:870591730414:web:2a2b54313252113a6919ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage with CORS settings
export const storage = getStorage(app);

export default app;