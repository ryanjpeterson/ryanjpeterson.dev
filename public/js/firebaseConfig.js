const firebaseConfig = {
  apiKey: "AIzaSyCwiWXy-7E3v2fRXnl5Bmj0-6JJ1bHUUIc",
  authDomain: "ryanjpeterson-portfolio.firebaseapp.com",
  databaseURL: "https://ryanjpeterson-portfolio.firebaseio.com",
  projectId: "ryanjpeterson-portfolio",
  storageBucket: "ryanjpeterson-portfolio.appspot.com",
  messagingSenderId: "855479902050",
  appId: "1:855479902050:web:6e292a7ef41667ee1f563b",
  measurementId: "G-JN93XMYYBZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
