const images = [
    "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/mahal_0.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhqcMdr5SE-hSJjPe62Z_HGnxmMcAU637r3y-i5R6HlnRhrAd9EglVHJf&s=10",
    "https://cdn.venuelook.com/blog/north-india-a-feast-of-flavors-0fdb6eb5-fb7f-4903-b467-d3eea5c9bf41.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-IpaG6eJfI72mZ-5JXBRCBuGJw83iQsaaXzlLp05TjKixsW2pFhZX-Y&s=10"
    
];

let index = 0;

const galleryImage = document.getElementById("galleryImage");

function showImage(){
    galleryImage.src = images[index];
}

function nextSlide(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    showImage();
}

function prevSlide(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    showImage();
}

setInterval(nextSlide,2500);

function exploreGallery(){
    alert("Welcome to Kanna Catering Services & Mahal Gallery!");
}





// document.getElementById("contactForm").addEventListener("submit", function(e){

// e.preventDefault();

// let name=document.getElementById("name").value.trim();
// let email=document.getElementById("email").value.trim();
// let phone=document.getElementById("phone").value.trim();
// let message=document.getElementById("message").value.trim();

// if(name=="" || email=="" || phone=="" || message==""){
//     alert("Please fill in all the fields.");
//     return;
// }

// let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// if(!email.match(emailPattern)){
//     alert("Please enter a valid email address.");
//     return;
// }

// if(phone.length!=10){
//     alert("Please enter a valid 10-digit phone number.");
//     return;
// }

// alert("✅ Thank you! Your message has been sent successfully.");

// document.getElementById("contactForm").reset();

// });