/* ==========================
   LETTER PAGE JS
========================== */

// Page Fade
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";

        document.body.style.opacity = "1";

    },100);

});

/* ==========================
   TYPEWRITER EFFECT
========================== */

const textBox = document.querySelector(".letter-text");

if(textBox){

    const fullText = textBox.innerHTML;

    textBox.innerHTML = "";

    let i = 0;

    function typeWriter(){

        if(i < fullText.length){

            textBox.innerHTML += fullText.charAt(i);

            i++;

            setTimeout(typeWriter,18);

        }

    }

    typeWriter();

}

/* ==========================
   SCROLL TO TOP
========================== */

window.scrollTo({

    top:0,

    behavior:"smooth"

});/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 20 + 16) + "px";

    heart.style.animationDuration = (Math.random() * 4 + 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(createHeart,800);

/* ==========================
   BUTTON ANIMATION
========================== */

const button = document.querySelector(".button-area button");

if(button){

    button.addEventListener("click",function(){

        this.style.transform = "scale(.95)";

        setTimeout(()=>{

            this.style.transform = "scale(1)";

        },150);

    });

}

/* ==========================
   NEXT PAGE
========================== */

function nextPage(){

    document.body.style.transition = "opacity .8s ease";

    document.body.style.opacity = "0";

    setTimeout(()=>{

        // Apne final page ka naam yahan likho
        window.location.href = "final.html";

    },800);

}/* ==========================
   LETTER.JS - PART 3
========================== */

/* Cursor Blink */

const style = document.createElement("style");

style.innerHTML = `
.cursor{
    display:inline-block;
    width:2px;
    height:20px;
    background:#60A5FA;
    margin-left:4px;
    animation:blink .8s infinite;
}

@keyframes blink{

0%,100%{
opacity:1;
}

50%{
opacity:0;
}

}
`;

document.head.appendChild(style);

/* ==========================
   AUTO SCROLL
========================== */

let autoScroll = false;

function startReading(){

    if(autoScroll) return;

    autoScroll = true;

    const speed = 0.6;

    const timer = setInterval(()=>{

        window.scrollBy(0,speed);

        if(window.innerHeight + window.scrollY >= document.body.offsetHeight){

            clearInterval(timer);

        }

    },20);

}

/* Reading Start After 3 Seconds */

setTimeout(startReading,3000);

/* ==========================
   DOUBLE TAP TO TOP
========================== */

let lastTap = 0;

document.addEventListener("touchend",function(){

    const now = new Date().getTime();

    if(now-lastTap<300){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    lastTap=now;

});

/* ==========================
   END MESSAGE
========================== */

console.log("❤️ Letter Page Loaded Successfully ❤️");

