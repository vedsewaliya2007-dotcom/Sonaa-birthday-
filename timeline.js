/* ===========================
   PREMIUM TIMELINE JS
=========================== */

// Page Load Animation
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

});

// Scroll Reveal Animation
const cards = document.querySelectorAll(".memory-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>observer.observe(card));

/* ===========================
   TOGETHER COUNTER
=========================== */

// Apni relationship/birthday start date yahan likho
const startDate = new Date("2023-07-07T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const years = Math.floor(diff/(1000*60*60*24*365));

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    document.getElementById("years").textContent = years;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

}

updateCounter();

setInterval(updateCounter,1000);/* ===========================
   FLOATING PARTICLES
=========================== */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    function createParticle() {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * window.innerWidth + "px";

        particle.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        particle.style.opacity = Math.random();

        particle.style.width =
            particle.style.height =
            (Math.random() * 6 + 3) + "px";

        particleContainer.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 10000);

    }

    setInterval(createParticle, 300);

}

/* ===========================
   NEXT PAGE BUTTON
=========================== */

function nextPage(){

    document.body.style.opacity="0";

    setTimeout(()=>{

        // Letter page ka naam agar alag hai to yahan change kar dena
        window.location.href="letter.html";

    },700);

}

/* ===========================
   CARD HOVER EFFECT
=========================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("touchstart",()=>{

        card.style.transform="scale(0.98)";

    });

    card.addEventListener("touchend",()=>{

        card.style.transform="scale(1)";

    });

});

/* ===========================
   PRELOAD IMAGES
=========================== */

document.querySelectorAll(".card img").forEach(img=>{

    img.onload=()=>{

        img.style.opacity="1";

    };

    img.style.opacity="0";

    img.style.transition="opacity .6s ease";

});/* ===========================
   SMOOTH SCROLL
=========================== */

document.documentElement.style.scrollBehavior = "smooth";

/* ===========================
   PARALLAX BACKGROUND
=========================== */

window.addEventListener("scroll", () => {

    const bg = document.querySelector(".timeline-bg");

    if(bg){

        const y = window.pageYOffset;

        bg.style.transform = `translateY(${y * 0.15}px)`;

    }

});

/* ===========================
   IMAGE FADE-IN
=========================== */

const images = document.querySelectorAll(".card img");

images.forEach(img => {

    img.loading = "lazy";

    if(img.complete){

        img.style.opacity = "1";

    }else{

        img.addEventListener("load", () => {

            img.style.opacity = "1";

        });

    }

});

/* ===========================
   HAPPY BIRTHDAY POPUP
=========================== */

setTimeout(() => {

    const popup = document.createElement("div");

    popup.innerHTML = "🎉 Happy Birthday ❤️";

    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.padding = "14px 22px";
    popup.style.borderRadius = "16px";
    popup.style.background = "rgba(37,99,235,.9)";
    popup.style.backdropFilter = "blur(10px)";
    popup.style.color = "#fff";
    popup.style.fontWeight = "600";
    popup.style.zIndex = "9999";
    popup.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    popup.style.transition = ".5s";

    document.body.appendChild(popup);

    setTimeout(() => {

        popup.style.opacity = "0";

        setTimeout(() => {

            popup.remove();

        },500);

    },3000);

},1200);

/* ===========================
   END
=========================== */

console.log("Premium Timeline Loaded Successfully ❤️");