import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDrWK34bNRxJADx_Z1hlm6wYfWzwoJuTOA",
    authDomain: "mads-images.firebaseapp.com",
    databaseURL: "https://mads-images.firebaseio.com",
    projectId: "mads-images",
    storageBucket: "mads-images.appspot.com",
    messagingSenderId: "53609989391",
    appId: "1:53609989391:web:6219071282ecffb6bf2a7a"
}

firebase.initializeApp(config);

export default firebase;
