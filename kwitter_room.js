var firebaseConfig = {
      apiKey: "AIzaSyDbhONTrtopXpgUjNbJykwX7_ODLkGPja8",
      authDomain: "kwitter-76d26.firebaseapp.com",
      databaseURL: "https://kwitter-76d26-default-rtdb.firebaseio.com",
      projectId: "kwitter-76d26",
      storageBucket: "kwitter-76d26.appspot.com",
      messagingSenderId: "697069521588",
      appId: "1:697069521588:web:849f28147cf6ef8ac025e1"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name= "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){

      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}