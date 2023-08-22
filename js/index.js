// Mobile Navigation
const navToggle = document.getElementById('mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const primaryNav = document.getElementById('primary-navigation');

  primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true)

  primaryNav.toggleAttribute('data-visible');

  body.classList.toggle('no-scroll');
  header.toggleAttribute('data-overlay');
});
