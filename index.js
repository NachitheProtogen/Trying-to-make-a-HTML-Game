let score = 0;
let scoreHtml = document.getElementById("scoreHtml");

function game() {
    score = 0;
    let timer = 0;

    CreateTarget();
};

function CreateTarget() {
    let target = document.createElement("div"); //insanity
    target.style.width = "80px";
    target.style.height = "80px";
    target.style.borderRadius = "50%";
    target.style.position = "relative";
    target.style.backgroundColor = "red"
    target.style.left = Math.floor(Math.random() * (400 - 5 + 1)) + 5 + "px";
    target.style.top = Math.floor(Math.random() * (300 - 5 + 1)) + 5 + "px";
    target.id = "target"
    target.addEventListener("click", () => {
        field.removeChild(target);
        score = score + 50;
        scoreHtml.value = score;
        CreateTarget();
    })
    let targetyel = document.createElement("div"); //why am I doing this?
    targetyel.style.width = "50px";
    targetyel.style.height = "50px";
    targetyel.style.borderRadius = "50%";
    targetyel.style.position = "relative";
    targetyel.style.backgroundColor = "yellow";
    targetyel.style.left = "15px";
    targetyel.style.top = "15px";
    targetyel.id = "targetyel"
    targetyel.addEventListener("click", () => {
        field.removeChild(target);
        score = score + 100;
        scoreHtml.value = score;
        CreateTarget();
    })
    let targetgoat = document.createElement("div"); //fucking hate this stupif j9s8hjd0jmsa0s8d9zhsad
    targetgoat.style.width = "20px";
    targetgoat.style.height = "20px";
    targetgoat.style.borderRadius = "50%";
    targetgoat.style.position = "relative";
    targetgoat.style.backgroundColor = "green";
    targetgoat.style.left = "15px";
    targetgoat.style.top = "15px";
    targetgoat.id = "targetgoat"
    targetgoat.addEventListener("click", () => {
        field.removeChild(target);
        score = score + 150;
        scoreHtml.value = score;
        CreateTarget();
    })

    field.appendChild(target);
    target.appendChild(targetyel);
    targetyel.appendChild(targetgoat);
};

document.addEventListener("DOMContentLoaded", () => {
    scoreHtml.disabled = true;
})

start.addEventListener("click", () => {
    game();
});