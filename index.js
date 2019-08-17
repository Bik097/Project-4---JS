// JavaScript Document

//create some variables to represent the objects we want to work with 

var form = document.querySelector('form'); 
var email = document.getElementById('email'); 
var error = document.querySelector('.error'); 



email.addEventListener('input', function (event) {
  //each time the user types something, we check if the email field is valid
  if(email.validity.valid) {
    //in the case that there is an error message visible, if the field is valid, we remove the error message 
    error.innerHTML = ""; 
    error.className = "error"; 
  }
 
}, false);

form.addEventListener("submit", function (event) {
  //each time the user tries to send the form, we check that the email field is valid 
  
  if(!email.validity.valid) {
    error.innerHTML = " ---Hey now, that's not a real email!--- "; 
    error.className = "error active"; 
    event.preventDefault();  
  }
}, false); 

