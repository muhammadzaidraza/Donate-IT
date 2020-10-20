import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCBTmzbTj9orbjypO-avPu5MekGwTQJwuw",
  authDomain: "donateit-react-web.firebaseapp.com",
  databaseURL: "https://donateit-react-web.firebaseio.com",
  projectId: "donateit-react-web",
  storageBucket: "donateit-react-web.appspot.com",
  messagingSenderId: "463011085332",
  appId: "1:463011085332:web:0538fb551730dfd6c57b01",
  measurementId: "G-RD50NLMHZG"
};
// Initialize Firebase
var fire = firebase.initializeApp(config);
// if (!firebase.app.length) {
//   var fire = firebase.initializeApp(config);
// }

export default fire;
