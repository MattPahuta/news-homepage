// Navigation
const header = document.querySelector('.header');
const navToggle = document.getElementById('mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

// const iconHamburger = document.querySelector('.icon-hamburger');
// const iconClose = document.querySelector('.icon-close');

navToggle.addEventListener('click', () => {
  console.log('clicking nav toggle')

  primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true)

  primaryNav.toggleAttribute('data-visible');

  header.toggleAttribute('data-overlay');


})

// navToggle.addEventListener('click', () => {
//   console.log('clicking nav toggle')

//   if (primaryNav.hasAttribute('data-visible')) {
//     navToggle.setAttribute('aria-expanded', false);
//     iconHamburger.setAttribute('aria-hidden', true)
//   } else {
//     navToggle.setAttribute('aria-expanded', true)
//     iconClose.setAttribute('aria-hidden', false)
//   }

//   primaryNav.toggleAttribute('data-visible');

//   header.toggleAttribute('data-overlay');


// })