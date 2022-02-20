
function newFunction() {
    
    const user = document.getElementById("Username").value;
    const pass = document.getElementById("Password").value;
    
    if(user == "boruto" && pass == "sunday") {
        console.log("Boruto Logged In");
        window.open('calendar.html');
    }
    else {
        document.getElementById("random").innerHTML = "Sorry that username or password does not exist";
       
    }
}