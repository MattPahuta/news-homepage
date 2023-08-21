// Navigation
const header = document.querySelector('.header');
const navToggle = document.getElementById('mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');


navToggle.addEventListener('click', () => {

  primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true)

  primaryNav.toggleAttribute('data-visible');

  header.toggleAttribute('data-overlay');


})
