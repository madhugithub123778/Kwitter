
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCBHxOsdbIfFm_nBQJtrmVOD8F-uOzH3w0",
      authDomain: "kwitter-d62a6.firebaseapp.com",
      databaseURL: "https://kwitter-d62a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-d62a6",
      storageBucket: "kwitter-d62a6.appspot.com",
      messagingSenderId: "90712220696",
      appId: "1:90712220696:web:233405f82913a0eb4a4f6d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("yourname");
document.getElementById("welcome").innerHTML="Welcome "+ user_name+ "!";

function addRoom(){
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"});
localStorage.setItem("roomname", room_name);
window.location="kwitter_chat.html";}





function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='rooms' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });
    });
    
    }
    getData();
    

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("roomname", name);
window.location = "kwitter_chat.html";}




function logout(){
localStorage.removeItem("yourname");
window.location="index.html";


}
