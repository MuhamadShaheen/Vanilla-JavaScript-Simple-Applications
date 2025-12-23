let myInput = document.querySelector("input");
const maxLength = myInput.getAttribute("maxLength");
let progressBar = document.querySelector(".progress");
let counter = document.querySelector(".counter");
counter.innerHTML = maxLength;

myInput.oninput = function () {
    let currentLength = maxLength - myInput.value.length;
    counter.innerHTML = currentLength;
    counter.innerHTML == 0 ? counter.classList.add("zero") : counter.classList.remove("zero");
    progressBar.style.width = `${(this.value.length * 100 / maxLength)}%`;
}