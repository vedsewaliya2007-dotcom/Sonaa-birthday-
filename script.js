/* ==========================================
   FOREVER SURPRISE - SCRIPT
========================================== */

const gift = document.querySelector(".gift-box");
const passwordSection = document.getElementById("passwordSection");
const music = document.getElementById("bgMusic");

// Gift Open
function openGift(){

    gift.style.transform = "scale(1.25) rotate(20deg)";
    gift.style.transition = ".5s";

    setTimeout(()=>{

        passwordSection.style.display="block";

    },500);

}

// Unlock Button
function checkPassword(){

    const password=document.getElementById("password").value;

    // Customer Password
    if(password==="forever123"){

        unlockAnimation();

    }

    else{

        shakeInput();

        alert("❌ Wrong Password");

    }

}

// Success Animation
function unlockAnimation(){

    document.body.style.transition="1.2s";

    document.body.style.opacity="0";

    playMusic();

    setTimeout(()=>{

        window.location.href="home.html";

    },1200);

}

// Input Shake
function shakeInput(){

    const input=document.getElementById("password");

    input.animate([

        {transform:"translateX(-8px)"},

        {transform:"translateX(8px)"},

        {transform:"translateX(-8px)"},

        {transform:"translateX(8px)"},

        {transform:"translateX(0)"}

    ],{

        duration:400

    });

}

// Play Music
function playMusic(){

    if(music){

        music.play().catch(()=>{});

    }

}

// Enter Key Support
document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        checkPassword();

    }

});

// Fade In
window.onload=()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".8s";

        document.body.style.opacity="1";

    },100);

};