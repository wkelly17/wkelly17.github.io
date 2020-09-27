const hamburger = document.querySelector(".hamburger-menu");
const topNavList = document.querySelector(".top-nav-list");
const aboutSection = document.querySelector(".about-section");
const bottomHamburger = document.querySelector(".hamburger-line-bottom");
const topHamburger = document.querySelector(".hamburger-line-top");
const midHamburger = document.querySelector(".hamburger-line-middle");

hamburger.addEventListener("click", openNav);

function openNav(event) {
  topNavList.classList.toggle("top-nav-list-open");
  hamburgerToggle();
}

function hamburgerToggle(event) {
  console.log("clicked");
  bottomHamburger.classList.toggle("bottom-ham-open");
  topHamburger.classList.toggle("top-ham-open");
  midHamburger.classList.toggle("middle-ham-open");
}
