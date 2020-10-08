/*Authohr: */

window.onload = function () {
  let hamburger = document.querySelector('.hamburger');
  let navLink = document.querySelector('.nav-link');
  let html = document.querySelector('html');
  let searchForm = document.querySelector('.search-form')

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navLink.classList.toggle('nav-active');
    html.classList.toggle('no-scroll');
    searchForm.classList.toggle('search-active');
  });
}