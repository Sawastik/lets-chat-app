var firebaseConfig = {
    apiKey: "AIzaSyBRyP5Izk8SRIixSldccArIu1SND4O9XDY",
    authDomain: "kwitter-2e22c.firebaseapp.com",
    databaseURL: "https://kwitter-2e22c-default-rtdb.firebaseio.com",
    projectId: "kwitter-2e22c",
    storageBucket: "kwitter-2e22c.appspot.com",
    messagingSenderId: "308946120447",
    appId: "1:308946120447:web:2fbbd60a72b189c1c726ca"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   var newuser=localStorage.getItem("User");
     document.getElementById("Display_User").innerHTML="Welcome : "+newuser;

     function roompage(name){
      localStorage.setItem("Roomid",name)
      window.location ="kwitter_page.html"

      function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
