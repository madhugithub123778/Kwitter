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

  userN = localStorage.getItem("yourname");
  roomN = localStorage.getItem("roomname");

  function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(roomN).push({
name: userN,
message: msg,
like: 0});
document.getElementById("msg").value= "";
  }





  function getData() { firebase.database().ref("/"+roomN).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+name+ "<img class='user_tick'src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
 } });  }); }
getData();

function updateLike(message_id){
console.log("Like button pressed: "+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_like = Number(likes) + 1;
console.log(update_like);

firebase.database().ref(roomN).child(message_id).update({
like: update_like});

}



function logout(){
localStorage.removeItem("yourname");
localStorage.removeItem("roomname");
window.location = "index.html";}