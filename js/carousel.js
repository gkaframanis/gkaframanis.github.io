// Carousel's Functionality

const imgs = document.getElementById("imgs");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

const img = document.querySelectorAll("#imgs img");

const bp800 = window.matchMedia("(max-width: 800px)");

let index = 0;

let interval = setInterval(run, 3000);

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }
  if (bp800.matches) {
    imgs.style.transform = `translateX(${-index * 80}vw)`;
  } else {
    imgs.style.transform = `translateX(${-index * 50}vw)`;
  }
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});
