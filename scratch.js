/* ==========================
   PREMIUM SCRATCH CARD
========================== */

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

const container = document.querySelector(".scratch-container");
const btn = document.getElementById("continueBtn");
const progress = document.querySelector(".progress-text");

canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;

// Silver Scratch Layer
ctx.fillStyle = "#1E40AF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Shine Effect
ctx.fillStyle = "#3B82F6";
for (let i = 0; i < canvas.width; i += 25) {
    ctx.fillRect(i, 0, 8, canvas.height);
}

// Text
ctx.fillStyle = "#555";
ctx.font = "bold 28px Poppins";
ctx.textAlign = "center";
ctx.fillText("SCRATCH HERE", canvas.width / 2, canvas.height / 2);

ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;

function getPos(e) {

    const rect = canvas.getBoundingClientRect();

    if (e.touches) {

        return {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
        };

    }

    return {

        x: e.clientX - rect.left,
        y: e.clientY - rect.top

    };

}

function scratch(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

}

canvas.addEventListener("mousedown", () => isDrawing = true);

canvas.addEventListener("mouseup", () => {

    isDrawing = false;

    checkScratch();

});

canvas.addEventListener("mousemove", (e) => {

    if (!isDrawing) return;

    const pos = getPos(e);

    scratch(pos.x, pos.y);

});

canvas.addEventListener("touchstart", () => isDrawing = true);

canvas.addEventListener("touchend", () => {

    isDrawing = false;

    checkScratch();

});

canvas.addEventListener("touchmove", (e) => {

    e.preventDefault();

    if (!isDrawing) return;

    const pos = getPos(e);

    scratch(pos.x, pos.y);

});

function checkScratch() {

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let transparent = 0;

    for (let i = 3; i < pixels.data.length; i += 4) {

        if (pixels.data[i] === 0) {

            transparent++;

        }

    }

    const percent = transparent / (canvas.width * canvas.height);

    if (percent > 0.45) {

        canvas.style.transition = ".8s";
        canvas.style.opacity = "0";

        progress.innerHTML = "🎉 Happy Birthday 🎉";

        btn.style.display = "block";

        launchConfetti();

    }

}

function nextPage() {

    window.location.href = "gallery.html";

}

// Simple Confetti
function launchConfetti() {

    for (let i = 0; i < 60; i++) {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = Math.random() * 100 + "%";

        c.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(c);

        setTimeout(() => {

            c.remove();

        }, 5000);

    }

}

