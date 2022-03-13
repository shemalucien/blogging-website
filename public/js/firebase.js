// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVRBO7JqhfI4Izqnla9s8XQzHHLkijHoQ",
    authDomain: "blogging-website-7b6b7.firebaseapp.com",
    projectId: "blogging-website-7b6b7",
    storageBucket: "blogging-website-7b6b7.appspot.com",
    messagingSenderId: "690015654405",
    appId: "1:690015654405:web:cb401a297a2bbb3faa426c"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}