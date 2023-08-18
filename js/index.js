// Navigation
const navToggle = document.getElementById('mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
  console.log('clicking nav toggle')

  primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true)


  primaryNav.toggleAttribute('data-visible');

})