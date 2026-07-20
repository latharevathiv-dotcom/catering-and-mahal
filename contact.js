document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let message=document.getElementById("message").value.trim();

if(name=="" || email=="" || phone=="" || message==""){
    alert("Please fill in all the fields.");
    return;
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
    alert("Please enter a valid email address.");
    return;
}

if(phone.length!=10){
    alert("Please enter a valid 10-digit phone number.");
    return;
}

alert("✅ Thank you! Your message has been sent successfully.");

document.getElementById("contactForm").reset();

});