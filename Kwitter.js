function Next_page() {
    var User_name=document.getElementById("Login_name").value;
localStorage.setItem("User",User_name);
window.location="kwitter_room.html";
}