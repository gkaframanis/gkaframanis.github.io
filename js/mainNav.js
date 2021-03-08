const hamburgerContainer = document.querySelector(".header__nav");
const hamburger = document.querySelector(".header__nav--hamburger");
const links = document.querySelectorAll(".header__nav--links li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
    link.classList.add("heading-tertiary");
  });
});
