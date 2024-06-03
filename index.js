let score = 0;
let scoreHtml = document.getElementById("scoreHtml");
let timer = 0;
let dificulty = [
    {
        name: "easy",
        score: "0%",
        active: true,
    },{
        name: "medium",
        score: "10%",
        active: false,
    },{
        name: "hard",
        score: "20%",
        active: false,
    }
];

function setActiveDifficulty(levelName) {
    dificulty.forEach(level => {
        if (level.name === levelName) {
            level.active = true;
        } else {
            level.active = false;
        }
    });
};

function game() {
    score = 0;
    timer = 0;
    let legame = setInterval(function () {
        if(timer!=21){
        CreateTarget();
    } else {
        clearInterval(legame);
    }  
        
    },1000)
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
        timer++;
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
        timer++;
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
        timer++;
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

easy.addEventListener("click", () => {
    setActiveDifficulty("easy");
});

normal.addEventListener("click", () => {
    setActiveDifficulty("medium");
});

hard.addEventListener("click", () => {
    setActiveDifficulty("hard");
});