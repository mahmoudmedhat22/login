const registerbutton = document.getElementById("register");
const loginbutton = document.getElementById("login");
const container = document.getElementById("container");

registerbutton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginbutton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

let  username = document.querySelector("#userName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let Registerbtn = document.querySelector("#sign_up")

Registerbtn.addEventListener( "click" , function(a) { 
a.preventDefault()
if ( username.value === "" || email.value === "" || password.value === "")
{ let password = document.querySelector("#password").required;}
 else{
localStorage.setItem( "Username" , username.value);
localStorage.setItem( "Email" , email.value);
localStorage.setItem( "Password" , password.value);

setTimeout( () => {
    window.location = "profile.html"
}
, 1500
)

    } } )