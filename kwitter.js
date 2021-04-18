function login(){
username= document.getElementById("user_name").value;
localStorage.setItem("yourname", username);
window.location="kwitter_room.html";}