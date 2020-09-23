const hamburger = document.querySelector(".hamburger-menu");
const topNavList = document.querySelector(".top-nav-list");
const aboutSection = document.querySelector(".about-section");

hamburger.addEventListener("click", manageNav);

function manageNav(event) {
  topNavList.classList.toggle("top-nav-list-open");
}