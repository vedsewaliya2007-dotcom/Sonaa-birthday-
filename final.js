/* ===================================
   FINAL PAGE JAVASCRIPT
=================================== */

// Page Fade In
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";

        document.body.style.opacity = "1";

    },100);

});


/* ===================================
   FLOATING HEARTS
=================================== */

const heartContainer = document.getElementById("hearts");

function createHeart(){

    if(!heartContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*20)+"px";

    heart.style.animationDuration = (5+Math.random()*4)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,600);


/* ===================================
   FLOATING STARS
=================================== */

const starContainer = document.getElementById("stars");

function createStar(){

    if(!starContainer) return;

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "✨";

    star.style.left = Math.random()*100+"vw";

    star.style.animationDuration = (6+Math.random()*5)+"s";

    starContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },10000);

}

setInterval(createStar,900);/* ===================================
   FINAL PAGE JAVASCRIPT - PART 2
=================================== */

/* Celebration Popup */

setTimeout(() => {

    const popup = document.createElement("div");

    popup.className = "birthday-popup";

    popup.innerHTML = "🎉 Happy Birthday Sonaa ❤️";

    document.body.appendChild(popup);

    setTimeout(() => {

        popup.style.opacity = "0";

        popup.style.transform = "translate(-50%,-30px)";

        setTimeout(() => {

            popup.remove();

        },500);

    },3000);

},1000);


/* ===================================
   REPLAY JOURNEY
=================================== */

function replayJourney(){

    document.body.style.transition = "opacity .8s ease";

    document.body.style.opacity = "0";

    setTimeout(()=>{

        window.location.href = "index.html";

    },800);

}


/* ===================================
   GO HOME
=================================== */

function goHome(){

    document.body.style.transition = "opacity .8s ease";

    document.body.style.opacity = "0";

    setTimeout(()=>{

        window.location.href = "index.html";

    },800);

}


/* ===================================
   BUTTON EFFECT
=================================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(){

        this.style.transform="scale(.95)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

    });

});


/* ===================================
   AUTO SCROLL TO TOP
=================================== */

window.scrollTo({

    top:0,

    behavior:"smooth"

});


/* ===================================
   END
=================================== */

console.log("🎂 Final Birthday Page Loaded Successfully ❤️");

