let slideNumber = document.querySelector(".slide-number");
let images = Array.from(document.querySelectorAll(".slider-container img"));
let bulletPoints = Array.from(document.querySelectorAll(".controls li"));
let currentIndex = 0;
let totalSlides = images.length;
initialize();

let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".previous");

nextButton.onclick = function () {
  goToNextSlide();
};

prevButton.onclick = function () {
  goToPrevSlide();
};

bulletPoints.forEach((bullet) => {
  bullet.onclick = function () {
    removeActives();
    currentIndex = bulletPoints.indexOf(bullet);
    setActives();
  };
});
function initialize() {
  currentIndex = 0;
  setActives();
}

function goToNextSlide() {
    removeActives();
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    setActives();
  } else {
    removeActives();
    initialize();
  }
}

function goToPrevSlide() {
  images[currentIndex].classList.remove("active");
  bulletPoints[currentIndex].classList.remove("active");
  if (currentIndex > 0) {
    currentIndex--;
    images[currentIndex].classList.add("active");
    bulletPoints[currentIndex].classList.add("active");
    slideNumber.textContent = `Slide ${currentIndex + 1} of ${totalSlides}`;
  } else {
    goToLastSlide();
  }
}
function goToLastSlide() {
  images[currentIndex].classList.remove("active");
  bulletPoints[currentIndex].classList.remove("active");
  currentIndex = totalSlides - 1;
  images[currentIndex].classList.add("active");
  bulletPoints[currentIndex].classList.add("active");
  slideNumber.textContent = `Slide ${currentIndex + 1} of ${totalSlides}`;
}

function removeActives() {
  images[currentIndex].classList.remove("active");
  bulletPoints[currentIndex].classList.remove("active");
}

function setActives() {
    images[currentIndex].classList.add("active");
    bulletPoints[currentIndex].classList.add("active");
    slideNumber.textContent = `Slide ${currentIndex + 1} of ${totalSlides}`;
}