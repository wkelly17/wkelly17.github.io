const hamburger = document.querySelector('.hamburger-menu');
const topNavList = document.querySelector('.top-nav-list');
const aboutSection = document.querySelector('.about-section');
const bottomHamburger = document.querySelector('.hamburger-line-bottom');
const topHamburger = document.querySelector('.hamburger-line-top');
const midHamburger = document.querySelector('.hamburger-line-middle');

hamburger.addEventListener('click', openNav);
hamburger.addEventListener('touchStart', openNav);

function openNav(event) {
  hamburgerToggle();
  topNavList.classList.toggle('top-nav-list-open');
}
//todo: Figure out why the hamburger breaks on mobile screen animation.  For now September 29, 2020 taking it out of production by taking out the manage nav fxn.

function hamburgerToggle(event) {
  console.log('clicked');
  bottomHamburger.classList.toggle('bottom-ham-open');
  topHamburger.classList.toggle('top-ham-open');
  midHamburger.classList.toggle('middle-ham-open');
}
