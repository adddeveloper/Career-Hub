firebase.initializeApp({
    apiKey: "AIzaSyBr0zcRtubpwL6ml6c3o-olwUwuDCbfTLg",
    authDomain: "jobpage-e3edf.firebaseapp.com",
    projectId: "jobpage-e3edf",
    storageBucket: "jobpage-e3edf.appspot.com",
    messagingSenderId: "98928331030",
    appId: "1:98928331030:web:1b1e0d4f764aef87592837",
    measurementId: "G-17FDPMTT4M"
});

// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
}).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
});
