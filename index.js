
function game() {
    let score = 0;

    let target = document.createElement("div");
    target.style.width = "40px";
    target.style.height = "40px";
    target.style.borderRadius = "50%";
    target.style.position = "absolute";
    target.style.left = Math.random();
    target.style.top = Math.random();
    target.id = "target"
    target.addEventListener("click", () => {
        document.removeChild(target);
        score + 50;
    })
}