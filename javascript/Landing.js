let firstButton = document.querySelector("#first-link");
let secondButton = document.querySelector("#sec-link");
let row = document.querySelector("#More")
secondButton.style.display = "none";
row.style.display = "none";
function firstClick() {
    firstButton.style.display = "none";
    secondButton.style.display = "inline";
    row.style.display = "flex";
}
firstButton.addEventListener("click" , firstClick);
function secondClick() {
    firstButton.style.display = "inline";
    secondButton.style.display = "none";
    row.style.display = "none";
}
secondButton.addEventListener("click" , secondClick);