var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Milee" && password == "Milee@123"){
alert ("Login successfully");
window.location = "Admin Home.html"; // Redirecting to other page.
return false;
}
else if (username=="Bhavya" && password == "Bhavya@123"){
    alert ("Login successfully");
window.location = "index2.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Incorrect Username or Password. You have left with "+attempt+" attempts;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
