/* =====================================
   FOREVER SURPRISE - GALLERY
===================================== */

const images = [

"https://i.ibb.co/RGZyGS5v/IMG-20260722-WA0013.jpg",
"https://i.ibb.co/HpHkfxC8/IMG-20260719-172831-337.jpg",
"https://i.ibb.co/4wc8FPM3/IMG-20260719-173112-620.jpg",
"https://i.ibb.co/0p4CnLMp/IMG-20260719-173115-874.jpg",
"https://i.ibb.co/4ZCY4Rzs/IMG-20260719-173122-695.jpg",
"https://i.ibb.co/tS01Ln2/IMG-20260719-173124-561.jpg",
"https://i.ibb.co/ycztwffv/IMG-20260719-173127-641.jpg",
"https://i.ibb.co/Kxbp7pz7/IMG-20260719-173131-843.jpg"

];

let current = 0;

const img = document.getElementById("galleryImage");
const counter = document.querySelector(".image-count");
const dots = document.querySelectorAll(".dot");

// Show Image
function showImage(){

    img.style.opacity = "0";

    img.style.transform = "scale(.95)";

    setTimeout(()=>{

        img.src = images[current];

        counter.innerHTML = (current+1)+" / "+images.length;

        img.style.opacity = "1";

        img.style.transform = "scale(1)";

        updateDots();

    },250);

}

// Next
function nextImage(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    showImage();

}

// Previous
function previousImage(){

    current--;

    if(current < 0){

        current = images.length-1;

    }

    showImage();

}

// Dots
function updateDots(){

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[current].classList.add("active");

}

// Auto Slide
setInterval(nextImage,4000);

// Continue
function openTimeline(){

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="timeline.html";

    },700);

}

// Swipe Support
let startX = 0;

img.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

img.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextImage();

    }

    if(endX-startX>50){

        previousImage();

    }

});

// Double Tap Heart
let lastTap = 0;

img.addEventListener("click",()=>{

    const now = Date.now();

    if(now-lastTap<300){

        createHeart();

    }

    lastTap = now;

});

// Heart Animation
function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="like-heart";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1200);

}

// Fade In
window.onload=()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".8s";

        document.body.style.opacity="1";

    },100);

};

