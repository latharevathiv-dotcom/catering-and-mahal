document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let phone=document.getElementById("phone").value.trim();
let email=document.getElementById("email").value.trim();
let date=document.getElementById("date").value;
let event=document.getElementById("event").value;

if(name=="" || phone=="" || email=="" || date=="" || event=="Select Event Type"){
    alert("Please fill all the required fields.");
    return;
}

if(phone.length!=10){
    alert("Please enter a valid 10-digit mobile number.");
    return;
}

alert("🎉 Thank you for your booking!\n\nOur team will contact you shortly to confirm your reservation.");

document.getElementById("bookingForm").reset();

});