
//user input 
let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let password2=document.getElementById("password2");

//fehler tagen "small"
let fehler=document.getElementById("fehler");
let fehler1=document.getElementById("fehler1");
let fpassword=document.getElementById("fpassword");
let fpassword2=document.getElementById("fpassword2");

document.getElementById("submit").addEventListener("click",checker);
document.getElementById("submit").addEventListener("Focus",checker1);
document.getElementById("submit").addEventListener("mouse-over",checker2);

function checker(){
username.style.color="red";
}
function checker1(){
   username.style.color="green";
}
function checker2(){
   username.style.color="bule";
}


   
   
    