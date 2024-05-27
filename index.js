let score = 0;
let scoreHtml = document.getElementById("scoreHtml");

function game() {
    score = 0;
    let timer = 0;
};

function CreateTarget() {
    let target = document.createElement("div");
    target.style.width = "40px";
    target.style.height = "40px";
    target.style.borderRadius = "50%";
    target.style.position = "relative";
    target.style.backgroundColor = "red"
    target.style.left = Math.floor(Math.random() * (400 - 5 + 1)) + 5 + "px";
    target.style.top = Math.floor(Math.random() * (300 - 5 + 1)) + 5 + "px";
    target.id = "target"
    target.addEventListener("click", () => {
        score = score + 50;
        scoreHtml.value = score;
        CreateTarget();
        timer++;
    })
    target.addEventListener("")
    field.appendChild(target);
}

document.addEventListener("DOMContentLoaded", () => {
    scoreHtml.disabled = true;
})

start.addEventListener("click", () => {
    game();
});